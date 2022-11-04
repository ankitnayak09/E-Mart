let cartItems = {};
const cartItemsIndicator = document.querySelector(".cart-items-count");

function updateCart() {
	cartItemsIndicator.textContent = Object.keys(cartItems).length;
}

function updateCartItems() {
	localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

const add2CartBtn = document.querySelectorAll(".btn-add2Cart");

add2CartBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		let product = btn.parentElement;
		let productId = product.dataset.prodid;
		let productName = product.querySelector("h4").textContent;
		// let productPrice = product.querySelector("p span").textContent;

		let productObj = {
			productName: productName,
			// productPrice: productPrice,
		};

		cartItems[productId] = productObj;
		console.log(cartItems);
		updateCart();
		btn.textContent = "Added to Cart";
		// TODO: Change the Back Color
		btn.style.backgroundColor = "Green";
		updateCartItems();

		// JSON.parse(localStorage.getItem('cartItems'))
	});
});

let selectCategory = document.querySelector(".categoryOption");
selectCategory.addEventListener("change", () => {
	let selectedOption = selectCategory.value;
	if (selectedOption == "mobile") {
		window.location.href = "./products-mobile.html";
	}
	if (selectedOption == "laptop") {
		window.location.href = "./products-laptop.html";
	}
	if (selectedOption == "camera") {
		window.location.href = "./products-camera.html";
	}
	if (selectCategory == "all") {
		window.location.href = "./products.html";
	}
});

let products = document.querySelectorAll("h4");
var inputSearch = document.querySelector(".searchbar");
inputSearch.addEventListener("keyup", () => {
	filter = inputSearch.value.toUpperCase();
	products.forEach((product) => {
		txtValue = product.textContent;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			product.parentElement.style.display = "";
		} else {
			product.parentElement.style.display = "none";
		}
	});
});
