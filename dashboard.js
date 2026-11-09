// Load datasets and display them on the page.
// Tests can provide a simulated request using requestData.
async function loadDatasets(list, message, requestData = fetch) {
  // Clear previous results.
  list.textContent = "";
  message.textContent = "Loading datasets...";

  try {
    const response = await requestData(
      "https://tourism.api.opendatahub.com/v1/MetaData?pagesize=1000"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();

    if (!Array.isArray(data.Items)) {
      throw new Error("Unexpected response");
    }

    if (data.Items.length === 0) {
      message.textContent = "No datasets available.";
      return;
    }

    for (const dataset of data.Items) {
      const item = document.createElement("li");
      item.textContent = dataset.Shortname || dataset.Id;
      list.appendChild(item);
    }

    message.textContent = "";
  } catch (error) {
    message.textContent =
      "Could not load datasets. Please try again later.";
  }
}
