import {gql,useQuery} from '@apollo/client'


export const GET_ALL_USER =gql`
 
    query{
      getUsers{
        _id
        email
        name
        role

      }
    }
  
`;

export const GET_USER = gql`

  query user($email:String){
    user(email:$email){
      _id
      name, 
      email,
      role
    }
  }

`;
export const GET_POSTS = gql`

   
    query{
      posts
      {
        date,
        comment,
        title,
        userId,
        like,
        comments{
          body,
          
        }
      }
    }

`;

export const USER_POST =gql`

  query userPost($userId:String){
    userPost(userId:$userId)
      {
        imgProfil
        name
      }
    }
`


// export function getUser (id){
       
//     const { loading, error, data } = useQuery(GET_USER, {
//         variables: { id },
//     })
//     console.log(data, "getuser")
// }
