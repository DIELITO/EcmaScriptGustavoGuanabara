function tabuada(){
    var multiplicando = document.getElementById('multiplicando')
    var multiplicador = document.getElementById('multiplicador')
    var num = Number(multiplicando.value)

    if (multiplicando.value.length == 0) {
        alert('[ERRO] Por favor insira um numero para gerarmos a tabuada dele!')
    } else if (num == 0) {
        alert('[ATENÇÃO] Qualquer número multiplicado por "0" (zero) tem como resultado ZERO!')
    } else {
        var c = 1
        multiplicador.innerHTML=''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            multiplicador.appendChild(item)
            c++
        }
    }
}
//alert('até aqui ok!')}