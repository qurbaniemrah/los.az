// Menu and Category
$(document).ready(function () {
  $(function () {
    if ($("body").hasClass("body-catalog")) {
      $(".category, .mobile-category-heading").css("pointer-events", "none");
    }
    $(".menu-toggle").click(function () {
      $(this).stop(true, false, true).toggleClass("active");
      $(".mobile-nav").stop(true, false, true).toggleClass("active");
    });
    $(".category").mouseover(function () {
      $(".category-body").stop(true, false, true).show();
    });
    $(".category").mouseleave(function () {
      $(".category-body").stop(true, false, true).hide();
    });
    $(".category-list-item").hover(function () {
      $(this)
        .next(".category-list-dropdown")
        .stop(true, false, true)
        .toggleClass("active");
    });
    $(".user-data").hover(function () {
      $(".user-list-container").stop(true, false, true).slideToggle(200);
    });
    $(".category-list-dropdown").hover(function () {
      $(this).stop(true, false, true).toggleClass("active");
    });
    $(".mobile-category-heading").click(function () {
      $(".mobile-category-body").stop(true, false, true).toggleClass("active");
      $(".mobile-category-head")
        .stop(true, false, true)
        .toggleClass("bordered");
    });
    $(".category-item-arrow").click(function () {
      $(this).stop(true, false, true).toggleClass("rotate");
      $(this).parent().stop(true, false, true).toggleClass("active");
    });
    $(".nav-item-container").hover(function () {
      $(this)
        .find(".nav-dropdown")
        .stop(true, false, true)
        .toggleClass("active");
      if ($(this).find(".nav-dropdown").hasClass("active")) {
        $(".nav-item-arrow").addClass("rotate");
      } else {
        $(".nav-item-arrow").removeClass("rotate");
      }
    });
    $(".mobile-nav-item-arrow").click(function () {
      $(this).stop(true, false, true).toggleClass("rotate");
      $(".mobile-nav-dropdown").stop(true, false, true).toggleClass("active");
    });
    $(".wish-label").click(function () {
      $(this).find("button").stop(true, false, true).toggle();
    });
    $(".show-filter").click(function () {
      $(".category-sidebar").stop(true, false, true).slideToggle(250);
    });
    if ($(window).width() < 768) {
      $("#slider-container").removeClass("container");
    }
  });
});

// menu and category

// swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// swiper

$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  center: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplaySpeed: 1000,
  responsiveClass: true,

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
});

// owl carousel

// counting wishlist
// const wishLabelActive = document.querySelectorAll(".wish-label");
// const wishLabelDeactive = document.querySelectorAll(".wish-label-deactive");
// const wishCount = document.querySelector(".wishCount");
// const emptyCard = document.querySelector(".empty-card");
// let zero = 0;

// function add() {
//   wishCount.innerHTML = zero + 1;
//   zero += 1;
// }

// function remove() {
//   wishCount.innerHTML = zero - 1;
//   zero -= 1;
//   if (zero == -1) {
//     zero + 1;
//   }
// }

// for (let i = 0; i < wishLabelActive.length; i++) {
//   wishLabelActive[i].addEventListener("click", (e) => {
//     add();
//     wishLabelDeactive[i].style.display = "block";
//     wishLabelActive[i].style.display = "none";
//   });
// }

// for (let j = 0; j < wishLabelDeactive.length; j++) {
//   wishLabelDeactive[j].addEventListener("click", () => {
//     remove();
//     wishLabelDeactive[j].style.display = "none";
//     wishLabelActive[j].style.display = "block";
//   });
// }

// counting wishlist

// addToCart

//cart box
const iconShopping = document.querySelector(".iconShopping");
const cartCloseBtn = document.querySelector(".fa-close");

// iconShopping.addEventListener("click",function(){
//   cartBox.classList.add('active');
// });
// cartCloseBtn.addEventListener("click",function(){
//   cartBox.classList.remove('active');
// });

// adding data to local storage
const addToCartBtn = document.getElementsByClassName("office-tool-btn");
let items = [];
for (let c = 0; c < addToCartBtn.length; c++) {
  addToCartBtn[c].addEventListener("click", (e) => {
    e.preventDefault()
    if (typeof (Storage !== "undefined")) {
      let item = {
        id: c + 1,
        name: e.target.parentElement.children[0].textContent,
        price: e.target.parentElement.children[1].textContent,
        no: 1,
      };

      if (JSON.parse(localStorage.getItem("items")) === null) {
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
        console.log(item);
      } else {
        const localItems = JSON.parse(localStorage.getItem("items"));
        localItems.map((data) => {
          if (item.id == data.id) {
            item.no == data.no + 1;
          } else {
            items.push(data);
          }
        });
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
        window.location.reload();
      }
    } else {
      alert("storage is not working your browser");
    }
  });
  // adding data to localstorage

  // adding data to shopping cart
  const iconShoppingP = document.querySelector(".basket-count");
  let no = 0;

  JSON.parse(localStorage.getItem("items")).map((data) => {
    no = no + data.no;
  });
  iconShoppingP.innerHTML = no;

  // adding cartBox data in table
}

// addToCart
