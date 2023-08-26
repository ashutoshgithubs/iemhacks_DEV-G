import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import HighlightText from './HighlightText'
import CTAbutton  from "./Button";

const Codeblock = ({
    position,cta1,cta2,heading,subheading,codeblock,bggradient,codecolor
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between gap-10`}>
        {/* {section 1 } */}
        <div className='w-[50%] flex flex-col gap-8'>
            {heading}
            <div className='text-richblack-300 font-bold'>
            {subheading}
            </div>
            <div className='flex gap-7 mt-7'>
            <CTAbutton active={cta1.active} linkto={cta1.linkto}>
                <div className='flex gap-2 items-center'>{cta1.btnText}
                <FaArrowRight/>
                </div>
            </CTAbutton>
            <CTAbutton active={cta2.active} linkto={cta2.linkto}>
                {cta2.btnText}
            </CTAbutton>
            </div>

        </div>

        {/* sectin2 */}
        <div className='w-[100%] py-4 lg:w-[500px] text-[1em]  h-fit flex'>
            {/* HW -> bggradient */}
            <div className='flex flex-col text-center w-[10%]  text-richblack-400 font-inter font-bold'>
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

            <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codecolor} pr-2`} >
                <TypeAnimation 
                sequence={[codeblock,100,""]}
                repeat={Infinity}
                cursor={true}
                omitDeletionAnimation={true}
                style={{
                    whiteSpace:"pre-line"
                }}
                ></TypeAnimation>
            </div>
        </div>
    </div>
  )
}

export default Codeblock