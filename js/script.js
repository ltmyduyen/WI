// 1. CẤU HÌNH BỘ ĐẾM NGƯỢC THỜI GIAN (COUNTDOWN)
const weddingDate = new Date("2026-08-08T00:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    // Nếu đã qua thời gian đám cưới, gán toàn bộ về 0
    if (diff <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    // Tính toán Ngày, Giờ, Phút, Giây
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Hiển thị ra màn hình kèm định dạng thêm số 0 ở trước nếu số nhỏ hơn 10 (Ví dụ: 09, 05)
    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;
}

// Chạy khởi động đếm ngược ngay lập tức khi tải trang và lặp lại mỗi 1 giây
updateCountdown();
setInterval(updateCountdown, 1000);


// 2. QUẢN LÝ ĐỒNG BỘ HIỆU ỨNG MỞ CỔNG CƯỚI VÀ PHÁT NHẠC TỰ ĐỘNG
document.addEventListener("DOMContentLoaded", function() {
    const gate = document.querySelector(".wedding-gate");
    const gateBtn = document.querySelector(".gate-center-btn");
    
    // Lưu ý: Đổi id âm thanh từ "weddingAudio" (bản trước) thành "bgMusic" cho đồng bộ với nút âm thanh của bạn
    const bgMusic = document.getElementById("bgMusic"); 
    const musicBtn = document.getElementById("musicBtn");

    let isPlaying = false;

    // XỬ LÝ SỰ KIỆN: CLICK MỞ CỔNG THIỆP CƯỚI
    if (gateBtn && gate) {
        gateBtn.addEventListener("click", function(e) {
            e.preventDefault();
            
            // Mở hai cánh cửa và mở khóa cuộn trang
            gate.classList.add("open");
            document.body.style.overflow = "auto"; 

            // Kích hoạt phát nhạc nền ngay lập tức sau khi khách tương tác bấm nút
            if (bgMusic) {
                bgMusic.play().then(() => {
                    isPlaying = true;
                    // Nếu có nút điều khiển nhạc trên màn hình, kích hoạt xoay lấp lánh luôn
                    if (musicBtn) {
                        musicBtn.classList.add("playing");
                    }
                }).catch(error => {
                    console.log("Trình duyệt chặn phát nhạc tự động: ", error);
                });
            }
        });
    }

    // XỬ LÝ SỰ KIỆN: BẤM NÚT BẬT/TẮT NHẠC CHỦ ĐỘNG TRÊN MÀN HÌNH
    if (musicBtn && bgMusic) {
        musicBtn.addEventListener("click", function() {
            if (!isPlaying) {
                bgMusic.play();
                musicBtn.classList.add("playing");
                isPlaying = true;
            } else {
                bgMusic.pause();
                musicBtn.classList.remove("playing");
                isPlaying = false;
            }
        });
    }
});