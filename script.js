//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18

let idade = 24

if(idade >= 18){
    console.log("Você é maior de 18 anos")
}else{
    console.log("Você é menor de 18 anos")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true

let humano = true

if(idade >= 18 && humano == true){
    console.log("Você é um humano maior de 18 anos")
}else{
    console.log("Quem é você?")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro

let aniversario = "agosto"
if(aniversario == "janeiro" || aniversario == "dezembro"){
    console.log("Parabéns!")
}else{
    console.log("Não é seu aniversário")
}
