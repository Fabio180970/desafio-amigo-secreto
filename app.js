// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte el nombre valido");
        return;
    }
 
    amigos.push(nombreAmigo);

    actualizarLista();

    inputAmigo.value = "";
    inputAmigo.focus();
    
}

function actualizarLista() {
    const listaAmigosUl =document.getElementById("listaAmigos")
    listaAmigosUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    })
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega nombres primero.");
        return        
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigosSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigosSorteado}</li>`;
   
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo)
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
});