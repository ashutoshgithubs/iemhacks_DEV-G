import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import Error from "./Pages/Error";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgetPassword from "./Pages/ForgetPassword";
import UpdatePassword from "./Pages/UpdatePassword";
import Verify_email from "./Pages/Verify_email";
import Abobut from "./Pages/Abobut";
function App() {
  return (
    <div className="w-screen  min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route path="/error" element={<Error />} />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgetPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword/>
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <Verify_email/>
            </OpenRoute>
          }
        />
        <Route
          path="about"
          element={
            <OpenRoute>
            <Abobut/>
            </OpenRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
