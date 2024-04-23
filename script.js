// boyon Login

let boton = document.getElementById("botonLogin");

  function botonClick() {
    boton.textContent = "Logout";
    console.log("este mensaje proviene de script.js");
}



let addDefintion = document.getElementById("addDefintion");

addDefintion.addEventListener("click", function() {
  addDefintion.remove();
});


let like = document.getElementById("likes13");

like.addEventListener("click", function() {
  alert("Ninja was liked");
});
