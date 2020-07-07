function responsiveNav() {
  var navigation = document.getElementById("websiteNavigation");
  var hamburger = document.getElementById("hamburger");
  navigation.classList.toggle("expanded");
  hamburger.classList.toggle("active");
}

function clickedNavLink() {
  var navigation = document.getElementById("websiteNavigation");
  var hamburger = document.getElementById("hamburger");
  navigation.classList.remove("expanded");
  hamburger.classList.remove("active");
}