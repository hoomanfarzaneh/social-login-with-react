import React from 'react'

export const Login = () => {
    const google = () =>{
        window.open("http://localhost:5000/auth/google", "_self")
    }
    const github = () =>{
        window.open("http://localhost:5000/auth/github", "_self")
    }
  return (
    <div className='login'>
        <h1 className='loginTitle'>Choose a login method:</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginButton google" onClick={google}>
                <i class="icon fa-brands fa-google"></i>Google
                </div>
                <div className="loginButton facebook">
                <i class="icon fa-brands fa-facebook"></i>Facebook
                </div>
                <div className="loginButton github" onClick={github}>
                <i class="icon fa-brands fa-github"></i>Github
                </div>
            </div>
            <div className="center">
                <div className='line' />
                <div className="or">OR</div>
            </div>
            <div className="right">
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password' />
                <button className='submit'>Login</button>
            </div>
        </div>
    </div>
  )
}
