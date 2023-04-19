var data = new Date();
var horaAtual = data.getHours();
var nome = prompt('Nome: ')


function periodoManha() {
    var fundoLayout = document.querySelector('body');
    var imagem = document.getElementById('imagem');
    var h1Informa = document.getElementById('qualHora');
    var msg = document.getElementById('msgHora');
    fundoLayout.style.background = '#FBD150';
    h1Informa.innerHTML = `Bom dia, ${nome}`;
    msg.style.color = '#226C9F';
    msg.innerHTML = `Agora são ${horaAtual} horas da manhã!`;
    imagem.src = './images/solGrande.jpg'
}

function periodoTarde() {
    var fundoLayout = document.querySelector('body');
    var imagem = document.getElementById('imagem');
    var h1Informa = document.getElementById('qualHora');
    var msg = document.getElementById('msgHora');
    fundoLayout.style.background = '#443744';
    h1Informa.innerHTML = `Boa tarde, ${nome}`;
    msg.style.color = '#FEAB67';
    msg.innerHTML = `Agora são ${horaAtual} horas da tarde!`;
    imagem.src = './images/fimDeTarde.jpeg'
}

function periodoNoite() {
    
    var fundoLayout = document.querySelector('body');
    var imagem = document.getElementById('imagem');
    var h1InformaHora = document.getElementById('qualHora');
    var msg = document.getElementById('msgHora');
    fundoLayout.style.background = '#31398A';
    h1InformaHora.innerHTML = `Boa Noite, ${nome}`;
    msg.style.color = '#31398A';
    msg.innerHTML = `Agora são ${horaAtual} horas da noite!`;
    imagem.src = './images/aNoite.jpg';
}


if (horaAtual >= 6 && horaAtual <= 12) {
    periodoManha();
} else if (horaAtual >= 13 && horaAtual <= 18) {
        periodoTarde();
} else {
    periodoNoite();
}