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

// funcion para mostrar nombre de amigos en lista
function listarAmigos() {
  let lista=document.getElementById('listaAmigos');
  lista.innerHTML='';
  for (i=0; i<amigo.length; i++) {
    lista.innerHTML= `
    <li>${amigo}</li>
    `
  }
  
}

// funcion para sortear amigos segun la cantidad de amigos
function sortearAmigo() {
  if (amigo.length>0) {
    let resultado= document.getElementById('resultado');
    let indiceAmigo= Math.floor(Math.random()*amigo.length);
    console.log(indiceAmigo);
    resultado.innerHTML='';
    resultado.innerHTML= `El amigo sorteado es: ${amigo[indiceAmigo]}`;

  } else {
    alert("aun no hay nombre para sortear");
  }
}
