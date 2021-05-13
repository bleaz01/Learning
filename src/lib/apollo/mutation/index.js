import {gql} from '@apollo/client'

export const ADD_USER = gql`
    mutation AddUser($email: String!, $name:String!, $role:String!, $imgProfil:String!) {
    addUser(email:$email, role:$role, name:$name, imgProfil:$imgProfil) {
      name,
      email,
      role,
      imgProfil,
    }
  }
`

// export const HANGLE_PROFILE = gql`

//     mutation hangleProfile(){

//     }
// `

