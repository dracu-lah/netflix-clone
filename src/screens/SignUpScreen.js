import React, { useRef } from 'react'
import { auth } from '../firebase';

import './SignUpScreen.css'
function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  
  const register = (e) => {
    e.preventDefault(); // to prevent refreshing of forms

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      // console.log(authUser); checking in browser console if it is working or not
    }).catch(error => {
      alert(error.message);
    });

  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      // console.log(authUser); checking in browser console if it is working or not
    }).catch((error) => alert(error.message));
  };

  return (
    <div className='signup__screen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button onClick={signIn} type='submit'>Sign In</button>
        <h4><span className='signup__screenGray'>New to Netflix? </span><span className='signup__screenLink' onClick={register}>Sign Up now.</span></h4>
      </form>
    </div>
  )
}

export default SignUpScreen