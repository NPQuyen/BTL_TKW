
// Lấy các phần tử
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgPopup");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];

var images = document.getElementsByClassName("popup-img");

// Lặp qua tất cả các hình ảnh và gán sự kiện click
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block";           // Hiển thị popup
        modalImg.src = this.src;                 // Gán nguồn của popup image
        captionText.innerHTML = this.alt;        // Hiển thị chú thích
    }
}


// Khi người dùng click vào nút đóng (close)
span.onclick = function() { 
    modal.style.display = "none";           // Ẩn popup
}

// Khi người dùng click ra ngoài popup (bất kỳ nơi nào ngoài ảnh)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";       // Ẩn popup
    }
}



// Xử lý sự kiện khi form bình luận được gửi
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    // Lấy nội dung bình luận từ textarea
    let commentText = document.getElementById('comment').value;

    // Thêm bình luận vào phần hiển thị
    addComment(commentText);

    // Xóa nội dung trong textarea
    document.getElementById('comment').value = '';
});

// Hàm để thêm bình luận vào DOM
function addComment(comment) {
    // Tạo phần tử div mới cho bình luận
    let commentElement = document.createElement('div');
    commentElement.className = 'comment';
    // Thêm hình ảnh logo vào bình luận
    let imgElement = document.createElement('img');
    imgElement.src = 'images/commentlogo.png';
    imgElement.alt = 'User Icon';

    // Thêm phần nội dung bình luận
    let textElement = document.createElement('span');
    textElement.textContent = comment;

    // Đưa hình ảnh và nội dung vào phần tử bình luận
    commentElement.appendChild(imgElement);
    commentElement.appendChild(textElement);

    // Thêm bình luận vào phần hiển thị bình luận trên trang
    document.getElementById('comments').appendChild(commentElement);
}

// Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    
    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});
