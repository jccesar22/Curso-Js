let amigo ={nome:'jose',
sexo: 'm',
peso: 85.4,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}

amigo.engordar(2)
amigo.sexo = 'f'
console.log(`${amigo.nome} passou a pesar ${amigo.peso}kg do sexo ${amigo.sexo}`)