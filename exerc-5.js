//Dado a lista de objetos abaixo, adicione uma nova propriedade chamada maior_idade para cada objeto da lista. 
//A propriedade deverá receber um valor booleano de acordo com a propriedade idade de cada objeto. Caso a idade seja maior que 17, 
//o valor deve ser true, caso contrário false.
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
//Lembre-se que podemos percorrer a lista, de modo, que para cada objeto percorrido será atribuída uma nova propriedade,
// portanto, o resultado final para o exemplo acima, deverá ser como ilustrado abaixo:

usuarios.forEach(users => {users.maiorIdade = users.idade >= 18});
console.log(usuarios);