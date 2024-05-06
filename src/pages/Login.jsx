import React from "react";
import Template from "../components/core/auth/Template";
import loginImg from "../assets/Images/login2.jpg";

export default function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
    />
  );
}
