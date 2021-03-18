import * as Realms from "realm-web"
import resolve from "resolve";
import {app} from "../../Mongo/Mongo-sdk/index"


const useAuthenticate = () =>{
    function handleUserRegistration(userLog){     
        return new Promise((resolve =>{
            app.emailPasswordAuth
            .registerUser(userLog.email, userLog.password)
            .then(()=>{
                const credentials = Realm.Credentials.emailPassword(userLog.email, userLog.password);
                app.logIn(credentials)
                .then(user =>console.log(user))
            
                
            
            })
       
        }))
    }
   

}
