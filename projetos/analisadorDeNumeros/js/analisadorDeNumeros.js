var numDados = [];
let maiorNum = 0;
let menorNum = 0;
let somaValores = 0;

function analisarNumero () {
    // Entrada do Num
    let txtNum = document.getElementById('txtNum');
    let Num = Number(txtNum.value);
    // Att de dados ao select
    let entDados = document.getElementById('entDados'); 

    
    // validação se já existe o num de entrada no array.
    for (pos in numDados) {
        if (Num == numDados[pos]) {
            var validarEntrada = false; 
        };
    };

    // validações para entrada entre 1 e 100.
    if (txtNum.value.length == 0 || Num > 100 || Num < 1) {
        alert('Preencha os dados corretamente!');
    } else {
        // validação maior / menor
        if (maiorNum == 0 && menorNum == 0) {
            maiorNum = Num;
            menorNum = Num;
        } else {
            if (maiorNum < Num) {
                maiorNum = Num;
            }
            if (menorNum > Num) {
                menorNum = Num;
            }
        }

        if (numDados.length == 0) {
            numDados.push(Num);
            // soma dos valores
            somaValores += Num;
            // entrada do valor na tabela de dados
            addDados = document.createElement('option');
            addDados.text = `Valor ${Num} atribuido.`;
            entDados.appendChild(addDados);
            txtNum.value = '';

        } else if (validarEntrada == false) {
            alert('Esse número já existe, escolha outro!');
        } else {
            numDados.push(Num);
            // soma dos valores
            somaValores += Num;
            // entrada de valores na tabela de dados.
            addDados = document.createElement('option');
            addDados.text = `Valor ${Num} atribuido.`;
            entDados.appendChild(addDados);
            txtNum.value = '';
        }
    };
};


function finalizar() {
    let txtNum = document.getElementById('txtNum');
    let Num = Number(txtNum.value);
    let res = document.getElementById('res');
    let mediaVal = (somaValores/numDados.length)
    mediaVal.toFixed(2)
    if (numDados.length == 0) {
        alert('informe ao menos, um número!')
    } else {
        res.innerHTML = `
        Ao todo temos ${numDados.length} números cadastrados. <br>
        O maior número informado é: ${maiorNum} <br>
        O menor número informado é: ${menorNum} <br>
        O total dos valores é: ${somaValores} <br>
        A média dos valores digitados é: ${mediaVal}
        `;
    }
}
