// hamburger
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-icon')
  const przelaczHamburger = function() {
    hamburger.classList.toggle('hamburger-open');
  }
  hamburger.addEventListener('click', przelaczHamburger)
})

// menu z hamburgera
document.addEventListener('DOMContentLoaded',function() {
  const hamburgerMenu = document.querySelector('.hamburger-icon');
  const label = document.querySelector('.borba_topbar_menu-lista');

  const Message = function(){
    label.classList.toggle('open');
    // tu przyjmuje klase open okreslona w css
  }
  hamburgerMenu.addEventListener('click', Message)
})


// zmiana rozmiaru menu przy scrollu
const menu = function() {
   if(window.pageYOffset > 50) {
     document.querySelector('.borba_topbar').classList.add('borba_topbar-scroll');
   } else {
     document.querySelector('.borba_topbar').classList.remove('borba_topbar-scroll')
    }
 }
 document.addEventListener('scroll', () => menu())




   //gładkie przewijanie

   $(document).ready(function() {
     $('a[href^="#"]').on('click', function(event) {
       var target = $($(this).attr('href'));
       if (target.length) {
         event.preventDefault();
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 1000);
       }
     });
   });
   //koniec gładkiego przewijania









if ([])
{console.log('foo');}
else {console.log('bar');}
