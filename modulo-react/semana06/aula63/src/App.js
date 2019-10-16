import React from 'react';
import Singup from './Components/Singup.js';
import UserList from './Components/UserList.js';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: "signup",
      buttonText: "Lista de Usuários"
    }
  }

  onButtonClick = () => {
    if(this.state.currentPage === "signup") {
      this.setState({
        currentPage: "userlist",
        buttonText: "Voltar"
      })
    } else {
      this.setState({
        currentPage: "signup",
        buttonText: "Lista de Usuários"
      })
    }
  }

  render () {
    return (
      <div className="App">
        {
          this.state.currentPage === "signup" ? <Singup/> : <UserList/>
        }
        <button onClick = { this.onButtonClick }>{ this.state.buttonText }</button>
      </div>
    );
  }  
}

export default App;
