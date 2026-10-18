#!/usr/bin/env python3
"""Validate the public static showcase using only Python's standard library."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit,unquote
import hashlib,json,re,shutil,subprocess,sys
ROOT=Path(__file__).resolve().parent.parent
SITE=ROOT/'site' if (ROOT/'site').exists() else ROOT
class Document(HTMLParser):
 def __init__(self):super().__init__();self.refs=[];self.ids=[];self.images=[]
 def handle_starttag(self,tag,attrs):
  d=dict(attrs)
  if 'id' in d:self.ids.append(d['id'])
  if tag=='img':self.images.append(d)
  for key in ['href','src','poster']:
   if key in d:self.refs.append(d[key])
def tracked_files():
 for p in ROOT.rglob('*'):
  rel=p.relative_to(ROOT)
  if any(part in ['.git','node_modules','.venv','__pycache__'] for part in rel.parts):continue
  if p.is_file():yield p
files=list(tracked_files());errors=[];parsed={}
for p in files:
 if p.suffix=='.html':
  doc=Document();doc.feed(p.read_text());parsed[p.resolve()]=doc
for p,doc in parsed.items():
 if len(doc.ids)!=len(set(doc.ids)):errors.append(f'Duplicate HTML id in {p.relative_to(ROOT)}')
 for img in doc.images:
  if 'alt' not in img:errors.append(f'Missing image alt in {p.relative_to(ROOT)}')
 for ref in doc.refs:
  u=urlsplit(ref)
  if u.scheme or u.netloc or not u.path:continue
  dest=(p.parent/unquote(u.path)).resolve()
  if dest.is_dir():dest/='index.html'
  if not dest.exists():errors.append(f'Missing local file: {p.relative_to(ROOT)} -> {ref}')
  elif u.fragment and dest in parsed and u.fragment not in parsed[dest].ids:errors.append(f'Missing HTML anchor: {ref}')
for p in files:
 if p.suffix=='.md':
  for ref in re.findall(r'\]\(([^)]+)\)',p.read_text()):
   ref=ref.split(' "',1)[0];u=urlsplit(ref)
   if u.scheme or u.netloc or not u.path:continue
   if not (p.parent/unquote(u.path)).exists():errors.append(f'Missing Markdown target: {p.relative_to(ROOT)} -> {ref}')
forbidden_files={'.pem','.key','.nvylic','.pt','.pth','.onnx','.gguf','.safetensors','.zip'}
# Keep this scanner's own patterns out of presentation-content matching.
transaction=re.compile(r'priceUsd|bankTransfer|lemonSqueezy|order-reference|direct-purchase|purchase\.html|USD\s*(?:500|2,490)|\$\s*(?:500|2,490)|\bIBAN\b|\bSWIFT\b',re.I)
secret=re.compile(rb'-----BEGIN (?:RSA |EC |OPENSSH |ENCRYPTED )?PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{30,}|AKIA[0-9A-Z]{16}')
text_ext={'.html','.js','.css','.md','.json','.txt','.yml','.yaml'}
for p in files:
 if p.suffix in forbidden_files:errors.append(f'Unexpected private/large artifact: {p.relative_to(ROOT)}')
 if p.stat().st_size>95*1024*1024:errors.append(f'Artifact exceeds publication budget: {p.name}')
 data=p.read_bytes()
 if secret.search(data):errors.append(f'Secret pattern in {p.relative_to(ROOT)}')
 if p.suffix in text_ext and transaction.search(data.decode('utf8',errors='replace')):errors.append(f'Retired transaction content in {p.relative_to(ROOT)}')
if not (ROOT/'site').exists():
 for name in ['app.js','scope-view.js']:
  if re.search(r'\bfetch\s*\(|XMLHttpRequest|WebSocket\s*\(', (ROOT/name).read_text()):errors.append('Unexpected live network client in demo')
 manifest=json.loads((ROOT/'assets/proof/SHA256.json').read_text())
 for name,digest in manifest.items():
  if hashlib.sha256((ROOT/'assets/proof'/name).read_bytes()).hexdigest()!=digest:errors.append(f'Changed original recording: {name}')
manifest_path=ROOT/'docs/ORIGINAL-MEDIA-SHA256.json'
if manifest_path.exists():
 for name,digest in json.loads(manifest_path.read_text()).items():
  if hashlib.sha256((ROOT/name).read_bytes()).hexdigest()!=digest:errors.append(f'Changed original medium: {name}')
all_media=ROOT/'docs/MEDIA-SHA256.json'
if all_media.exists():
 for name,digest in json.loads(all_media.read_text()).items():
  path=ROOT/name
  if not path.is_file() or hashlib.sha256(path.read_bytes()).hexdigest()!=digest:errors.append(f'Media checksum mismatch: {name}')
node=shutil.which('node')
if node:
 for p in files:
  if p.suffix in ['.js','.mjs']:
   r=subprocess.run([node,'--check',str(p)],capture_output=True,text=True)
   if r.returncode:errors.append(f'JavaScript syntax: {p.relative_to(ROOT)}')
report={'result':'PASS' if not errors else 'FAIL','html_pages':len(parsed),'files_checked':len(files),'static_links_ok':not errors,'javascript_syntax_checked':bool(node),'errors':errors}
print(json.dumps(report,indent=2));sys.exit(bool(errors))
