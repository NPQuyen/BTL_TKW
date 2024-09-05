function showContent(target, event) {
    event.preventDefault();

    // Ẩn tất cả các phần tử nội dung
    document.getElementById('photography-tips-content').style.display = 'none';
    document.getElementById('gallery-content').style.display = 'none';
    document.getElementById(target + '-content').style.display = 'flex';
    // Loại bỏ lớp 'active' khỏi tất cả liên kết
    const links = document.querySelectorAll('a');
    links.forEach(link => link.classList.remove('active'));

    // Hiển thị nội dung liên quan đến mục được chọn và thêm lớp 'active'
    if (target === 'photography-tips') {
      document.getElementById('photography-tips-content').style.display = 'flex';
      
    } else if (target === 'gallery') {
      document.getElementById('gallery-content').style.display = 'flex';
      
    }
   
    // Thêm lớp 'active' cho liên kết đang được chọn

    const activeLink = document.querySelector(`a[data-target="${target}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  
  document.querySelector('.readmore-container').style.display = 'block';

  // Xóa lớp 'active' khi nhấp ra ngoài liên kết
  document.addEventListener('mousedown', (event) => {
    if (!event.target.closest('a'[data-target])) {
      const activeLinks = document.querySelectorAll('a.active');
      activeLinks.forEach(link => link.classList.remove('active'));

      document.querySelector('.readmore-container').style.display = 'none';
    }
  });
}
$(document).ready(function() {
  $('.content-gal a, .content a').click(function(event) {
    event.preventDefault();

    var href = $(this).attr('href');
    var $overlay = $('<div class="zoom-in"></div>');

    $overlay.css({
      'position': 'fixed',
      'top': 0,
      'left': 0,
      'width': '100%',
      'height': '100%',
      'background-color': 'white',
      'z-index': 9999,
      'transform-origin': 'center'
    });

    $('body').append($overlay);

    setTimeout(function() {
      $overlay.addClass('zoom-in-active');
    }, 10);

    setTimeout(function() {
      window.location.href = href;
    }, 500);
  });
});

$(document).ready(function() {
  $('a[href="#footer-content1"]').click(function(event) {
    event.preventDefault(); 

    var targetOffset = $('#footer-content1').offset().top;

    $('html, body').animate({
      scrollTop: targetOffset
    }, 800); 
  });
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
