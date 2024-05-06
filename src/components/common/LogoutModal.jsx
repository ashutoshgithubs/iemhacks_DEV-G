import React from "react";

export default function LogoutModal({ data }) {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
      <div className="max-w-[350px] rounded-lg border border-richblack-400 bg-richblack-800 p-6">
        <p className="text-2xl text-center font-semibold text-richblack-5">
          {data?.text1}
        </p>
        <p className="mt-3 mb-5 leading-6 text-richblack-200 text-center">
          {data?.text2}
        </p>
        <div className="flex items-center gap-x-4 justify-center">
          <button
            onClick={data?.btn1}
            className="cursor-pointer rounded-md bg-yellow-200  py-[8px] px-[20px] font-semibold text-richblack-900"
          >
            {data?.btn1Text}
          </button>
          <button
            className="cursor-pointer rounded-md bg-yellow-200  py-[8px] px-[20px] font-semibold text-richblack-900"
            onClick={data?.btn2}
          >
            {data?.btn2Text}
          </button>
        </div>
      </div>
    </div>
  );
}
