document.addEventListener('DOMContentLoaded', function() {
	const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  
	addToCartButtons.forEach(button => {
	  button.addEventListener('click', function(event) {
		const productImage = event.target.closest('.col-sm-4').querySelector('img').src;
		const productName = event.target.closest('.col-sm-4').querySelector('p').textContent;
		const productPrice = parseInt(event.target.closest('.col-sm-4').querySelectorAll('p')[1].textContent);
  
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
  
		const itemPrice = document.createElement('span');
		itemPrice.textContent = `${item.price * item.quantity} Triệu`;
		li.appendChild(itemPrice);
  
		cartItemsElement.appendChild(li);
  
		totalPrice += item.price * item.quantity;
	  });
  
	  totalAmountElement.textContent = totalPrice;
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
	const cartShowIcon = document.querySelector('.fa-cart-plus');
	const cartBody = document.querySelector('.card.mt-4');
  
	cartShowIcon.addEventListener('click', function() {
	  cartBody.style.right = "0";
	});
  
	const cartBodyCloseBtn = cartBody.querySelector('.close-button');
	if (cartBodyCloseBtn) {
	  cartBodyCloseBtn.addEventListener('click', function() {
		cartBody.style.right = "-100%";
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
  
  document.getElementById('search-btn').addEventListener('click', function() {
    document.getElementById('search-container').classList.toggle('expanded');
});
