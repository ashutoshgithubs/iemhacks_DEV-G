
![Alt Text](https://github.com/BipulRahi/iemhacks_DEV-G/blob/main/programmer.gif)
# DEV-G EdTech Project

Welcome to the README for the DEV-G EdTech project developed during the IEMHACKS hackathon. This project is a comprehensive MERN Stack application that focuses on creating a seamless learning experience for users, instructors, and administrators. It incorporates robust security measures to ensure the protection of user data. Below, you'll find an overview of the project, its features, technologies used, setup instructions, security measures, and payment gateway integration details.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Security Measures](#security-measures)
- [Payment Gateway Integration](#payment-gateway-integration)

## Introduction
The DEV-G EdTech project is an innovative solution aimed at revolutionizing online education. It offers a user-friendly platform where instructors can create and organize courses, while users can easily access and purchase these courses. The project ensures a secure environment for all users, implementing various security features to safeguard sensitive information.

## Features
- User, Instructor, and Admin Functions: Different user roles are supported, each with their own set of functionalities.
- Course Creation and Organization: Instructors can create courses, organize content, and manage course materials.
- User Account Creation: Users can create accounts with OTP verification for enhanced security.
- Course Purchasing: Users can conveniently purchase courses through the integrated Razorpay payment gateway.
- Security Enhancements: SHA-256 and HMAC algorithms are utilized to provide robust data security.

## Technologies Used
- MERN Stack: MongoDB, Express.js, React, and Node.js form the core of the application.
- Razorpay: Integrated for secure payment processing.

## Setup Instructions
1. Clone the repository: `git clone https://github.com/yourusername/dev-g-edtech.git`
2. Navigate to the project directory: `cd dev-g-edtech`
3. Install dependencies for the server: `cd server && npm install`
4. Configure environment variables: Rename `.env.example` to `.env` and fill in your configuration details.
5. Start the server: `cd ../server && npm start`
6. Start the client: `cd ../client && npm start`
7. Access the application in your web browser at `http://localhost:3000`

## Security Measures
- OTP Verification: User accounts are verified using one-time passwords during registration.
- Hashing Algorithms: SHA-256 is employed to securely hash sensitive data like passwords.
- HMAC Algorithm: HMAC (Hash-based Message Authentication Code) ensures data integrity and authenticity.

## Glimpse of DEV_G
<img src="https://github.com/BipulRahi/iemhacks_DEV-G/blob/a48e0dad43a405cc60c20c2509f03d50dc360f56/home%20page.jpeg" alt="Home page">
*Thank you for being a part of the DEV-G EdTech project.*
