import React from 'react';
import './loginForm.css';



const LoginForm = () => {
    return (
        <div className='formBg'>
            <div className='login'>
                <div className='login_form_lt'>
                    <span>
                        <h1>Login</h1>
                        <p>Log in and start creating your next task </p>
                        <p>Do not have an account?</p>
                        <a href='/signup'>SignUp</a>
                    </span>

                </div>
                <div className='login_form_rt'>
                    <div className='login_form_rt_inputFields'>
                        <input type='text' placeholder='username' />
                        <input type='text' placeholder='password' />
                    </div>
                    <div className='login_form_rt_buttons'>
                        <input className='loginBtn' type='submit' value='Login' />
                        <input className='forgotBtn' type='submit' value='Forgot Password?' />
                    </div>
                    {/* <div className='form__text'>
                        <span>Create an account?</span>
                        <span><a href='/login'>Sign up</a></span>
                    </div> */}
                </div>
            </div>
        </div>

    )
}

export default LoginForm