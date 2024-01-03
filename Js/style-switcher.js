const styleSwitcherToogle = document.querySelector(".style-switcher-toogler");
styleSwitcherToogle.addEventListener('click', () => {
    document.querySelector(".style-switcher").classList.toggle("open");
    
})
window.addEventListener('scroll', () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    } 
})

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled")
        }
        else {
            style.setAttribute("disabled","true")
        }
    }); 
}
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.classList.toggle("light")
    dayNight.classList.toggle("dark")
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.classList.add("dark");
    }
    else {
        dayNight.classList.add("light");
    }
} )
