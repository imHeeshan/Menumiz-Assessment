//collapse function
function openNav() {
  var collpase_section = document.getElementById("collapse-nav");
  if (collpase_section.style.display === "none"||collpase_section.style.display === "") {
    collpase_section.style.display = "flex";
  } else {
    collpase_section.style.display = "none";
  }
  }

  // when window resize collapse function trigger
  window.addEventListener('resize', function () {
  var collpase_section = document.getElementById("logo-section");
  var side_nav = document.getElementById("side-nav");
    if (collpase_section.classList.contains("isShow")||side_nav.classList.contains("isShow")) {
      collpase_section.classList.remove("isShow")
      side_nav.classList.remove("isShow")
    }
  });
  
  // select side nav

  document.addEventListener("DOMContentLoaded", function() {
    var side_nav = document.getElementById("side-nav");
    
    if (side_nav) {  
      var nav_lists = side_nav.getElementsByClassName("side-nav-list");
      
      for (var i = 0; i < nav_lists.length; i++) {
        nav_lists[i].addEventListener("click", function() {
          var current = document.getElementsByClassName("active");
          
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
          
          this.className += " active";
        });
      }
    } else {
      console.error("Element with id 'side' not found.");
    }
  });
  function is_toggle () {
    var top_logo_section = document.getElementById("logo-section");
    var collapse_button = document.getElementById("side-nav");
    top_logo_section.classList.toggle("isShow");
    collapse_button.classList.toggle("isShow");
    
  }