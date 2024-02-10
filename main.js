const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.children.length) {
        slideIndex = 0; // Reset to the first slide
    }
    updateSlidePosition();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.children.length - 1;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto change slides every 3 seconds
setInterval(nextSlide, 3000);


//==============================================================================================

// Initialize cart counter variable
var cartCounter = 0;

// Function to add product to cart
function addToCart(productName, productPrice, productImage) {
    // Get the existing cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Create new cart item
    var newItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    // Add the new item to the cart
    cartItems.push(newItem);

    // Increment cart counter
    cartCounter++;

    // Save the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart counter in the navbar
    var cartCounterElement = document.getElementById('cart-counter');
    cartCounterElement.textContent = cartCounter;

    // Update the cart display
    updateCartDisplay(cartItems);
}


// Function to update the cart display
function updateCartDisplay(cartItems) {
    var cartTable = document.getElementById('cart-items');
    cartTable.innerHTML = '';
    var totalPrice = 0; // Initialize total price

    cartItems.forEach(function(item, index) {
        var row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${item.image}" alt="${item.name}" width="50"></td>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button onclick="removeFromCart(${index})">Remove</button></td>
        `;
        cartTable.appendChild(row);
        
        totalPrice += item.price; // Add item price to total
    });

    // Add total row to the table
    var totalRow = document.createElement('tr');
    totalRow.innerHTML = `
        <td colspan="3"></td>
        <td>Total:</td>
        <td>$${totalPrice.toFixed(2)}</td>
    `;
    cartTable.appendChild(totalRow);

    // Update cart counter in navbar
    var cartCounterElement = document.getElementById('cart-counter');
    cartCounterElement.textContent = cartCounter;
}

// Function to remove product from cart
function removeFromCart(index) {
    // Get the existing cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Remove the item at the specified index
    cartItems.splice(index, 1);

    // Decrement cart counter
    cartCounter--;

    // Save the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart display
    updateCartDisplay(cartItems);
}

// Load cart items when the page loads
window.addEventListener('load', function() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCartDisplay(cartItems);
});


//==============================================================================================



// Function to show products for a specific category
function showProducts(category) {
    // Hide all product containers
    document.querySelectorAll('.products').forEach(function(product) {
      product.style.display = 'none';
    });
    
    // Show products for the selected category
    document.getElementById(category).style.display = 'flex';
  }
  
  // Initially hide all product containers except the first one
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.products').forEach(function(product) {
      product.style.display = 'none';
    });
    document.getElementById('some-products').style.display = 'flex';
  });
  
//==========================================================================



