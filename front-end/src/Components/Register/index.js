import React, {useState} from "react"
import {Grid,Paper,Avatar,TextField,Button, Typography,Link} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Checkbox from '@material-ui/core/Checkbox';
export const Register = () =>{
  const paperStyle={padding:50, width:400, margin:"20px auto"}
  const avatarStyle={backgroundColor:"green"}
  const typographyStyle={fontSize:"13px"}
  const btnStyle={margin:"20px 0"}
  const FormControlStyle={margin:"20px 0 0 0"}

  const [login,setLogin]=useState("")
  const [email,setEmail]=useState("")
  const [gender,setGender]=useState("")
  const [telnumber,setTelnumber]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmPassword]=useState("")
  const [checkbox,setCheckbox]=useState(false)

const handleChangeLogin= e =>{
  setLogin(e.target.value)
}

const handleChangeEmail= e =>{
  setEmail(e.target.value)
}

const handleChangeGender= e =>{
  setGender(e.target.value)
}


const handleChangeTelnumber= e =>{
  setTelnumber(e.target.value)
}

const handleChangePassword= e =>{
  setPassword(e.target.value)
}
const handleChangeConfirmPassword= e =>{
  setConfirmPassword(e.target.value)
}
const handleChangeCheckbox= () =>{
  setCheckbox(!checkbox)
}




const wypisz=()=>{
  const dane=[];
  dane.push(login,email,gender,telnumber,password,confirmpassword,checkbox);
alert(dane)

}


return(
  <Grid>
    <Paper elevation={10} style={paperStyle}> 
    <Grid align="center"> 
    <Avatar style={avatarStyle}> <AccountCircleOutlinedIcon/> </Avatar>
    <h2>Rejestracja</h2>
    <Typography style={typographyStyle}>Proszę wypełnij poniższe dane aby utworzyć konto!</Typography>
    </Grid>
   
    <TextField label="Login" placeholder="Login" value={login} onChange={handleChangeLogin}  fullWidth required/>
    <TextField label="E-mail" placeholder="E-mail " type="E-mail" value={email} onChange={handleChangeEmail} fullWidth required/>

  <FormControl component="fieldset" style={FormControlStyle} >
      <FormLabel component="legend">Płeć</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" style={{display:"initial"}} onChange={handleChangeGender} >
        <FormControlLabel value="female" control={<Radio color="primary" />} label="Kobieta" />
        <FormControlLabel value="male" control={<Radio color="primary" />} label="Mężczyzna" />
      </RadioGroup>
    </FormControl>

    <TextField label="Numer telefonu" placeholder="Numer telefonu" type="Phone Number" fullWidth value={telnumber} onChange={handleChangeTelnumber} />
    <TextField label="Hasło" placeholder="Hasło " type="password" fullWidth required value={password} onChange={handleChangePassword} />
    <TextField label="Potwierdź hasło" placeholder="Potwierdź hasło " type="password" fullWidth required value={confirmpassword} onChange={handleChangeConfirmPassword} />
  
    <FormControlLabel
        control={
          <Checkbox
            name="checkedone"
            color="primary"
             size="small"
             onClick={handleChangeCheckbox}
          />
        }
        label="Akceptuje regulamin"
      />
      <Button type="submit" color="primary" variant="contained" fullWidth style={btnStyle} onClick={wypisz}  >Zarejestruj się</Button>

    </Paper>
 
  </Grid>
);
};

