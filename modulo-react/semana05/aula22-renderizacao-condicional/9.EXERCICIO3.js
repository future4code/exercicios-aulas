


let resultado = true || true // true
resultado = true || false  //true
resultado = false || true //true
resultado = false || false //false

resultado = true || 1
resultado = false || 1

resultado = 0 || 1
resultado = 1 || 12

resultado = undefined || 9
resultado = 9 || undefined

resultado = { nome: "Goli" } || [1, 2, 3]

let user = { nome: "Goli" }
resultado = user || { nome: "" }


user = null
resultado = user || { nome: "" }
console.log("resultado: ", resultado)

