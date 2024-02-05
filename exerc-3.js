/* Crie uma lista de objetos com as propriedades abaixo e guarde numa variável/constante chamada carros.

marca
modelo
ano
cor
quantidade_portas
automatico
Obs.: a propriedade automatico deve receber um valor booleano que indicará se o carro é automático ou não.

Cada propriedade de um objeto deve receber um valor apropriado
As informações dos valores de cada propriedade, de cada objeto poderá ser de sua preferência. 
Crie, no mínimo 3 itens na lista */

const carros = {
    nome: "Relâmpago McQueen",
    marca: "Chevrolet Corvette C6(com uma mistura de elementos do C1)",
    modelo: "sexta geração",
    ano: "2022",
    cor: "vermelho com relámpagos amarelos",
    quantidadePortas: "2",
    automatico: true
};
//const {nome, marca, ...outros} = carros
console.log(carros);