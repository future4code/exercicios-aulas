/**
 * Escreva uma função que receba dois números e imprima:
 *    "INFORMAÇÕES:
 *      - O maior número é: <numero>.
 *      - A diferença entre eles é: <numero>."
 */


 function maiorNumero(a, b) {
   let maior = b
   let menor = a

   if(a > b) {
     maior = a
     menor = b
   }

   return maior
 }

 console.log(
  `
   INFORMAÇÕES:
     - o maior número é: ${ maiorNumero(4,5) }
     - a diferença entre eles é: ${4 - 5}
  `)

 maiorNumero(4,5)
 maiorNumero(10,-2)













/**
 * 
 * GABARITO By Goli
 * 
 */
//  function informacoesDosNumeros(a,b) {
//    let maior = b
//    let menor = a
//    if(a > b) {
//      maior = a
//      menor = b
//    }

//    return`
//       INFORMAÇÕES:
//         - O maior número é: ${maior}.
//         - A diferença entre eles é: ${maior - menor }.
//    `
//  }

//  console.log(informacoesDosNumeros(5,10))
//  console.log(informacoesDosNumeros(10,40))