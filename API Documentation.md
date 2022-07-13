
# Overview
## Introduction
## Endpoint Overview

# Guides
## Quick Start
## Authentication
## Errors

# API Reference
## Capacity & Services
Network Health Dashboard link: <https://dashboard.starboard.ventures/capacity-services>
### Network Storage Capacity 
DESCRPITION

The Filecoin network storage capacity in Raw Byte (RB) and Quality-Adjusted (QA) Power.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-network-storage-capacity>

<https://observablehq.com/@starboard/chart-network-storage-capacity-with-baseline>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|STRING|Optional|
|end\_date|STRING|Optional|

REQUEST EXAMPLE

GET: /capacity-services/network\_storage\_capacity

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|total\_qa\_bytes\_power|NUMERIC|This parameter measures the consensus power of stored data on the network, and is equal to Raw Byte Power multiplied by Sector Quality Multiplier.|
|total\_qa\_bytes\_power\_increase|NUMERIC||
|total\_raw\_bytes\_power|NUMERIC|This measurement is the size of a sector in bytes.|
|total\_raw\_bytes\_power\_increase|NUMERIC||
|new\_baseline\_power|NUMERIC|The baseline power (in bytes) the network is targeting.|

RESPONSE EXAMPLES

### Sectors Storage State (storage\_state\_d)
DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-active-faults>

<https://observablehq.com/@starboard/datafield-ssd_active_term_m>

<https://observablehq.com/@starboard/chart-daily-active-termination>

<https://observablehq.com/@starboard/chart-daily-sector-extension>

<https://observablehq.com/@starboard/chart-change-in-active-faults-breakdown>

<https://observablehq.com/@starboard/chart-daily-average-days-faulted-of-active-faults>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /capacity-services/storage\_state\_d

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|active\_fault|NUMERIC|The total storage size of outstanding faulted sectors that are not recovered or terminated.|
|active\_fault\_increase|NUMERIC|<p>active\_fault(day D) - active\_fault(day D-1).</p><p></p>|
|active\_fault\_avg\_d|NUMERIC|Average days that a sector fault remains active on the Filecoin network during the last 24 hour.|
|fault\_d|NUMERIC|Newly add faulted sector size in TiB in the past day|
|recover\_d|NUMERIC|Newly add recovered sector size in TiB in the past day|
|term\_d|NUMERIC|Daily terminated sector size in TiB.|
|term\_d\_increase|NUMERIC|term\_d(day D) - term\_d(day D-1).|
|net\_fault\_d|NUMERIC|fault\_d - recover\_d - term\_d|
|active\_term\_d|NUMERIC|Sectors that are scheduled to expire but gets terminated actively by SPs.|
|active\_term\_m|NUMERIC|The total storage size of new active terminated sectors in the past 30 days.|
|active\_term\_m\_increase|NUMERIC|active\_term\_m(day D) - active\_term\_m(day D-1).|
|passive\_term\_d|NUMERIC|Sectors that are scheduled to expire but gets terminated passively after 42 days.|
|extend\_size|NUMERIC|Sectors that are scheduled to expire but get extended during the last 24 hour.|
|extend\_size\_increase|NUMERIC|extend\_size(day D) - extend\_size(day D-1).|

RESPONSE EXAMPLES

### Capacity Onboarding by Method
DESCRPITION

Sectors onboarded onto the network based on PreCommit and ProveCommit states during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-sector-onboarding-breakdown-by-method>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /capacity-services/sector\_onboarding\_by\_method

RESPONSE SCHEMA


|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|pre\_commit\_sector\_size|NUMERIC|Daily PreCommitSector size in PiB.|
|pre\_commit\_sector\_batch\_size|NUMERIC|Daily PreCommitSectorBatch size in PiB.|
|pre\_commit\_total\_size|NUMERIC|pre\_commit\_sector\_size + pre\_commit\_sector\_batch\_size|
|prove\_commit\_sector\_size|NUMERIC|Daily ProveCommitSector size in PiB.|
|prove\_commit\_aggregate\_size|NUMERIC|Daily ProveCommitAggregate size in PiB.|
|prove\_commit\_total\_size|NUMERIC|prove\_commit\_sector\_size + prove\_commit\_aggregate\_size|

RESPONSE EXAMPLES

### Capacity Onboarding by Sector Size
DESCRPITION

Sectors onboarded onto the network based on sector size during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-prove-commit-32-64-gib-splits>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /capacity-services/prove\_commit\_split\_d

RESPONSE SCHEMA


|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|<p>DATE</p><p></p>|Data date, Data of day N will be triggered on day N+1.|
|halfsizebyte|NUMERIC|ProveCommit sector(32GiB) size in bytes.|
|sizebyte|NUMERIC|ProveCommit sector(64GiB) size in bytes.|

RESPONSE EXAMPLES

### Sectors Scheduled Expiration
DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-scheduled-expiration-by-date-breakdown-in-pib>

<https://observablehq.com/@starboard/chart-scheduled-expiration-by-date-breakdown-in>

<https://observablehq.com/@starboard/chart-initial-pledge-release-by-scheduled-expiration-fil>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /capacity-services/sectors\_schedule\_expiration

RESPONSE SCHEMA


|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|interest\_date|DATE|The date of interest.|
|schedule\_expire\_bytes|BIGINT|The total bytes of sectors alive.|
|extended\_bytes|BIGINT|The total bytes of sectors which have been extended.|
|terminated\_bytes|BIGINT|The total bytes of sectors which have been terminated.|
|expired\_bytes|BIGINT|The total bytes of sectors which already expired.|
|potential\_expire\_bytes|BIGINT|scheduled\_expire – terminated – extended – expired , in bytes.|
|schedule\_expire\_pledge|NUMERIC|The total initial pledge of sectors alive.|
|extended\_pledge|NUMERIC|The total initial pledge of sectors which have been extended.|
|terminated\_pledge|NUMERIC|The total initial pledge of sectors which have been terminated.|
|expired\_pledge|NUMERIC|The total initial pledge of sectors which already expired.|
|potential\_expire\_pledge|NUMERIC|scheduled\_expire – terminated – extended – expired, in initial pledge.|

RESPONSE EXAMPLES

### Network Block Reward
DESCRPITION

Weighted block rewards awarded by Filecoin network during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-network-block-rewards>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /capacity-services/network\_block\_reward

RESPONSE SCHEMA


|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|reward\_per\_wincount|NUMERIC|Weighted block rewards awarded by Filecoin network during the last 24 hour.|

RESPONSE EXAMPLES


### 32GiB Sector Pledges and Returns
DESCRPITION

Pledges and projected 360 day rewards awarded by Filecoin network for sector size of 32GiB during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-32gib-sector-pledges-and-returns>

<https://observablehq.com/@starboard/economics-table>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /capacity-services/economics\_sector\_pledges\_returns\_32g\_d

RESPONSE SCHEMA


|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|rewards|NUMERIC|360day rewards|
|precommit\_fil|NUMERIC|PreCommitSector gas|
|provecommit\_fil|NUMERIC|ProveCommitSector gas|
|precommit\_agg\_fil|NUMERIC|PreCommitSectorBatch gas|
|provecommit\_agg\_fil|NUMERIC|ProveCommitAggregate gas|
|window\_fil|NUMERIC|window\_cost / window\_count of SubmitWindowedPoSt method. |
|profit|NUMERIC|rewards - precommit\_fil - provecommit\_fil - window\_fil/2349|
|profit\_agg|NUMERIC|rewards - precommit\_agg\_fil - provecommit\_agg\_fil - window\_fil/2349|
|initial\_pledge|NUMERIC|initial\_pledge = Initial Storage Pledge(20 days equivalent of projected rewards) + Initial Consensus Pledge|
|reward\_pledge\_return|NUMERIC|rewards / initial\_pledge|
|post\_gas\_return|NUMERIC|profit / initial\_pledge|
|post\_gas\_return\_agg|NUMERIC|profit\_agg / initial\_pledge|

RESPONSE EXAMPLES


### 64GiB Sector Pledges and Returns
DESCRPITION

Pledges and projected 360 day rewards awarded by Filecoin network for sector size of 64GiB during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-64gib-sector-pledges-and-returns>

<https://observablehq.com/@starboard/economics-table>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /capacity-services/economics\_sector\_pledges\_returns\_64g\_d

RESPONSE SCHEMA


|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|rewards|NUMERIC|360day rewards|
|precommit\_fil|NUMERIC|PreCommitSector gas|
|provecommit\_fil|NUMERIC|ProveCommitSector gas|
|precommit\_agg\_fil|NUMERIC|PreCommitSectorBatch gas|
|provecommit\_agg\_fil|NUMERIC|ProveCommitAggregate gas|
|window\_fil|NUMERIC|window\_cost / window\_count of SubmitWindowedPoSt method. |
|profit|NUMERIC|rewards - precommit\_fil - provecommit\_fil - window\_fil/2349|
|profit\_agg|NUMERIC|rewards - precommit\_agg\_fil - provecommit\_agg\_fil - window\_fil/2349|
|initial\_pledge|NUMERIC|initial\_pledge = Initial Storage Pledge(20 days equivalent of projected rewards) + Initial Consensus Pledge|
|reward\_pledge\_return|NUMERIC|rewards / initial\_pledge|
|post\_gas\_return|NUMERIC|profit / initial\_pledge|
|post\_gas\_return\_agg|NUMERIC|profit\_agg / initial\_pledge|

RESPONSE EXAMPLES


### Committed and Expired Pledge
DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-commit-pledge-per-qap>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /capacity-services/commit\_and\_expire\_pledge

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|raw\_bytes\_gb|NUMERIC|Total sector size of miners.(Bytes / 32 GiB)|
|commit\_pct\_qa\_adj|NUMERIC|Total committed pct verified qap of miners.|
|commit\_pledge|NUMERIC|Total committed initial pledge of day.|
|commit\_pledge\_per\_bytes|NUMERIC|Total committed initial pledge per raw bytes of day.|
|commit\_pledge\_per\_qap|NUMERIC|Total committed initial pledge per QAP of day.|
|expire\_pct\_qa\_adj|NUMERIC|Total expired pct verified qap of miners.|
|expire\_pledge|NUMERIC|Total expired initial pledge of day.|
|expire\_pledge\_per\_bytes|NUMERIC|Total expired initial pledge per raw bytes of day.|
|expire\_pledge\_per\_qap|NUMERIC|Total expired initial pledge per QAP of day.|

RESPONSE EXAMPLES


## Market & Deals
Network Health Dashboard link: https://dashboard.starboard.ventures/market-deals
### Deal States Aggregate Daily
DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-active-deal-pib-statistics>

<https://observablehq.com/@starboard/chart-daily-active-deal-count-statistics>

<https://observablehq.com/@starboard/chart-daily-active-deal-tib-change-breakdown>

<https://observablehq.com/@starboard/chart-daily-active-deal-count-change-breakdown>

<https://observablehq.com/@starboard/datafield-dsad_active_deals_regular_provider_collateral>

<https://observablehq.com/@starboard/datafield-dsad_active_deals_verified_provider_collateral>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/deal\_states\_aggregate\_daily

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|active\_deals\_regular\_bytes|NUMERIC|Active normal deal bytes.|
|active\_deals\_regular\_bytes\_increase|NUMERIC|active\_deals\_regular\_bytes(day D) - active\_deals\_regular\_bytes(day D-1).|
|active\_deals\_verified\_bytes|NUMERIC|Active verified deal bytes.|
|active\_deals\_verified\_bytes\_increase|NUMERIC|active\_deals\_verified\_bytes(day D) - active\_deals\_verified\_bytes(day D-1).|
|active\_deals\_regular\_count|BIGINT|Active normal deal count.|
|active\_deals\_verified\_count|BIGINT|Active verified deal count.|
|activated\_deals\_regular\_bytes|NUMERIC|Activate normal deal bytes.|
|activated\_deals\_verified\_bytes|NUMERIC|Activate verified deal bytes.|
|activated\_deals\_regular\_count|BIGINT|Activate normal deal count.|
|activated\_deals\_verified\_count|BIGINT|Activate verified deal count.|
|new\_deals\_regular\_bytes|NUMERIC|New normal deal bytes.|
|new\_deals\_verified\_bytes|NUMERIC|New verified deal bytes.|
|new\_deals\_regular\_count|BIGINT|New normal deal count.|
|new\_deals\_verified\_count|BIGINT|New verified deal count.|
|slashed\_deals\_regular\_bytes|NUMERIC|Slashed normal deal bytes.|
|slashed\_deals\_verified\_bytes|NUMERIC|Slashed verified deal bytes.|
|slashed\_deals\_regular\_count|BIGINT|Slashed normal deal count.|
|slashed\_deals\_verified\_count|BIGINT|Slashed verified deal count.|
|expired\_deals\_regular\_bytes|NUMERIC|Expired normal deal bytes.|
|expired\_deals\_verified\_bytes|NUMERIC|Expired verified deal bytes.|
|expired\_deals\_regular\_count|BIGINT|Expired normal deal count.|
|expired\_deals\_verified\_count|BIGINT|Expired verified deal count.|
|active\_deals\_regular\_provider\_collateral|NUMERIC|Provider collateral in active normal deals.|
|active\_deals\_verified\_provider\_collateral|NUMERIC|Provider collateral in active verified deals.|

RESPONSE EXAMPLES


### Daily Deal Summary Statistics 
DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-dssd_latest>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/deal\_summary\_statistics\_daily

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|new\_deal\_bytes\_regular\_last\_week|NUMERIC|七天内的new regular deal bytes (out of new deal)|
|new\_deal\_bytes\_verified\_last\_week|NUMERIC|七天内的new verified deal bytes (out of new deal)|
|max\_regular\_deal\_price\_last\_week|NUMERIC|七天内最贵的regular deal price in FIL (out of new deal)|
|max\_verified\_deal\_price\_last\_week|NUMERIC|七天内最贵的 verified deal price in FIL (out of new deal)|
|min\_regular\_deal\_price\_last\_week|NUMERIC|七天内最便宜的regular deal price  in FIL (out of new deal)|
|min\_verified\_deal\_price\_last\_week|NUMERIC|七天内最便宜的verified deal price in FIL (out of new deal)|
|total\_regular\_deal\_count|BIGINT|截至当日的 normal deal 的 deal\_id 数量 (out of new deal)|
|total\_verified\_deal\_count|BIGINT|截至当日的 verified deal 的 deal\_id 数量 (out of new deal)|
|total\_regular\_deal\_bytes|NUMERIC|截至当日的 regular deal size in bytes (out of new deal)|
|total\_verified\_deal\_bytes|NUMERIC|截至当日的 verified deal size in bytes (out of new deal)|
|avg\_regular\_deal\_bytes|NUMERIC|截至当日的平均 regular deal size in bytes (out of new deal)|
|avg\_verified\_deal\_bytes|NUMERIC|截至当日的平均 verified deal size in bytes (out of new deal)|
|total\_regular\_deal\_duration|NUMERIC|截至当日的 regular deal duration (out of new deal)|
|total\_verified\_deal\_duration|NUMERIC|截至当日的 verified deal duration (out of new deal)|
|avg\_regular\_deal\_duration\_days|NUMERIC|截至当日的平均 regular deal duration in days (out of new deal)|
|avg\_verified\_deal\_duration\_days|NUMERIC|截至当日的平均 verified deal duration in days (out of new deal)|
|total\_regular\_deal\_provider\_collateral|NUMERIC|截至当日的 regular deal provider collateral in FIL(out of new deal)|
|total\_verified\_deal\_provider\_collateral|NUMERIC|截至当日的 verified deal provider collateral in FIL(out of new deal)|
|avg\_regular\_deal\_provider\_collateral|BIGINT|截至当日的平均 regular deal provider collateral in FIL(out of new deal)|
|avg\_verified\_deal\_provider\_collateral|BIGINT|截至当日的平均 verified deal provider collateral in FIL(out of new deal)|
|percent\_regular\_deal\_free|NUMERIC|截至当日的免 storage\_price\_per\_epoch 的 regular deal 占全部 regular deal 比值。(out of new deal)|
|percent\_verified\_deal\_free|NUMERIC|截至当日的免 storage\_price\_per\_epoch 的 verified deal 占全部 verified deal 比值。(out of new deal)|
|median\_regular\_deal\_price|BIGINT|截至当日的 regular deal storage price per tib month in FIL 中位数。(out of new deal)|
|median\_verified\_deal\_price|BIGINT|截至当日的 verified deal storage price per tib month in FIL 中位数。(out of new deal)|
RESPONSE EXAMPLES

### Top 10 Client by Active Deals Bytes
DESCRPITION

Top 10 active clients on Filecoin based on deal size.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-active-deal-byte>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/top10\_clients\_by\_active\_deal\_bytes

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|client\_id|TEXT|Client ID. "others" is a fake id.|
|client\_rank|INTEGER|Client rank.|
|active\_deal\_bytes|NUMERIC|Client active deal bytes in the past day.|

RESPONSE EXAMPLES

### Top 10 Client by Active Deals Count
DESCRPITION

Top 10 active clients on Filecoin based on deal count.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-active-deal-count>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/top10\_clients\_by\_active\_deal\_count

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|client\_id|TEXT|Client ID. "others" is a fake id.|
|client\_rank|INTEGER|Client rank.|
|active\_deal\_count|BIGINT|Client active deal count in the past day.|

RESPONSE EXAMPLES


### Top 10 Client by New Deals Bytes
DESCRPITION

Top 10 clients on Filecoin based on newly committed sector deal size during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-newly-committed-byte>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/top10\_clients\_by\_new\_deal\_bytes

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|client\_id|TEXT|Client ID. "others" is a fake id.|
|client\_rank|INTEGER|Client rank.|
|new\_deal\_bytes|NUMERIC|Client new deal bytes in the past week.|

RESPONSE EXAMPLES

### Top 10 Client by New Deals Count
DESCRPITION

Top 10 clients on Filecoin based on newly committed sector deal count during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-newly-committed-count>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/top10\_clients\_by\_new\_deal\_count

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|client\_id|TEXT|Client ID. "others" is a fake id.|
|client\_rank|INTEGER|Client rank.|
|new\_deal\_count|BIGINT|Client new deal count in the past week.|

RESPONSE EXAMPLES

### Top 10 Storage Provider by Active Deals Bytes
DESCRPITION

Top 10 active storage providers on Filecoin based on deal size.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-storage-provider-by-active-deal-byte>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/top10\_providers\_by\_active\_deal\_bytes

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|provider\_id|TEXT|Storage provider ID. "others" is a fake id.|
|provider\_rank|INTEGER|Storage provider rank.|
|active\_deal\_bytes|NUMERIC|Storage provider active deal bytes in the past day.|

RESPONSE EXAMPLES

### Top 10 Storage Provider by Active Deals Count
DESCRPITION

Top 10 active storage providers on Filecoin based on deal count.

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-tpbadc_latest>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/top10\_providers\_by\_active\_deal\_count

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|provider\_id|TEXT|Storage provider ID. "others" is a fake id.|
|provider\_rank|INTEGER|Storage provider rank.|
|active\_deal\_count|BIGINT|Storage provider active deal count in the past day.|

RESPONSE EXAMPLES


### Top 10 Storage Provider by New Deals Bytes
DESCRPITION

Top 10 storage provider on Filecoin based on newly committed sector deal size during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-tpbndb_latest>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/top10\_providers\_by\_new\_deal\_bytes

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|provider\_id|TEXT|Storage provider ID. "others" is a fake id.|
|provider\_rank|INTEGER|Storage provider rank.|
|new\_deal\_bytes|NUMERIC|Storage provider new deal bytes in the past week.|

RESPONSE EXAMPLES

### Top 10 Storage Provider by New Deals Count
DESCRPITION

Top 10 storage provider on Filecoin based on newly committed sector deal count during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-tpbndc_latest>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/top10\_providers\_by\_new\_deal\_count

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|provider\_id|TEXT|Storage provider ID. "others" is a fake id.|
|provider\_rank|INTEGER|Storage provider rank.|
|new\_deal\_count|BIGINT|Storage provider new deal count in the past week.|

RESPONSE EXAMPLES


### New Deals
DESCRPITION


QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/new\_deals

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|regular\_deals\_count|BIGINT|New Regular Deals Count.|
|regular\_deals\_bytes\_tb|NUMERIC|New Regular Deal Bytes.|
|verified\_deals\_count|BIGINT|New Verified Deals Count.|
|verified\_deals\_bytes\_tb|NUMERIC|New Verified Deal Bytes.|

RESPONSE EXAMPLES


### Client Headcount
DESCRPITION


QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /market-deals/deal\_client\_headcount

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|<p>total\_clients</p><p></p><p></p>|BIGINT|Total client number until the 1st height of data date.|
|total\_clients\_verified|BIGINT|Total client number, which has fil+ deals, until the 1st height of data date.|
|total\_clients\_verified\_ratio|NUMERIC|total\_clients\_verified / total\_clients|

RESPONSE EXAMPLES



## Transactions & Usage
Network Health Dashboard link: https://dashboard.starboard.ventures/transactions-usage
### Daily Gas Fee Overview
DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-gfod_gas_sector_sealing>

<https://observablehq.com/@starboard/datafield-gfod_gas_storage_deal_publishing>

<https://observablehq.com/@starboard/datafield-gfod_provecommit_cost>

<https://observablehq.com/@starboard/datafield-gfod_provecommit_batch_cost>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /transactions-usage/gas\_fee\_overview\_d

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|gas\_sector\_sealing|NUMERIC|The average gas cost of sealing a sector in the past 24 hours.|
|gas\_storage\_deal\_publishing|NUMERIC|The average gas cost of publishing a storage deal in the past 24 hours.|
|overestimation|NUMERIC|Average Overestimation.|
|miner\_tip\_per\_message|NUMERIC|The average amount of FIL the miner receives for executing the message. |
|precommit\_cost|NUMERIC|The average cost of PreCommitSector method in the past 24 hours.|
|provecommit\_cost|NUMERIC|The average cost of ProveCommitSector method in the past 24 hours.|
|precommit\_batch\_cost|NUMERIC|The average cost of PreCommitSecotorBatch method, including corresponding batch fees in the past 24 hours.|
|provecommit\_batch\_cost|NUMERIC|The average cost of ProveCommitAggregate method, including corresponding batch fees in the past 24 hours.|
|avg\_pre\_agg\_count|NUMERIC|Average PreCommitSectorBatch count of last day.|
|avg\_prove\_agg\_count|NUMERIC|Average ProveCommitAggregate count of last day.|

RESPONSE EXAMPLES

### Hourly Gas Fee Overview
DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-network-basefee>

<https://observablehq.com/@starboard/chart-precommit-cost-per-sector>

<https://observablehq.com/@starboard/chart-provecommit-sector-cost-per-sector>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|
|start\_hour|TIMESTAMPTZ|Optional|
|end\_hour|TIMESTAMPTZ|Optional|

REQUEST EXAMPLE

GET: /transactions-usage/gas\_fee\_overview\_h

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|<p>stat\_date</p><p></p>|DATE|Data date, Data of day N will be triggered on day N+1.|
|hour\_date|TIMESTAMPTZ|Trunc hour of height.|
|precommit\_cost\_sector|NUMERIC|Average PreCommit Cost.|
|provecommit\_cost\_sector|NUMERIC|Average ProveCommit Cost.|
|pre\_batch\_cost\_sector|NUMERIC|Fee required to PreCommit a sector into Filecoin network in the past hour.|
|prove\_batch\_cost\_sector|NUMERIC|Fee required to ProveCommit a sector into Filecoin network in the past hour.|
|base\_fee|NUMERIC|The average set price per unit of gas to be burned (sent to an unrecoverable address) for every message execution. (Unit: Nano FIL)|
|avg\_pre\_agg\_count|NUMERIC|The deal count of PreCommit aggregate on Filecoin in the past hour.|
|avg\_prove\_agg\_count|NUMERIC|The deal count of ProveCommit aggregate on Filecoin in the past hour.|

RESPONSE EXAMPLES

### Daily Network Fee Breakdown
DESCRPITION

The network fees on Filecoin network in the past 24 hours.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-network-fee-breakdown>

<https://observablehq.com/@starboard/chart-daily-network-fee-breakdown-v2>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /transactions-usage/network\_fee\_breakdown

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|base\_fee\_burn|NUMERIC|Base fee burn.|
|overestimation\_fee|NUMERIC|Overestimation fee.|
|pre\_commit\_batch\_fee|NUMERIC|PreCommit Batch Fee.|
|prove\_commit\_batch\_fee|NUMERIC|ProveCommit Batch Fee.|
|penalty\_fee|NUMERIC|total\_fee\_increase - base\_fee - overestimation\_fee - pre\_commit\_batch\_fee - prove\_commit\_batch\_fee.|
|penalty\_fee\_v2|NUMERIC|miner\_penalty from derived\_gas\_outputs.|
|miner\_tip|NUMERIC|The amount of FIL the miner receives for executing the message.|
|total\_fee|NUMERIC|Total Fee burnt.|
|total\_fee\_increase|NUMERIC|Daily increasement of total Fee burnt.|
|protocol\_revenue|NUMERIC|Protocol revenue = base\_fee\_burn + pre\_commit\_batch\_fee + prove\_commit\_batch\_fee + penalty\_fee + overestimation\_fee + miner\_tip = total\_fee\_increase + miner\_tip.|
|total\_protocol\_revenue|NUMERIC|Accumulated protocol revenue from 20201015 until day N.|

RESPONSE EXAMPLES


### Daily Gas Usage by Methods
DESCRPITION

The gas usage on Filecoin network based on sector states in the past 24 hours.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-gas-usage>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /transactions-usage/gas\_usage\_msg\_d

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|total\_gas\_used|NUMERIC|Total amount of resources (or units of gas) consumed, in order to execute a message.|
|prove\_commit\_sector|NUMERIC|Total gas used of (actor\_family ='storageminer' and method = 7).|
|pre\_commit\_sector|NUMERIC|Total gas used of (actor\_family ='storageminer' and method = 6).|
|prove\_commit\_aggregate|NUMERIC|Total gas used of (actor\_family ='storageminer' and method = 26).|
|pre\_commit\_sectorbatch|NUMERIC|Total gas used of (actor\_family ='storageminer' and method = 25).|
|publish\_storage\_deals|NUMERIC|Total gas used of (actor\_family ='storagemarket' and method = 4).|
|submit\_windowed\_post|NUMERIC|Total gas used of (actor\_family ='storageminer' and method = 5).|

RESPONSE EXAMPLES


### Distribution of Past 24 Hours preCommit Batch & proveCommit Batch
DESCRPITION

Distribution of deal counts for PreCommit and ProveCommit on Filecoin network in the past 24 hours.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-distribution-of-past-24-hours-commit-batch>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /transactions-usage/gas\_distribution\_d

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|<p>metric\_type</p><p></p><p></p>|VARCHAR|precommit\_batch\_distribution or provecommit\_batch\_distribution .|
|distribution\_key|VARCHAR|Buckets in size of 10.|
|distribution\_value|NUMERIC|Number of PreCommitSectorBatch count or ProveCommitAggregate count in the bucket.|

RESPONSE EXAMPLES


### Top 10 Storage Provider by Gas Usage
DESCRPITION

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /transactions-usage/gas\_top\_storage\_provider\_d

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|<p>miner\_id</p><p></p><p></p><p></p>|TEXT||
|gas\_used|NUMERIC|base\_fee\_burn + over\_estimation\_burn + miner\_tip.|

RESPONSE EXAMPLES


### Daily Gas Detail Message
DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-gdmd_latest>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /transactions-usage/gas\_detail\_message\_d

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|actor\_family|TEXT|The short unversioned name of the actor that received the message.'All methods' is for all.|
|method|BIGINT|The successful method number to invoke. Only unique to the actor the method is being invoked on. (0 is for all)|
|method\_name|TEXT|The human readable name of method.|
|message\_count|BIGINT|Message number of this method.|
|message\_count\_pct|NUMERIC|Ratio of message number of this method to all methods.|
|gas\_used|NUMERIC|Total gas used of this method.|
|gas\_used\_pct|NUMERIC|Ratio of gas used of this method to all methods.|
|base\_fee\_burn|NUMERIC|Total amount of FIL to burn as a result of the base fee of this method.|
|base\_fee\_burn\_pct|NUMERIC|Ratio of base\_fee\_burn of this method to all methods.|
|over\_estimation\_burn|NUMERIC|Total fee to pay for overestimating the gas used to execute a message of this method.|
|over\_estimation\_burn\_pct|NUMERIC|Ratio of over\_estimation\_burn of this method to all methods.|
|miner\_tip|NUMERIC|Total amount of FIL the miner receives for executing the message.|
|miner\_tip\_pct|NUMERIC|Ratio of miner\_tip of this method to all methods.|

RESPONSE EXAMPLES


### Daily Gas Detail Message (Average)
DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-gudmd_latest>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /transactions-usage/gas\_usage\_detail\_message\_d

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|actor\_family|TEXT|The short unversioned name of the actor that received the message.'All methods' is for all.|
|method|BIGINT|The successful method number to invoke. Only unique to the actor the method is being invoked on. (0 is for all)|
|method\_name|TEXT|The human readable name of method.|
|gas\_used|BIGINT|Average gas used of this method.|
|gas\_limit|NUMERIC|Average gas limit of this method.|
|over\_estimation\_rate|NUMERIC|(total\_gas\_limit - total\_gas\_used) / total\_gas\_used|
|base\_fee\_burn|NUMERIC|Average amount of FIL to burn as a result of the base fee of this method.|
|over\_estimation\_burn|NUMERIC|Average fee to pay for overestimating the gas used to execute a message of this method.|
|miner\_tip|NUMERIC|Average amount of FIL the miner receives for executing the message.|

RESPONSE EXAMPLES


## Circulating Supply
Network Health Dashboard link: https://dashboard.starboard.ventures/circulating-supply
### FIL Protocol Circulating Supply
DESCRPITION

The total amount and the change of FIL tokens in circulation according to the Protocol’s definition.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-fil-protocol-circulating-supply>

<https://observablehq.com/@starboard/daily-change-in-circulating-supply>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /circulating-supply/circulating\_supply

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|circulating\_fil|NUMERIC|The amount of FIL circulating and tradeable in the economy. The basis for Market Cap calculations.|
|circulating\_fil\_increase|NUMERIC|circulating\_fil (day D) - circulating\_fil (day D-1).|
|mined\_fil|NUMERIC|The amount of FIL that has been mined by storage miners.|
|mined\_fil\_increase|NUMERIC|mined\_fil (day D) - mined\_fil (day D-1).|
|vested\_fil|NUMERIC|Total amount of FIL that is vested from genesis allocation.|
|vested\_fil\_increase|NUMERIC|vested\_fil (day D) - vested\_fil (day D-1).|
|reserve\_disbursed\_fil|NUMERIC|The amount of FIL that has been disbursed from the mining reserve.|
|reserve\_disbursed\_fil\_increase|NUMERIC|reserve\_disbursed\_fil (day D) - reserve\_disbursed\_fil (day D-1).|
|locked\_fil|NUMERIC|The amount of FIL locked as part of mining, deals, and other mechanisms.|
|locked\_fil\_increase|NUMERIC|locked\_fil (day D) - locked\_fil (day D-1).|
|burnt\_fil|NUMERIC|Total FIL burned as part of penalties and on-chain computations.|
|burnt\_fil\_increase|NUMERIC|burnt\_fil (day D) - burnt\_fil (day D-1).|

RESPONSE EXAMPLES


### Daily Locked FIL Breakdown
DESCRPITION

The status of FIL token on Filecoin network in the past 24 hours.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-locked-fil-breakdown>

QUERY PARAMETERS

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|start\_date|DATE|Optional|
|end\_date|DATE|Optional|

REQUEST EXAMPLE

GET: /circulating-supply/network\_locked\_fil\_breakdown

RESPONSE SCHEMA

|**Variable**|**Type**|**Description**|
| :- | :- | :- |
|stat\_date|DATE|Data date, Data of day N will be triggered on day N+1.|
|total\_initial\_pledge|NUMERIC|Total initial pledge of network.|
|total\_locked\_funds|NUMERIC|Total locked funds of network.|
|total\_locked\_funds\_increase|NUMERIC|Daily change of total locked funds of network.|
|new\_initial\_pledge|NUMERIC|Daily change of total initial pledge of network.|
|new\_reward\_locked|NUMERIC|Total reward locked of network.|
|new\_reward\_released|NUMERIC|new\_reward\_locked - locked\_funds\_increase.|

RESPONSE EXAMPLES
