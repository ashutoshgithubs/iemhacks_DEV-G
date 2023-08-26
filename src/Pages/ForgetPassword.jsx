import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPasswordResetToken } from '../Services/operations/authAPI'
import './s.css'
const ForgetPassword = () => {
    const [emailsent,setemailsent]=useState(false)
    const[email,setemail]=useState("")
    const Dispatch=useDispatch()
    const {loading}=useSelector((state)=>(state.auth))
    
    const handlesumbit=(e)=>{
        e.preventDefault()
        Dispatch(getPasswordResetToken(email,setemailsent))
    }
  return (
    <div className='text-white  flex flex-col justify-center items-center min-h-screen '>
        {
            loading ? (
                <div>
                    <div class="spinner"></div>
                </div>
            ):(
                <div>
                <h1>
                    {
                        !emailsent ? "Reset Your Password":"Check Your Email"
                    }    
                </h1>   
                <p>
                {
                    !emailsent ? `Have no fear We will send your instruction to Reset your password . if you don't access to your Email thenn we will try account recovery`:
                    `we sent the reset steps to the ${email}`
                }
                </p> 
                <form onSubmit={handlesumbit}>
                    {
                        !emailsent &&(
                            <label>
                                <p>Enter your Email Address</p>
                                <input
                                className='text-richblack-400' 
                                type='email'
                                name='email'
                                value={email}
                                onChange={(e)=>setemail(e.target.value)}
                                placeholder='Enter your email address'
                                required
                                />
                            </label>
                        ) 
                    }

                    <button type='sumbit'>
                        {
                            !emailsent ? "Reset Password":"Resend Email"
                        }
                    </button>
                </form>

                <div>
                    <Link to='/login'>
                        <p className='bg-white inline'>Back to Login</p>
                    </Link>
                </div>
                </div>
            )
        }
    </div>
  )
}

export default ForgetPassword