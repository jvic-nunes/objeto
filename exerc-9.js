/* Abaixo, temos uma lista de pessoas. Cada pessoa possui uma lista com um, vários ou nenhum pet. 
Percorra cada pessoa da lista e imprima uma mensagem de acordo com as condições a seguir:
a. Se a pessoa não tiver pets, a mensagem deve ser: Sou João e não tenho pets.

b. Se a pessoa tiver mais de um pet, a mensagem deve ser: Sou Ana e tenho 2 pets.

c. Se a pessoa tiver um pet, a mensagem deve ser: Sou Beatriz e tenho 1 pet.*/
//Obs.: O nome da pessoa e a quantidade de pets deve ser dinâmico, de acordo com as informações de cada objeto. 

const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let i = 0; i < usuarios.length; i++){
    if (usuarios[i].pets.length === 0){
        console.log(`Oi, sou ${usuarios[i].nome}, não tenho pets`)
    }else if (usuarios[i].pets.length > 1){
        console.log(`oi meu nome é ${usuarios[i].nome}, tenho ${usuarios[i].pets.length} pets`)
    }else {
        console.log(`oi, sou ${usuarios[i].nome} e tenho 1 pet.`);
    }
}
