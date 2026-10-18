# NAVRYNT full-product feature guide

[English](FULL-PRODUCT.md) · [Türkçe](FULL-PRODUCT.tr.md) · [Searchable catalogue](https://kaandevs-ops.github.io/navrynt-website-public/features.html)

Reviewed **18 October 2026**. This guide is a product-level inventory based on source, UI and API definitions. No new live acceptance test was performed for this documentation update. Code presence does not mean installed, available or runtime-verified.

## Three separate components

| Component | Purpose |
|---|---|
| Website | Explains the full application, requirements and attributed recordings |
| Static demo | Fictional cases/graph/tracks, actual local hashing and non-executing model plans |
| Separate full application | Python backend, React interface, configured adapters and model services |

## Evidence labels

- **Recorded historical run**: Only the linked historical operation is shown; related operations are not all verified.
- **Demo workflow illustration**: A fictional demo illustration, not execution evidence for the full backend.
- **Source-reviewed capability**: Reviewed in source/UI/API; no published execution for the operation is attached here.

Prerequisites are separate from evidence labels. A registered adapter or healthy service does not verify every provider query or model accuracy.

## Example investigation paths

- **Source to case**: Register source → collect → inspect evidence → normalize → review resolution candidates → inspect graph → export report.
- **Location context**: Query an allowed source or supply observations → inspect timestamps/coordinates → compare time-distance windows → review candidates. No guaranteed exact location is implied.
- **Media review**: Inspect bytes/metadata → review transcript/keyframes or model candidates → preserve source context → connect a reviewed observation to a case.
- **Biometric research**: Use authorized samples and an appropriate checkpoint/gallery → enroll/compare → review thresholds and protocol → validate independently. The demo does not run this pipeline.
- **Model operations**: Review data/model rights → choose supported action → configure runtime → inspect logs/artifacts → evaluate on the intended dataset. Catalogue availability is not a successful job.

## Feature inventory

**122 feature entries · 14 groups · 25 main navigation screens.** Entries group related operations; this is not a line-by-line list of every internal function.

## Investigation workspace

Keep cases, entities, relationships and analyst context together.

### Case lifecycle

Create, list and inspect cases; hold, reopen or close them and set case-level analysis egress policy.

- **Evidence**: Demo workflow illustration.
- **Requires**: Configured backend, case storage and the appropriate workspace permissions.
- **Boundary**: The linked demo illustrates this workflow with fictional data; it does not verify the full application backend.

### Case history and snapshots

Record append-only history events and create retrievable investigation snapshots.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured backend, case storage and the appropriate workspace permissions.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Analyst locks and presence

Acquire and release case editing locks; inspect presence through configured REST/WebSocket surfaces.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured backend, case storage and the appropriate workspace permissions.
- **Boundary**: Presence and locking interfaces do not establish conflict-free editing or production multi-user load capacity.

### Case backup and restore

Create backup sets, inspect their file inventory and restore a selected set.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured backend, case storage and the appropriate workspace permissions.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Backup schedules

Create, inspect and cancel periodic or durable case backup schedules.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured backup storage plus a running scheduler/worker where required.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Entity resolution and review

Normalize identifiers, generate resolution candidates and review resolved entity records.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured backend, case storage and the appropriate workspace permissions.
- **Boundary**: A resolution candidate or shared identifier is not proof that two records are the same person.

### Knowledge and provenance graphs

Review linked entities and sources, derive graph views and visualize investigation relationships.

- **Evidence**: Demo workflow illustration.
- **Requires**: Configured backend, case storage and the appropriate workspace permissions.
- **Boundary**: The linked demo illustrates this workflow with fictional data; it does not verify the full application backend.

### Timeline and investigation map

Organize temporal events and map case-linked observations.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured backend, case storage and the appropriate workspace permissions.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Search and retrieval index

Search stored investigation content and manage the configured retrieval index.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured backend, case storage and the appropriate workspace permissions.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Notes, tags and saved queries

Maintain analyst notes, bookmarks, tags and reusable query definitions.

- **Evidence**: Demo workflow illustration.
- **Requires**: Configured backend, case storage and the appropriate workspace permissions.
- **Boundary**: The linked demo illustrates this workflow with fictional data; it does not verify the full application backend.

## Evidence and reproducibility

Carry source context and transformation history with the result.

### Evidence intake and original records

Store and inspect evidence records, raw collected material and source context.

- **Evidence**: Demo workflow illustration.
- **Requires**: Evidence storage, authorized input files and the relevant case permissions.
- **Boundary**: The linked demo illustrates this workflow with fictional data; it does not verify the full application backend.

### Integrity and evidence lifecycle

Scan evidence integrity and archive expired evidence according to configured policy.

- **Evidence**: Source-reviewed capability.
- **Requires**: Evidence storage, authorized input files and the relevant case permissions.
- **Boundary**: A byte hash does not prove source authenticity. The public demo separately demonstrates actual local SHA-256.

### Transformation history

Record normalization and other transformation steps for traceable processing.

- **Evidence**: Source-reviewed capability.
- **Requires**: Evidence storage, authorized input files and the relevant case permissions.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Investigation package export

Build a structured investigation package with supporting evidence and context.

- **Evidence**: Source-reviewed capability.
- **Requires**: Evidence storage, authorized input files and the relevant case permissions.
- **Boundary**: The demo brief is an illustrative JSON export, not a full-product investigation-package acceptance test.

### Trusted timestamp integration

Use a configured timestamp authority for evidence timestamp workflows.

- **Evidence**: Source-reviewed capability.
- **Requires**: An appropriate timestamp-authority adapter and external service/network access.
- **Boundary**: Timestamping depends on the chosen authority and trust configuration; it is not a blanket legal admissibility claim.

## Sources and collection pipelines

Connect governed sources and inspect collection, normalization and job state.

### Source registry and health

Register sources, enable or disable them and inspect health history, dashboards and scorecards.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Collection runs and history

Run a configured collector and inspect its job status and evidence outputs.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Scheduled and incremental collection

Maintain periodic collection schedules and configured incremental processing.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Pipeline orchestration and trace

Coordinate collection, normalization, resolution, correlation and knowledge-graph stages with run traces.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Ingestion buffer and quarantine

Inspect ingestion status and quarantined records before downstream processing.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Record normalization and migration

Normalize records, retrieve evidence-linked versions and apply supported migrations.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Web crawling

Run configured web collection under the selected source and access policies.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Site-structure drift

Compare observed site structures and preserve observations for collector maintenance.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Durable job status and cancellation

Inspect supported background job state and request cancellation.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Domain and infrastructure discovery

Use configured DNS, RDAP, certificate-transparency and subdomain-discovery components.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured collectors, permitted target access, network availability and scheduled workers when needed.
- **Boundary**: Coverage and freshness depend on the source; discovery is not a complete inventory guarantee.

## Digital footprint and communications

Collect contextual signals without turning uncertain associations into identity certainty.

### Password exposure check

Perform a hash-prefix exposure query and manage stored check records.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized inputs, configured adapters and provider access or model dependencies where applicable.
- **Boundary**: Hash-prefix lookup differs from the separately configured HIBP email breach service; no public demo performs these checks.

### Email breach lookup

Query supported breach information through the configured HIBP integration.

- **Evidence**: Source-reviewed capability.
- **Requires**: Suitable HIBP account/credential, enabled adapter and permitted use.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Account-existence signals

Request account-existence signals from a configured provider.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized inputs, configured adapters and provider access or model dependencies where applicable.
- **Boundary**: A provider signal is not proof of account ownership or complete service coverage.

### Username enumeration

Run supported username checks against configured site definitions and review results.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized inputs, configured adapters and provider access or model dependencies where applicable.
- **Boundary**: Matching names do not prove common ownership; site changes and rate limits affect results.

### Email patterns and local-part inference

Generate local-part hints and supported organizational email-pattern candidates.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized inputs, configured adapters and provider access or model dependencies where applicable.
- **Boundary**: Inferred patterns and name/year hints are candidates, not verified identities or deliverable addresses.

### Phone-number analysis

Parse and analyze supplied numbers; optionally query configured carrier/location metadata and store results.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized inputs, configured adapters and provider access or model dependencies where applicable.
- **Boundary**: Number metadata and numbering-area hints are not live handset GPS location.

### IOC enrichment

Enrich supplied indicators with the configured threat-intelligence provider.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured threat-intelligence adapter; credentials and quotas depend on the selected provider.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Passive DNS

Query available historical DNS associations through a configured source.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized inputs, configured adapters and provider access or model dependencies where applicable.
- **Boundary**: Historical associations can be incomplete or stale and do not prove present infrastructure ownership.

### Document extraction

Extract supported document content and metadata for investigation processing.

- **Evidence**: Source-reviewed capability.
- **Requires**: Supported input formats and the relevant parsers/OCR dependencies.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

## Corporate, vehicle and crypto research

Inspect registries and public records with their actual meaning and coverage.

### Reported company relationships

Query supported company registry data and reported parent relationships.

- **Evidence**: Recorded historical run.
- **Requires**: Configured registry/provider adapters and any required source access.
- **Boundary**: The published GLEIF run shows accounting parentage, not natural-person beneficial ownership or every intermediary.
- [Historical recording](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html#record-companies)

### Sanctions and PEP screening

Screen supplied subjects through the configured sanctions/PEP source.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured registry/provider adapters and any required source access.
- **Boundary**: Matches require human review and source checks; they are not a legal finding.

### Beneficial-ownership chain lookup

Use configured ownership sources to request supported UBO chain information.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured registry/provider adapters and any required source access.
- **Boundary**: Coverage depends on the ownership source; GLEIF accounting consolidation is not equivalent to a full UBO chain.

### Vehicle registry lookup

Look up supported plate/VIN registry fields using the configured adapter.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured registry/provider adapters and any required source access.
- **Boundary**: Available fields and countries depend on the registry; owner identity and vehicle location are not implied.

### Read-only crypto wallet activity

Query supported wallet balance and transaction records through a configured source.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured registry/provider adapters and any required source access.
- **Boundary**: Read-only public records do not identify a wallet owner; no payment or wallet-control flow is shown.

## GEOINT and location context

Work with observations, coordinate systems and model-derived location candidates.

### Regional aircraft observations

Query supported ADSB.lol aircraft states and plot returned coordinates.

- **Evidence**: Recorded historical run.
- **Requires**: Configured source adapters, permitted network access and geospatial dependencies as applicable.
- **Boundary**: One historical regional snapshot is published; it is not continuous tracking or a complete aircraft inventory.
- [Historical recording](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html#record-aircraft)

### Public earthquake event map

Collect supported USGS event records and review mapped observations.

- **Evidence**: Recorded historical run.
- **Requires**: Configured source adapters, permitted network access and geospatial dependencies as applicable.
- **Boundary**: The captured run shows at most the first 150 positions. Historical event data is not prediction or early warning.
- [Historical recording](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html#record-earthquakes)

### Weather model lookup

Request supported Open-Meteo data for supplied coordinates and inspect the returned grid point.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured source adapters, permitted network access and geospatial dependencies as applicable.
- **Boundary**: A weather model grid is not an on-site sensor reading; public use remains subject to source terms.

### OpenSky flight-state integration

Use the configured OpenSky source for supported flight-state queries.

- **Evidence**: Source-reviewed capability.
- **Requires**: Suitable OpenSky access/credentials, configured adapter and available source quota.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### AIS vessel traffic integration

Request supported vessel positions from the configured AIS source.

- **Evidence**: Source-reviewed capability.
- **Requires**: AIS provider access, configured adapter and permitted data use.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### GDELT event stream

Collect supported event records for research and spatial context.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured source adapters, permitted network access and geospatial dependencies as applicable.
- **Boundary**: Reported events are source records, not independent verification of the underlying event.

### Satellite orbit propagation

Propagate positions from supported TLE data with the configured SGP4 pipeline.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured source adapters, permitted network access and geospatial dependencies as applicable.
- **Boundary**: Computed orbit positions are not live GPS telemetry or satellite imagery.

### Coordinate transformations

Transform WGS84, UTM and ECEF inputs through supported coordinate operations.

- **Evidence**: Source-reviewed capability.
- **Requires**: Valid coordinates, the correct source coordinate reference system and geospatial libraries.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Vector and geographic database

Inspect supported vectors, import layers and query bounding boxes in the geographic store.

- **Evidence**: Source-reviewed capability.
- **Requires**: Supported geographic files, database paths and import/query permissions.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Track anomaly indicators

Flag configured position jumps and reporting gaps in supplied observations.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured source adapters, permitted network access and geospatial dependencies as applicable.
- **Boundary**: Threshold-based indicators are review leads, not proof of unlawful behavior or sensor truth.

### Spatial and temporal candidate correlation

Compare supplied observations using distance/time windows and event-location constraints.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured source adapters, permitted network access and geospatial dependencies as applicable.
- **Boundary**: Spatial coincidence generates candidates, not certain identity or causation.

### Visual geolocation candidates

Use a configured visual model/matching adapter to rank image-location candidates.

- **Evidence**: Source-reviewed capability.
- **Requires**: Compatible visual model weights, reference data, matching adapter and runtime capacity.
- **Boundary**: Candidate ranking is not exact location proof; source code or a healthy service is not an accuracy benchmark.

## Media and forensic review

Separate file properties, model output and analyst conclusions.

### Image metadata and perceptual hashes

Inspect supported image metadata and compute similarity-oriented file descriptors.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized media input, supported formats and required parsers/models or external providers.
- **Boundary**: Metadata can be edited and perceptual similarity is not an authenticity determination.

### Deepfake model assessment

Run the configured detection model on supported inputs and review its output.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized media input, supported formats and required parsers/models or external providers.
- **Boundary**: A model score is not a definitive real/fake verdict; model assets and independent validation are required.

### Audio metadata and transcription

Analyze supported audio properties and obtain a transcript from a configured speech runtime.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized media input, supported formats and required parsers/models or external providers.
- **Boundary**: Transcripts can misrecognize proper names and noisy speech; review against the recording.

### Video metadata and keyframes

Inspect supported video metadata and extract or review keyframes.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized media input, supported formats and required parsers/models or external providers.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Manipulation indicators and ELA

Produce supported error-level/manipulation indicators for analyst inspection.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized media input, supported formats and required parsers/models or external providers.
- **Boundary**: Compression artifacts and indicators do not independently prove manipulation.

### Scene and object analysis

Use the configured scene/object adapter on supported imagery.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized media input, supported formats and required parsers/models or external providers.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Reverse-image integration

Query a configured reverse-image provider and inspect returned candidates.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized media input, supported formats and required parsers/models or external providers.
- **Boundary**: Results depend on provider indexes and are not a guarantee of the first publication source.

### Source-attribution candidates

Compare supported publication evidence to suggest source-attribution candidates.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized media input, supported formats and required parsers/models or external providers.
- **Boundary**: The earliest available observation is not necessarily the original publisher.

### Media-to-timeline bridge

Connect supported media observations with investigation timeline context.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized media input, supported formats and required parsers/models or external providers.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

## Six biometric modalities

Inspect modality-specific operations behind isolated inference services.

### Face embedding and gallery workflows

Embed, compare, recognize and manage multi-template enrollment galleries.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized samples, an appropriate trained checkpoint/gallery, compatible service runtime and permissions.
- **Boundary**: The public demo is an illustration; population accuracy, thresholds and spoof resistance are not established here.

### Iris enrollment and identification candidates

Enroll iris samples and request top-k identification candidates from the configured service.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized samples, an appropriate trained checkpoint/gallery, compatible service runtime and permissions.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Fingerprint minutiae, quality and matching

Extract features, inspect quality, compare prints and run supported identification/model-loading paths.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized samples, an appropriate trained checkpoint/gallery, compatible service runtime and permissions.
- **Boundary**: Classical/model modes have distinct prerequisites; a quality heuristic is not NIST NFIQ2 certification.

### Voice enrollment and comparison

Enroll research speech examples and review a voice comparison result.

- **Evidence**: Recorded historical run.
- **Requires**: Authorized samples, an appropriate trained checkpoint/gallery, compatible service runtime and permissions.
- **Boundary**: The published LibriSpeech example does not establish accuracy across languages, devices, noise or replay attacks.
- [Historical recording](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html#record-voice)

### Voice galleries and top-k identification

List/delete voice enrollments and use supported top-k speaker identification.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized samples, an appropriate trained checkpoint/gallery, compatible service runtime and permissions.
- **Boundary**: The published enrollment/comparison clip does not validate every gallery-management or identification operation.

### Writer-ID embeddings and search

Embed handwriting, compare samples and search a configured writer gallery.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized samples, an appropriate trained checkpoint/gallery, compatible service runtime and permissions.
- **Boundary**: The workflow describes handwriting comparison, not personality inference or forensic certainty.

### Gait embedding and comparison

Embed supported walking sequences and request pairwise comparison.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized samples, an appropriate trained checkpoint/gallery, compatible service runtime and permissions.
- **Boundary**: Sequence format, view and domain affect results; no general identity-accuracy claim is made.

### Service health and gateway state

Inspect reachability/readiness and route approved operations to isolated services.

- **Evidence**: Source-reviewed capability.
- **Requires**: Authorized samples, an appropriate trained checkpoint/gallery, compatible service runtime and permissions.
- **Boundary**: A reachable or registered service is not proof of real recognition accuracy.

## Model Studio and model operations

Prepare, configure and inspect supported model workflows.

### Lifecycle jobs and cancellation

Start supported jobs, inspect status/logs and request cancellation through the gateway.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Catalogue availability does not mean every training, evaluation or export operation was executed successfully.

### Managed configs, datasets and artifacts

Inspect approved datasets/artifacts and read or save managed job configurations.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Face lifecycle catalogue

Supported preparation, scratch/fine-tune, evaluation, gallery-build and ONNX-export entry points.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Iris lifecycle catalogue

Supported metric training, fine-tuning, evaluation, benchmarking and ONNX-export entry points.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Fingerprint lifecycle catalogue

Supported training, fine-tuning, quality-tool and model-export entry points.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Voice lifecycle catalogue

Supported training/fine-tuning, threshold calibration and ONNX-export entry points.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Writer-ID lifecycle catalogue

Supported training, fine-tuning, hard-negative mining, evaluation and export entry points.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Gait lifecycle catalogue

Supported training/fine-tuning, zero-shot, CMC/mAP, cross-view evaluation, visualization and export paths.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Model registry and routing

Register models, inspect metadata and choose supported model/provider routes.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Local model lifecycle

Use supported local model download, server start/stop and health operations.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Hardware and deployment profiles

Inspect hardware recommendations/detection and configured deployment profiles.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Recommendations are not a measured production sizing or latency guarantee.

### Benchmarks and A/B comparison

Run supported model/retrieval benchmarks, store results and compare models on supplied samples.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Experiments and dataset catalogue

Manage experiments/metrics and supported dataset registrations/catalogue entries.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Model usage ledger

Record and inspect supported model usage entries and summaries.

- **Evidence**: Source-reviewed capability.
- **Requires**: Appropriate model/data licenses, compatible dependencies, service authorization, storage and hardware.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

## AI-assisted analysis and review

Treat generated signals as reviewable candidates with source context.

### Named-entity extraction

Extract candidate entities from supported text and review evidence-linked results.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Text classification and topics

Classify supplied text and inspect topic detection candidates.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Sentiment candidates

Run supported sentiment analysis and retrieve evidence-linked candidates.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Text embeddings and semantic search

Embed supported text and search indexed passages by semantic similarity.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Retrieval-augmented answers

Ingest supported passages, query them and inspect stored answer history.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Summaries and enrichment

Use configured summarization and enrichment workflows on authorized content.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Analyst review queue

Inspect analysis candidates and record confirmation or rejection.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Explainability and grounding checks

Inspect supported explanations and grounding assessment for generated answers.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Grounding checks reduce uncertainty but do not guarantee correctness or absence of hallucination.

### Natural-language query preview

Generate supported text-to-query previews for inspection.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: A generated query preview is not automatic query execution or authorization.

### Activity and contextual hints

Generate supported activity/classification and contextual enrichment hints.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Inferred interests, occupations or context are uncertain hints, not verified personal attributes.

### Graph-community explanations

Explain supported graph-community groupings for analyst review.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Investigation suggestions

Generate supported next-step suggestions from supplied investigation context.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Multilingual preparation and translation

Prepare supported multilingual processing and translate supported report sections.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Language and report-section support depend on the selected runtime; outputs need review.

### Active-learning feedback

Record analyst feedback and retrieve feedback reports for supported workflows.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Recording feedback does not by itself retrain a model or prove accuracy improvement.

### Evidence fusion

Combine supported multi-source/model signals into reviewable evidence-fusion output.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured local algorithms or model/provider adapters, indexed data and authorized egress policy.
- **Boundary**: Combined scores remain model- and input-dependent and are not identity certainty.

## Monitoring, alerts and reporting

Make recurring review and structured output visible to analysts.

### Watchlists

Create, enable/disable and inspect due watchlist definitions.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured scheduler/workers, event inputs, case data and supported output dependencies.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Alert evaluation and acknowledgement

Evaluate supported alert rules and acknowledge generated alerts.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured scheduler/workers, event inputs, case data and supported output dependencies.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Tasks and notifications

Maintain supported analyst tasks, notifications and automation definitions.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured scheduler/workers, event inputs, case data and supported output dependencies.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Case-scoped reports

Generate supported relationship, source, timeline and other structured investigation reports.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured scheduler/workers, event inputs, case data and supported output dependencies.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Structured intelligence export

Export supported investigation intelligence through the STIX surface.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured scheduler/workers, event inputs, case data and supported output dependencies.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

## Administration and governance

Review access, retention and operational state without assuming certification.

### Roles and access checks

Manage supported role/permission checks and access-control records.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Retention, purposes and erasure workflows

Manage supported retention policies, purpose records, checklist reviews, access grants and erasure requests.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: Governance tooling does not certify legal compliance or replace organization-specific review.

### Policy evaluation and audit

Store/evaluate policies and inspect supported audit information.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Tenants, workspaces and organizations

Manage supported tenant/workspace/organization records and scoped configuration.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### SSO initiation and quota configuration

Expose supported identity-provider, sign-in initiation and quota configuration surfaces.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: A configuration or sign-in initiation surface is not certification of every enterprise SSO deployment.

### Workspace license evaluation

Manage and evaluate supported workspace-level license records.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Native product-license verification

Inspect activation/status/details and supported deactivation through the full application verifier.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: This is the application verification surface. Private seller signing tools and keys are not published or modified.

### Usage integrity signals

Inspect supported usage-integrity alerts and associated operational context.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Health, metrics and observability

Inspect supported health, metrics, administration overviews and runtime capability registration.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: Health and adapter registration do not establish end-to-end provider validity or production readiness.

### Onboarding surfaces

Use supported onboarding and environment setup information.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured identity, storage, permission and deployment policy; qualified organizational review where needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

## Extensions, research and integration

Inspect supported integration and research-management surfaces.

### Plugin versions and compatibility

Register versions, inspect compatible releases and review upgrade plans.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured plugin runtime or platform services; external binaries, credentials and policies as needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Plugin certification and static review

Inspect supported certification recommendations/decisions, static scans and sandbox benchmarks.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured plugin runtime or platform services; external binaries, credentials and policies as needed.
- **Boundary**: Internal certification records and sandbox results are not a guarantee that arbitrary plugin code is safe.

### Supply-chain checks

Export supported SBOMs and inspect model signatures, known-hash checks and plugin scan results.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured plugin runtime or platform services; external binaries, credentials and policies as needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Research and experiment workspaces

Register and inspect supported research workspace revisions and entries.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured plugin runtime or platform services; external binaries, credentials and policies as needed.
- **Boundary**: Source-reviewed capability; this catalogue does not include a published execution of this operation.

### Ideas, contributions and planning

Maintain idea, contribution and roadmap records through the supported platform APIs.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured plugin runtime or platform services; external binaries, credentials and policies as needed.
- **Boundary**: These API surfaces are not a promise of a public community service or autonomous product development.

### Optimization recommendations

Inspect supported target analysis and recommendation records.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured plugin runtime or platform services; external binaries, credentials and policies as needed.
- **Boundary**: Recommendations are not measured performance improvements until separately tested.

### REST, CLI, SDK and browser extension

Access supported application workflows through API/CLI and provided integration components.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured plugin runtime or platform services; external binaries, credentials and policies as needed.
- **Boundary**: An API-only workflow may not have a dedicated polished frontend page. The public website does not include the private integration source.

### Frontend, backend and deployment assets

The private application has React/Vite frontend, Python services and Docker/Compose deployment assets.

- **Evidence**: Source-reviewed capability.
- **Requires**: Configured plugin runtime or platform services; external binaries, credentials and policies as needed.
- **Boundary**: Hardware sizing, complete installation and multi-user production load need environment-specific validation.

## Dark-web source availability

Keep source checks separate from access, ownership and content conclusions.

### Onion/I2P availability checks

Check supported configured endpoints for availability.

- **Evidence**: Source-reviewed capability.
- **Requires**: Permitted source access, appropriate proxy/network routing and configured collectors.
- **Boundary**: Availability does not authenticate a service or establish safe content; the website performs no live crawl.

### Paste-site monitoring

Request supported monitoring observations from a configured source.

- **Evidence**: Source-reviewed capability.
- **Requires**: Permitted source access, appropriate proxy/network routing and configured collectors.
- **Boundary**: Coverage depends on the source; this is not complete dark-web indexing or private-content access.

## Full-application screens

| Screen | Application route |
|---|---|
| Overview | `/dashboard` |
| Global Search | `/search` |
| Investigations | `/cases` |
| Entities | `/entities` |
| Graph | `/graph` |
| Timeline | `/timeline` |
| Map | `/map` |
| Evidence | `/evidence` |
| Sources | `/sources` |
| Collection Pipeline | `/pipeline` |
| Digital Footprint | `/digital-footprint` |
| Identity & Comms | `/identity-comms` |
| Corporate Intel | `/corporate-intel/sanctions` |
| GEOINT | `/geoint` |
| Media Forensics | `/media-forensics` |
| Biometric Lab | `/biometrics` |
| Dark Web & Crypto | `/dark-web-intel` |
| AI Platform | `/ai-platform` |
| Plugin Marketplace | `/plugins` |
| Watchlists & Alerts | `/watchlists` |
| Reports | `/reports` |
| Tenants & Workspaces | `/tenants` |
| Product License | `/product-license` |
| Compliance | `/compliance` |
| Settings | `/settings` |

Case detail is additionally available below the case route. Not every API/CLI surface has a separate dedicated frontend screen.

## 32 declared Model Studio actions

The following action names were reviewed in the native catalogue. This does not mean all 32 actions were executed or successfully validated; models, data, authorization and runtime prerequisites still apply.

| Modality | Declared actions |
|---|---|
| Face | Train from scratch, Fine-tune, Evaluate, Export ONNX, Preprocess / align, Build gallery database |
| Iris | Train from scratch, Fine-tune, Metric training, Evaluate, Benchmark, Export ONNX |
| Fingerprint | Train from scratch, Fine-tune, Export ONNX, Quality tool |
| Voiceprint | Train from scratch, Fine-tune, Calibrate threshold, Export ONNX |
| Writer-ID | Train from scratch, Fine-tune, Evaluate, Mine hard negatives, Export ONNX |
| Gait | Train from scratch, Fine-tune, Zero-shot run, Evaluate, Cross-view evaluation, Visualize embeddings, Export ONNX |

## Deployment prerequisites

1. Configure the backend, storage and React frontend in the intended environment.
2. Check required adapters, external provider access and quotas.
3. Biometric/model jobs need appropriate model/data rights, service authorization and hardware.
4. Scheduled jobs may require running workers/schedulers and durable storage.
5. Review permissions, retention and data egress for the organization.
6. Independently test target-data accuracy, complete installation and multi-user load.

## Not distributed in the public repositories

Private full-application source, license-signing tools/keys, credentials, customer/biometric data, model weights and identity galleries are not distributed in these public repositories. This guide does not publish them. Governance features are not legal-compliance certification.

## Available actual captures

[Aircraft, earthquake, company and voice captures](https://kaandevs-ops.github.io/navrynt-website-public/recordings.html) · [Attribution](MEDIA.md) · [Hosting/deployment](DEPLOYMENT.md)
