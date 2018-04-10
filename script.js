// document.addEventListener('DOMContentLoaded',function() {
//   let menu = document.querySelector('.borba_topbar');
//
//   let change = function(){
//     menu.classList.toggle('borba_topbar-scroll');
//     // tu przyjmuje klase open okreslona w css
//   }
//   menu.addEventListener('scroll', change)
// })

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
