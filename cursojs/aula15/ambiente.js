let num = [5, 8, 9, 3]
num.push(7) 
console.log(`nosso vetor tem ${num}`)
console.log(`elemento na posiçao  2 e ${num[2]}`)
console.log(`possui ${num.length}`)
//console.log(`em modo crecente ${num.sort()}`)
console.log(`percorendo vetor em modo for`)
for (let pos = 0; pos < num.length; pos++) {
    console.log(`${num[pos]}`)    
}
let pos = num.indexOf(4)
if (pos == -1 ){
    console.log('o valor nao foi encontrado')
}else{
console.log(`o0 valor 9 esta na posição ${pos}`)
}
