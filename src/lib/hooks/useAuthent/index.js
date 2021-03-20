import * as Realm from "realm-web"
import resolve from "resolve";
import {app} from "../../Mongo/Mongo-sdk/index"


const useAuthentication = () =>{
    function handleUserRegistration(newUser){     
        return new Promise((resolve =>{
            app.emailPasswordAuth
            .registerUser(newUser.email, newUser.password)
            .then(()=>{
                const credentials = Realm.Credentials.emailPassword(newUser.email, newUser.password);
                app.logIn(credentials)
                .then(user =>{
                    resolve(user)
                })
            })
            .catch((error)=>{
                console.log(error)
            })
       
        }))
    }
    async function handleUserLogin(username, password){
        return new Promise((resolve)=>{
            app
            .logIn(Realm.Credentials.emailPassword(username,password))
            .then(async () =>{
                const currentUser = await app.currentUser;
                resolve(currentUser)

            })
        })
        .catch((error)=> console.log(error))
    }
    async function handleUserLogout(){
        console.dir(app.currentUser);
        app.currentUser ?.logOut().then(()=>console.log( "user log out"))
        .catch((err)=>console.log(err))
    }

    async function handleAuthentication(){
        const currentUSer = await app.currentUser 
    }
    return {
        handleUserRegistration,
        handleUserLogin,
        handleUserLogout
     }
   

}
export default useAuthentication
