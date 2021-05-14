import {gql} from '@apollo/client'

export const ADD_USER = gql`
  
  mutation addUser($name:String!, $email:String!, $role:String!, $imgProfil:String!)
  {
    addUser(name:$name, email:$email, role:$role, imgProfil:$imgProfil)
    {
      name,
      email,
      role,
      imgProfil
    }
  }
`


// export const HANGLE_PROFILE = gql`

//     mutation hangleProfile(){

//     }
// `

