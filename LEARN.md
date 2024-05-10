 <div align="center">
<img src="https://res.cloudinary.com/dy4lvqyuv/image/upload/v1690910300/Ashutosh/qf5xxhht592oo9m5k9hq.png" alt="image" border="0"/>
</a></div>

# DEV-G  <a name="dev"></a>
> ## [visit to DEV-G](https://edtech-dev-g-frontend.vercel.app/)


Welcome to the[ **LEARN.md**](https://github.com/ashutoshgithubs/iemhacks_DEV-G/blob/main/LEARNME.md) for the **DEV-G** EdTech project

This is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS

This guide will walk you through setting up and building your own instance of **DEV-G** whether you're a seasoned developer or just starting out, we'll provide clear instructions and helpful tips to get you up and running. This ` LEARN.md` will equip you with the knowledge to set up and build your own instance of  DEV-G. We'll provide step-by-step instructions and helpful tips, whether you're a coding veteran or just embarking on your development journey.


## Table of Contents 
- [Introduction ](#dev)
- [What You’ll Conquer ](#what)
- [Prerequisites](#pre)
-  [Gearing Up for Development  Setup](#set)
- [Resources ](#res)
- [Contributions Guidelines](#guide)
 - [Deep Dive and Customization ](#deep)
 - [Troubleshooting](#tro)
 - [Message from Project Admin](#admin)
- [License](#lic)



## **What You'll Conquer** <a name="what"></a>

-   A comprehensive understanding of `DEV-G` and its core functionalities.
-   A solid grasp of the technologies powering the project.
-   The ability to:
    -   Configure your development environment for success.
    -   Clone the repository with ease.
    -   Install all the necessary dependencies effortlessly.
    -   Build the project with confidence.

## **Prerequisites** <a name="pre"></a>

-  **EDITOR** :  Have familiar with some  text editor or IDE ( Visual Studio Code )
- **Gear Up:** Make sure you have Node.js and npm installed on your system. You can grab them from the official website:  [https://nodejs.org/en/download](https://nodejs.org/en/download).
-   **MERN Stack Magic:** Having a basic understanding of ReactJS, NodeJS, MongoDB, and ExpressJS will definitely give you a head start. But don't worry if you're new to some of these - we'll provide pointers along the way!

## **Gearing Up for Development  Setup** <a name="set"></a>

    
If you're new to DEV-G ,  then start with 

  1. **Clone the Repository:**
-   Open your terminal or command prompt.
   -   Navigate to the directory where you'd like to clone the repository.
    -   Execute this command:



This will create a local copy of the project's codebase on your machine.
	   
	
	git clone https://github.com/ashutoshgithubs/iemhacks_DEV-G.git
   
    

 Navigate to the project directory:
 
	 cd iemhacks_DEV-G
  
  2 . **Install Dependencies**:
  
 ```bash
    npm install
  ```
    
 3 .**Manage the required keys and enviroment variables  for the local host running**  :
 
> Here's how to manage links, API keys, and variables from the `.env.sample` file:

--   **Locate the `.env.sample` file:** This file typically resides in the root directory of the  project. It serves as a template for your actual `.env` file, which will contain sensitive information.
    
-- **Create the `.env` file:** Make a copy of the `.env.sample` file and name it `.env`. This file should **not** be committed to version control (e.g., Git) to prevent exposing sensitive data publicly , when you mergeing with the PR
   
  -- **Fill in the variables:** Open the `.env` file with a text editor. Each line in the file should follow the format:
    
    VARIABLE_NAME=value
    
   Replace `VARIABLE_NAME` with the actual name of the variable from the `.env.sample` file and `value` with the appropriate value you obtained from the respective website.
    
  - **Links:** For links (URLs), simply paste the URL directly as the value.
   
   - **API Keys:** Obtain API keys from the website or service that provides them. These are often found in your account settings or developer dashboard.

Suppose the `.env.sample` file contains the following lines:

```
# Replace with your actual API key
MY_API_KEY=YOUR_API_KEY

# Replace with the base URL of the service
BASE_URL=https://api.example.com/ {YOUR SERVICE LINK}

```

You would replace these lines in the `.env` file with:

``` 
MY_API_KEY = geyv2ur7bso4y8wni { dummmy }
PORT = 4000
BASE_URL="mongodb://localhost:27017" { link your local mongodb }
```

    ```
4 . **Fire Up the  Development Server**:

>  It's time to see our creation come to life!  Run following Command 
```bash 
npm run dev
```
 in your terminal. This will start the development server and open the application in your default web browser (usually at http://localhost:3000).
   
5 .**Understanding the Codebase  :**

This section gives you a high-level overview of the project structure. We have a clear separation between the frontend (built with ReactJS) in `Main/src` directory  and the backend (built with NodeJS, ExpressJS, and MongoDB) in ` Server` directory . If you're new to these concepts, don't hesitate to explore online resources or documentation for a deeper understanding.



## Resources <a name="res"></a>

### Documentation

- [ReactJS Documentation](https://react.dev/): Learn more about ReactJS, the library used to build the frontend of DEV-G
- [TailwindCSS Documentation](https://tailwindcss.com/docs): Explore the documentation to understand how TailwindCSS is used for styling in DEV-G.
- [Razorpay Documentation](https://razorpay.com/docs/#home-payments): Dive into the Razorpay documentation to understand how to make transactions with  Apis and how to make verify the transaction signature of a transaction
functionality.
- [Mongoose Documentation](https://mongoosejs.com/docs/) : While not directly mentioned in the previous list, Mongoose is an Object Data Modeling (ODM) library that simplifies interacting with MongoDB from Node.js code. it give the structure to mongo db and act as a bridge between node and mongodb.
- [Node.js Documentation ](https://nodejs.org/en)  :  Node.js runs JavaScript code outside of a browser, powering the backend of DEV-G EdTech.
- [Express.js Documentation](https://expressjs.com/) : - Provides a guide to understand how Express.js, a web application framework, is used to build the server-side logic for DEV-G EdTech.
-   [MongoDB Documentation](https://www.mongodb.com/docs/)  : the entries and details of user and courses , teachers are store in the mongodb atlas , MongoDB, a NoSQL database, stores information like courses, users, and enrollments 	in DEV-G EdTech. 
> mongodb compass for testing purpose 



- [Redux Documentation ](https://redux.js.org/) - it help in content management and state management through stores and  how Redux helps manage application state in a predictable way, especially for complex UIs.




## Contributions Guidelines <a name="guide"></a>

If you've got the coding idea and want to contribute to DEV-G EdTech's development, this section provides guidelines on how to fork the repository, create branches, and submit pull requests.

- Find  issues labeled by other contributers and the project admin   visit in our [issue tracker](https://github.com/ashutoshgithubs/iemhacks_DEV-G/issues) to start contributing. you can also create your own issue from your end if you find such issue 

***Make Your Changes:***
-   Now you're ready to dive into the code! Open the project in your favorite code editor.
-   Make your changes to the files following the project's coding conventions. (If there are no specific conventions documented, follow common JavaScript and React best practices.)

***Test the change you made :***
-   Run the development server (`npm run dev`) and test your modifications thoroughly. Make sure your changes don't introduce any new bugs or break existing functionalities.

***Commit Your Changes:***

-   Use Git to track your changes. Stage the modified files using `git add <filename>`           (or `git add .` to stage all changes).
-   Commit your staged changes with a descriptive commit message using `git commit -m "Your informative message here"`.

***Push Your Changes to Your Fork:***

-   Push your committed changes to your forked repository on GitHub using:
   
     ```  git push origin master```
    
***Create a Pull Request:***

-   Go to your forked repository on GitHub.
-   Click on the "Pull requests" tab and then "New pull request" button.
-   Select the branch containing your changes from the "Head" branch dropdown.
-   Leave the "Base" branch as "master" (assuming you're targeting the main codebase).
-   Write a clear and concise title and description explaining your changes and their purpose.
-   Click "Create pull request" to submit your changes for review.

***Review and Feedback:***

-   The project maintainers  will review your pull request and might request clarifications or suggest improvements.
-   Address any feedback promptly and make any necessary adjustments.

**Merging Your Changes:**

-   Once your pull request is reviewed and approved, the maintainers will merge your changes into the main DEV-G EdTech codebase. Congratulations, you've become a contributor! 🎉🎉


## **Deep Dive and Customization :** <a name="deep"></a>

This section is for those who want to take a peek under the hood and understand how specific features work. We can delve into functionalities like user registration, course creation, and payment processing. 
-   **User Registration Process:** Walk through the code that handles user registration, including form validation, password hashing, and user data storage in MongoDB.
-   **Course Creation:** Explore how instructors can create and manage their courses, including adding content, setting prices, and uploading videos.
-   **Payment Integration:** (If implemented) Understand how the Razorpay payment gateway is integrated to process course purchases securely.

We'll provide detailed explanations and code walkthroughs to quench your developer curiosity!

## **Troubleshooting:**<a name="tro"></a>

Getting error messages can be frustrating, but that's part of the learning process! We've compiled a list of common errors you might encounter and how to fix them. Additionally, feel free to explore resources like Stack Overflow or the project's issue tracker if you get stuck

***if you face errors like about version of node*** 
> update Node and npm 

***and  for package related errors   :*** 
>   **RUN**  the following command to solve package related problems  
``` Bash
 npm install
 @ramonak/react-progress-bar
 @reduxjs/toolkit
 axios
 chart.js
 concurrently
 copy-to-clipboard
 countapi-js
 framer-motion
 progressbar
 react
 react-chartjs-2
 react-dom
 react-dropzone
 react-hook-form
 react-hot-toast
 react-icons
 react-markdown
 react-otp-input
 react-rating-stars-component
 react-redux
 react-router-dom
 react-scripts
 react-super-responsive-table
 react-type-animation
 redux
 swiper
 video-react
 web-vitals
 ```


## Community<a name="commm"></a>

Join our community to connect with other DEV-G users, ask questions, and share your ideas and issues on :

- [Discussions](https://github.com/ashutoshgithubs/iemhacks_DEV-G/discussions/28)
- [Issues](https://github.com/ashutoshgithubs/iemhacks_DEV-G/issues)

## License <a name="lic"></a>

DEV-G  is licensed under the [MIT License](https://github.com/ashutoshgithubs/iemhacks_DEV-G/blob/main/LICENSE).




## Message from Project Admin <a name="admin"></a>

|<img src="https://res.cloudinary.com/anand-dev-12/image/upload/c_crop,w_700,h_700,ar_1:1,g_auto/v1714926145/uvafix3xrdxflzjfxehc.jpg"  height="100px" />  | <a href="https://github.com/ashutoshgithubs"><i>Ashutosh Kumar</i> </a><br>|
|--|--|
|  |  |



-   **Don't Be Afraid to Experiment:** Play around with the code, explore different features, and don't hesitate to ask questions if you get stuck. There's a vast developer community out there to help!
-   **Celebrate Milestones:** Learning takes time and effort, so pat yourself on the back for every step you take. Building a complete project is a big achievement!

We hope this LEARN.md equips you with the knowledge and confidence to build DEV-G EdTech. Happy coding, and welcome to the world of EdTech developments !




> want to go back to  top of this page Let 's go  ->  [😎 Go to Top  ](#dev)
