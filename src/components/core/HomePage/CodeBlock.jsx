import React from "react";
import Button from "../HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function CodeBlock({
  position,
  heading,
  subheading,
  btn1,
  btn2,
  codePart,
  codeColor,
  backgroundGradient,
}) {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
      {/* Part-1 */}
      <div className="w-full md:w-[50%] flex flex-col gap-8">
        {heading}
        <div className="text-richblack-300 font-bold">{subheading}</div>
        {/* Button Part */}
        <div className="flex gap-7 mt-7">
          <Button active={btn1.active} linkto={btn1.linkto}>
            <div className="flex justify-center items-center gap-3">
              {btn1.btnText}
              <FaArrowRight />
            </div>
          </Button>

          <Button active={btn2.active} linkto={btn2.linkto}>
            <div>{btn2.btnText}</div>
          </Button>
        </div>
      </div>

      {/* Part-2 */}
      <div className=" h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        {backgroundGradient}
        <div className="text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold ">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p>10</p>
          <p>11</p>
        </div>
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}
        >
          <TypeAnimation
            sequence={[codePart, 4000, ""]}
            repeat={Infinity}
            cursor={true}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
}
