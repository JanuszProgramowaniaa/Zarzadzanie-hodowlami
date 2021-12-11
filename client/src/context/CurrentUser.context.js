import React,{Component} from "react";
import axios from "axios"
const CurrentUserContext = React.createContext();

export class CurrentUserProvider extends Component{

async fetchUser(Login,Password){
    const res=await axios.get('http://localhost:5000/api/user/'+Login)
    const users =res.data
    if(users!=null){
        if(users.Password===Password && users.Login===Login )
  
    this.setState({user:{name:users.Name}})  
    }
  
 


   
    

    
    

}

 state={
     user:null,
     login:null,
 }

 login=(Login,Password) =>{

     this.fetchUser(Login,Password)




 }

logout =()=>{
    this.setState({user:null}) 
    this.setState({error:null}) 
}

render(){
    const {children}= this.props;
    return(
<CurrentUserContext.Provider
value={{
    login:this.login,
    logout:this.logout,
    user:this.state.user
}}
>
 {children}
</CurrentUserContext.Provider>

    )
}

}

export const CurrentUserConsumer= CurrentUserContext