/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);
var totalCount = 0;

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  // fill in the item drop down list with all image names
  var selectElement = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionEl);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  var itemName = document.getElementById('items').value;
  var quantity = Number(document.getElementById('quantity').value);
  console.log(itemName);
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  for (var i = 0; i < Product.allProducts.length; i++) {
    if (Product.allProducts[i].name === itemName && quantity > 0) {
      // console.log(quantity);
      cart.addItem(itemName, quantity);
      return;
    }
  }
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

  for (var i = 0; i < 1; i++) {
    if (cart.items[i].quantity > 0) {
      totalCount += cart.items[i].quantity;
    }
  }

  var countParent = document.getElementsByTagName('ul')[0];
  var count = document.createElement('li');
  count.textContent = `Item Count: ${totalCount}`;
  countParent.removeChild(countParent.lastChild);
  countParent.appendChild(count);
}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();