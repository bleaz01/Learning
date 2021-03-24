import {gql} from '@apollo/client'

export const ADD_USER = gql`
    mutation AddUser($email: String!, $password:String!) {
    addUser(email: $email, password:$password) {
      email,
      password
    }
  }
`

