import React, { useReducer } from 'react'
import { CurrentUserConsumer } from '../context/CurrentUser.context'
const Home=() =>{
return(
    
    <div style={{display:'flex',
     justifyContent:'center',
     alignItems:'center',
     height:'90vh',
     }}>
     <CurrentUserConsumer>
    {({user,logout})=>(
   <div>

        {user
       ?<div>Witaj {user.name}. <button onClick={logout}>Logout</button></div>
       :<div>Zaloguj się</div>
        }
</div>
    )

    
      
        
    }
    
    </CurrentUserConsumer>
    
    
        
    </div>

)


}

export default Home