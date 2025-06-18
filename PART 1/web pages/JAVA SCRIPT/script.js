function toggleNav() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('show');
}

function navigate(section) {
    alert(`You clicked on ${section}!`);
}

function addToCart(itemName) {
  alert(`${itemName} has been added to your cart!`);
}
function addToCart(productName, inputId) {
  const quantity = document.getElementById(inputId).value;
  const cartItems = document.getElementById("cart-items");

  const li = document.createElement("li");
  li.textContent = `${quantity} x ${productName}`;
  cartItems.appendChild(li);
}
function showCart() {
  const cart = document.getElementById("cart");
  cart.style.display = cart.style.display === "block" ? "none" : "block";
}

// Get all section elements
const sections = document.querySelectorAll('section');

// Add an event listener for scrolling
window.addEventListener('scroll', () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the section is in view
    if (sectionTop < windowHeight * 0.8) {
      section.classList.add('visible');
    }
  });
});
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for submitting the form!');
});
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;
}