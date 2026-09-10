// Interacción visual del Home. El carrito real (con reglas, totales
// y localStorage) se implementa junto con la vista de carrito de compras.

const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".product-card__add");

let count = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = count;
  });
});

// Newsletter: por ahora solo evita el envío real del formulario (sin backend).
const newsletterForm = document.querySelector(".site-footer__newsletter");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
