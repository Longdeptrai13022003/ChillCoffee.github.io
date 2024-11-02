document.addEventListener('DOMContentLoaded', function() {
    const toggleFeedbackBtn = document.getElementById('toggleFeedbackBtn');
    const feedbackForm = document.getElementById('feedbackForm');
  
    toggleFeedbackBtn.addEventListener('click', function() {
      if (feedbackForm.style.display === "none") {
        feedbackForm.style.display = "block"; // Hiển thị form
        this.innerText = "Đóng Phản Hồi"; // Cập nhật nút
      } else {
        feedbackForm.style.display = "none"; // Ẩn form
        this.innerText = "Gửi Phản Hồi"; // Cập nhật nút
      }
    });
  });
  
//-----------------------------------------------------------------------------------------//



//burger menu

document.addEventListener('DOMContentLoaded', function () {
    const menu_btn = document.querySelector('.header__hamburger')
    const mobile_menu = document.querySelector('.mobile-header')
    const nav_items = document.querySelectorAll('.nav_item')

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active')
        mobile_menu.classList.toggle('is-active')
    })

    nav_items.forEach(function (nav_item) {
        nav_item.addEventListener('click', function () {
            menu_btn.classList.toggle('is-active')
            mobile_menu.classList.toggle('is-active')
        })
    })
})

//data for slider

const sliderData = [
    {
        title: 'Cappuccino',
        description:
            'Đồ uống mới này kết hợp espresso với đường nâu và quế, sau đó được phủ lên bằng sữa yến mạch.',
        price: '35,000đ',
        img_src: './assets/slider-img/coffee-slider-1.png',
    },
    {
        title: 'Caramel Macchiato',
        description:
            'Espresso cổ điển thơm ngon và độc đáo với siro caramel đậu phộng đậm đà, được phủ kem dưới lớp bọt đánh dày.',
        price: '35,000đ',
        img_src: './assets/slider-img/coffee-slider-2.png',
    },
    {
        title: 'Ice coffee',
        description:
            'Một thức uống mùa hè phổ biến giúp thanh lọc và tràn đầy sức sống. Được pha chế từ cà phê, sữa và đá.',
        price: '25,000đ',
        img_src: './assets/slider-img/coffee-slider-3.png',
    },
    {
        title: 'Ice tiramisu coffee',
        description:
            'Lấy cảm hứng từ món bánh tiramisu nổi tiếng, cà phê này được pha chế từ espresso mạnh mẽ, sữa béo, và lớp kem mascarpone mềm mịn.',
        price: '35,000đ',
        img_src: './assets/slider-img/coffee-slider-4.png',
    },
    {
        title: 'Matcha Latte',
        description:
            'Sự kết hợp giữa bột matcha tươi mát và cà phê espresso, hòa quyện với sữa nóng tạo bọt mềm mịn. Thức uống thanh thoát, mang lại nguồn năng lượng tuyệt vời.',
        price: '35,000đ',
        img_src: './assets/slider-img/coffee-slider-5.png',
    },
]

//slider
document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev-slide')
    const nextButton = document.querySelector('.next-slide')
    const progressDashes = document.querySelectorAll('progress')

    let slideIndex = 0
    let duration = 5000
    let intervalProgressID;

    prevButton &&
        prevButton.addEventListener('click', () => {
            clearInterval(intervalProgressID);
            let currentProgressDash = progressDashes[slideIndex]
            currentProgressDash.value = 0;
            updateSliderIndex(false)
            updateCurrentSlide()
        })

    nextButton &&
        nextButton.addEventListener('click', () => {
            clearInterval(intervalProgressID);
            let currentProgressDash = progressDashes[slideIndex]
            currentProgressDash.value = 0;
            updateSliderIndex(true)
            updateCurrentSlide()
        })

    function updateSliderIndex(direction) {
        direction || (slideIndex === 0 ? (slideIndex = 4) : slideIndex--)
        direction && (slideIndex === 4 ? (slideIndex = 0) : slideIndex++)
    }

    function updateSliderContent() {
        const sliderImg = document.querySelector('.slider_src')
        const sliderTitle = document.querySelector('.slider__title')
        const sliderDescription = document.querySelector('.slider__description')
        const sliderPrice = document.querySelector('.slider__subtitle')

        const currentSlide = sliderData[slideIndex]

        sliderImg.src = currentSlide.img_src
        sliderTitle.textContent = currentSlide.title
        sliderDescription.textContent = currentSlide.description
        sliderPrice.textContent = currentSlide.price
    }

    function fillSliderProgress(index) {
        let counterFillValue = 0
        let progressDuration = Math.floor(duration / 100)
        let currentProgressDash = progressDashes[index]

        if (intervalProgressID) {
            clearInterval(intervalProgressID)
        }

        intervalProgressID = setInterval(() => {
            if (counterFillValue >= 100) {
                clearInterval(intervalProgressID)
                counterFillValue = 0
                currentProgressDash.value = counterFillValue
                updateSliderIndex(true)
                updateCurrentSlide()
            }
            currentProgressDash.value = counterFillValue
            counterFillValue++
        }, progressDuration)
    }

    function updateCurrentSlide() {
        updateSliderContent()
        fillSliderProgress(slideIndex)
    }

    updateCurrentSlide()
})

//navigation from MenuPage to sections of home page

const favoriteButton = document.getElementById('favorite')
const aboutButton = document.getElementById('about')
const mobileAppButton = document.getElementById('mobile-app')

favoriteButton &&
    favoriteButton.addEventListener('click', function () {
        window.location.href = 'index.html#favorite-section'
    })

aboutButton &&
    aboutButton.addEventListener('click', function () {
        window.location.href = 'index.html#about-section'
    })

mobileAppButton &&
    mobileAppButton.addEventListener('click', function () {
        window.location.href = 'index.html#mobile-app-section'
    })
