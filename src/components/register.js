import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Register = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErr, setEmailErr] = useState(false);
  const [pwdError, setPwdError] = useState(false);
  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
  
  const navigate = useNavigate()
  const validate = () => {
    if (!validEmail.test(email)) {
       setEmailErr(true);
       return false
    }
    if (!validPassword.test(password)) {
       setPwdError(true);
    }
    if(!validPassword.test(password)||!validEmail.test(email)){
        return false
    }else{
        return true
    }
 };

  const onButtonClick = () => {
    // You'll update this function later...
    const validation = validate(email)
    if(validEmail.test(email)){
        axios.post('http://localhost:3000/auth/register',{email,password})
      .then(response => {
        console.log('registered successfully')
      })
      .catch(error => {
        console.error(error);
      });
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Register</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailErr?'provide correct email format':''}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{pwdError?'provide more secure password':""}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Register'} />
      </div>
    </div>
  )
}

export default Register