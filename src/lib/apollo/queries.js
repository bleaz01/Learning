import {gql} from '@apollo/client'

export const GET_USERS = gql`

    query GetUsers{
        user{
            name
            email
        }
    }
    # query ($user:String!){
    #     user(user:$user){
    #         id
    #         name
    #         email
    #     }
       
	# } 

`;
