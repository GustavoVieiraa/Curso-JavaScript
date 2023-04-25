function parOrImpar(num) {
    let res = document.getElementById('res');
    let n = document.getElementById('txtNum');
    nValida = Number(n.value)
    if (nValida%2 == 0) {
        return(res.innerHTML = `PAR!`);
    } else {
        return(res.innerHTML = `IMPAR!`);
    }
}