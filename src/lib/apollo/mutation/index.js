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

export const CREATE_POST =gql`

  mutation createPost($title:String!, $body:String,  $comment:String!, $userId:String!, $date:String!)
    {
      createPost(title:$title, body:$body, comment:$comment, userId:$userId, date:$date)
      {
        comment, 
        title,
        date,
       
      }
    }


`


// export const HANGLE_PROFILE = gql`

//     mutation hangleProfile(){

//     }
// `

