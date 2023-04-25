/* Função para contar até 10 */

function contadorAteDez() {
    resCont = document.getElementById('contador');
    let cont = 0;
    while (cont < 10) {
        cont++;
        resCont.innerHTML = `${cont}...`;
    }
}