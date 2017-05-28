var mensajeTitulo = document.getElementById("mensajeTitulo");
var mensajeIngresado = document.getElementById("mensajeIngresado");
var botonPublicarMensaje = document.getElementById("mensajePublicar");
var mensajesPublicados = document.getElementById("publicados");
var botonPublicarImagen=document.getElementById("publicarImagen");
var imagenTitulo=document.getElementById("imagenTitulo");
var imagen=document.getElementById("imagenArchivo");

botonPublicarMensaje.addEventListener("click", publicarMensaje);
botonPublicarImagen.addEventListener("click", validaCargaDeArchivos);

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

/*carga de archivos*/
function validaCargaDeArchivos(){
  /*la condicional verifica si tu navegador acepta la carga de archivos*/
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    ingresarImagen();
  }

  else {
    alert('Tu navegador NO soporta la carga de archivos');
  }
}


function ingresarImagen(){
  var titulo = document.createElement("h4");
  var tituloIngresar = document.createTextNode(imagenTitulo.value);
  var imagenContenedor = document.createElement("div");
  var imagenParaIngresar=imagen.value;
  titulo.appendChild(tituloIngresar);
  mensajesPublicados.appendChild(titulo);
  titulo.style.color="pink";

  imagenContenedor.innerHTML=imagenParaIngresar;
  mensajesPublicados.appendChild(imagenContenedor);
}
