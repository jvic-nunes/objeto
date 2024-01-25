const cartao = {
    nome : "joão",
    idade : "23",
    produtos : [
        { 
            nome : "folha",
            preco : "420",
            quantidade: "1000g"
        },
        {   
            nome : "jarro",
            preco : "300",
            quantidade: "3"
        },
        { 
            nome : "pipe",
            preco : "4200",
            quantidade: "7"
        }
    ]
      
}
console.log(cartao.nome)
console.log(cartao.idade)
cartao.idade++
console.log(cartao.idade)
console.log(cartao.produtos[0].nome)
console.log(cartao.produtos[cartao.produtos.length - 1].preco)
console.log(`olá seu querido arrombado, ${cartao.nome}. Você está devendo a boca, favor pagar ${parseInt(cartao.produtos[0].preco).toFixed(2)} em sanidade!!`) 