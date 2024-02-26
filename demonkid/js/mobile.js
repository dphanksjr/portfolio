 if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
  document.getElementById("header-nav").style.display = "none";
  document.getElementById("logo").style.display = "none";
  document.getElementById("mobile").style.display = "block";
  document.getElementById("mobileNav").style.display = "block";

}else{
  // false for not mobile device
  false;
}


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }