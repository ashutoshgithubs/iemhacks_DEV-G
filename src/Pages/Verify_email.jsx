import React, { useState,useEffect } from "react";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../Services/operations/authAPI";

const Verify_email = () => {
  const { signupData,loading } = useSelector((state) => state.auth);
  const [otp, setotp] = useState("");
  const dispatch = useDispatch();
const navigate=useNavigate()

useEffect(() => {
  
if (!signupData) {
    navigate('/signup')
}
 
}, [])

  const HandleOnSumbit=(e)=>{
    e.preventDefault()
    const {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    }=signupData

    dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate))
  }
  return (
    <div className="flex justify-center items-center text-white mt-[150px]">
      {loading ? (
        <div></div>
      ) : (
        <div>
          <h1 className="text-xl font-inter">Verify Email</h1>
          <p className="text-xl font-inter mb-7">
            A verification Code is send to your mail Please check and write code
            below
          </p>
          <form onSubmit={HandleOnSumbit}>
            <OTPInput
 
              value={otp}
              onChange={setotp}
              numInputs={6}
              renderSeparator={<span className="m-3">-</span>}
              renderInput={(props) => <input  {...props} className="text-white bg-richblack-800 text-2xl" />}
            />
            <button type="sumbit" className="mt-5">Verification Email</button>
          </form>

          <div>
            <div>
              <Link to="/login">
                <p>Back to Login</p>
              </Link>
            </div>
            <button onClick={()=>{dispatch(sendOtp(signupData.email,navigate))}}>
              <div>Resend it</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verify_email;
