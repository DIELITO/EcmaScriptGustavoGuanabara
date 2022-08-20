function contar(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Falta dados para fazer a contagem, verifique os campos!')
    } else {
        alert('tudo ok por enquanto')
    }
}