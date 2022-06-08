// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let N = 9;
let entradas = "Ataque Pedra Pedra Ataque Pedra Papel Papel Pedra Ataque Papel Papel Ataque Papel Papel Pedra Pedra Ataque Ataque"
entradas = entradas.split(" ")

console.log(entradas)

for(let i = 0; i < entradas.length - 1; i = i+2){
    jogador1 = entradas[i];
    jogador2 = entradas[i+1];
    if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE"){
        console.log("Aniquilacao mutua");
      }else if((jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL")){
        console.log("Ambos venceram"); 
      }else if((jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PEDRA") || (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PAPEL") || (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PAPEL")){
        console.log("Jogador 1 venceu");
      }else if((jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "ATAQUE") || (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "ATAQUE") || (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PEDRA")){
        console.log("Jogador 2 venceu");
      }else if(jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PEDRA"){
        console.log("Sem ganhador");
      }
}
/*
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
    jogador1 = gets();
    jogador2 = gets();
    		
//TODO: Complete os espaços em branco com uma possível solução para o desafio

    if(jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE"){
      print("Aniquilacao mutua");
    }else if((jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PAPEL")){
      print("Ambos venceram"); 
    }else if((jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PEDRA") || (jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PAPEL") || (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "PAPEL")){
      print("Jogador 1 venceu");
    }else if((jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "ATAQUE") || (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "ATAQUE") || (jogador1.toUpperCase() === "PAPEL" && jogador2.toUpperCase() === "PEDRA")){
      print("Jogador 2 venceu");
    }else if(jogador1.toUpperCase() === "PEDRA" && jogador2.toUpperCase() === "PEDRA"){
      print("Sem ganhador");
    }
}
*/