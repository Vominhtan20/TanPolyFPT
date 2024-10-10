function Slider() {
    const carouselSlides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const dotsSlide = document.querySelector('.dots-container');
    let currentSlide = 0;
  
    const activeDot = function (slide) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
    };
    activeDot(currentSlide);

    const changeSlide = function (slides) {
        carouselSlides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index - slides)}%)`));
    };
    changeSlide(currentSlide);

    btnNext.addEventListener('click', function () {
        currentSlide++; 
        if (carouselSlides.length - 1 < currentSlide) {
            currentSlide = 0;
        };
        changeSlide(currentSlide);
        activeDot(currentSlide);
});
    btnPrev.addEventListener('click', function () {
        currentSlide--;
        if (0 >= currentSlide) {
            currentSlide = 0;
        }; 
        changeSlide(currentSlide);
        activeDot(currentSlide);
    });

    dotsSlide.addEventListener('click', function (e) {
        if (e.target.classList.contains('dot')) {
            const slide = e.target.dataset.slide;
            changeSlide(slide);
            activeDot(slide);
        }
    });
  };
Slider();


  //dangnhap



//   giohang


function muangay(x){
    var cha = x.parentElement;// trỏ về div cha
    var hinh = cha.children[0].src; // hình
    var masp = cha.children[1].getAttribute('masp');
    var dongia = cha.children[2].getAttribute('dongia');
    var soluong = cha.children[3].value;
    var thanhtien = dongia * soluong;

    var thongtinsp = new Array(hinh,masp,dongia,soluong,thanhtien)
    console.log(thongtinsp)


     document.getElementById('giohang').innerHTML = 
    `  <table border="1">
            <tr>
<th>STT</th>
                <th>Hình</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th>Xóa</th>
            </tr>
            <tr>
                <td>1</td>
                <td> <img src="${hinh}" alt=""></td>
                <td>${masp}</td>
                <td>${soluong}</td>
                <td>${dongia}</td>
                <td>${soluong*dongia}</td>
                <td><button>Xóa</button></td>
            </tr>
            <tr>
                <td colspan="4">Tổng thành tiền</td>
                <td colspan="2">4444</td>
                <td colspan="1"><button>đặt hàng</button></td>
            </tr>
        </table>`


    console.log(soluong);
}

