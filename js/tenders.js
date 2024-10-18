const tenders = [
    {
      id: 1,
      title: "Construction of New Government Office Building",
      deadline: "2024-12-31",
      category: "Construction",
    },
    {
      id: 2,
      title: "Supply of IT Equipment for Schools",
      deadline: "2024-11-15",
      category: "IT",
    },
    {
      id: 3,
      title: "Road Maintenance Project",
      deadline: "2024-10-30",
      category: "Infrastructure",
    },
    {
      id: 4,
      title: "Medical Supplies Procurement",
      deadline: "2024-12-01",
      category: "Healthcare",
    },
  ];

  function createTenderCard(tender) {
    return `
    <div class="tender-card">
        <h2 classs='sub-title'>${tender.title}</h2>
        <p><strong>Category:</strong> ${tender.category}</p>
        <p><strong>Deadline:</strong> ${tender.deadline}</p>
        <a href="#" class="view-details-btn">View Details</a>
    </div>
`;
  }

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