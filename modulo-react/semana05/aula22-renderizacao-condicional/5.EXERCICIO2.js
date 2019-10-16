/**
 * Escreva um programa que crie os emails a serem enviados 
 * para clientes de uma empresa. Siga o exato 
 * formato abaixo e tome cuidado com o uso 
 * do "feminino" e "masculino"
 *      “Olá, <nome> 
 *          Seja bem-vinda(o) à nossa plataforma. 
 *            Estamos muito felizes em poder recebê-la(o). 
 *            Aguarde contato para mais informações.”	
 */

 class Cliente {
   constructor(nome, genero) {
     this.nome = nome
     this.genero = genero

     this.ehFeminino = () => {
      if(this.genero === "feminino") {
        return true
      } 
      return false
    }

   }

   
 }

 function geraEmail(cliente) {
   const boolean2 = false
   console.log(
     `
     Olá, ${cliente.nome}
      Seja bem-vind${(cliente.ehFeminino() && boolean2) ? "a" : 0 } à nossa plataforma.
      Estamos muito felizes em poder recebê-l${cliente.ehFeminino() ? "a" : 0}.
      Aguarde contato para mais informações.
     `
   )
 }

 geraEmail(new Cliente("Goli", "masculino"))
 geraEmail(new Cliente("Paulinha", "feminino"))









 

 /**
 * 
 * GABARITO By Goli
 * 
 */


//  class Cliente {
//    constructor(nome, genero) {
//      this.nome = nome
//      this.genero = genero
//    }

//    ehFeminino() {
//      return this.genero === "feminino" 
//    }
//  }
//  const clientes = [
//   new Cliente("Goli", "masculino"),
//   new Cliente("Paulinha", "feminino")
//  ]

//  let listaDeEmails = clientes.map((cliente) => {
//    return `
//       Olá, ${cliente.nome}
//         Seja bem-vind${cliente.ehFeminino() ? "a" : "o"} à nossa plataforma.
//           Estamos muito felizem em poder recebê-l${cliente.ehFeminino() ? "a" : "o"}.
//           Aguarde contato
//    `
//  })

//  listaDeEmails.forEach((s) => console.log(s))
