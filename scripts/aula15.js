let numArray = [2, 3, 4, 9, 1, 7, 0];
numArray.push(5);
numArray.push('Gustavo');

// Percurso para exibição de vetor
/*
console.log(numArray);
for (let i=0;i<numArray.length;i++) {
    console.log(`[${i}] - ${numArray[i]}`);
}
*/


for (let pos in numArray) {
    console.log(`[${pos}] - ${numArray[pos]}`);
}

let pos = numArray.indexOf(7);

console.log(`O valor está na posição ${pos}`);