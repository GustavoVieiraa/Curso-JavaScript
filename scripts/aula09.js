// Selecionando um elemento DOM por MARCA
var selectElement = window.document.getElementsByTagName('p')[0];
// Aplicando estilizações por JavaScript
var myCorpo = window.document.body
// selectElement.style.color = 'yellow';
myCorpo.style.background = '#505050';
// window.document.write(`Esse elemento está escrito: ${selectElement.innerText}`);
window.document.write(selectElement.innerHTML);


/* Selecionando um elemento DOM por ID */
var selectLocation = window.document.getElementById('locationID');
selectLocation.style.background = 'blue';

/* Selecionando um elemento DOM por Name */
var nameSelecao = document.getElementsByName('testeDomName')[0];
nameSelecao.innerHTML = "Funciona mesmo, que top!!!";

/* Selecionando um elemento DOM por Class */
var classSelecao = document.getElementsByClassName('domClass')[0];
classSelecao.style.background = 'red';

/* Selecionando um elemento DOM por Selector */
var selectorTeste = document.querySelector('li#historyLabel');
selectorTeste.style.background = 'red';
