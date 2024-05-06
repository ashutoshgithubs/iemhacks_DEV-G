import React from "react";
import signupImg from "../assets/Images/img2 (1).jpeg";
import Template from "../components/core/auth/Template";
export default function Signup() {
  return (
    <Template
      title="Join the millions learning to code with DEV-G for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={signupImg}
      formType="signup"
    />
  );
}
