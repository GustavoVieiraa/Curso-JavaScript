function gerarTabuada() {
    let numTab = document.getElementById('txtTabuada');
    num = Number(numTab.value);
    let tabRes = document.getElementById('tabuada');
    if (numTab.value.length == 0) {
        alert('Informe um número para tabuada!');
    } else {
        let c = 1;
        tabRes.innerHTML = '';
        while (c <= 10) {
            dadosTabuada = document.createElement('option');
            dadosTabuada.text = `${num} x ${c} = ${num*c}`;
            dadosTabuada.value = `${c}`;
            tabRes.appendChild(dadosTabuada);
            c++;
        };
    };
};