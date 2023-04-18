// As entradas de dados do Prompt são do tipo string.
/*
var num1 = window.Number.parseFloat(window.prompt('Digite um número: '));
var num2 = window.Number.parseFloat(window.prompt('Digite outro número: '));
*/

//var soma = (num1+num2); // Soma dos valores já tratados de string para número.

// window.alert('A soma entre ('+num1+' + '+num2+') é igual: '+soma); 

var n1 = Number(window.prompt('Primeira nota: '));
var n2 = Number(window.prompt('Segunda nota: '));

var mediaNota = (n1+n2)/2;

window.alert(`Suas notas foram: N1 = ${n1} e N2 = ${n2}`); // `` é Template String
window.alert(`Média: ${mediaNota}`);

// Formatação de Strings

window.alert(s.length); // Para contar quantos caracteres tem essa string
s = s.toUpperCase(); // transpõe as letras para MAIÚSCULAS
s = s.toLowerCase(); // transpõe as letras para MINÚSCULAS
window.alert(s);