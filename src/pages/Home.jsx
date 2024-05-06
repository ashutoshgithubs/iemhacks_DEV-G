import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightedText from "../components/core/HomePage/HighlightedText";
import Banner from "../assets/Images/banner.mp4";
import CodeBlock from "../components/core/HomePage/CodeBlock";
import Button from "../components/core/HomePage/Button";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import Footer from "../components/common/Footer";
import TabSection from "../components/core/HomePage/TabSection";
import ReviewSLider from "../components/common/ReviewSLider";

export default function Home() {
  return (
    <div>
      {/* Section 1 */}
      <div
        className="relative mx-auto flex flex-col  md:w-11/12 md:max-w-maxContent items-center 
      text-white justify-between"
      >
        <Link to={"/signup"}>
          <div
            className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit"
          >
            <div
              className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900"
            >
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighlightedText text={"Coding Skills"} />
        </div>

        <div className=" mt-4 w-[90%] text-center text-lg font-bold text-richblack-300">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <Button active={true} linkto={"/signup"}>
            Learn More
          </Button>

          <Button active={false} linkto={"/login"}>
            Book a Demo
          </Button>
        </div>

        <div className="mx-3 my-12 shadow-[0_0_30px_0] shadow-[#0C6A87]">
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* Code Section-1*/}
        <div>
          <CodeBlock
            position={"flex flex-col p-4 md:flex-row "}
            heading={
              <>
                <div className="hidden md:block text-4xl font-semibold ">
                  <div className="flex gap-2">
                    Unlock Your <HighlightedText text={"coding potential"} />
                  </div>
                  with our online courses
                </div>
                <div className="block w-full md:hidden ">
                  <p className="text-3xl font-semibold gap-2">
                    Unlock Your{" "}
                    <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                      coding potential{" "}
                    </span>
                    with our online courses
                  </p>
                </div>
              </>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            btn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            btn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            // 2nd part
            codeColor={"text-yellow-25"}
            codePart={`<!DOCTYPE html>
            <html>
            <head><title>Example</title><linkrel="stylesheet"href="styles.css">
            </head>
            <body>
            <h1><ahref="/">Header</a>
            </h1>
            <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
            </nav>
          `}
            backgroundGradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* Code Section-2*/}
        <div>
          <CodeBlock
            position={"flex flex-col pl-4 pr-4  md:flex-row-reverse "}
            heading={
              <>
                <div className="hidden md:flex text-4xl font-semibold  gap-2">
                  Start
                  <HighlightedText text={"coding in seconds"} />
                </div>
                <div className="block md:hidden text-4xl font-semibold  gap-2">
                  Start{" "}
                  <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                    coding in seconds
                  </span>
                </div>
              </>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            btn1={{
              btnText: "Continue Learning",
              linkto: "/signup",
              active: true,
            }}
            btn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            // 2nd part
            codeColor={"text-yellow-25"}
            codePart={`<!DOCTYPE html>
            <html>
            <head><title>Example</title><linkrel="stylesheet"href="styles.css">
            </head>
            <body>
            <h1><ahref="/">Header</a>
            </h1>
            <nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
            </nav>
          `}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        <TabSection />
      </div>
      {/* Section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="styledBackground h-72">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="flex justify-center items-center gap-7 text-white mt-52">
              <Button active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catlog
                  <FaArrowRight />
                </div>
              </Button>
              <Button active={false} linkto={"/signup"}>
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
          <div className="flex flex-col md:flex md:flex-row justify-between gap-5 mt-14">
            <div className="hidden md:block text-4xl font-semibold w-[45%]">
              Get the Skills you need for a
              <HighlightedText text={"Job that is in demand"} />
            </div>
            <div className="block md:hidden text-4xl font-semibold w-full">
              Get the Skills you need for a{" "}
              <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
                Job that is in demand
              </span>
            </div>
            <div className="flex flex-col w-full md:w-[40%] gap-10">
              <p className="text-[16px]">
                The modern Dev-G is the dictates its own terms. Today, to be a
                competitive specialist requires more than professional skills.
              </p>
              <div className="flex items-center justify-center md:items-start">
                <Button active={true} linkto={"/signup"}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <TimeLineSection />
          <LearningLanguageSection />
        </div>
      </div>
      {/* Section 3 */}
      <div className="w-11/12 mx-auto flex flex-col justify-center gap-8 text-white">
        <InstructorSection />
        <h2 className="text-center text-4xl font-semobold mt-10 mb-4">
          Review from Other Learners
        </h2>
        {/* Review Slider */}
        <ReviewSLider />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
