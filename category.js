const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// Display title nicely
const titles = {
  "brushes-tools": "Brushes & Tools",
  "painting": "Painting Supplies",
  "art-kits": "Art Kits",
  "calligraphy": "Calligraphy Tools",
  "paper-canvas": "Paper & Canvas"
};

document.getElementById("categoryTitle").innerText =
  titles[category] || "Products";

// PRODUCT DATA
const products = [
  // Brushes & Tools
  { name: "Round Brush Set", price: 499, category: "brushes-tools", img: "images/round.jpg" },
   {name: "Palette Knife Set", price: 299, category: "brushes-tools", img: "images/knife.jpg" },
   {name: "Sculpting Tools Set", price: 399, category: "brushes-tools", img: "images/scull.jpg" },
   {name: "Easel Stand", price: 1499, category: "brushes-tools", img: "images/stand.jpg" },


  // Painting
  { name: "Acrylic Paint Set", price: 899, category: "painting", img: "images/a.jpg" },
  { name: "Watercolor Tubes", price: 799, category: "painting", img: "images/water.jpg" },
  { name: "Oil Paint Set", price: 1199, category: "painting", img: "images/oil.jpg" },
  { name: "Gouache Paint Set", price: 699, category: "painting", img: "images/tin.jpg" },

  // Art Kits
  { name: "Beginner Art Kit", price: 1299, category: "art-kits", img: "images/beg.jpg" },
  { name: "Professional Sketch Kit", price: 1999, category: "art-kits", img: "images/pro.jpg" },
  { name: "Watercolor Starter Kit", price: 1499, category: "art-kits", img: "images/wat.jpg" },
  { name: "Acrylic Painting Kit", price: 1799, category: "art-kits", img: "images/n1.jpg" },

  // Calligraphy
  { name: "Calligraphy Pen Set", price: 649, category: "calligraphy", img: "images/cal1.jpg" },
  { name: "Ink Bottle Pack", price: 349, category: "calligraphy", img: "images/cal2.jpg" },
  { name: "Brush Pen Set", price: 799, category: "calligraphy", img: "images/cal3.jpg" },
  { name: "Calligraphy Starter Kit", price: 999, category: "calligraphy", img: "images/cal4.jpg" },

  // Paper & Canvas
  { name: "Canvas Board Pack", price: 499, category: "paper-canvas", img: "images/can1.jpg" },
  { name: "Sketch Paper Pad", price: 299, category: "paper-canvas", img: "images/can2.jpg" },
  { name: "Watercolor Paper Pad", price: 399, category: "paper-canvas", img: "images/can3.jpg" },
  { name: "Mixed Media Paper Pad", price: 599, category: "paper-canvas", img: "images/can4.jpg" }
];

// FILTER PRODUCTS
const filteredProducts = products.filter(
  product => product.category === category
);

// RENDER PRODUCTS
const grid = document.getElementById("productGrid");

filteredProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.img}">
    <div class="info">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <button class="add-btn">Add to Cart</button>
    </div>
  `;
  grid.appendChild(card);
});
