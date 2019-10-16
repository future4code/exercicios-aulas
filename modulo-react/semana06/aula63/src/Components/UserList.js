import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const UserListContainer = styled.div``

const UserListItemContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const UserListDeleteButton = styled.p`
  color: red;
  `

const userList = [
  {
    id: "id1",
    name: "Goli"
  }
]

class UserList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  performGetAllUsersRequest = async () => {
    const userList = await axios
    .get("https://us-central1-future4-users.cloudfunctions.net/api/users/getAllUsers", 
      {
        headers: {
          "api-token": "00e30928fa107f4157583e5631d18f95"
        }
      }
    )
    
    this.setState({
      list: userList.data.result
    })

  }

  componentDidMount() {
    this.performGetAllUsersRequest()
  }

  onDeleteClick = async (id) => {
    await axios
      .delete(`https://us-central1-future4-users.cloudfunctions.net/api/users/deleteUser?id=${id}`,
        {
          headers: {
            "api-token": "00e30928fa107f4157583e5631d18f95"
          }
        }
      )
      this.performGetAllUsersRequest()
  }


  render() {
    return (
      <UserListContainer>
        <h3>Usuários Cadastrados:</h3>
        {
          this.state.list.map((user, i) => {
            return (
              <UserListItemContainer key={ i }>
                <p>{ user.name }</p>
                <UserListDeleteButton onClick = { () => {this.onDeleteClick(user.id)}  }> X </UserListDeleteButton>
              </UserListItemContainer>
            )
          })
        }
      </UserListContainer>
    )
  }
}

export default UserList