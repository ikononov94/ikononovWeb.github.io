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
