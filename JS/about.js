$(document).ready(function() {
    $('a[href="#footer-content1"]').click(function(event) {
      event.preventDefault(); 
  
      var targetOffset = $('#footer-content1').offset().top;
  
      $('html, body').animate({
        scrollTop: targetOffset
      }, 800); 
    });
  });

window.addEventListener('scroll', function() {
    var scroll = window.scrollY; 
    var img = document.querySelector('.ads img');
  
    img.style.width = (100 + scroll / 5) + '%'; 
});
  
let hasExpanded = false;
  
window.addEventListener('scroll', function() {
      const container = document.querySelector('.image-container');
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
  
      const isCentered = rect.top < windowHeight / 4 && rect.bottom > windowHeight / 2;
  
      if (isCentered && !hasExpanded) {
          container.classList.add('expanded');
          hasExpanded = true; 
      } else if (!isCentered && hasExpanded) {
          container.classList.remove('expanded');
          hasExpanded = false; 
      }
  });
  
  $(document).ready(function() {
    $('.menu a').click(function(event) {
      var href = $(this).attr('href');
      
      if (href !== '#footer-content1') {
        event.preventDefault();
  
        var $overlay = $('<div class="slide-right"></div>'); //tao overlay
        $('body').append($overlay); //them overlay
  
        setTimeout(function() {
          $overlay.addClass('slide-right-active'); //kich hoat
        }, 10);
  
        setTimeout(function() {
          window.location.href = href;
        }, 300);
      }
    });
  });
  // Mobile
  document.addEventListener('DOMContentLoaded', function() {
      const menuIcon = document.querySelector('.menu-icon');
      const menu = document.querySelector('.menu');
      
      menuIcon.addEventListener('click', function() {
          menu.classList.toggle('open');
      });
  });