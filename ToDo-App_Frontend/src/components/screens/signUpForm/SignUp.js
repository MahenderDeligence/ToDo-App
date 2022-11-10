import React, { useState } from 'react';
import './signUp.css';
import axios from "axios";

const SignUp = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,//spread operator 
            [name]: value
        })
    }
    //register function 

    const register = () => {
        const { name, email, password } = user
        if (name && email && password) {
            axios.post("http://localhost:8000/user/register", user)
                .then(res => console.log(res))
        }
        else {
            alert("invalid input")
        }
    }


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
                        <input type='text' name="name" value={user.name} onChange={handleChange} placeholder='username' />
                        <input type='text' name="email" value={user.email} onChange={handleChange} placeholder='email' />
                        <input type='text' name="password" value={user.password} onChange={handleChange} placeholder='password' />
                        {/* <input type='text' name="name" value={user.name} onChange={handleChange} placeholder='Confirm password' /> */}
                    </div>
                    <div className='buttons'>
                        <input className='signUpBtn' type='submit' value='Sign Up' onClick={register} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SignUp