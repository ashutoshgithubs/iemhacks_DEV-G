import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Timelinesection from "../components/core/Homepage/Timeline";
import Learninglansection from "../components/core/Homepage/Learninglanngsection";
import HighlightText from "../components/core/Homepage/HighlightText";
import CTAbutton from "../components/core/Homepage/Button";
import Banner from "../assets/Images/banner.mp4";
import Footer from "../components/common/Footer"
import Codeblocks from "../components/core/Homepage/Codeblock";
import Instructor from "../components/core/Homepage/Instructor";
import Exploremore from "../components/core/Homepage/Exploremore";
const Home = () => {
  return (
    <div>
      {/* {section 1} */}

      <div className="relative mx-auto flex flex-col w-11/12  max-w-maxContent items-center text-white justify-between">
        <Link to={"/signup"} className=" mt-16">
          <div
            className="group rounded-full   p-1 bg-richblack-800 font-bold text-richblack-200
          transition-all duration-200 hover:scale-95 w-fit
          mx-auto"
          >
            <div className="flex items-center gap-2 group-hover:bg-richblack-900 rounded-full px-10 py-[5px]">
              <p>Become an Instructor</p>
              <FaArrowRight></FaArrowRight>
            </div>
          </div>
        </Link>

        <div className="font-semibold text-4xl text-center mt-7">
          Empower Your Future With <HighlightText text={"Coding Skills"} />
        </div>

        <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-100">
          With Our online coding courses , You can learn at Your Pace , From
          anywhere in the world , and get access to a wealth of resource ,
          including hands-on-projects , quizzes and personalise feedback from
          instructor
        </div>

        <div className="flex flex-row gap-7 mt-4">
          <CTAbutton linkto={"/signup"} active={true}>
            Learn More
          </CTAbutton>
          <CTAbutton linkto={"/login"} active={false}>
            Book a demo
          </CTAbutton>
        </div>

        <div className="mx-3 my-20 shadow-blue-200 w-[70%] h-[50%]">
          <video muted autoPlay loop>
            <source src={Banner}></source>
          </video>
        </div>

        {/* {codesection} */}

        <div>
          <Codeblocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"Coding Potential"} />
                With Our Online Courses
              </div>
            }
            subheading={
              "our courses are designed and taught by indrustry Experts who have years of expreience in coding and are passionate about sharing their knowledge wwith you "
            }
            cta1={{
              btnText: "Try now",
              linkto: "/signup",
              active: true,
            }}
            cta2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={
              '<!DOCTYPE html>\n<html lang="en">\n<head><title>Document</title>\n<link rel="stylesheet" href="./style.css"></head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="./One">One</a><a href="./two">two</a>\n <a href="./three">Three</a>\n</nav>\n</body>\n</html>'
            }
            codecolor={"text-yellow-25"}
          />
          <Codeblocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock Your
                <HighlightText text={"Coding Potential"} />
                With Our Online Courses
              </div>
            }
            subheading={
              "our courses are designed and taught by indrustry Experts who have years of expreience in coding and are passionate about sharing their knowledge wwith you "
            }
            cta1={{
              btnText: "Try now",
              linkto: "/signup",
              active: true,
            }}
            cta2={{
              btnText: "learn more",
              linkto: "/login",
              active: false,
            }}
            codeblock={
              '<!DOCTYPE html>\n<html lang="en">\n<head><title>Document</title>\n<link rel="stylesheet" href="./style.css"></head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav><a href="./One">One</a><a href="./two">two</a>\n <a href="./three">Three</a>\n</nav>\n</body>\n</html>'
            }
            codecolor={"text-yellow-25"}
          />
        </div>

        <Exploremore/>
      </div>

      {/* {section 2} */}

      <div className="bg-pure-greys-5  text-richblack-700">
        <div className="Homepagebg h-[333px]">

          <div className="w-11/12 max-w-maxContent flex-col justify-between   mx-auto flex items-center gap-5 ">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white">

              <CTAbutton active={true} linkto={"/signup"}>
                <div className="flex  items-center gap-5">
                  Explore Full Catalog
                  <FaArrowRight></FaArrowRight>
                </div>
              </CTAbutton>

              <CTAbutton active={false} linkto={"/signup"}>
                <div>
                  Learn More
                </div>
              </CTAbutton>
            </div>
          </div>
        </div>

        <div className="mx-auto  gap-7 max-w-maxContent w-11/12 flex flex-col items-center justify-between">

          <div className="flex gap-5 mb-10 mt-[95px]"> 
            <div className="text-4xl  font-semibold w-[45%]">
              Get the skills You need for a
              <HighlightText text={'Job that Demans '}></HighlightText>
            </div>
            <div className="flex flex-col gap-10 w-[40%]">
              <div className="text-[16px] flex">
                The modern StudyNotion is the dicatates its own teams . today  to be competition Specilist requires more than professional skills
              </div>
              <CTAbutton  active={true} linkto={'/signup'}>
                <div>
                  learn more
                </div>
              </CTAbutton>
            </div>
          </div>

           
          <Timelinesection/>
          {/* <div className='w-screen h-1 '></div> */}

        <Learninglansection/>
        </div>

     
      </div>
      {/* {section 3} */}
            <div className="w-11/12 mx-auto mb-20 max-w-maxContent flex flex-col justify-between gap-8  text-white  items-center">
              <Instructor/>
              <h2 className="mt-10 font-semibold text-center text-4xl">Reviews From Other Learners</h2>
            </div>

      {/* {Footer} */}
      <div >
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
