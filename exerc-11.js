/* A seguir, temos alguns produtos disponíveis a venda numa loja online e uma lista de clientes cadastrados.
Adicione o produto ao carrinho do usuário, sempre que solicitado.
O formato do item no carrinho deve seguir o seguinte padrão:

{
    item: {
        nome: 'TV Samsung 4K',
        valorEmCentavos: 129900
    },
    quantidade: 1
}*/
// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }
/* a. Adicione uma tv, dois cabos usb e uma webcam para o José

b. Adicione dois notebooks para o Carlos

c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia

d. Adicione cinco webcams para o Renato

e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto
 */
jose.carrinho.push({ item: tv, quantidade: 1 });
jose.carrinho.push({ item: caboUsb, quantidade: 2 });
jose.carrinho.push({ item: webcam, quantidade: 1 });
console.log(jose.carrinho);

carlos.carrinho.push({item: notebook, quantidade: 2});
console.log(carlos.carrinho);

patricia.carrinho.push({item: teclado, quantidade: 1});
patricia.carrinho.push({item: caboUsb, quantidade: 2});
patricia.carrinho.push({item: mouse, quantidade: 1});
patricia.carrinho.push({item:monitor, quantidade: 1});
console.log(patricia.carrinho);

renato.carrinho.push({item: webcam, quantidade: 5})
console.log(renato.carrinho);

roberto.carrinho.push({item: webcam, quantidade: 1})
roberto.carrinho.push({item: caboUsb, quantidade: 2})
roberto.carrinho.push({item: monitor, quantidade: 1})
console.log(roberto.carrinho);