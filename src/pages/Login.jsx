import React from 'react'
import'./Login.css'

const Login = () => {
  return (
    <><div className='containe'>
      <div className='contain'>
      <div className='s1'>Login</div>
      <form>
        <label htmlFor="" className='em'>Email:</label>
        <input type="email" placeholder='Enter email' className='emai' />
        <label htmlFor="" className='pas'>Password:</label>
        <input type="password" placeholder='Enter password' className='pass' />
        <label className='s3'><input type="checkbox" className='s2' />Show Password</label>
        <input type="submit" name="submit" value="SIGN IN" className="signin"></input>
        <div className='for'>Forgot <a href="" className='user'> Username/Password</a></div>
        <div className='don'>Don't have an account <a href="Signup" className='sig'> Sign up</a></div>
      </form>
    </div></div></>
  )
}

export default Login
