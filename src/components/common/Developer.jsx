import React from "react";
import { motion } from "framer-motion";

export default function Developer({ fName, lName, position1, position2 }) {
  const iconVariants2 = {
    animate: {
      y: ["0px", "2px", "0px"],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      variants={iconVariants2}
      animate="animate"
      className="absolute -top-10 transform -translate-x-4 -translate-y-20  bg-black opacity-80 rounded-lg transition-all duration-300 ease-in-out"
    >
      <div className="flex flex-col justify-center items-center mx-auto p-4">
        <div className="flex font-normal text-lg">
          <span>{fName}</span>
          <span className="ml-2"> {lName}</span>
        </div>
        <div className="font-extralight text-sm">
          <span>{position1}</span>
          <span className="ml-2">{position2}</span>
        </div>
      </div>
    </motion.div>
  );
}
