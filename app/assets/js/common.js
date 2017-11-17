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

  var modal = document.getElementById("myModal");
  var btnOpen = document.querySelectorAll('button[id="openModal"]');
  var closeModal = document.getElementById("close");

  for (var i = 0; i < btnOpen.length; i++) {
    btnOpen[i].onclick = function() {
      modal.style.display = "block";
      document.body.style.overflowY = "hidden"
    }
  }

  closeModal.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY = "auto"
  }

  window.onclick = function() {
    if(event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflowY = "auto"
    }
  }


  



var swiper = new Swiper('.swiper-container', {
      speed: 500,
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

     if (1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) {
    document.querySelector('a[href="#' + nav[i].id + '"]').classList.add('nav-blocks__menu-link_focused'); 
    }
    else {
    document.querySelector('a[href="#' + nav[i].id + '"]').classList.remove('nav-blocks__menu-link_focused');
    }

    if (1 >= nav[i].getBoundingClientRect().top && nav[i].getBoundingClientRect().top >= 1-nav[i].offsetHeight) {
    document.querySelector('a[id="pag-' + nav[i].id + '"]').classList.add('nav-pagination__link_active');
    }
    else {
      document.querySelector('a[id="pag-' + nav[i].id + '"]').classList.remove('nav-pagination__link_active');
    }
  }
}, false);

var burg = document.getElementById('nav-burg');
var hidmnu = document.getElementById('menu-hidden');  

burg.addEventListener('click', function() {
      
      hidmnu.classList.toggle('menu-hidden_active');

})

window.onresize = function () {
   hidmnu.classList.remove('menu-hidden_active');
};




    function showError(container, errorMessage) {
    container.className = 'form__input_error';
    var msgElem = document.createElement('span');
    msgElem.className = "form__input_error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "form__input_error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;
      var reg = /^\w{1,}@\w{1,}\.\w{2,}$/;
      var regPhone = /^(\+375)\d{9}$/;

      if(elems.name !== undefined) {
        resetError(elems.name.parentNode);
        if (!elems.name.value || elems.name.value == " ") {
          showError(elems.name.parentNode, ' Укажите Ваше Имя.');
        }
      }

      if(elems.email !== undefined) {
        resetError(elems.email.parentNode);
        if (!elems.email.value || elems.email.value == " ") {
          showError(elems.email.parentNode, ' Укажите E-mail.');
        } else if (!reg.test(elems.email.value)) {
          showError(elems.email.parentNode, ' Неверный E-mail.');
        }
      }

      if(elems.office !== undefined) {
        resetError(elems.office.parentNode);
        if (!elems.office.value || elems.office.value == " ") {
          showError(elems.office.parentNode, ' Укажите Вашу должность.');
        }
      }

      if(elems.review !== undefined) {
        resetError(elems.review.parentNode);
        if (!elems.review.value || elems.review.value == " ") {
          showError(elems.review.parentNode, ' Отсутствует текст.');
        }
      }

      if(elems.capcha !== undefined) {
        resetError(elems.capcha.parentNode);
        if (!elems.capcha.value || elems.capcha.value == " ") {
          showError(elems.capcha.parentNode, ' Введите код.');
        }
      }

      if(elems.phone !== undefined) {
        resetError(elems.phone.parentNode);
        if (!elems.phone.value || elems.phone.value == " ") {
          showError(elems.phone.parentNode, ' Укажите телефон.');
        } else if (!regPhone.test(elems.phone.value)) {
          showError(elems.phone.parentNode, ' Введите корректный номер');
        }
      }

    }

