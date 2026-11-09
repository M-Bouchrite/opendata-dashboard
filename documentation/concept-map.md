# Open Data Hub Dashboard — Concept Map

## Main components

- **Dataset Catalog** retrieves the list of available datasets from Open Data Hub.
- **Dataset Statistics** gets or calculates the number of records in the selected dataset.
- **Dashboard** displays the dataset list, lets the user choose a dataset, and shows its record count.

## How they work together

1. The dashboard gets the list of available datasets from the catalog.
2. The user selects a dataset from the list.
3. The dashboard asks the statistics component for that dataset’s record count and displays the result.


## Bounded contexts

### Dataset Catalog
Manages the list of datasets, their names and IDs.

### Dataset Statistics
Uses a dataset ID to get or calculate its record count.

### Dashboard (presentation layer)
Shows the dataset list and record count.
Lets the user choose a dataset.
Uses the two contexts above.
