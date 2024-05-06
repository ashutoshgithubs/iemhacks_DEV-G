import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import * as Icons from "react-icons/vsc";
import { logout } from "../../services/operations/authApi";
import { VscSignOut } from "react-icons/vsc";

// import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from "../../data/navbar-links";
import { sidebarLinks } from "../../data/dashboard-links";
import { apiConnector } from "../../services/apiconnector";
import { category } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import LogoutModal from "./LogoutModal";
import ProfileDropDown from "../core/auth/ProfileDropDown";

// import {ImCross} from "react-icons/im"
export default function SmallScreenNavbar({ handleCrossButton, isClose }) {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(null);

  // const windowWidth = useRef(window.innerWidth);
  // console.log("--------window-width----", windowWidth);
  // const [smallScreen, setSmallScreen] = useState(false);
  // const [isClose, setIsClose] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await apiConnector("GET", category.CATEGORY_API);
        // console.log("Category response print here : ", response);
        setSubLinks(response.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    })();
  }, []);

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  // const handleCrossButton = () => {
  //   isClose = isClose ? setIsClose(false) : setIsClose(true);
  //   // smallScreen = smallScreen ? setSmallScreen(false) : setSmallScreen(true);
  // }
  // const Icon = Icons[iconName]

  return (
    <div
      className={`moving-div-left
      flex flex-col md:hidden fixed right-0 top-[57px] h-screen  justify-center border-l-[1px] rounded-lg z-[1000]
      border-l-richblack-700 w-[60%]  ${
        location.pathname !== "/" ? "bg-richblack-800" : "bg-richblack-900"
      } transition-all duration-200 `}
    >
      {/* ${isClose ? "moving-div-left" : "moving-div-right"} */}
      <div
        className={`flex flex-col ${
          location.pathname !== "/" ? "bg-richblack-800" : "bg-richblack-900"
        }  relative  w-[100%] h-[95%] 
         items-center gap-5`}
      >
        {/* Login / Signup / Dashboard */}
        <div className="items-center gap-y-2 flex flex-col">
          <div className="flex gap-4">
            {user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
              <Link to="/dashboard/cart" className="relative">
                <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                {totalItems > 0 && (
                  <span
                    className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden 
                rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-100"
                  >
                    {totalItems}
                  </span>
                )}
              </Link>
            )}
            {token !== null && <ProfileDropDown />}
          </div>

          {token === null && (
            <Link to="/login">
              <button
                className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[6px] py-[4px]
                z-[1000]        text-richblack-100"
                onClick={handleCrossButton}
              >
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button
                className="rounded-[8px] border border-richblack-700 bg-richblack-800
              z-[1000] px-[6px] py-[4px] text-richblack-100"
                onClick={handleCrossButton}
              >
                Sign up
              </button>
            </Link>
          )}
        </div>

        {token === null && (
          <div className="w-[100%] h-[1px] bg-richblack-700 -mb-10"></div>
        )}

        {token !== null && (
          <div className="w-[100%] h-[1px] bg-richblack-700 "></div>
        )}

        {/* DASHBOARD LINKS */}
        <nav className="block">
          <ul className="flex flex-col gap-y-2 text-richblack-25 font-semibold">
            {sidebarLinks.map((link) => (
              /* const Icon = Icons[{link?.icon}]; */
              <li key={link?.id}>
                {link.name === "My Profile" && token !== null ? (
                  <Link to={link?.path}>
                    <div>
                      {/* //icon  */}
                      {/* {link.icon} */}

                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {link?.name}
                      </p>
                    </div>
                  </Link>
                ) : (
                  token !== null &&
                  link?.type === user?.accountType && (
                    <Link to={link?.path}>
                      <div
                        className={`${
                          link.name === "Enrolled Courses" ? "-mt-6" : ""
                        }`}
                      >
                        {/* //icon  */}
                        {/* {link.icon} */}
                        {/* <Icon />  */}
                        <p
                          className={`${
                            matchRoute(link?.path)
                              ? "text-yellow-25"
                              : "text-richblack-25"
                          }`}
                        >
                          {link?.name}
                        </p>
                      </div>
                    </Link>
                  )
                )}
              </li>
            ))}
            <div
              className={` ${
                token !== null && user?.accountType === ACCOUNT_TYPE.STUDENT
                  ? "mt-3"
                  : "-mt-3"
              }
           w-[90%]  h-[1px] bg-richblack-700 `}
            ></div>
            {token !== null && (
              <>
                <Link to="/dashboard/settings">
                  <button onClick={handleCrossButton}>
                    <div>
                      {/* //icon  */}
                      {/* {link.icon} */}
                      {/* <Icon />  */}
                      <p
                        className={`${
                          matchRoute("/dashboard/settings")
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        Settings
                      </p>
                    </div>
                  </button>
                </Link>
                <button
                  onClick={() =>
                    setModal({
                      text1: "Are you ready to say goodbye?",
                      text2: "Your will be logged out after this.",
                      btn1Text: "Logout",
                      btn2Text: "Cancel",
                      btn1: () => dispatch(logout(navigate)),
                      btn2: () => setModal(null),
                    })
                  }
                  className={` ${
                    token !== null && user?.accountType === ACCOUNT_TYPE.STUDENT
                      ? "mr-16"
                      : "mr-8"
                  }`}
                >
                  {/* <div className="flex items-center gap-x-2"> */}
                  {/* <VscSignOut className="text-lg" /> */}
                  {/* <span> */}
                  Logout
                  {/* </span> */}
                  {/* </div> */}
                </button>
              </>
            )}
          </ul>
        </nav>

        {token !== null && (
          <div className="w-[100%] h-[1px] bg-richblack-700 "></div>
        )}

        {/* Navigation links */}
        <nav className="block font-semibold -ml-6">
          <ul className="flex flex-col gap-y-3 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="relative flex items-center gap-2 group">
                    <p>{link.title}</p>
                    <BsChevronDown />
                    <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                      <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : subLinks.length ? (
                        <>
                          {subLinks
                            ?.filter((subLink) => subLink?.course?.length > 0)
                            ?.map((subLink, i) => (
                              <Link
                                to={`/catalog/${subLink.name
                                  .split(" ")
                                  .join("-")
                                  .toLowerCase()}`}
                                className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                key={i}
                              >
                                <p>{subLink.name}</p>
                              </Link>
                            ))}
                        </>
                      ) : (
                        <p className="text-center">No Courses Found</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {modal && <LogoutModal data={modal} />}
    </div>
  );
}
