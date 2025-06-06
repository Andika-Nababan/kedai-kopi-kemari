// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger-menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Togggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");

// Ketika shopping-cart diklik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const scb = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

const modal = document.querySelector("#item-detail-modal");
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
