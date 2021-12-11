import React,{useState} from "react"
import {Grid,Paper,Avatar,TextField,Button, Typography,Link} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { CurrentUserConsumer } from "../../context/CurrentUser.context";


export const Login = () =>{
  const paperStyle={padding:50, width:300, margin:"20px auto"}
  const avatarStyle={backgroundColor:"green"}
  const typographyStyle={fontSize:"13px"}
  const btnStyle={margin:"20px 0"}
  const logstyle={margin:"0 auto",textAlign:"center"}

  const [isLogin,setLogin]=useState("")
  const [isPassword,setPassword]=useState("")
  const [checkbox,setCheckbox]=useState(false)

  const handleChangeLogin= e =>{
    setLogin(e.target.value)
  }
  const handleChangePassword= e =>{
    setPassword(e.target.value)
  }
  const handleChangeCheckbox= () =>{
    setCheckbox(!checkbox)
  }


  

return(
<CurrentUserConsumer>
  {({user,login,error})=>(
 <div>
  {!user?
    <Grid>
    <Paper elevation={10} style={paperStyle}> 
    <Grid align="center"> 
    <Avatar style={avatarStyle}> <LockOutlinedIcon/> </Avatar>
    <h2>Logowanie</h2>
    </Grid>

    <TextField label="Login" placeholder="Wprowadź Login " fullWidth required value={isLogin} onChange={handleChangeLogin} />
    <TextField label="Hasło" placeholder="Wprowadź hasło " type="password" fullWidth required value={isPassword} onChange={handleChangePassword} />
   
    <FormControlLabel
        control={
          <Checkbox
            name="checkedone"
            color="primary"
             size="small"
             onClick={handleChangeCheckbox}
          />
        }
        label="Zapamiętaj"
      />
      <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle} onClick={()=>{login(isLogin,isPassword)}}  >Zaloguj się</Button>
    <div> {error}</div>
<Typography style={typographyStyle}>
<Link href="#">
Zapomniałeś hasła ?
</Link>
</Typography>
<Typography style={typographyStyle}>Posiadasz konto ?
<Link href="#">
Zarejestruj się
</Link>
</Typography>
    </Paper>
 
  </Grid>
  :
  <div style={logstyle}><h1>Już jesteś zalogowany</h1></div>
  }
  </div>
  )}

</CurrentUserConsumer>
);
};

