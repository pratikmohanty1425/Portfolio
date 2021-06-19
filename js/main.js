/*about section tabs*/
(()=>{
    const aboutsection = document.querySelector(".about-section");
    tabsContainer = document.querySelector(".about-tabs");
    
    tabsContainer.addEventListener("click",  (event) =>{
        /*if event.target contains tab-item class and not contains active class*/
        if(event.target.classList.contains("tab-items") && ! event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow");
             aboutsection.querySelector(".tab-content.active").classList.remove("active");
            aboutsection.querySelector(target).classList.add("active");
        }
    })
})();