import React from "react";
import { FooterLink2 } from "../../data/footer-links";
import { Link } from "react-router-dom";

// Images
import Logo from "../../assets/Logo/devlogo.png";

// Icons
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Catalog = ["Full Catalog", "Beta Content"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code Challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid Memberships", "For Students", "Business Solutions"];
const Community = ["Forums", "Chapters", "Events"];

const handleClick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-10">
        <div className="border-b w-full flex flex-col lg:flex-row pb-5 border-richblack-700">
          {/* Section 1 */}
          <div className="lg:w-1/2 flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
            <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
              <img src={Logo} alt="Company Logo" className="object-contain lg:-ml-4" />
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Company
              </h1>
              <div className="flex flex-col gap-2">
                {["About", "Careers", "Affiliates"].map((ele, i) => (
                  <div
                    key={i}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.toLowerCase()}`} onClick={handleClick}>
                      {ele}
                    </Link>
                  </div>
                ))}
                <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                  Support
                </h1>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                  <Link to="/helpcenter" onClick={handleClick}>Help Center</Link>
                </div>
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Catalog
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Catalog.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.toLowerCase().replace(/ /g, '')}`} onClick={handleClick}>{ele}</Link>
                  </div>
                ))}
              </div>

              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Resources
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Resources.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.toLowerCase().replace(/ /g, '')}`} onClick={handleClick}>{ele}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
              <h1 className="text-richblack-50 font-semibold text-[16px]">
                Plans
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Plans.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.toLowerCase().replace(/ /g, '')}`} onClick={handleClick}>{ele}</Link>
                  </div>
                ))}
              </div>
              <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                Community
              </h1>
              <div className="flex flex-col gap-2 mt-2">
                {Community.map((ele, index) => (
                  <div
                    key={index}
                    className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                  >
                    <Link to={`/${ele.toLowerCase().replace(/ /g, '')}`} onClick={handleClick}>{ele}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="lg:w-1/2 flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
            {FooterLink2.map((ele, i) => (
              <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">
                  {ele.title}
                </h1>
                <div className="flex flex-col gap-2 mt-2">
                  {ele.links.map((link, index) => (
                    <div
                      key={index}
                      className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                    >
                      <Link to={link.link} onClick={handleClick}>{link.title}</Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto pb-10 text-sm">
        <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
          <div className="flex flex-row">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={`px-3 ${BottomFooter.length - 1 !== i ? 'border-r border-richblack-700' : ''} cursor-pointer hover:text-richblack-50 transition-all duration-200 ${ele === "Terms" ? "hover" : ""}`}
              >
                <Link to={`/${ele.toLowerCase().replace(/ /g, '')}`} onClick={handleClick}>{ele}</Link>
              </div>
            ))}
          </div>
          <div className="text-center">
            Made with ❤️ by Ashutosh Kumar © 2024 DEV-G
          </div>
          <div className="flex flex-row justify-center gap-3 text-lg">
            <a
              href="https://twitter.com/Ashubhai_01?t=U7Je9g4gfS3X57ehTeBlrw&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-richblack-50 transition-all duration-200"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://www.linkedin.com/in/ashutoshkr01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-richblack-50 transition-all duration-200"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-richblack-50 transition-all duration-200"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-richblack-50 transition-all duration-200"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
