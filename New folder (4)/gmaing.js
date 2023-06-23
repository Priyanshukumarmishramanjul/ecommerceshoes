// Add event listeners to the "Add to Cart" buttons
var addToCartButtons = document.getElementsByClassName("add-to-cart");
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCart);
}

// Function to add a product to the cart
function addToCart(event) {
  var product = event.target.parentNode;
  var productName = product.querySelector(".product-name").textContent;
  var productPrice = parseFloat(product.querySelector(".product-price").textContent.slice(1));
  
  var cartItem = document.createElement("li");
  cartItem.innerHTML = productName + " - $" + productPrice.toFixed(2);
  
  document.getElementById("cart-items").appendChild(cartItem);
  
  var cartTotal = calculateTotal();
  document.getElementById("cart-total").textContent = "Total: $" + cartTotal.toFixed(2);
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
  var cartItems = document.getElementById("cart-items").getElementsByTagName("li");
  var totalPrice = 0;
  
  for (var i = 0; i < cartItems.length; i++) {
    var price = parseFloat(cartItems[i].textContent.slice(cartItems[i].textContent.indexOf("$") + 1));
    totalPrice += price;
  }
  
  return totalPrice;
}

// Checkout button event listener
var checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", function() {
  var cartItems = document.getElementById("cart-items");
  
  if (cartItems.children.length === 0) {
    alert("Your cart is empty. Please add items to the cart before checking out.");
  } else { 
    alert("Thank you for your purchase!H:\New folder (4)\gmaing.html Total amount: $" + calculateTotal().toFixed(2));
    cartItems.innerHTML = "";
    document.getElementById("cart-total").textContent = "Total: $0.00";
  }
});
