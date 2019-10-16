function verificaCoercao(variavel) {
  if(variavel){
    console.log("entrei no if")
  } else {
    console.log("não entrei no if")
  }
}

const booleano1 = true
const booleano2 = false

const zero = 0
const naoZero = 12

const variavelNull = null
const variavelNaoNull = {}

const varaiavelUndefined = undefined
const variavelNaoUndefined = {}


const naoSouUmNumero = NaN 
const souUmNumero = 1


const stringVazia = ""
const stringNaoVazia = "1"


function imprimeNome(pessoa) {
  if(pessoa) {
    console.log(pessoa.nome)
  }
}

let pessoa = { nome: "Golias" }
imprimeNome(pessoa)

pessoa = null
imprimeNome(pessoa)

pessoa = undefined
imprimeNome(pessoa)