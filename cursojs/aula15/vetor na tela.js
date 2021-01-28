let valores = [8, 4, 6, 7, 3]
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`===================================================`)
    console.log(`a posiçao ${pos} tem o valor em modo crensente ${valores.sort()[pos]}`)    
}
console.log(`===================== MODEO SIMPLIFICADO =====================`)
for (let pos in valores){
    console.log(`A POSIÇÃO ${pos} TE O VALOR ${valores[pos]}`)
}