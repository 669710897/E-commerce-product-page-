// Product Data
const products = [
  { id: 1, name: "Wireless Headphones", price: 79.99, img: "https://m.media-amazon.com/images/I/71sBygGN7TL._AC_SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 2, name: "Smart Watch", price: 129.99, img: "https://m.media-amazon.com/images/I/613Zzfsd0dL._AC_UY327_FMwebp_QL65_.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 59.99, img: "https://m.media-amazon.com/images/I/614l20nEhmL._AC_UY327_FMwebp_QL65_.jpg" },
  { id: 4, name: "Laptop Stand", price: 39.99, img: "https://m.media-amazon.com/images/I/51KyaTB1EKL._AC_SX466_.jpg" },
];

// Render products
constproductList = document.getElementById("productList");
products.forEach(p => {
  productList.innerHTML += `
    <div class="product">
      <imgsrc="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>$${p.price.toFixed(2)}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>`;
});

// Cart functionality
let cart = [];

function addToCart(id) {
  const item = products.find(p => p.id === id);
  const existing = cart.find(p => p.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCart();
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.reduce((a, c) => a + c.qty, 0);
}

document.getElementById("cartBtn").addEventListener("click", () => {
  const modal = document.getElementById("cartModal");
  modal.style.display = "flex";

  constcartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        <span>${item.name} x ${item.qty}</span>
        <strong>$${(item.price * item.qty).toFixed(2)}</strong>
      </div>`;
  });

  document.getElementById("cartTotal").innerText = total.toFixed(2);
});

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function checkout() {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
  closeCart();
}

