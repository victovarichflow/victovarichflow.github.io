// Editable properties array — add / edit objects here to update Showcase
const properties = [
  {
    id: "p-taman-cahaya",
    title: "#ForSale #TamanCahayaMasai #2Storey",
    location: "Jalan Delima, Taman Cahaya Masai",
    type: "Double Storey Corner Lot",
    beds: 3,
    baths: 2,
    size: "1,765 sqft",
    tenure: "Leasehold (Until 2102)",
    bumi: "Non-Bumi",
    price: "RM418,000",
    bank_value: "RM500,000",
    whatsapp_link: "https://www.wasap.my/.../forSale_DSCL_02112025_JlnDelima...",
    image: "images/property1.jpg" // place your property picture here
  }

  // To add more listings, duplicate the object and change values
];

// Render properties to DOM
function renderProperties() {
  const grid = document.getElementById('propertiesGrid');
  grid.innerHTML = '';
  properties.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.title}">
      <div class="card-body">
        <h4>${p.title}</h4>
        <p class="muted">${p.location}</p>
        <p><strong>${p.type}</strong></p>
        <p class="meta">Beds: ${p.beds} • Baths: ${p.baths} • ${p.size}</p>
        <p class="meta">${p.tenure} • ${p.bumi}</p>
        <div class="price">${p.price}</div>
        <div class="meta">Bank value: ${p.bank_value}</div>
        <div style="margin-top:10px;">
          <a class="btn-primary" href="${p.whatsapp_link}" target="_blank">Contact via WhatsApp</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Mobile nav toggle
document.getElementById('navToggle').addEventListener('click', () => {
  const nav = document.getElementById('main-nav');
  nav.classList.toggle('open');
});

// init
document.addEventListener('DOMContentLoaded', () => {
  renderProperties();
});
