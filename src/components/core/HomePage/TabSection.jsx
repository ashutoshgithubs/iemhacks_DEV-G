import React, { useState } from "react";
import HighlightedText from "./HighlightedText";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
const tabs = [
  "Free",
  "New to coding",
  "Most popular",
  "Skills paths",
  "career paths",
];

export default function TabSection() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );
  const setMyCard = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((course) => course.tab === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center">
        <p className="hidden md:flex md:flex-row text-4xl font-semibold text-center">
          Unlock the&nbsp; <HighlightedText text={"power of Code"} />
        </p>
        <p className="block md:hidden text-4xl font-semibold text-center">
          Unlock the{" "}
          <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
            power of Code
          </span>
        </p>
        <p className="text-center  text-richblack-300 text-md text-[16px] mt-3 mb-3 md:mb-1">
          Learn to build anything you can imagine
        </p>
      </div>
      <div
        className="mt-5 hidden md:flex md:flex-row rounded-full bg-richblack-800 mb-5 border-richblack-100
      px-1 py-1"
      >
        {tabs.map((tab, index) => {
          return (
            <div
              className={`text-[16px] flex items-center gap-2 
                ${
                  currentTab === tab
                    ? "bg-richblack-900 text-richblack-5 font-medium"
                    : "text-richblack-200"
                } rounded-full transition-all duration-200 cursor-pointer
                hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2`}
              onClick={() => setMyCard(tab)}
            >
              {tab}
            </div>
          );
        })}
      </div>
      <div className="hidden lg:block lg:h-[200px]"></div>

      {/* Card Section */}
      <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-black lg:mb-0 mb-7 lg:px-0 px-3">
        {courses.map((course, index) => {
          return (
            <CourseCard
              key={index}
              cardData={course}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          );
        })}
      </div>
    </div>
  );
}
