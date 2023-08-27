import React, { useEffect, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import logo from "../../assets/Logo/devlogo.png";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { apiConnect } from "../../Services/apiconnector";
import { categories } from "../../Services/apis";
import { AiOutlineDown } from "react-icons/ai";
const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();
  const matchroutes = (routes) => {
    return matchPath({ path: routes }, location.pathname);
  };

  // const subLinks = [
  //   {
  //     title: "Web dev",
  //     path: "/web",
  //   },
  //   {
  //     title: "App dev",
  //     path: "/app",
  //   },
  //   {
  //     title: "Machine Learning",
  //     path: "/ml",
  //   },
  //   {
  //     title: "Native dev",
  //     path: "/reactnative",
  //   },
    
  // ];
  
  const [subLinks,setsubLinks]=useState([]);
  const fetchdata=async()=>{
      try {
          const result =await apiConnect('GET',categories.CATEGORIES_API)
      console.log(result);
      
        // const element = su[index];
        subLinks.push(result.data.Category[0].name)
        
      
    } catch (error) {
      console.log("could not catch the backendd here",error)
    }
  }

  useEffect(() => {
  fetchdata()
  }, [])

  return (
    <div className="h-14 border-b-[1px] rounded-full border-b-richblack-700  flex items-center justify-center">
      <div className="w-11/12 max-w-maxContent  flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={160} height={42} loading={"lazy"} />
        </Link>

        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => {
              return (
                <li key={index}>
                  {link.title === "Catalog" ? (
                    <div className="flex  relative group items-center gap-2">
                      <p>{link?.title}</p>
                      <AiOutlineDown />
                      <div
                        className="invisible z-50  absolute left-[50%] translate-x-[-50%] translate-y-[1.89rem]
                      top-[50%] 
                      flex flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0
                      transition-all duration-200 group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100 
                      lg:w-[180px] group"
                      >
                        <div
                          className="absolute rounded bg-richblack-5 group transition-all duration-200 rotate-45 translate-x-[80%]  top-0 left-[50%] h-6 w-6  translate-y-[-30%]"
                        ></div>
                        {
                          subLinks.length ? (
                            subLinks.map((link,index)=>(
                              <Link to={link?.path} key={index} className="hover:bg-richblack-300 hover:text-white hover:rounded px-2">
                                <p className=" font-inter">{link?.name}</p>
                              </Link>
                            ))
                          ):(<div></div>)
                        }
                      </div>
                    </div>
                  ) : (
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchroutes(link?.path)
                            ? "text-yellow-5"
                            : "text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* login signup and all  */}
        <div className="flex gap-x-4 items-center ">
          {user && user.accountType !== "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span className="absolute">{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="border text-richblack-100 rounded-md bg-richblack-800 border-richblack-700 px-[12px] py-[8px]">
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="border text-richblack-100 rounded-md bg-richblack-800 border-richblack-700 px-[12px] py-[8px]">
                Sign up
              </button>
            </Link>
          )}
          {
            // profiledropdown dekhna hai baki
            token != null &&  <ProfileDropDown />
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
