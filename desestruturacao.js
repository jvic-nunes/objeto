const pessoa = {
    nome: "jose",
    idade: 20,
    cidade: "salvador",
    profissao: "programador"
}

const pessoa1 = {
    vulgo: "jose",
    age: 20,
    city: "salvador",
    prof: "programador"
}
const {nome, idade, ...outros} = pessoa
//console.log(nome, idade, outros)
const fusao = {...pessoa, ...pessoa1, outro: "outro"}
console.log(fusao) 