import React, {useState} from 'react'
import { Typography } from '@mui/material'
import { TextField } from '@mui/material'
import { Link } from '@mui/material'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import './register.css'
import { userSignup } from '../../store/slices/user-slice'

const Register = ({setRegister, register}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [mobile,setMobile] = useState('')

  const user = useSelector(store=>store.user)

  console.log(user)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const  handleSubmit = async (event) => {
    event.preventDefault()

    const body = {
      name:name,
      email:email,
      password:password,
      countryCode:countryCode,
      mobile:mobile,
    }

    dispatch(userSignup(body)).then((res)=>{
      if(res.meta.requestStatus=="fulfilled"){
        navigate('/profile')
      }
    })

  }

  return (
    <div className="registrationFormContainer">
      <Typography variant="h3" style={{textAlign:"center"}}>Sign Up</Typography>
      <form className="registrationForm" onSubmit={handleSubmit}>
      <TextField
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          label="Email"
          className="signupInputs"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          className="signupInputs"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <div style={{display:'flex'}}>
         <TextField
          id="country_code"
          name="country_code"
          label="Country Code"
          type="country_code"
          className="signupInputs"
          value={countryCode}
          onChange={(e)=>setCountryCode(e.target.value)}
          style={{marginRight:'10px'}}
        />
        <TextField
          fullWidth
          id="mobile"
          name="mobile"
          label="Mobile"
          type="mobile"
          className="signupInputs"
          value={mobile}
          onChange={(e)=>setMobile(e.target.value)}
        />
       </div>
       <div className="linkText">
            <Link to="#" type='button' onClick={()=>setRegister(false)}>
                <Typography  variant="caption" style={{cursor:"pointer"}}>Already have an account? Sign-In</Typography>
            </Link>
        </div>
        <Button className="signupButton" variant="contained" fullWidth type="submit">
          Submit
        </Button>   
       </form>
      </div>
  )
}

export default Register