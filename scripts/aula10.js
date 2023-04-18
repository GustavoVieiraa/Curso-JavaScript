/*  com o addEventListener, conseguimos realizar os 
    disparos de eventos pelo nosso JavaScript 
    sem poluir o nosso código HTML.
*/
var quad = document.getElementById('quadrado');
quad.addEventListener('mouseenter', entrarMouse);
quad.addEventListener('mouseout', saidaMouse);
quad.addEventListener('click', clickMouse);

function entrarMouse() {
    quad.style.color = '#FFF';
    quad.style.background = 'red';
    quad.innerText = 'Boa!';
    quad.style.width = '300px';
    quad.style.height = '300px';
    quad.style.lineHeight = '300px';
    quad.style.transition = '1s';
    quad.style.cursor = 'pointer';
}

function saidaMouse() {
    quad.style.color = 'blue';
    quad.style.background = 'yellow';
    quad.innerText = 'Passe aqui...';
    quad.style.width = '150px';
    quad.style.height = '150px';
    quad.style.lineHeight = '150px';
    quad.style.cursor = 'pointer';
}

function clickMouse() {
    quad.style.color = 'white';
    quad.style.background = 'purple';
    quad.innerHTML = 'Clicou...';
}

/* Exercício para soma de valores em JS */

function calcSomar(entradaN1, entradaN2) {
    var entradaN1 = document.getElementById('inputN1');
    var entradaN2 = document.getElementById('inputN2');
    var n1 = Number(entradaN1.value)
    var n2 = Number(entradaN2.value)
    var soma = (n1+n2)
    var result = document.getElementById('resultadoSoma');
    result.innerHTML = `<h1>${n1} + ${n2} = ${soma}</h1>`;
}
