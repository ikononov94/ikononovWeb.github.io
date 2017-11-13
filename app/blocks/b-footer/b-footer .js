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
  var btnOpen = document.getElementById("openModal");
  var closeModal = document.getElementById("close");

  btnOpen.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflowY = "hidden"
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


  
