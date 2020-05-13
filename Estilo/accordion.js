var acc = document.getElementsByClassName("estudiosBoton2");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   this.classList.toggle("active");
    var estudiosDescripcion = this.nextElementSibling;
   if (estudiosDescripcion.style.maxHeight) {
       estudiosDescripcion.style.maxHeight = null;
   } else {
        estudiosDescripcion.style.maxHeight = estudiosDescripcion.scrollHeight + "px";
    }
  });
}

var acc = document.getElementsByClassName("estudiosBoton1");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   this.classList.toggle("active");
    var estudiosDescripcion = this.nextElementSibling;
   if (estudiosDescripcion.style.maxHeight) {
       estudiosDescripcion.style.maxHeight = null;
   } else {
        estudiosDescripcion.style.maxHeight = estudiosDescripcion.scrollHeight + "px";
    }
  });
}
