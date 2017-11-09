  'use strict';

  var upBtn = document.getElementById('btn-toTop');
  upBtn.style.display = "none";

  function trackScroll() {
    var scrolled = window.pageYOffset;

    if (scrolled > 200) {
      upBtn.style.display = "block";
    }
    else
      upBtn.style.display = "none";
    }
  }

  function backToTop() {
      (function goTop() {

        if (window.pageYOffset !== 0) {
          window.scrollBy(0, -60);
          setTimeout(goTop, 2);
        } else {
          upBtn.style.display = "none"
        }
      })();
  }

  window.addEventListener('scroll', trackScroll);
  upBtn.addEventListener('click', backToTop);



var swiper = new Swiper('.swiper-container', {
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true',
  },
    });
  var main = document.getElementById('scrollMain');
  var jobs = document.getElementById('scrollJobs');

  function scrollToMain() {
      (function goMain() {
        if(window.pageYOffset !== 0) {
          window.scrollBy(0, -60);
          setTimeout(goMain, 2);
        }
      })();
  }


  main.addEventListener('click', scrollToMain);
  jobs.addEventListener('click', scrollToJobs);

