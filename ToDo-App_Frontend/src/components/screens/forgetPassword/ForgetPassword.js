import React from 'react';
import './forgetPassword.css';

const ForgetPassword = () => {
    return (
        <div className='formBg'>
            <div className='forgetPassword'>
                <div className='form_lt'>
                    <span>
                        <h1>Forgot Password</h1>
                        <p>No worries.We'll send you reset instructions. </p>
                    </span>

                </div>
                <div className='form_rt'>
                    <div className='inputFields'>
                        <input type='text' placeholder='email' />
                    </div>
                    <div className='buttons'>
                        <input className='resetBtn' type='submit' value='Reset Password' />

                    </div>
                    <div className='form__text'>
                            <p>Go back to <a href='/login'>Login</a> </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ForgetPassword