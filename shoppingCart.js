
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

    // Save the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart display
    updateCartDisplay(cartItems);

    // Update cart counter
    updateCartCounter(cartItems.length);
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
}


// Function to update the cart counter in the navbar
function updateCartCounter(count) {
    var cartCounterElement = document.getElementById('cart-counter');
    cartCounterElement.textContent = count;
}

// Function to remove product from cart
function removeFromCart(index) {
    // Get the existing cart items from local storage
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Remove the item at the specified index
    cartItems.splice(index, 1);

    // Save the updated cart items back to local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Update the cart display
    updateCartDisplay(cartItems);

    // Update cart counter
    updateCartCounter(cartItems.length);
}

// Load cart items and initialize cart counter when the page loads
window.addEventListener('load', function() {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCartCounter(cartItems.length);
    updateCartDisplay(cartItems);
});

