var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
var secundos = agora.getSeconds()
console.log(`Agora são exatamente ${hora} horas ${minutos} minutos e ${secundos} segundos. . `)

if (hora < 13){
    console.log('Bom dia!')
} else if (hora <= 17){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} 


