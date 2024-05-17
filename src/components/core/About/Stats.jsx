import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const data = [
  { count: 5000, label: "Active Students" },
  { count: 10, label: "Mentors" },
  { count: 200, label: "Courses" },
  { count: 50, label: "Awards" },
];

export default function Stats() {
  return (
    <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
      <div className="grid grid-cols-2 md:grid-cols-4 text-center">
        {data.map((item, index) => (
          <div className="flex flex-col py-10" key={index}>
            <h1 className="text-[30px] font-bold text-richblack-5">
              <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div style={{ height: 50 }}>
                    {isVisible ? (
                    <span>
                    <CountUp end={item.count} duration={3} />
                    {"+"}
                  </span>
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </h1>
            <h2 className="font-semibold text-[16px] text-richblack-500">
              {item.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
