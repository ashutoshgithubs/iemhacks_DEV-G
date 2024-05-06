import React from "react";
import instructorImage from "../../../assets/Images/Instructor.png";
import HighlightedText from "./HighlightedText";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

export default function InstructorSection() {
  return (
    <div className="flex flex-col md:flex md:flex-row gap-20 items-center mt-14">
      <div className="w-full md:w-[50%]">
        <img src={instructorImage} alt="instructor" />
      </div>
      <div className="w-full md:w-[48%] flex flex-col gap-10">
        <div className="flex text-4xl font-semobold ">
          Become an&nbsp; <HighlightedText text={"Instructor"} />
        </div>
        <p className="font-medium text-[16px] w-full md:w-[80%] text-richblack-300">
          Instructors from around the world teach millions of students on
          DEV-G. We provide the tools and skills to teach what you love.
        </p>
        <div className="flex items-start ">
          <Button active={true} linkto={"/signup"}>
            <div className="flex flex-row gap-2 items-center">
              Start Learning Today
              <FaArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
