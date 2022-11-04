import React from 'react';
import './signUp.css';

const SignUp = () => {
    return (
        <div className='formBg'>
            <div className='signUp'>
                <div className='form_lt'>
                    <span>
                        <h1>Sign Up</h1>
                        <p>Create an account on ToDoList. </p>
                        <p>Write your tasks anytime anywhere.</p>
                        <p>Already have an account?</p>
                        <a href='/login'>Login</a>
                    </span>

                </div>
                <div className='form_rt'>
                    <div className='inputFields'>
                        <input type='text' placeholder='username' />
                        <input type='text' placeholder='email' />
                        <input type='text' placeholder='password' />
                        <input type='text' placeholder='Confirm password' />
                    </div>
                    <div className='buttons'>
                        <input className='signUpBtn' type='submit' value='Sign Up' />
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

export default SignUp