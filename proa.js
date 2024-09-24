//creating the class
class Produto{
    //creating properties (which will be assigned to variables)
    constructor(nome, valor, data){
        this.nome = nome;
        this.valor = valor;
        this.data = data;
    }
}

//creating variables and assigning their values ​​(name, value and date, in that order)
let maca = new Produto("Maçã", 3.54, 2020);
let chocolate = new Produto("Chocolate", 5.00, 2030);
let morango = new Produto("Morango", 2.76, 2019);
let cenoura = new Produto("Cenoura", 3.99, 2022);
let laranja = new Produto("Laranja", 3.67, 2024);
let leite = new Produto("Leite", 7.99, 2029);
let maracuja = new Produto("Maracujá", 8.00, 2000);
let coxinha = new Produto("Coxinha", 2.50, 1920);
let pastel = new Produto("Pastel", 200.00, 2020);
let pao = new Produto("Pão", .50, 2023);

//putting the variables into a vector (for easier access)
let listaDeProdutos  = [maca, chocolate, morango, cenoura, laranja, leite, maracuja, coxinha, pastel, pao];



//creating variables to store the values ​​of user responses
let saldo = prompt("Bem Vindo ao mercado São Valentin! \nQuanto você tem disponível para gastar hoje?");
var ano = prompt("E em que ano você está?");
var produtoEscolhido = [];
var produtoEscolhido = prompt("Agora escolha quais itens quer comprar \n" + listaDeProdutos);