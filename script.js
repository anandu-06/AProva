let cartCount = 0;

function addToCart(button) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  button.innerText = "Added!";
  button.disabled = true;

  setTimeout(() => {
    button.innerText = "Add to Cart";
    button.disabled = false;
  }, 1500);
}
window.addEventListener("load",()=>
{
    const splash=
    document.getElementById("splash-screen");
    setTimeout(() => {
        splash.style.display="none";
    }, 3500);
})
document.querySelector('.add-to-cart').addEventListener('click', () => {
    cartCount++;
    document.querySelector('.cart-count').textContent = cartCount;
    showPopup('Product added to cart!');
});

// Sample related products (to be expanded)
const relatedProducts = [
    { name: "Nike Air Force 1", price: "$150.00", image: "https://via.placeholder.com/150" },
    { name: "Adidas Ultra Boost", price: "$180.00", image: "https://via.placeholder.com/150" }
];

const productGrid = document.querySelector('.product-grid');
relatedProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;
    productGrid.appendChild(productDiv);});
showPopup("Nice pick! The item is added to your cart.")

function showPopup(message) {
  const popup = document.getElementById('popup');
  if (!popup) return;

  popup.textContent = message;
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
  }, 2000);
}
