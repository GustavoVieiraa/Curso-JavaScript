function contadorInt() {
    let txtInicio = document.getElementById('txtNumberInicio');
    let txtFim = document.getElementById('txtNumberFim');
    let txtSalto = document.getElementById('txtNumberSalto');
    let res = document.getElementById('res');

    // Validações
    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtSalto.value.length == 0) {
        res.innerHTML = `Valide seus dados, novamente!`;
        alert('[Erro] os dados estão incorretos!');
    } else {
        res.innerHTML = `Contando: <br>`
        numInicio = Number(txtInicio.value);
        numFim = Number(txtFim.value);
        numSalto = Number(txtSalto.value);
        if (numSalto <= 0) {
            alert('Salto invalido!!! [Considerado Salto = 1]');
            numSalto = 1;
        }
        if (numInicio > numFim) {
            // contagem Decrecente
            for (let c=numInicio;c>=numFim;c-=numSalto) {
                if (c==numFim) {
                    res.innerHTML += `${c}`;
                    res.innerHTML += `... &#128282`;
                } else {
                   res.innerHTML += `${c} &#9193`; 
                }
            };
        } else if (numInicio < numFim) {
            // contagem Crescente
            for (let c=numInicio;c<=numFim;c+=numSalto) {
                if (c==numFim) {
                    res.innerHTML += `${c}`;
                    res.innerHTML += `... &#128282`;    
                } else {
                    res.innerHTML += `${c} &#9193`;
                }
            };
        } else {
            res.innerHTML = `Valores iguais! &#128282`
        };
    };
};