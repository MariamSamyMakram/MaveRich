
var main = document.getElementById("main"),
    slidenav = document.getElementById("mySidenav"),
    circle = document.getElementsByClassName("circle");
    
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
slidenav.style.width = "0";
console.log(slidenav.style.width);

function openNav() {
    if(slidenav.style.width == "0px"){
      slidenav.style.width ="250px";
      slidenav.style.zIndex = "2";
      main.style.zIndex = "-1";
    }else{
      slidenav.style.width = "0";
      slidenav.style.zIndex = "0";
      main.style.zIndex = "1";
    }
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    slidenav.style.width = "0";
    slidenav.style.zIndex = "0";
    main.style.zIndex = "1";
  }

