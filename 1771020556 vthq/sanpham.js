var colorsList = document.querySelectorAll(".color-swatches .color-swatch");
for (var i = 0; i < colorsList.length; i++) {
  colorsList[i].addEventListener("click", function() {
    var mainImg = document.querySelector(".product-image");
    var newImageSrc = this.dataset.colorImage; 
    if (newImageSrc) {
      mainImg.src = newImageSrc;
    } else {
      console.error("Error: Color image not found for", this);
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach(function(swatch) {
    swatch.addEventListener('click', function() {
      const newImageSrc = this.getAttribute('data-color-image');
      document.getElementById('main-image').src = newImageSrc;
    });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('#addToCartBtn'); 

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const productImage = document.querySelector('.carousel-item.active img').src; 
      const productName = document.querySelector('.product-title.entry_title').textContent.trim();
      const productPrice = parseInt(document.querySelector('#price-buy').textContent.trim().replace(/\D/g, ''));
      addToCart(productImage, productName, productPrice);
    });
  });

  function addToCart(productImage, productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = cart.find(item => item.name === productName);

    if (item) {
      item.quantity++;
    } else {
      item = {
        image: productImage,
        name: productName,
        price: productPrice,
        quantity: 1
      };
      cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI(cart);
  }

function updateCartUI(cart) {
  const cartItemsElement = document.getElementById('cart-items');
  const totalAmountElement = document.getElementById('total-amount');

  cartItemsElement.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    const itemContent = document.createElement('div');
    itemContent.className = 'd-flex align-items-center';

    const productImg = document.createElement('img');
    productImg.src = item.image;
    productImg.alt = item.name;
    productImg.style.width = '50px'; 
    itemContent.appendChild(productImg);

    const productName = document.createElement('span');
    productName.textContent = item.name;
    itemContent.appendChild(productName);

    li.appendChild(itemContent);

    const quantityBadge = document.createElement('span');
    quantityBadge.className = 'badge bg-primary rounded-pill';
    quantityBadge.textContent = `x ${item.quantity}`;
    li.appendChild(quantityBadge);

    const formattedPrice = (item.price * item.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    const itemPrice = document.createElement('span');
    itemPrice.textContent = formattedPrice;
    li.appendChild(itemPrice);

    cartItemsElement.appendChild(li);

    totalPrice += item.price * item.quantity;
  });

  const formattedTotal = totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  totalAmountElement.textContent = formattedTotal;
}

  const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartUI(savedCart);
  const checkoutBtn = document.getElementById('checkout-btn');
  checkoutBtn.addEventListener('click', function() {
    alert('Bạn đã thanh toán thành công!');
    localStorage.removeItem('cart'); 
    updateCartUI([]);
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const cartShowIcon = document.querySelector('.cart-icon i'); 
  const cartBody = document.querySelector('#cart'); 

  cartShowIcon.addEventListener('click', function() {
    cartBody.style.display = "block"; 
  });

  const cartBodyCloseBtn = document.querySelector('.btn-close'); 
  if (cartBodyCloseBtn) {
    cartBodyCloseBtn.addEventListener('click', function() {
      cartBody.style.display = "none"; 
    });
  }
});
$(document).ready(function() {
  $('.cart-icon').click(function() {
    $('#cart').toggle(); 
  });

  $('.btn-close').click(function() {
    $('#cart').hide(); 
  });
});

  $('.btn-close').click(function() {
    $('#cart').hide();
  });


