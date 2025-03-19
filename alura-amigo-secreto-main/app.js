//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let names = []


function limparCampo(){
    let nome = document.querySelector('input')
    nome.value = ""
}


function adicionarAmigo(){
    
    let nome = document.querySelector('input').value
    if(nome.trim() !== ""){
        names.push(nome)
        
        let listaAmigos = document.getElementById('listaAmigos')
        let lista = criarLista('li', nome)
        listaAmigos.appendChild(lista)


        limparCampo()
    }
}

function sortearAmigo(){
    if(names.length > 0){
        let indiceAleatorio = Math.floor(Math.random() * names.length)
        let nomeAleatorio = names[indiceAleatorio]
        
        
        let resultado = document.getElementById('resultado')
        let listaSorteadaDeNomes = criarLista('li', nomeAleatorio)
        resultado.appendChild(listaSorteadaDeNomes)

        names.splice(indiceAleatorio, 1)
    }

}

function criarLista(tag, nome){
    let lista = document.createElement(tag)
    lista.textContent = nome
    return lista
}
