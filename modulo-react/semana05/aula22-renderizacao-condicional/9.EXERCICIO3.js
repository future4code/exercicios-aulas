let resultado = true || true
resultado = true || false
resultado = false || true
resultado = false || false

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

