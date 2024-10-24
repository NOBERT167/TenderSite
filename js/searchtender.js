  function displayTenders(tendersToDisplay) {
    const tendersGrid = document.getElementById("tendersGrid");
    tendersGrid.innerHTML = tendersToDisplay.map(createTenderCard).join("");
  }

  function searchTenders() {
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
    const filteredTenders = tenders.filter(
      (tender) =>
        tender.title.toLowerCase().includes(searchTerm) ||
        tender.category.toLowerCase().includes(searchTerm)
    );
    displayTenders(filteredTenders);
  }

  document
    .getElementById("searchButton")
    .addEventListener("click", searchTenders);
  document
    .getElementById("searchInput")
    .addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        searchTenders();
      }
    });

  // Initial display of all tenders
  displayTenders(tenders);
