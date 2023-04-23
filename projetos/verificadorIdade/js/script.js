function validarDados() {
    // chamada do metodo new Data() para pegar a data Atual...
    var data = new Date();
    var anoAtual = data.getFullYear();

    // atribuição da idade para var anoNasc
    var txtAnoNasc = document.getElementById('txtAnoNasc');
    var anoNasc = Number(txtAnoNasc.value);

    // validações 
    if (txtAnoNasc.value.length == 0 || anoNasc >= anoAtual) {
        alert(`[ERRO] Entrada de dados - Preenche novamente!`);
    } else {
        var idade = (anoAtual-anoNasc);
        var sexGen = document.getElementsByName('radSexEntry');
        var gen = '';
        if (sexGen[0].checked) {
            gen = 'Homem';
        } else {
            gen = 'Mulher';
        }
    }

    // alteração do resultado
    var res = document.querySelector('div#res');
    let fundo = document.getElementById('fundoPag');

    // alterações resultado masc
    if (idade == 1 && gen == 'Homem') {
        fundo.style.backgroundColor = '#6AA1EF';
        res.innerHTML = `
        <h1 class='res-bebe'>Você é um bebê e tem ${idade} ano.</h1>
        <img src="img/bebe.png" alt="bebe">
        `;

    } else if (idade < 10 && gen == 'Homem') {
        fundo.style.backgroundColor = '#6AA1EF';
        res.innerHTML = `
        <h1 class='res-menino'>Você é um Menino e tem ${idade} anos.</h1>
        <img src="img/homem-crianca.png" alt="homem-crianca">
        `;
    } else if (idade < 18 && gen == 'Homem') {
        fundo.style.backgroundColor = '#6AA1EF';
        res.innerHTML = `
        <h1 class='res-jovem'>Você é um Adolescente/Jovem e tem ${idade} anos.</h1>
        <img src="img/jovem-adolescente.png" alt="adolescente-jovem" class='res-jovem'>
        `;
    } else if (idade < 40 && gen == 'Homem') {
        fundo.style.backgroundColor = '#6AA1EF';
        res.innerHTML = `
        <h1 class='res-adulto'>Você é um Adulto e tem ${idade} anos.</h1>
        <img src="img/adulto.png" alt="adulto">
        `;
    } else if (idade < 100 && gen == 'Homem') {
        fundo.style.backgroundColor = '#6AA1EF';
        res.innerHTML = `
        <h1 class='res-velho'>Você é VELHO e tem ${idade} anos.</h1>
        <img src="img/velho.png" alt="velho">
        `;
    } else if ((idade >= 100 && idade <= 500) && gen == 'Homem') {
        fundo.style.backgroundColor = 'black';
        res.innerHTML = `
        <h1 class='res-dead'>You're dead</h1>
        <img src="img/caixao.png" alt="caixao">
        `;
    } else {
        fundo.style.backgroundColor = '#f29e0e';
        res.innerHTML = `
        <h1 class='alerta'>CONFIRA OS DADOS!</h1>
        <img src="img/alerta.png" alt="alerta">
        `;
    }

    // alterações do res feminino
    if (idade == 1 && gen == 'Mulher') {
        fundo.style.backgroundColor = '#DD95B9';
        res.innerHTML = `
        <h1 class='res-bebe-menina'>Você é um bebê e tem ${idade} ano.</h1>
        <img src="img/bebe.png" alt="bebe">
        `;
    } else if (idade < 18 && gen == 'Mulher') {
        fundo.style.backgroundColor = '#DD95B9';
        res.innerHTML = `
        <h1 class='res-menina'>Você é uma menina, e tem ${idade} anos.</h1>
        <img src="img/menina-crianca.png" alt="menina-crianca">
        `;
    } else if (idade < 40 && gen == 'Mulher') {
        fundo.style.backgroundColor = '#DD95B9';
        res.innerHTML = `
        <h1 class='res-mulher'>Você é uma mulher, e tem ${idade} anos.</h1>
        <img src="img/mulher.png" alt="Mulher">
        `;
    } else if (idade < 100 && gen == 'Mulher') {
        fundo.style.backgroundColor = '#DD95B9';
        res.innerHTML = `
        <h1 class='res-velha'>Você é VELHA, e tem ${idade} anos.</h1>
        <img src="img/velha.png" alt="velha">
        `;
    } else if (idade >= 100 && gen == 'Mulher') {
        fundo.style.backgroundColor = 'black';
        res.innerHTML = `
        <h1 class='res-dead'>You're dead</h1>
        <img src="img/caixao.png" alt="caixao">
        `;
    } 
}