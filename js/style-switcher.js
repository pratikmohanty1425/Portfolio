//toggle switcher

const styleswitchertogller = document.querySelector(".style-switcher-toggler");
styleswitchertogller.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style when scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

//themes color
const altstyl = document.querySelectorAll(".alternate-styles");

function setActiveStyle(color){
    localStorage.setItem("color",color);
    changecolor();
}
function changecolor(){
    altstyl.forEach((style) =>{
        if(localStorage.getItem("color") === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}

if(localStorage.getItem("color")!==null){
    changecolor();
}

//modes

const daynight = document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon");
    }
})
        
































