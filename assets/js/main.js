let navtoggler = document.querySelector(".nav-toggler");
let navlinks = document.querySelectorAll(".header--menus>li>a");




navtoggler.addEventListener("click", changeMenuState);

function changeMenuState() {
    let headerMenu = document.querySelector("ul.header--menus");
    let navIcon = document.querySelectorAll(".navIcon");
 
     // show menu
      headerMenu.classList.toggle("show");
 
      navIcon.forEach((icon) => {
         icon.classList.toggle("hidden");
     });
}


function setMenuActive() {
   let sections = document.querySelectorAll("section"); 
 

   window.addEventListener("scroll",()=> {
    let current = "";
    sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 4) {
            current = section.getAttribute("id");
           
        }
    });


    navlinks.forEach((li) => {
        li.classList.remove("active");
        if (current == li.getAttribute("href").split ("#")[1]) {
            li.classList.add("active");
        }
    });
   });
}

function onMenuClick() {
    console.log(navlinks);
    for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].addEventListener("click", changeMenuState);
    }
}

setMenuActive();
onMenuClick(); 