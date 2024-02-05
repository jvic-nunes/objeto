/* Crie um objeto com as propriedades a seguir e guarde numa variável/constante chamada endereco. 
Cada propriedade deve receber um valor apropriado.
rua
numero
complemento
bairro
cep
cidade
estado
pais
Crie um objeto com as propriedades a seguir e guarde numa variável/constante chamada usuario. 
Cada propriedade deve receber um valor apropriado.
nome
email
telefone
data_nascimento
endereco
Obs.: a propriedade endereco do objeto do usuario deverá receber, como valor, a variável endereco criada anteriormente.
As informações dos valores de cada propriedade do objeto poderão ser de sua preferência. */

const endereco = {
    rua: "caminho do tinhoso",
    numero:"666",
    complemento: "Ao lado da casa do Paganini",
    bairro: "Rio Lethe",
    cep: "40550070",
    cidade: "Rio de Janeiro", 
    estado: "Rio de Janeiro",
    pais: "Brasil" 
}

const usuario = {
    nome: "demo",
    email: "demonio666@gmail.com",
    telefone: "66666-6666",
    data_nascimento: "06/06/6666",
    endereco: endereco
}
console.log(usuario);