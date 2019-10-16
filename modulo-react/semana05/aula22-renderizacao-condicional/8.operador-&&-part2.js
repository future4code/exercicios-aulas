let resultado = true && 1
resultado = false && 1

resultado = 0 && 1

resultado = 1 && 12

resultado = undefined && 9

resultado = 9 && undefined

resultado = { nome: "Goli" } && [1, 2, 3]






let user = { nome: "Goli" }
resultado = user && user.nome

user = null
resultado = user && user.nome
console.log("resultado: ", resultado)

if(user) {
  resultado = user.nome
}

resultado = user && user.nome

// O QUE ACONTECE SE EU DIGITAR ISSO AGORA:
// resultado = user.nome

// Para verificar se é nulo E já atribuir o nome:

resultado = user && user.name