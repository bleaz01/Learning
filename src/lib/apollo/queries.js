import {gql,useQuery} from '@apollo/client'


export const GET_ALL_USER =gql`
 
    query{
      getUsers{
        email
      }
    }
  
`;

export const GET_USER = gql`

  query user($email:String){
    user(email:$email){
      name, 
      email
    }
  }

`;

// export function getUser (id){
       
//     const { loading, error, data } = useQuery(GET_USER, {
//         variables: { id },
//     })
//     console.log(data, "getuser")
// }
