/* Dado o objeto usuario abaixo, monte a mensagem Olá... Eu sou João e tenho 25 anos de idade. 
Sou programador e minha cor preferida é verde!, passando dinamicamente as informações contidas no objeto.

Dica: a desestruturação pode facilitar a escrita do código, além de torná-lo mais legível. */

const objeto = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    corPreferida: "verde"
}
const {nome, idade, profissao, corPreferida} = objeto
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, minha profissão é ${profissao}, e minha cor preferida é ${corPreferida}`);
