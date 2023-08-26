import React, { useState } from 'react'
import {HomePageExplore} from '../../../data/homepage-explore'
import HighLightText from './HighlightText';

const tabsName=[
    "Free","New to Codeing","Most popular","Skills Paths","Career Paths"
]
const Exploremore = () => {

    const [currenTabs,setcurrentTabs]=useState(tabsName[0]);
    const [courses,setcourses]=useState(HomePageExplore[0].courses)
    const [currentcard,setcard]=useState(HomePageExplore[0].courses[0].heading)

    const setmycards=(value)=>{
        setcurrentTabs(value);
        const result=HomePageExplore.filter((course)=>(course.tag===value))
        setcourses(result[0].courses);
        setcard(result[0].courses[0].heading)
    }
  return (
    <div>
        <div className='text-4xl font-semibold text-center'>
            Unlock the <HighLightText text={"Power of Code"}/>
        </div>
        <p className='text-center text-richblack-300 text-md  mt-3'>Learn to buiild nything you can Imagine</p>

        <div className='flex rounded-full gap-3 cursor-pointer mb-5 mt-5 border-richblack-50 bg-richblack-700 py-1 px-1'>
            {tabsName.map((elements,index)=>{
                return (
                    <div key={index} onClick={()=>{setmycards(elements)}} className={`items-center flex
                    transition-all duration-200 rounded-full hover:bg-richblack-900 hover:px-5  hover:text-richblack-5 px-7 py-2
                    gap-2 cursor-pointer text-[16px] ${currenTabs===elements? 'bg-richblack-900 text-richblack-5 font-medium':"text-richblack-200"}`}>
                        {elements}
                    </div>
                )
            })}
        </div>

        <div className='lg:h-[150px]'></div>

        {/* <div>
            {
                courses.map((elements,index)=>{
                    return(
                        <CourseCard
                        key={index}
                        carddata={elements}
                        currentcard={currentcard}
                        setcard={setcard}
                        />
                    )
                })
            }
        </div> */}
    </div>
  )
}

export default Exploremore