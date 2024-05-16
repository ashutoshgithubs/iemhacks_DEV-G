import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Home from "./pages/Home";
import Navbar from "../src/components/common/Navbar";
import OpenRoute from "./components/core/auth/OpenRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import VarifyEmail from "./pages/VarifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import PrivatePath from "./components/core/auth/PrivatePath";
import Myprofile from "./components/core/Dashboard/Myprofile";
import Error from "./pages/Error";
import { useDispatch, useSelector } from "react-redux";
import { ACCOUNT_TYPE } from "./utils/constants";
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses";
import Settings from "./components/core/Dashboard/Settings/index";
import AddCourse from "./components/core/Dashboard/AddCourse";
import MyCourses from "./components/core/Dashboard/MyCourses";
import EditCourse from "./components/core/Dashboard/EditCourse";
import Catalog from "./pages/Catalog";
import CourseBuyPage from "./pages/CourseBuyPage";
import Cart from "./components/core/Dashboard/Cart";
import { getUserDetails } from "./services/operations/profileApi";
import CourseDekho from "./pages/CourseDekho";
import VideoDetails from "./components/core/ViewCourse/VideoDetails";
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";
import TopHome from "./pages/TopHome";
import { motion } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.profile);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"));
      dispatch(getUserDetails(token, navigate));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { pathname } = useLocation();

  const [isVisible, setisVisible] = useState(false);

  const handleFacingIssue = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact")
  }

  const scrollToTop =() => {
    if (window.scrollY > 200) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return () => {
      window.removeEventListener("scroll", scrollToTop);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<TopHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/catalog/:catalogName" element={<Catalog />} />
        <Route path="/courses/:courseId" element={<CourseBuyPage />} />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VarifyEmail />
            </OpenRoute>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="/update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/about"
          element={
              <About />
          }
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          element={
            <PrivatePath>
              <Dashboard />
            </PrivatePath>
          }
        >
          <Route path="/dashboard/my-profile" element={<Myprofile />} />
          <Route path="/dashboard/Settings" element={<Settings />} />
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="dashboard/cart" element={<Cart />} />
            </>
          )}

          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
        </Route>
        <Route
          element={
            <PrivatePath>
              <CourseDekho />
            </PrivatePath>
          }
        >
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
                element={<VideoDetails />}
              />
            </>
          )}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

      { isVisible && (<motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.05, originX: 0, color: "#f8e112" }}
        transition={{opacity: {duration: 0.2}}}
        className="my-12 fixed bottom-4 right-4 bg-[#766c82] text-white font-medium text-3xl p-4 text-white100 rounded-full drop-shadow-x"
        ><FaArrowUp /></motion.button>)}

      {pathname !== "/" && (
        <motion.button
        whileHover={{ scale: 1.05, originX: 0, color: "#f8e112" }}
        transition={{ type: "spring", stiffness: 200 }}
        style={{
          position: "fixed",
          bottom: 16, 
          right: 20, 
          zIndex: 10000000,
        }}
        className="bg-[#766c82] 
        text-white font-medium p-2 text-white100 px-6 rounded-l-full
        rounded-t-full drop-shadow-xl flex items-center gap-x-3"
        onClick={handleFacingIssue}
      >
        🤔Facing an issue?
      </motion.button>
      
      )}
    </div>
  );
}

export default App;
