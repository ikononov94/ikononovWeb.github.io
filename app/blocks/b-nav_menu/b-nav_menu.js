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

var burg = document.getElementById('nav-burg');
var hidmnu = document.getElementById('menu-hidden');  

burg.addEventListener('click', function() {
      
      hidmnu.classList.toggle('menu-hidden_active');

})

window.onresize = function () {
   hidmnu.classList.remove('menu-hidden_active');
};



