import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FcCallback } from "react-icons/fc";

export default function ContactDetails() {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
      <div className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200">
        <span className="flex gap-3 items-center">
          <BsFillChatQuoteFill size={25} />
          <p className="text-lg font-semibold text-richblack-5">Chat with us</p>
        </span>
        <p className="font-medium">Our friendly team is here to help.</p>
        <p className="font-semibold">info@devg.com</p>
      </div>
      <div className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200">
        <span className=" flex gap-3 items-center">
          <BiWorld size={25} />
          <p className="text-lg font-semibold text-richblack-5">Visit us</p>
        </span>
        <p className="font-medium">Come and say hello at our office HQ.</p>
        <p className="font-semibold flex items-center gap-2">
          <p>Sector-5, Bidhannagar, Kolkata, India </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            alt="Indian flag"
            className="h-[15px] w-[20px]"
          />
        </p>
      </div>
      <div className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200">
        <span className=" flex gap-3 items-center">
          <FcCallback size={25} />
          <p className="text-lg font-semibold text-richblack-5">Call us</p>
        </span>
        <p className="font-medium">Mon - Sat From 9am to 5pm.</p>
        <p className="font-semibold">+123 456 7869</p>
      </div>
    </div>
  );
}
