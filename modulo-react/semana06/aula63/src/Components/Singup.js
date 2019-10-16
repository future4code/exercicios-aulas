import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const userToSignup = {
  name: "Goli",
  email: "goli@gmail.com"
}

const SignupContainer = styled.div`
  width: 40%;
  display:flex;
  flex-direction: column;
`

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: ""
    }
  }

  onSaveClick = async () => {
    const user = {
      name: this.state.name,
      email: this.state.email
    }
    await axios.post(
      "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",
      user,
      {
        headers:{
          "api-token": "00e30928fa107f4157583e5631d18f95"
        }
      }
    )
    window.alert("Usuário salvo com sucesso")
  }

  onNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render() {
    return (
      <SignupContainer>
        <input value={ this.state.name } onChange={ this.onNameChange } placeholder="Nome"/>
        <input value={ this.state.email } onChange={ this.onEmailChange } placeholder="Email"/>
        <button onClick={ this.onSaveClick }> Salvar </button>
      </SignupContainer>
    )
  }
}

export default Signup;