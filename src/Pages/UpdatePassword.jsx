import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./s.css";
import { resetPassword } from "../Services/operations/authAPI";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai"


const UpdatePassword = () => {
    const [formdata,setformdata]=useState({
        password:'',
        confirmPassword:''
    })

    
    const location=useLocation()
    const navigate=useNavigate()
    const dispatch=useDispatch()
  const { loading } = useSelector((state) => state.auth);
  const [showpassword,setshowpassword]=useState(false)
  const [showConfirmpassword,setshowConfirmpassword]=useState(false)
  

  const handleronchange=(e)=>{
    setformdata((predata)=>(
        {
            ...predata,
            [e.target.name]:e.target.value
        }
    ))
  }

  const {password,confirmPassword}=formdata

  const handleOnSumbit=(e)=>{
    e.preventDefault();
    const token=location.pathname.split('/').at(-1)
    dispatch(resetPassword(password,confirmPassword,token,navigate))
}

  return (
    <div>
      {loading ? (
        <div>
          <div className="spinner" />
        </div>
      ) : (
        <div>
          <h1>Choose a New Password</h1>
          <p>Almost done , Enter a New password and We all Set</p>
          <form onSubmit={handleOnSumbit}>
            <label>
                <p>Enter new password</p>
                <input
                type={showpassword ? 'text':'password'}
                required
                name="password"
                value={password}
                onChange={handleronchange}
                    />
                <span 
                onClick={setshowpassword((prev)=>!prev)}
                >
                    {
                        showpassword ? <AiFillEye/>:<AiFillEyeInvisible/>
                    }
                </span>
            </label>
            <label>
                <p>Enter Confirm password</p>
                <input
                type={showConfirmpassword ? 'text':'password'}
                required
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleronchange}
                    />
                <span 
                onClick={setshowConfirmpassword((prev)=>!prev)}
                >
                    {
                        showConfirmpassword ? <AiFillEye/>:<AiFillEyeInvisible/>
                    }
                </span>
            </label>
            <button type="sumbit">
                Reset password
            </button>
          </form>
          <div>
            <Link to='/login'>
                <p>Try to Login</p>
            </Link>
            </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
