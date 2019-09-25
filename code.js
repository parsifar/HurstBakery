// defining slider
let i = 0
let images = []
let sliderImg = document.getElementById("slider-image")
images[0] = './images/santa-cookies.jpg'
images[1] = './images/christmas-cookies.jpg'
images[2] = './images/ice-cream-sandwiches.jpg'
images[3] = './images/cookies-and-almond.jpg'
sliderImg.src = './images/ice-cream-sandwiches.jpg'

function changeImg() {
    sliderImg.src = images[i]
    i++
    if (i > images.length - 1) {
        i = 0
    }
    setTimeout(changeImg, 3000)
}
window.onload = changeImg;
