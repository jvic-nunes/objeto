/* Abaixo, temos uma lista de pessoas que representa os participantes de uma festa. 
O Carlos se perdeu dos seus amigos e sua tarefa é encontrá-lo. O lugar onde o Carlos se encontra é representado
 pela posição do objeto que contém seu nome na lista. Quando encontrar o Carlos, caso ele esteja na posição 123, 
 deverá imprimir Galera... O Carlos está na posição 123, corre lá!.*/
const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" }
] 
for (let i = 0; i < participantes.length; i++){
    if (participantes[i].nome.toLowerCase() === "carlos"){
        console.log(`Carlos foi encontrado na posição ${i+1}`);
        break;
    }
    if (i === participantes.length){
        console.log("Carlos foi para outra dimensão");
    }
}

//Rapaziada, tenho uma notícia não tão boa...Perdemos o Carlos do RH. A partir de agora temos duas opções, podemos encontrá-lo, o que seria o certo a fazer, ou podemos simplesmente ignorar que o perdemos, o que por sua vez significaria mais bebida para cada um aqui. Nesse momento, o som que fora uma vez cortado com a tensão do chefe batendo em uma lata de cerveja, volta aos padrões usuais, quando uma unica alma diz em voz alta "FODA-SE o Carlos", nesse instante é instaurado um coro ensurdecedor, no qual todos fritam em unisono "ÉEEEEEEEEEEEE"....depois dessa linda história