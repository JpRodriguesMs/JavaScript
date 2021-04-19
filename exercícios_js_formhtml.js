/*
   1 - Elaborar um programa para uma revenda de veículos. O programa deve ler o modelo e o preço do veículo.
   Deve, então, apresentar como resposta o valor da entrada (50%) e restante em 12x.

*/

function promo(){
var txtveiculo = document.getElementById('txtveiculo');
var txtpreco = document.getElementById('txtpreco');
var outveiculo = document.getElementById('outveiculo');
var outpromo = document.getElementById('outpromo');
var c1 = txtveiculo.value 
var c2 = Number(txtpreco.value);
var c3 = c2 * 0.5;
var c4 = Math.ceil(c3 / 12);
outveiculo.textContent = c1;
outpromo.textContent = `Entrada de R$: ${c3} + 12x ${c4}`;

}



/*
   2 - Elaborar um programa para um restaurante que leia o preço por kg e o consumo em gramas de um cliente.
   Exiba o valor a ser pago.

*/

function restaurante(){
var txtbuffet = document.getElementById('txtbuffet');
var txtconsumo = document.getElementById('txtconsumo');
var buffet = Number(txtbuffet.value);
var consumo = Number(txtconsumo.value);
var total = (buffet * consumo) / 1000;
outconsumo.textContent = `Valor a pagar R$: ${total}`; 

}



/*
   3 - Elaborar um programa para uma lan house de um aeroporto. 
   O programa deve ler o valor de cada 15 min de uso de um computador e o tempo de uso por um cliente em minutos.
   Informe o valor a ser pago pelo cliente, sabendo que as frações de 15 minutos devem ser cobradas de forma integral.

*/
function ls(){
var  txtvalor = document.getElementById('txtvalor');
var  txttempo = document.getElementById('txttempo');
var  outvalor = document.getElementById('outvalor');
var valor = Number(txtvalor.value);
var tempo = Number(txttempo.value);
var t1 = tempo / 15 ;
var t2 = Math.ceil(t1);
var f1 = t2 * valor ;
outvalor.textContent = `Valor a pagar R$: ${f1}`;
 
}