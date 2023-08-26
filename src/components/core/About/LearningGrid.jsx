import React from 'react'
import HighLightText from '../Homepage/HighlightText'
import Button from '../Homepage/Button'

const LearningGrid = () => {
    const learning=[
        {
            order:-1,
            heading:"World-class Learning for",
            highlightText:"Anyone , Anywhere",
            description:"Studynotion patner with more than 270+ universities and companies to bring flexible , affortlss , job-relevant online learning to individuals and organisations worldwides",
            Btntext:"Learn More",
            btn:"/"
        },
        {
            order:1,
            heading:"Curriculum Based on Industry need",
            description:"Save time and money , The Belajar crriculum is made to understand and in line with industry needs",

        },
        {
            order:2,
            heading:"Our learning Method ",
            description:"Studynotion have patnership with more than 275+ univertiites and companies to bring ",
        },
        {
            order:3,
            heading:"Certification",
            description:"Studynotion have patnership with more than 275+ univertiites and companies to bring ",
        },
       {
        order:4,
        heading:'Rating "Auto-grading"',
        description:"Studynotion have patnership with more than 275+ univertiites and companies to bring ",

       },
       {
        order:5,
        heading:"Ready to Work",
        description:"Studynotion have patnership with more than 275+ univertiites and companies to bring ",
       } 

    ]

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 mx-auto mb-10 '>
        {
            learning.map((card,index)=>(
                <div key={index}
                className={`${index===0 && "lg:col-span-2"} 
                ${
                    card.order %2 ===1 ? "bg-richblack-700":"bg-richblack-800"
                }
                ${
                    card.order===3 && "lg:col-start-2"
                }
                `}
                >
                {
                    card.order <0 ? (<div>

                        <div>
                            {card.heading}
                            <HighLightText text={card.highlightText}/>
                        </div>
                        <p>
                            {card.description}
                        </p>
                        <div>
                            <Button active={true} linkto={card.btn}>
                            {card.Btntext}    
                            </Button> 
                        </div>
                    </div>):(
                        <div>
                            <h1>{card.heading}</h1>
                            <p>{card.description}</p>
                        </div>
                    )
                }
                </div>    
            ))
        }

    </div>
  )
}

export default LearningGrid