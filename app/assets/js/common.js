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
var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 0.4;
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].onclick = function(){
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1'),
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start;
      var r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t))

      window.scrollTo(0,r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } 
        else {
        location.hash = hash;
      }
    }
    return false;
  }
}

window.addEventListener('scroll', function(e) {
  var nav = document.querySelectorAll('section[id^="nav"]');
  for (var i = 0; i < nav.length; i++) { 
    document.querySelector('a[href="#' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) ? 'focused' : '');
    document.querySelector('a[id="pag-' + nav[i].id + '"]').className=((1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) ? 'pag-active' : '');
  }
}, false);

var burg = document.getElementById('nav__burg');
var hidmnu = document.getElementById('hidmnu');  

burg.addEventListener('click', function() {
      hidmnu.classList.toggle('hidmnu-active');

})




    function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;
      var reg = /^\w{1,}@\w{1,}\.\w{2,}$/;

      resetError(elems.name.parentNode);
      if (!elems.name.value || elems.name.value == " ") {
        showError(elems.name.parentNode, ' Укажите Ваше Имя.');
      }
      resetError(elems.email.parentNode);

      if (!elems.email.value || elems.email.value == " ") {
        showError(elems.email.parentNode, ' Укажите E-mail.');
      } else if (!reg.test(elems.email.value)) {
        showError(elems.email.parentNode, ' Не верный E-mail.');
      }

      resetError(elems.office.parentNode);
      if (!elems.office.value || elems.office.value == " ") {
        showError(elems.office.parentNode, ' Укажите Вашу должность.');
      }

      resetError(elems.review.parentNode);
      if (!elems.review.value || elems.review.value == " ") {
        showError(elems.review.parentNode, ' Отсутствует текст.');
      }

      resetError(elems.capcha.parentNode);
      if (!elems.capcha.value || elems.capcha.value == " ") {
        showError(elems.capcha.parentNode, ' Введите код.');
      }

    }

