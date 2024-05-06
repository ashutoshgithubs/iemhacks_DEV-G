import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

export default function Quote() {
  return (
    <p className="text-xl md:text-3xl font-semibold mx-auto py-5 pb-20 text-center text-white relative">
      <FaQuoteLeft
        size={18}
        className="absolute hidden md:block top-3 left-6"
      />{" "}
      We are passionate about revolutionizing the way we learn. Our innovative
      platform{" "}
      <span class="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
        {" "}
        combines technology{" "}
      </span>{" "}
      ,
      <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
        expertise
      </span>
      , and community to create an
      <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
        {" "}
        unparalleled educational experience.
      </span>{" "}
      <FaQuoteRight
        size={18}
        className="absolute hidden md:block right-72 top-24"
      />
    </p>
  );
}
