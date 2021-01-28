var Agora = new Date()
var hora = Agora.getHours()
console.log(`Agora sao exatamente ${hora} horas`)
if(hora < 12){
    console.log(`bom dia`)
}else if(hora <= 18){
    console.log(`boa tarde`)
}else{
    console.log(`Boa noite`)
}