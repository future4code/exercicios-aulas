import React from 'react';
import './App.css';

function MensagemParaUsuarioLogado(props) {
  return(
    <div>
      <h1> Bem vindo de volta! </h1>
      <button className="CustomBtn"> Feed </button>
      <button className="CustomBtn"> Lista de Amigos </button>
    </div>
  ) ;
}

function MensagemParaLogar(props) {
  return <h1> Por favor, logue-se! </h1>;
}

function Mensagem(props) {
  return props.estaLogado ? (<MensagemParaUsuarioLogado />) : (<MensagemParaLogar />)
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      estaLogado: false,
      mensagemDoBotao: "Login"
    }
  }

  aoClicar = () => {
    const novaMensagemDoBotao = this.state.estaLogado ? "Login" : "Sair"
    this.setState({
      mensagemDoBotao: novaMensagemDoBotao,
      estaLogado: !this.state.estaLogado
    })
  }

  render() {
    return (
      <div className="App">
        <Mensagem estaLogado={this.state.estaLogado}/>
        <button className="CustomBtn" onClick = {this.aoClicar}>{ this.state.mensagemDoBotao }</button>
      </div>
    );
  }
}

export default App;


/**
 * 
 * GABARITO By Goli
 * 
 */


// function MensagemParaUsuarioLogado(props) {
//   return(
//     <div>
//       <h1> Bem vindo de volta! </h1>
//       <button className="CustomBtn"> Feed </button>
//       <button className="CustomBtn"> Lista de Amigos </button>
//     </div>
//   ) ;
// }

// function MensagemParaLogar(props) {
//   return <h1> Por favor, logue-se! </h1>;
// }

// function Pagina(props) {
//   return props.estaLogado ? (<MensagemParaUsuarioLogado />) : (<MensagemParaLogar />)
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       estaLogado: false,
//       mensagemDoBotao: "Login",
//       mensagens: ["Eae, suave?", "Oi sumida"]
//       // mensagens: []
//     }
//   }

//   aoClicar = () => {
//     const novaMensagemDoBotao = this.state.estaLogado ? "Login" : "Sair"
//     this.setState({
//       mensagemDoBotao: novaMensagemDoBotao,
//       estaLogado: !this.state.estaLogado
//     })
//   }

//   mostraQuantidadeDeMensagens = () => {
//     if(this.state.estaLogado && this.state.mensagens.length > 0) {
//       return (<p> Você tem {this.state.mensagens.length} mensagens não lidas </p>)
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <Pagina estaLogado={this.state.estaLogado}/>
//         { this.state.estaLogado && this.state.mensagens.length > 0 &&  
//               <p> Você tem {this.state.mensagens.length} mensagens não lidas </p> } 
//         <button className="CustomBtn" onClick = {this.aoClicar}>{ this.state.mensagemDoBotao }</button>
//       </div>
//     );
//   }
// }

// export default App;