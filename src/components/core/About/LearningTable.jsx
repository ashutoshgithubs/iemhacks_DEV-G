import React from "react";
import HighlightedText from "../HomePage/HighlightedText";
import Button from "../HomePage/Button";

const LearningData = [
  {
    order: -1,
    heading: "World-Class Learning for",
    highlightText: "Anyone, Anywhere",
    description:
      "DEV-G partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
    BtnText: "Learn More",
    BtnLink: "/",
  },
  {
    order: 1,
    heading: "Curriculum Based on Industry Needs",
    description:
      "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
  },
  {
    order: 2,
    heading: "Our Learning Methods",
    description:
      "DEV-G  partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 3,
    heading: "Certification",
    description:
      "DEV-G  partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 4,
    heading: `Rating "Auto-grading"`,
    description:
      "DEV-G  partners with more than 275+ leading universities and companies to bring",
  },
  {
    order: 5,
    heading: "Ready to Work",
    description:
      "DEV-G  partners with more than 275+ leading universities and companies to bring",
  },
];

const LearningTable = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:w-fit mb-12 w-[350px] mx-auto">
      {LearningData.map((card, index) => {
        return (
          <div
            key={index}
            className={`${
              card.order === -1 && "md:col-span-2 md:h-[294px] bg-transparent"
            } ${
              card.order % 2 === 1
                ? "bg-richblack-700 h-[294px]"
                : "bg-richblack-800 h-[294px]"
            } ${card.order === 3 && "md:col-start-2"}  `}
          >
            {card.order === -1 ? (
              <div className="md:w-[90%] flex flex-col gap-3 pb-10 md:pb-0">
                <div className="text-4xl font-semibold ">
                  {card.heading}
                  <HighlightedText text={card.highlightText} />
                </div>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>

                <div className="w-fit mt-2">
                  <Button active={true} linkto={card.BtnLink}>
                    {card.BtnText}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="p-8 flex flex-col gap-8">
                <h1 className="text-richblack-5 text-lg">{card.heading}</h1>
                <p className="text-richblack-300 font-medium">
                  {card.description}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default LearningTable;
