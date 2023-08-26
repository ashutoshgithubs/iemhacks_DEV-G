import React from 'react'
import HighLightText from './HighlightText'
import Know from '../../../assets/Images/Know_your_progress.png'
import compare from '../../../assets/Images/Compare_with_others.png'
import Plan_your_lessons from '../../../assets/Images/Plan_your_lessons.png'
import CTAbutton from "../../../components/core/Homepage/Button";

const Learninglanngsection = () => {
  return (
    <div className='mt-[90px] mb-32 '>
        <div className='flex flex-col gap-5 items-center'>
            <div className='text-4xl font-semibold text-center'>
                Your Swiss Knife for <HighLightText text={"Leaning any Lnaguage"}/>
            </div>

            <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
                Using Spin making learning multiple languages easy , with over 20+ language realistic voice over , progress tracking ,custom schedule and more
            </div>

            <div className='flex  flex-row items-center justify-centermt-5'>
                <img src={Know} alt="" className='object-fit -mr-32'/>
                <img src={compare} alt="" className='object-fit'/>
                <img src={Plan_your_lessons} alt="" className='object-fit -ml-36'/>
            </div>
            <div className='w-fit'>
                <CTAbutton active={true} linkto={'/signup'}>
                    <div>
                        Learn More
                    </div>
                    </CTAbutton>
            </div>
        </div>
    </div>
  )
}

export default Learninglanngsection