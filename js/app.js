var mensajeTitulo = document.getElementById("mensajeTitulo");
var mensajeIngresado = document.getElementById("mensajeIngresado");
var botonPublicarMensaje = document.getElementById("mensajePublicar");
var mensajesPublicados = document.getElementById("mensajesPublicados");

botonPublicarMensaje.addEventListener("click", publicarMensaje);

function publicarMensaje() {
  var titulo = document.createElement("h4");
  var tituloIngresar = document.createTextNode(mensajeTitulo.value);
  var mensaje = document.createElement("p");
  var mensajeIngresar = document.createTextNode(mensajeIngresado.value);
  
  titulo.appendChild(tituloIngresar);
  mensajesPublicados.appendChild(titulo);
  titulo.style.color="pink";

  mensaje.appendChild(mensajeIngresar);
  mensajesPublicados.appendChild(mensaje);
  mensaje.style.color="grey";
}
