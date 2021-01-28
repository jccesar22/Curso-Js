function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO verifique os dados e tente novamente! ')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var género = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            género ='Homem'
            document.body.style.background = 'black'
            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menino.png')
                
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'homem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            }else{
                // idoso
                img.setAttribute('src', 'velho.png')
            }

        }else if (fsex[1].checked) {
            género = 'Mulher'
            document.body.style.background = 'pink'

            if (idade >=0 && idade < 10){
                //Criança
                img.setAttribute('src', 'menina.png')
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'mulher.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adultomulher.png')
            }else {
                //idoso
                img.setAttribute('src', 'velha.png')
            }
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${género} com ${idade} anos`
        res.appendChild(img)
    }
}