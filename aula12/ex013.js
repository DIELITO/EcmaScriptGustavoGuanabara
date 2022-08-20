var agora = new Date()
var hora = agora.getHours()
console.log(`São exatamente ${hora} horas`)
if (hora > 5 && hora < 12){
    console.log('Bom dia!')
} else if (hora > 11 && hora < 18){
    console.log('Boa tarde!')
} else if (hora > 17 && hora <= 23){
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}