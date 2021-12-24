


//Global Hero Carousel Start
var heroCarousel = new Swiper('.global_hero_carousal', {
  autoplay: true,  
  loop: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
});
//Global Hero Carousel End

//My account Tabs Swiper
var swiper = new Swiper(".myacTabsSwiper", {
  slidesPerView: "auto",
  spaceBetween: 10,  
  freeMode: true,
  
  breakpoints: {
    568: {
      spaceBetween:10,
      slidesPerView: "auto",
    },
    767.98: {
      spaceBetween: 10,
      slidesPerView: "auto",
    },
    991.98: {
      spaceBetween:10,      
      slidesPerView: "auto",
    },
    1199.98: {
      spaceBetween:10,
      slidesPerView: "auto",
    },
  },

});

if ($('.myacTabsSwiper .swiper-slide').length == 1) {
  $('.myacTabsSwiper .swiper-wrapper').addClass('justify-content-center');
} else if ($('.myacTabsSwiper .swiper-slide').length == 2) {
  $('.myacTabsSwiper .swiper-wrapper').addClass('justify-content-center');
} 
if ($('.myacTabsSwiper .swiper-slide').length > 7) {
  $('.myacTabsSwiper .swiper-wrapper').addClass('justify-content-start');
}






//My account Tabs Swiper
var swiper = new Swiper(".shamel-tabs-swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,  
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  
  breakpoints: {
    568: {
      spaceBetween:10,
      slidesPerView: "auto",
    },
    767.98: {
      spaceBetween: 10,
      slidesPerView: "auto",
    },
    991.98: {
      spaceBetween:10,      
      slidesPerView: "auto",
    },
    1199.98: {
      spaceBetween:10,
      slidesPerView: "auto",
    },
  },

});
if ($('.shamel-tabs-swiper .swiper-slide').length == 1) {
  $('.shamel-tabs-swiper .swiper-wrapper').addClass('justify-content-center');
} else if ($('.shamel-tabs-swiper .swiper-slide').length == 2) {
  $('.shamel-tabs-swiper .swiper-wrapper').addClass('justify-content-center');
} 
if ($('.shamel-tabs-swiper .swiper-slide').length > 5) {
  $('.shamel-tabs-swiper .swiper-wrapper').addClass('slides-center');
}

if ($('.shamel-tabs-swiper .swiper-slide').length > 6) {
  $('.shamel-tabs-swiper .swiper-wrapper').addClass('justify-content-start');
}









//My account Tabs Swiper
var swiper = new Swiper(".faq-tabs-swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,  
  freeMode: true,
  
  breakpoints: {
    568: {
      spaceBetween:10,
      slidesPerView: "auto",
    },
    767.98: {
      spaceBetween: 10,
      slidesPerView: "auto",
    },
    991.98: {
      spaceBetween:10,      
      slidesPerView: "auto",
    },
    1199.98: {
      spaceBetween:10,
      slidesPerView: "auto",
    },
  },

});
if ($('.faq-tabs-swiper .swiper-slide').length == 1) {
  $('.faq-tabs-swiper .swiper-wrapper').addClass('justify-content-center');
} else if ($('.faq-tabs-swiper .swiper-slide').length == 2) {
  $('.faq-tabs-swiper .swiper-wrapper').addClass('justify-content-center');
} 
if ($('.faq-tabs-swiper .swiper-slide').length > 7) {
  $('.faq-tabs-swiper .swiper-wrapper').addClass('justify-content-start');
}


  var swiper = new Swiper(".products-swiper-01,.products-swiper-03", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      568: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween:10,
      },
      767.98: {
        slidesPerGroup: 3,
        slidesPerView:3,
        spaceBetween: 10,
      },
      991.98: {
        slidesPerView:3,
        spaceBetween:10,
      },
      1199.98: {
        slidesPerGroup: 4,
        slidesPerView:4,
        spaceBetween:10,
      },
      1399.98: {
        slidesPerView:4,
        spaceBetween:10,
      },
    },
  });

  var swiper = new Swiper(".products-swiper-04", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      568: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween:10,
      },
      767.98: {
        slidesPerView:3,
        spaceBetween: 10,
      },
      1199.98: {
        slidesPerView:4,
        spaceBetween:10,
      },
    },
  });



  if ($('.products-swiper-04 .swiper-slide').length == 1) {
    $('.products-swiper-04').addClass('slides-count1');
} else if ($('.products-swiper-04 .swiper-slide').length == 2) {
    $('.products-swiper-04').addClass('slides-count2');
} else if ($('.products-swiper-04 .swiper-slide').length == 3) {
    $('.products-swiper-04').addClass('slides-count3');
}  else if ($('.products-swiper-04 .swiper-slide').length == 4) {
    $('.products-swiper-04').addClass('slides-count4');
}


var swiper = new Swiper(".benifits-swiper-3col", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    575.98: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767.98: {
      slidesPerView:3,
      spaceBetween: 20,
    },
    991.98: {
      slidesPerView:3,
      spaceBetween:20,
    },
    1199.98: {
      slidesPerView:3,
      spaceBetween:20,
    },
    1399.98: {
      slidesPerView:3,
      spaceBetween:20,
    },
  },
});



var swiper = new Swiper(".packages-swiper-3col", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    567.98: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767.98: {
      slidesPerView:2,
      spaceBetween: 20,
    },
    991.98: {
      slidesPerView:3,
      spaceBetween:20,
    },
    1199.98: {
      slidesPerView:3,
      spaceBetween:20,
    },
    1399.98: {
      slidesPerView:3,
      spaceBetween:20,
    },
  },
});



var swiper = new Swiper(".benifits-swiper-4col", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    575.98: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    767.98: {
      slidesPerView:3,
      spaceBetween: 20,
    },
    991.98: {
      slidesPerView:4,
      spaceBetween:20,
    },
    1199.98: {
      slidesPerView:4,
      spaceBetween:20,
    },
    1399.98: {
      slidesPerView:4,
      spaceBetween:20,
    },
  },
});


if ($('.benifits-swiper-4col .swiper-slide').length == 1) {
  $('.benifits-swiper-4col').addClass('slides-count1');
} else if ($('.benifits-swiper-4col .swiper-slide').length == 2) {
  $('.benifits-swiper-4col').addClass('slides-count2');
} else if ($('.benifits-swiper-4col .swiper-slide').length == 3) {
  $('.benifits-swiper-4col').addClass('slides-count3');
}  else if ($('.benifits-swiper-4col .swiper-slide').length == 4) {
  $('.benifits-swiper-4col').addClass('slides-count4');
}




/* <!-- 
Initialize Swiper - My account - plans
--> */
  var swiper = new Swiper(".plan-status-swiper", {
    slidesPerView:1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      374.98: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      575.98: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767.98: {
        slidesPerView:2,
        spaceBetween: 0,
      },
      991.98: {
        slidesPerView:2,
        spaceBetween:20,
      },
      1199.98: {
        slidesPerView:3,
        spaceBetween:0,
      },
    },
    
  });

 if ($('.plan-status-swiper .swiper-slide').length == 1) {
    $('.plan-status-swiper').addClass('slides-count1');
} else if ($('.plan-status-swiper .swiper-slide').length == 2) {
    $('.plan-status-swiper').addClass('slides-count2');
} 
 
// responsive: footer menu script
$(document).on('click', '.mini-sitemap .col h4', function () {
  var $t = $(this), $cols = $t.parent().siblings();

  $cols.removeClass('active');
  $t.parent().toggleClass('active');
  return false;
});


// Animations script initiation

/* 
AOS.init();

 */
AOS.init({
  // Global settings:
 

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 0, // offset (in px) from the original trigger point
});



//Scroll to top starts


$(document).ready(function () {
    // Back TO TOP Start Here
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          $('#back-to-top').fadeIn();
      } else {
          $('#back-to-top').fadeOut();
      }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
      $('#back-to-top').tooltip('hide');
      $('body,html').animate({
          scrollTop: 0
      }, 800);
      return false;
  });

  $('#back-to-top').tooltip('show');

});
//Drill Down On click


/* Shamel home fixed Menu Script */
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.shamel-tabs-swiper-cont').addClass('active-fixed');
     /* $('#list-item-1,#list-item-2,#list-item-3,#list-item-4,#list-item-5,#list-item-6').addClass('mt-90'); */
  } else {
     $('.shamel-tabs-swiper-cont').removeClass('active-fixed');
     /* $('#list-item-1,#list-item-2,#list-item-3,#list-item-4,#list-item-5,#list-item-6').removeClass('mt-90'); */
  }
});
/* Shamel home fixed Menu Script */


var myModal = new bootstrap.Modal(document.getElementById('promoModal'), {
  keyboard: false
})

var nsubscription = new bootstrap.Modal(document.getElementById('nsubscription'), {
  keyboard: false
})

myModal.show();
nsubscription.show();


