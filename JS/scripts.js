// Main
window.addEventListener('load', function() {
    let btnSubmit = document.getElementById("submit");

    if (btnSubmit) {
        btnSubmit.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn chặn gửi form mặc định

            // Lấy giá trị tên đăng nhập và mật khẩu
            let inputUsername = document.getElementById('username').value;
            let inputPassword = document.getElementById('password').value;

            const user = JSON.parse(localStorage.getItem(inputUsername));

            // Kiểm tra thông tin đăng nhập
            if (user && inputUsername === user.username && inputPassword === user.password) {
                // Lưu thông tin đăng nhập vào localStorage
                localStorage.setItem('username', inputUsername);
                localStorage.setItem('password', inputPassword);

                // Chuyển hướng người dùng đến trang chủ
                window.location.replace('index.html');
            } else {
                let result = document.querySelector(".loginResult");
                result.innerHTML = '<span>Account does not exist!!!</span>';

                // Xóa các vùng nhập để người dùng nhập lại
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
                document.getElementById('username').focus();
            }
        });
    }

    let eye = document.getElementById("eye");

    if (eye) {
        eye.addEventListener('click', function() {
            let password = document.getElementById('password');
            // Thay đổi thành phần kiểu input (Nếu type là password thì đổi thành text và ngược lại)
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);

            // Thay đổi biểu tượng con mắt khi click vào
            eye.className = (eye.className === "fa-regular fa-eye") ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
        });
    }
});

// Sign up
const btnsignup = document.getElementById("signup-submit");
if (btnsignup) {
    btnsignup.addEventListener("click", function(event) {
        event.preventDefault();

        let inputUsername = document.getElementById("username").value;
        let inputPassword = document.getElementById("password").value;
        let inputConfirmPassword = document.getElementById("confirmpassword").value;

        if (inputUsername === "" || inputPassword === "") {
            alert("Please ensure this field is not empty!");
        } else {
            if (inputConfirmPassword === inputPassword) {
                // Tạo đối tượng thông tin người dùng
                const user = {
                    username: inputUsername,
                    password: inputPassword,
                };

                // Chuyển đối tượng người dùng thành chuỗi JSON và lưu vào localStorage
                const json = JSON.stringify(user);
                localStorage.setItem(inputUsername, json);

                alert("Sign up successful!");
                window.location.href = "login.html";
            } else {
                // Thông báo mật khẩu nhập lại không chính xác
                let result = document.querySelector(".signupResult");
                result.innerHTML = '<span>Please enter the correct password!</span>';

                // Xóa vùng nhập lại để người dùng nhập lại mật khẩu
                document.getElementById("confirmpassword").value = '';
                document.getElementById('confirmpassword').focus();
            }
        }
    });

    // Sự kiện cho biểu tượng con mắt ở trường confirm password
    let eyeConfirm = document.getElementById("eye-confirm");

    if (eyeConfirm) {
        eyeConfirm.addEventListener('click', function() {
            let confirmPassword = document.getElementById('confirmpassword');
            // Thay đổi kiểu input của confirm password
            const type = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmPassword.setAttribute('type', type);

            // Thay đổi biểu tượng con mắt khi click vào
            eyeConfirm.className = (eyeConfirm.className === "fa-regular fa-eye") ? "fa-regular fa-eye-slash" : "fa-regular fa-eye";
        });
    }
}

//Submit
window.addEventListener('load', function() {
    const btnsubmit = document.querySelector(".submit-button");
    const firstname = document.getElementsByClassName("first-name");
    const lastname= document.getElementById("last-name");
    const emailsubmit=document.getElementById("email-footer");
    const message=document.getElementById("message");

    if (btnsubmit) {
        btnsubmit.addEventListener("click", function(e) {
            e.preventDefault();
            if (firstname.value === ""||lastname.value===""||emailsubmit.value===""||message.value==="") {
                alert("Please fill in to submit");
            } else {
                alert("Thanks for submitting!");
            }
        });
    }
});
// Subscribe
window.addEventListener('load', function() {
    const btnsub = document.querySelector(".subscribe");
    const email = document.getElementById("email");

    if (btnsub) {
        btnsub.addEventListener("click", function(e) {
            e.preventDefault();
            if (email.value === "") {
                alert("Please enter email to register");
            } else {
                alert("Thanks for signing up!");
            }
        });
    }
});

// Log out
const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', function() {
        // Xóa thông tin người dùng khỏi localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');

        // Chuyển hướng người dùng về trang đăng nhập
        window.location.href = 'login.html';
    });
}

// Heart(hinh 1)
let isLiked = false;
    document.getElementById('heartButton').addEventListener('click', function() {
            let likeCount = document.getElementById('likeCount');
            let heartIcon=this.querySelector("#heartButton i");
            let currentCount = parseInt(likeCount.textContent);

            if (isLiked) {
                likeCount.textContent = currentCount - 1;
                heartIcon.classList.remove('liked');
                heartIcon.classList.add('unliked');
                isLiked = false;
            } else {
                likeCount.textContent = currentCount + 1;
                heartIcon.classList.add('liked');
                heartIcon.classList.remove('unliked');
                isLiked = true;
            }
        });
//Heart(hinh 2)
let isLiked2 = false;
    document.getElementById('heartButton2').addEventListener('click', function() {
            let likeCount2 = document.getElementById('likeCount2');
            let heartIcon2=this.querySelector("#heartButton2 i");
            let currentCount2 = parseInt(likeCount2.textContent);

            if (isLiked2) {
                likeCount2.textContent = currentCount2 - 1;
                heartIcon2.classList.remove('liked');
                heartIcon2.classList.add('unliked');
                isLiked2 = false;
            } else {
                likeCount2.textContent = currentCount2 + 1;
                heartIcon2.classList.add('liked');
                heartIcon2.classList.remove('unliked');
                isLiked2 = true;
            }
        });
        
// Blog - Share
const ellipsis = document.querySelector('.ellipsis');
if (ellipsis) {
    ellipsis.addEventListener('click', function() {
        const shareOptions = document.querySelector('.share-options');
        shareOptions.style.display = shareOptions.style.display === 'block' ? 'none' : 'block';
    });
}

// Blog - Zoom
const expandImage = document.querySelector('.expand-image');
if (expandImage) {
    expandImage.addEventListener('click', function() {
        const image = document.querySelector('.post-image img');
        if (image.style.width === '100%') {
            image.style.width = '416px';
        } else {
            image.style.width = '100%';
        }
    });
}
//contact
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


  
