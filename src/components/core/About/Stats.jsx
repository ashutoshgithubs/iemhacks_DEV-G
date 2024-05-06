import React from "react";
const data = [
  { count: "5K", label: "Active Students" },
  { count: "10+", label: "Mentors" },
  { count: "200+", label: "Courses" },
  { count: "50+", label: "Awards" },
];
export default function Stats() {
  return (
    <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
      <div className="grid grid-cols-2 md:grid-cols-4 text-center">
        {data.map((item, index) => {
          return (
            <div className="flex flex-col py-10" key={index}>
              <h1 className="text-[30px] font-bold text-richblack-5">
                {item.count}
              </h1>
              <h2 className="font-semibold text-[16px] text-richblack-500">
                {item.label}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
