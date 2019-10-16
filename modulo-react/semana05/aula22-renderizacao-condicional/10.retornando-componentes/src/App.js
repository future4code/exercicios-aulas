import React from 'react';
import './App.css';


function MensagemGeral(props) {
  return props.estaLogado ? (<Home/>) : (<MensagemParaUsuarioNaoLogado/>)
}

function Home(props) {
  return(
    <div>
      <h2>Bem vindo de votla!</h2>
      <button className="CustomBtn">Feed</button> 
      <button className="CustomBtn">Lista de Amigos</button> 
    </div>
  )
}

function MensagemParaUsuarioNaoLogado(props) {
  return (
    <div>
      <h2> Por favor, logue-se </h2>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.mensagemDoBotao = "Login"
    this.state = {
      estaLogado: false,
      // mensagens: []
      mensagens: ["oi", "tudo bem?"]
    }
  }

  aoClicar = () => {
    this.mensagemDoBotao = this.state.estaLogado ? "Login" : "Sair"

    this.setState({ estaLogado: !this.state.estaLogado })
  }

  render() {
    return (
      <div className="App">
        <MensagemGeral estaLogado={this.state.estaLogado}/>
        {
          (this.state.mensagens.length > 0 && this.state.estaLogado) && 
            (<div> Você possui {this.state.mensagens.length} mensagens não lidas</div>)
        }
        <button className="CustomBtn" onClick = {this.aoClicar}> { this.mensagemDoBotao } </button>
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
//   if (props.estaLogado) {
//     return <MensagemParaUsuarioLogado />;
//   }
//   return <MensagemParaLogar />;
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
