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
  if (props.estaLogado) {
    return <MensagemParaUsuarioLogado />;
  }
  return <MensagemParaLogar />;
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

// function Mensagem(props) {
//   return props.estaLogado ? (<MensagemParaUsuarioLogado />) : (<MensagemParaLogar />)
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       estaLogado: false,
//       mensagemDoBotao: "Login"
//     }
//   }

//   aoClicar = () => {
//     const novaMensagemDoBotao = this.state.estaLogado ? "Login" : "Sair"
//     this.setState({
//       mensagemDoBotao: novaMensagemDoBotao,
//       estaLogado: !this.state.estaLogado
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <Mensagem estaLogado={this.state.estaLogado}/>
//         <button className="CustomBtn" onClick = {this.aoClicar}>{ this.state.mensagemDoBotao }</button>
//       </div>
//     );
//   }
// }

// export default App;
