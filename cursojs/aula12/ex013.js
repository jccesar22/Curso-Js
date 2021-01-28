var Agora = new Date()
var dia = Agora.getDate()
console.log(dia)
switch (dia) {
    case 0:
        console.log('domingo')
        break;
    case 1:
        console.log('segunda')
        break;
    case 2:
        console.log('terça')
        break;
    case 3:
        console.log('quarta')
        break;
    case 4:
        console.log('quinta')
        break;
    case 5:
        console.log('sexta')
        break;
    case 6:
        console.log('sadado')
        break;
   
    default:
        console.log('[ERRO] Dia invalido')
        break;
}