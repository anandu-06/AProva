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
  const popup = document.getElementById('popupMessage');
       popup.style.display = 'block'; // Show popup
       popup.style.opacity = '1'; // Make sure it's fully opaque
       setTimeout(function() {
           popup.style.opacity = '0'; // Fade out
           setTimeout(function() {
               popup.style.display = 'none'; // Hide after fade
           }, 500); // Wait for fade out to finish
       }, 5000); // Wait for 5 seconds
   };
