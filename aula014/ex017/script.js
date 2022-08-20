function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Falta dados para fazer a contagem, verifique os campos!')
        //document.location.reload(true)
        res.innerHTML = `<br>Impossível contar \u{1F614} Tente novamente \u{1F609}`
    } else {
        res.innerHTML = '<br>Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Passo inválido! Vamos contar considerando "Passo: 1"')
            p = 1
        }
        if (i < f){
            //loop para fazer a contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //loop para fazer a contagem decrescente
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}