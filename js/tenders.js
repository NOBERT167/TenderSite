// Sample tender data with categories
const tenders = [
  { 
      id: 1, 
      title: 'Construction of New Government Office Building', 
      deadline: '2024-12-31', 
      category: 'Construction',
      description: 'Construction of a new 5-story government office building.'
  },
  { 
      id: 2, 
      title: 'Supply of IT Equipment for Schools', 
      deadline: '2024-11-15', 
      category: 'IT',
      description: 'Supply and installation of computers and networking equipment.'
  },
  { 
      id: 3, 
      title: 'Road Maintenance Project', 
      deadline: '2024-10-30', 
      category: 'Infrastructure',
      description: 'Maintenance and repair of major highway sections.'
  },
  { 
      id: 4, 
      title: 'Medical Supplies Procurement', 
      deadline: '2024-12-01', 
      category: 'Healthcare',
      description: 'Procurement of essential medical supplies and equipment.'
  },
  { 
      id: 5, 
      title: 'School Renovation Project', 
      deadline: '2024-11-30', 
      category: 'Construction',
      description: 'Renovation of existing school buildings.'
  }
];

// Get all category cards and tender grid
const categoryCards = document.querySelectorAll('.category-card');
const tendersGrid = document.getElementById('tendersGrid');

// Function to create tender card HTML
function createTenderCard(tender) {
  return `
      <div class="tender-card" data-category="${tender.category}">
          <h2>${tender.title}</h2>
          <p><strong>Category:</strong> ${tender.category}</p>
          <p><strong>Deadline:</strong> ${tender.deadline}</p>
          <p>${tender.description}</p>
          <a href="#" class="view-details-btn">View Details</a>
      </div>
  `;
}

// Function to filter tenders
function filterTenders(category) {
  const filteredTenders = category === 'All' 
      ? tenders 
      : tenders.filter(tender => tender.category === category);
  
  tendersGrid.innerHTML = filteredTenders.map(createTenderCard).join('');
}

// Function to handle category click
function handleCategoryClick(e) {
  const categoryCard = e.currentTarget;
  const selectedCategory = categoryCard.dataset.category;

  // Remove active class from all category cards
  categoryCards.forEach(card => {
      card.classList.remove('active-category');
  });

  // Add active class to clicked card
  categoryCard.classList.add('active-category');

  // Filter tenders based on selected category
  filterTenders(selectedCategory);
}

// Add click event listeners to category cards
categoryCards.forEach(card => {
  card.addEventListener('click', handleCategoryClick);
});

// Initialize with all tenders
filterTenders('All');
