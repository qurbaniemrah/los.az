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
// let items = []
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

// add to cart
const carts = document.querySelectorAll(".office-tool-item");
const addCartBtn = document.getElementsByClassName("office-tool-btn");
const emptyCard = document.querySelector(".empty-card");


class Shopping {
  constructor(image, title, price) {
    this.image = image;
    this.title = title;
    this.price = price;
  }
}



class UI {}
console.log(carts);
for (let i = 0; i < carts.length; i++) {
  addCartBtn[i].addEventListener("click", (e) => {
    let image = carts[i].getElementsByClassName("tool-image")[0].src;
    let title = carts[i].getElementsByClassName("tool-title")[0].textContent;
    let price = carts[i].getElementsByClassName("tool-price")[0].textContent;
    let shopping = new Shopping(image, title, price);

    
  
    localStorage.setItem('shopping', JSON.stringify(shopping));
    var data = localStorage.getItem('shopping');

    console.log(localStorage.length)
    

    localStorage.setItem('emptycard', JSON.stringify(emptyCard))
    localStorage.getItem('emptycard');
    
    // window.location.reload();
    emptyCard.innerHTML += `<div class="col-lg-3 col-md-6 col-sm-12">
    <div class="office-tool-item">
      <div class="office-tool-heading">
        <div class="cat-label cat-label-offer">Tövsiyə edilir</div>
        <div>
          <a class="wish-label" href="#">
            <img class="heart-simple" src="https://los.az/lucky/images/icon/heart-outline.svg" alt=""
              aria-label="add-to-wishlist" />
          </a>
          <a class="wish-label-deactive" href="#">
            <img class="heart-filled" src="./assets/public/yeni/heart-filled.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="office-tool-body">
        <a href="">
          <img class="tool-image" src="${shopping.image}" alt="" />
        </a>
      </div>
      <div class="office-tool-footer">
        <p class="tool-title">${shopping.title}</p>
        <p class="tool-price">${shopping.price}</p>
        <a class="office-tool-btn">Səbətə at</a>
      </div>
    </div>
    </div>`;
   
    e.preventDefault();
  });
}

var basketcount = localStorage.length;
$('.basket-count').text(basketcount);

// add to cart