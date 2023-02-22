function MenuBarFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      return x.className += " responsive";
    } else {
     return x.className = "topnav";
    }
  }