import React from "react";
import logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelinelogo from "../../../assets/Images/TimelineImage.png";

const timeLine = [
  {
    logo: logo1,
    title: "Leadership",
    description: "Fully committed to the success company",
  },
  {
    logo: logo2,
    title: "Responsibility",
    description: "Students will always be our top priority",
  },
  {
    logo: logo3,
    title: "Flexibility",
    description: "The ability to switch is an important skill",
  },
  {
    logo: logo4,
    title: "Solve the problem",
    description: "Code your way to a solution",
  },
];
export default function TimeLineSection() {
  return (
    <div className="flex flex-col md:flex md:flex-row md:items-center md:justify-between">
      <div className=" flex flex-col gap-5 w-full md:w-[45%]">
        {timeLine.map((element, index) => {
          return (
            <div className="flex gap-6" key={index}>
              <div className="w-[50px] h-[50px] bg-black flex items-center justify-center rounded-full">
                <img src={element.logo} alt="logo" />
              </div>
              <div>
                <h2 className="font-semibold text-[18px]">{element.title}</h2>
                <p className="text-base">{element.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full md:w-[50%] relative shadow-blue-200 mt-8 md:mt-1">
        <img
          src={timelinelogo}
          alt="timelinelogo"
          className="shadow-white object-cover h-fit"
        />
        <div
          className="absolute bg-caribbeangreen-700 flex text-white uppercase py-7
                            left-[50%] translate-x-[-50%] translate-y-[-10%] md:translate-y-[-50%]"
        >
          <div className="flex gap-5 items-center border-r border-caribbeangreen-300 px-7">
            <p className="text-3xl font-bold">10</p>
            <p className="text-caribbeangreen-300 text-sm">
              Years of Experience
            </p>
          </div>

          <div className="flex gap-5 items-center px-7">
            <p className="text-3xl font-bold">250</p>
            <p className="text-caribbeangreen-300 text-sm">TYpe of Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
