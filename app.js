// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// declaracion de variables a utilizar

let amigo  = []; // definimos la variable que contendra los nombres.

// funcion que me permite añadir los nombres a la variable amigo
function agregarAmigo() {
  let  nombre=document.getElementById('amigo').value;

if (nombre!="") {
amigo.push(nombre);
document.getElementById('amigo').value="";

}else {
    alert("por favor, inserte un nombre");
}
console.log (amigo);
listarAmigos();
}

function listarAmigos() {
  let lista=document.getElementById('listaAmigos');
  
    lista.innerHTML= amigo;
  
}

