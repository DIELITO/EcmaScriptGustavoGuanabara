let valores = [1,2,3,4,5,6,7,8,9,10,11]
//console.log(valores)
// for tradicional em qualquer linguagem
for(let posicao=0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} no vetor tem valor ${valores[posicao]}`)
}

// for simplificado em javascript
for(let posicao in valores) {
    console.log(`A posição ${posicao} no vetor tem valor ${valores[posicao]}`)
}

//encontrando a posição de um elemento dentro do vetor com indexOf
let pos = valores.indexOf(11)
if (pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`A posição se encontra no indice ${pos}`)
}