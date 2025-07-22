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