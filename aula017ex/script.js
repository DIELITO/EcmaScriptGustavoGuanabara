let digitado = document.getElementById('numero')
let lista = document.querySelector('select#lista')
let analise = document.getElementById('analise')
let valores = []

//conferindo se é um número e se está entre 1 e 100
function isNumero(n){
    if(Number(n) >= 1 && Number(n) < 101) {
        return true
    } else {
        return false
    }
}

//conferindo se o numero está dentro da lista
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(digitado.value) && !inLista(digitado.value, valores)){
        valores.push(Number(digitado.value))
        let item = document.createElement('option')
        item.text = `Valor ${digitado.value} adicionado.`
        lista.appendChild(item)
        analise.innerHTML=''
    }   else {
        alert('[ERRO] Valor inválido ou já está na lista')
    }
    /*
    let digitado = document.getElementById('numero')
    if (Number(digitado.value.length)==0){
        alert('[ATENÇÃO] Digite um número')
    } else if (Number(digitado.value)<=0 || Number(digitado.value)>100){
        alert('[ATENÇÃO] Digite um número entre 1 e 100')
    } else {

        alert('até aqui OK!')
    }]*/
    digitado.value=''
    digitado.focus()
}

function analizar(){
    if(valores.length == 0){
        alert('[ATENÇÃO] Adicione valores')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / total
        analise.innerHTML = ''
        analise.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        analise.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        analise.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
        analise.innerHTML += `<p>Somando os valores, temos ${soma}.</p>`
        analise.innerHTML += `<p>A média entre eles é ${media}.</p>`
  
    }
}