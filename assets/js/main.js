//collapse function
function openNav() {
  var collpase_section = document.getElementById("collapse-nav");
  if (collpase_section.style.display === "none"||collpase_section.style.display === "") {
    collpase_section.style.display = "flex";
  } else {
    collpase_section.style.display = "none";
  }
  }

  //when window resize collapse function trigger
  window.addEventListener('resize', function () {

  var collpase_section = document.getElementById("collapse-nav");
    if (window.innerWidth > 600 &&   collpase_section.style.display === "none") {
      collpase_section.style.display = "flex";
    }
  });
  