let $ = document
let navbarFormSearch = $.querySelector(".navbar__search-form")
let navbarBtnSearch = $.querySelector(".navbar__search-btn")
let navbarBtnSearchType
let sliderImage = $.querySelector(".slider__image")
let sliderPrevBtn = $.querySelector(".slider__previous-btn")
let sliderNextBtn = $.querySelector(".slider__next-btn")
let srcSliderImages = [
    "img/slider_images/1.jpg",
    "img/slider_images/2.jpg",
    "img/slider_images/3.jpg",
    "img/slider_images/4.jpg"
]
let currentImageIndex = 0
let hamburgerBtn = $.querySelector(".navbar-hamburger__btn")
let hamburgerMenu = $.querySelector(".navbar__items-mobile")
let hamburgerCheckBox = $.querySelector(".navbar-hamburger__radio-btn")
let rightPositionHamburgerMenu

// ----------------- Hamburger Menu ------------------------

hamburgerBtn.addEventListener('click',function(event) {
    if(hamburgerCheckBox.checked){
        hamburgerMenu.style.right = "-23%"
    }else{
        hamburgerMenu.style.right = "0px"
    }
})



//---------------------- Search Box ---------------------

navbarBtnSearch.addEventListener("click",(event)=>{
    navbarBtnSearchType = navbarBtnSearch.getAttribute("type")
    if (navbarBtnSearchType === "button") {
        event.preventDefault()
        navbarFormSearch.style.width = "23rem"
        navbarBtnSearch.setAttribute("type","submit")
        event.defaultPrevented()
    }else{
        navbarFormSearch.submit()
    }
})


// ----------- Slider -------------------------------


function nextImageSlider() {
    currentImageIndex++;
    if(currentImageIndex >= srcSliderImages.length){
        currentImageIndex = 0
    }
    sliderImage.setAttribute("src", srcSliderImages[currentImageIndex])
}

function prevImageSlider() {
    currentImageIndex--;
    if(currentImageIndex < 0){
        currentImageIndex = srcSliderImages.length-1
    }
    sliderImage.setAttribute("src", srcSliderImages[currentImageIndex])
}

setInterval(nextImageSlider,5000)

sliderNextBtn.addEventListener("click",nextImageSlider)
sliderPrevBtn.addEventListener("click",prevImageSlider)