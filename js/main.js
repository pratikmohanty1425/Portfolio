/*nav sections*/

(()=>{
    const hamburgerBtn = document.querySelector(".hamburger-btn"),
          navmenu = document.querySelector(".nav-menu"),
          colosenavbtn = navmenu.querySelector(".close-nav-menu");
    
    hamburgerBtn.addEventListener("click",showNavMenu);
    colosenavbtn.addEventListener("click",hideNavMenu);
    
    function showNavMenu(){
        navmenu.classList.add("open");
    }
    function hideNavMenu(){
        navmenu.classList.remove("open");
        fadeouteffect();
    }
    function fadeouteffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(()=>{
        document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }
    
    document.addEventListener("click",(event)=>{
        if(event.target.classList.contains('link-item')){
            if(event.target.hash !== ""){
                event.preventDefault();
                const hash = event.target.hash;
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");

                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");
                
                navmenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navmenu.querySelector(".active").classList.remove("active","inner-shadow");
                
                if(navmenu.classList.contains("open")){
                    event.target.classList.add("active","inner-shadow");
                    event.target.classList.remove("outer-shadow","hover-in-shadow");

                    hideNavMenu();
                }
                else{
                    let navitem = navmenu.querySelectorAll(".link-item");
                    navitem.forEach((item)=>{
                        if(hash===item.hash){
                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-in-shadow");
                        }
                    })
                    fadeouteffect();
                }
                window.location.hash=hash;
            }
        }
    })
    
})();

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

/*hide all sections*/
(()=>{
    const section = document.querySelectorAll(".section");
    section.forEach((section)=>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");
        }
    })
})();

window.addEventListener("load",()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".preloader").style.display="none";
    },800)
})
   













