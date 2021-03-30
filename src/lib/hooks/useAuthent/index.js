import * as Realm from "realm-web"
// import resolve from "resolve"
import {app} from "../../Mongo/Mongo-sdk/index"
import {useMutation} from '@apollo/client'
import { ADD_USER } from '../../../lib/apollo/mutation'


import { handleLogin, handleLogout, handleAuthenticationErrors } from "../../redux/actions/authentication"

const useAuthentication = (dispatch) =>{
    const [addUser, { data }] = useMutation(ADD_USER);

    function handleUserRegistration(newUser){     
        return new Promise((resolve =>{
            app.emailPasswordAuth
            .registerUser(newUser.email, newUser.password)
            .then(()=>{
                const credentials = Realm.Credentials.emailPassword(newUser.email, newUser.password);
                app.logIn(credentials)
                .then(user =>{
                    dispatch(handleLogin(user))
                    addUser({ variables: { email: newUser.email, password: newUser.password } });
                    resolve(user)
                })
            })
            .catch((error)=>{
                dispatch(handleAuthenticationErrors(error))
                console.log(error)
            })
       
        }))
    }
    async function handleUserLogin( username, password){
        return new Promise((resolve)=>{
            app
            .logIn(Realm.Credentials.emailPassword(username,password))
            .then(async () =>{

                const currentUser = await app.currentUser;
                dispatch(handleLogin(currentUser))
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
        app.currentUser ?.logOut().then(()=>console.log( "user log out"))
        .catch((err)=>console.log(err))
        handleLogout()
    }

    async function handleAuthentication(){
        const currentUSer = await app.currentUser 
        dispatch(handleLogin(currentUSer))
    }
    return {
        handleUserRegistration,
        handleUserLogin,
        handleUserLogout,
        handleAuthentication
     }
   

}
export default useAuthentication
