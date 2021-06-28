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

/*preloader sections*/

window.addEventListener("load",()=>{
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(()=>{
        document.querySelector(".preloader").style.display="none";
    },800)
})
   
/*popup sections*/

function bodyscrollingtoggle(){
    document.body.classList.toggle("stop-scrolling");
}

(()=>{
    const filtercontainer = document.querySelector(".portfolio-filter"),
          portfolioitemscontainer = document.querySelector(".portfolio-items"),
          portfolioitems = document.querySelectorAll(".portfolio-item"),
          popup = document.querySelector(".portfolio-popup"),
          pervbtn= popup.querySelector(".pp-perv"),
          nextbtn = popup.querySelector(".pp-next"),
          closebtn=popup.querySelector(".pp-close"),
          projectdetailscontainer = popup.querySelector(".pp-details"),
          projectdetailsbtn = popup.querySelector(".pp-project-details-btn");
          let itemindex, slideindex ,screenshots;
    
    filtercontainer.addEventListener("click", (event)=>{
        if(event.target.classList.contains("filter-item") &&  !event.target.classList.contains("active")){
            filtercontainer.querySelector(".active").classList.remove("outer-shadow","active");
            event.target.classList.add("active","outer-shadow");
            const target = event.target.getAttribute("data-target");
            portfolioitems.forEach((item)=>{
                if(target === item.getAttribute("data-category")|| target==='all'){
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
                else{
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
            })
        }
    })
    
    portfolioitemscontainer.addEventListener("click", (event)=>{
        if(event.target.closest(".portfolio-item-inner")){
            const portfolioitem = event.target.closest(".portfolio-item-inner").parentElement;
            itemindex = Array.from(portfolioitem.parentElement.children).indexOf(portfolioitem);
            screenshots = portfolioitems[itemindex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
            
            screenshots= screenshots.split(",");
            
            slideindex=0;
            popuptoggle();
            popslideshow();
            popupditails();
        }
    })
    
    closebtn.addEventListener("click",()=>{
        popuptoggle();
        projectdetailscontainer.classList.remove("active");
        projectdetailscontainer.style.maxHeight= 0+ "px"; projectdetailsbtn.querySelector("i").classList.remove("fa-minus");
            projectdetailsbtn.querySelector("i").classList.add("fa-plus");
    })
    
    function popuptoggle(){
        popup.classList.toggle("open");
        bodyscrollingtoggle();
    }
    
    function popslideshow(){
        const imgsrc = screenshots[slideindex];
        const popupimg = popup.querySelector(".pp-img");
        popup.querySelector(".pp-loader").classList.add("active");
        popupimg.src=imgsrc;
        popupimg.onload = ()=>{
            popup.querySelector(".pp-loader").classList.remove("active");
        }
        
        popup.querySelector(".pp-counter").innerHTML=(slideindex+1)+" of "+screenshots.length;
    }
    
    nextbtn.addEventListener("click",()=>{
        if(slideindex === screenshots.length-1){
            slideindex=0;
        }
        else{
            slideindex++;
        }
        popslideshow();
    })
    
    pervbtn.addEventListener("click",()=>{
        if(slideindex === 0){
            slideindex=screenshots.length-1;
        }
        else{
            slideindex--;
        }
        popslideshow();
    })
    
    function popupditails(){
        if(!portfolioitems[itemindex].querySelector(".portfolio-item-details")){
            projectdetailsbtn.style.display="none";
            return;
        }
        projectdetailsbtn.style.display="block";
        
        const details = portfolioitems[itemindex].querySelector(".portfolio-item-details").innerHTML;
        popup.querySelector(".pp-project-details").innerHTML=details;
        const title = portfolioitems[itemindex].querySelector(".portfolio-item-title").innerHTML;
        popup.querySelector(".pp-title h2").innerHTML=title;
        const category = portfolioitems[itemindex].querySelector(".portfolio-item-category").innerHTML;
        popup.querySelector(".pp-project-category").innerHTML=category;
    }
    
    projectdetailsbtn.addEventListener("click",()=>{
        popupditailstoggle();
    })
    
    function popupditailstoggle(){
        if(projectdetailscontainer.classList.contains("active")){
            projectdetailscontainer.classList.remove("active");
            projectdetailscontainer.style.maxHeight= 0+ "px"; projectdetailsbtn.querySelector("i").classList.remove("fa-minus");
            projectdetailsbtn.querySelector("i").classList.add("fa-plus");
        }
        else{
            projectdetailsbtn.querySelector("i").classList.remove("fa-plus");
            projectdetailsbtn.querySelector("i").classList.add("fa-minus");
            projectdetailscontainer.classList.add("active");
            projectdetailscontainer.style.maxHeight = projectdetailscontainer.scrollHeight + "px";
            popup.scrollTo(0,projectdetailscontainer.offsetTop);
        }
    }    
    
})();














































