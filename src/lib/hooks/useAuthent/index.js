import * as Realm from "realm-web"
// import resolve from "resolve"
import {app} from "../../Mongo/Mongo-sdk/index"
import {useLazyQuery, useMutation, useQuery} from '@apollo/client'
import { ADD_USER } from '../../../lib/apollo/mutation'

import imgProfil from '../../../assets/img-profil.png'

import { handleLogin, handleLogout, handleAuthenticationErrors } from "../../redux/actions/authentication"
import { GET_USER } from "../../apollo/queries"
// import { getUser, GET_USER } from "../../apollo/queries"


const useAuthentication = (dispatch) =>{
    const [addUser,{}] = useMutation(ADD_USER);
    const [getUser, { loading, data }] = useLazyQuery(GET_USER);

   
    if(data){
        dispatch(handleLogin(data))
    }
    function handleUserRegistration(newUser){   
        console.log(newUser, '=> DB')

        return new Promise((resolve =>{
            app.emailPasswordAuth
            .registerUser(newUser.email, newUser.password)
            .then(()=>{
                const credentials = Realm.Credentials.emailPassword(newUser.email, newUser.password);
                app.logIn(credentials)
                .then(user =>{
                   const profile = user._profile.data
                    addUser({ variables: { email: newUser.email, name: newUser.name, role: newUser.role, imgProfil: newUser.imgProfil } });
                    dispatch(handleLogin({...newUser, password:undefined}))
                    resolve(profile)
                })
            })
            .catch((error)=>{
                dispatch(handleAuthenticationErrors(error))
                console.log(error)
            })
       
        }))
    }
    async function handleUserLogin(email, password){
        return new Promise((resolve)=>{
            app
            .logIn(Realm.Credentials.emailPassword(email,password))
            .then(async () =>{

                const currentUser = await app.currentUser;
                let userEmail = currentUser._profile.data.email
                getUser({variables: { email: userEmail}})  
                resolve(currentUser)

            })
        })
        .catch((error)=> {
            dispatch(handleAuthenticationErrors(error))
            console.log(error)
        })
    }
    async function handleUserLogout(){
        console.dir(app.currentUser);
        app.currentUser ?.logOut().then(()=>{
            dispatch(handleLogout())
            console.log( "user log out")
        })
        .catch((err)=>console.log(err))
        handleLogout()
    }

    async function handleAuthentication(){
        const currentUSer = await app.currentUser 
        // dispatch(handleLogin(currentUSer))
    }
    return {
        handleUserRegistration,
        handleUserLogin,
        handleUserLogout,
        handleAuthentication
     }
   

}
export default useAuthentication
