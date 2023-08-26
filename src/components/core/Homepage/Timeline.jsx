import React from 'react'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timelineimage from '../../../assets/Images/TimelineImage.png'
const Timelines =[
    {
        logo:(Logo1),
        heading:"Leadership",
        Description:"Fully commited to success company"
    },
    {
        logo:Logo2,
        heading:"Quality",
        Description:"Fully commited to success company"
    },
    {
        logo:Logo3,
        heading:"Leadership",
        Description:"Fully commited to success company"
    },
    {
        logo:Logo4,
        heading:"Leadership",
        Description:"Fully commited to success company"
    },
]
const Timeline = () => {
  return (
    <div>
        <div className='flex flex-row gap-15 items-center justify-evenly mb-[4rem]'>
        <div className='flex flex-col gap-5 w-[45%]'>
            {
                Timelines.map((elements,index)=>{
                    return(
                        <div className='flex flex-row gap-5' key={index}>
                            <div className='w-[50px] h-[50px] bg-white justify-center flex items-center'>
                                <img src={elements.logo}></img>
                           
                            </div>
                            <div>
                                <h2 className='font-semibold text-[18px]'>{elements.heading}</h2>
                                <p className='text-base'>{elements.Description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className='relative shadow-blue-300'>
            <img src={timelineimage}
            alt='timelineimage'
            className='object-fit h-fit shadow-black'/>

            <div className='absolute bg-caribbeangreen-700 flex flex-row text-white py-10 uppercase
                                left-[16%] top-[90%]'>
                <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                    <p className='text-4xl font-bold'>10</p>
                    <p className='text-caribbeangreen-300 text-sm'>Years of <br/> Expreience</p>
                </div>
                <div className='flex items-center gap-5 px-7'>
                <p className='text-4xl font-bold'>250</p>
                    <p className='text-caribbeangreen-300 text-sm'>Years of <br/>Expreience</p>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Timeline