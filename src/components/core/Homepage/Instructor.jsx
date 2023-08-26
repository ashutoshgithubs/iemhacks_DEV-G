import React from 'react'
import instrtatad from '../../../assets/Images/Instructor.png'
import HighLightText from './HighlightText'
import CTAbutton from "../../../components/core/Homepage/Button";
import { FaArrowRight } from "react-icons/fa";

const Instructor = () => {
  return (
    <div>
        <div className='flex  mt-10 flex-row gap-20 items-center'>

        <div className=''>
            <img src={instrtatad} className='shadow-white'></img>
        </div>
        <div className='w-[50%] flex flex-col gap-10'>
            <div className='text-4xl font-semibold w-[40%]'>
                Become an <HighLightText text={"Instructor"}/>
            </div>
            <p className='font-medium w-[70%] text-[15px] text-richblack-300 '>Instructor from around the world teachs millions of students on Studynotion, We provides the tools and skills to teach what you love</p>
            <div className='w-fit'>
            <CTAbutton active={true} linkto={'/signup'} >
                <div className='flex items-center flex-row gap-2'>
                    Start Learnig today<FaArrowRight/>
                </div>
            </CTAbutton>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Instructor