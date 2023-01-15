// Animition for double-down"

let doubleDown = document.querySelector(".doubleDown")
let articles = document.querySelector(".articles")

doubleDown.addEventListener("click", function() {
    window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth"
    });

});







// Status Animaition With Number
let nums = document.querySelectorAll(".status .num")
let statusSection = document.querySelector(".status")
let started = false
window.onscroll = function() {
    if (window.scrollY >= statusSection.offsetTop - 100) {

        if (!started) {
            nums.forEach((num) => startCount(num))
        }
        started = true
    }
};

function startCount(e) {
    let goal = e.dataset.goal;
    let count = setInterval(() => {
        e.textContent++;
        if (e.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
};



// Evevnts Animition

let countdownDate = new Date("Dec 31, 2023 23:59:59").getTime()

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let diffDate = countdownDate - dateNow;

    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
    let secounds = Math.floor(diffDate % (1000 * 60) / (1000));

    // generate unite in html 
    document.querySelector(".days").innerHTML = days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
    document.querySelector(".secounds").innerHTML = secounds < 10 ? `0${secounds}` : secounds
    if (diffDate === 0) {
        clearInterval(counter)
    };
}, 1000);
// our Skills Animition
let sectionSkill = document.querySelector(".our-skills")
let spanProgress = document.querySelectorAll(".the-progress span")


window.addEventListener("scroll", function() {
    if (window.scrollY >= sectionSkill.offsetTop) {
        spanProgress.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };
});