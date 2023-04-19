function validarVelocidade() {
    var entradaVelocidade = document.getElementById('numberVel');
    var velocidade = Number(entradaVelocidade.value);
    var resValidacao = document.getElementById('resValidacao');
    if (velocidade <= 95) {
        resValidacao.style.width = '300px';
        resValidacao.style.height = '200px';
        resValidacao.style.background = 'lightgreen';
        resValidacao.style.marginTop = '30px';
        resValidacao.style.padding = '20px';
        resValidacao.style.borderRadius = '10px';
        resValidacao.style.transition = '1s';
        resValidacao.style.color = '#505050';
        resValidacao.innerHTML = `<h1>Velocidade: ${velocidade}</h1> <p>Você está dentro do limite de velocidade permitido!</p>`;
    } else if (velocidade <= 110) {
        resValidacao.style.width = '350px';
        resValidacao.style.height = '250px';
        resValidacao.style.background = '#EEDA25';
        resValidacao.style.marginTop = '30px';
        resValidacao.style.padding = '20px';
        resValidacao.style.borderRadius = '10px';
        resValidacao.style.transition = '1s';
        resValidacao.style.color = '#FFF';
        resValidacao.innerHTML = `<h1>Velocidade: ${velocidade}</h1> <h2>CUIDADO!</h2> <p>Você está quase acima do limite de velocidade permitido! <strong>[LIMITE VIA 110KM/H]</strong></p>`;
    } else {
        resValidacao.style.width = '400px';
        resValidacao.style.height = '300px';
        resValidacao.style.background = 'tomato';
        resValidacao.style.marginTop = '30px';
        resValidacao.style.padding = '20px';
        resValidacao.style.borderRadius = '10px';
        resValidacao.style.transition = '2s';
        resValidacao.style.color = '#FFF';
        resValidacao.innerHTML = `<h1>Velocidade: ${velocidade}</h1> <h2>MULTADO!</h2> <p>Você está acima do limite de velocidade permitido!</p>`;
    }
}