import React from "react";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import HighlightedText from "./HighlightedText";
import Button from "./Button";
export default function LearningLanguageSection() {
  return (
    <div className="flex flex-col mt-32 mb-32">
      <div className="flex justify-center items-center">
        <div className="hidden md:flex md:flex-row text-4xl font-semibold ">
          Your Swiss Knife for&nbsp;
          <HighlightedText text={"learning any language"} />
        </div>
        <div className="block md:hidden text-3xl font-semibold ">
          Your Swiss Knife for{" "}
          <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold text-3xl">
            learning any language
          </span>
        </div>
      </div>
      <div className="text-center text-richblack-600 mx-auto text-base font-medium w-full md:w-[90%] pt-2 md:mt-1">
        <p>
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </p>
      </div>
      <div className="flex flex-col md:flex md:flex-row items-center justify-center mt-5">
        <img
          src={knowYourProgress}
          alt="progress"
          className="object-contain -mr-26 md:-mr-32 "
        />
        <img src={compareWithOthers} alt="compare" className="object-contain" />
        <img
          src={planYourLessons}
          alt="plan"
          className="object-contain -ml-26 md:-ml-36"
        />
      </div>
      <div className="flex items-center justify-center">
        <Button active={true} linkto={"/signup"}>
          Learn More
        </Button>
      </div>
    </div>
  );
}
