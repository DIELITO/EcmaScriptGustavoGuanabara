var agora = new Date()
//var diaSema = 0
var diaSema = agora.getDay()
switch (diaSema){
    case 0:
        console.log('Domingo')
    break
    case 1:
        console.log('Segunda')
    break
    case 2:
        console.log('Terça-feira')
    break
    case 3:
        console.log('Quarta-feira')
    break
    case 4:
        console.log('Quinta-feira')
    break
    case 5:
        console.log('Sexta-feira')
    break
    case 6:
        console.log('Sabado')
    break
}