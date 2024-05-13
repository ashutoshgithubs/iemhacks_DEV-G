import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/Logo/devlogo.png";
import HighlightedText from "../components/core/HomePage/HighlightedText";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Developer from "../components/common/Developer";
import ashu from "../../src/assets/LinkedIn/ashu4.jpg";
import lalit from "../../src/assets/LinkedIn/ls.jpg";
import chaitanya from "../../src/assets/LinkedIn/chaitanya.jpg";
import nikhil from "../../src/assets/LinkedIn/nik.jpg";
import bipul from "../../src/assets/LinkedIn/bip.jpg";

const svgVariants = {
  hidden: { scale: 100 },
  visible: {
    rotate: 0,
    transition: { duration: 2, ease: "easeInOut" },
    scale: 1,
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 3.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5,
    },
  },
};
const developersVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 4, duration: 2 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
  hover: {
    scale: 1.02,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};
const containerVariants2 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 2.5, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};
const containerVariants3 = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 2.75, duration: 2 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const iconVariants = {
  animate: {
    y: ["0px", "-24px", "0px"],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
const iconVariants2 = {
  animate: {
    y: ["0px", "-28px", "0px"],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
const iconVariants3 = {
  animate: {
    y: ["0px", "-28px", "0px"],
    transition: {
      duration: 3.8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};
const iconVariants4 = {
  animate: {
    y: ["0px", "-28px", "0px"],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function TopHome() {
  const navigate = useNavigate();
  const explore = () => {
    //setHome(false);
    navigate("/home");
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleMouseEnter1 = () => setIsHovered1(true);
  const handleMouseLeave1 = () => setIsHovered1(false);
  const handleMouseEnter2 = () => setIsHovered2(true);
  const handleMouseLeave2 = () => setIsHovered2(false);
  const handleMouseEnter3 = () => setIsHovered3(true);
  const handleMouseLeave3 = () => setIsHovered3(false);
  const handleMouseEnter4 = () => setIsHovered4(true);
  const handleMouseLeave4 = () => setIsHovered4(false);
  return (
    <div className="text-white flex flex-col w-full h-[100vh] relative">
      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={0.7}
        className="mt-2 border-b-[1px] ml-2 h-12 border-b-richblack-700"
      >
        <motion.img
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
          transition={{ type: "spring", stiffness: 300 }}
          src={logo}
          alt="logo"
          width={160}
          height={42}
          loading="lazy"
        />
      </motion.div>
      <div className="flex flex-col w-11/12 md:w-full lg:max-w-[790px] text-center justify-center  mx-auto my-auto gap-4">
        <div className="flex flex-col w-full lg:max-w-[790px] text-center justify-center  mx-auto my-auto gap-4">
          <motion.p
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 300 }}
            className=" text-richblack-100  text-4xl sm:text-[3.75rem] font-semibold mb-3 text-center mx-auto"
          >
            <div className="flex gap-2 text-center">
              {" "}
              WELCOME TO
              <HighlightedText text={"DEV-G"} />
            </div>
          </motion.p>
          <motion.h1
            variants={containerVariants2}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-center text-richblack-200 mx-auto flex-wrap md:max-w-[60%]"
          >
            Master the Craft, Achieve Success: Your coding Journey Awaits...
          </motion.h1>
          <div>
            <motion.button
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              onClick={explore}
              className="cursor-pointer rounded-md bg-yellow-200 md:w-[20%] w-[40%] text-center py-[8px] px-[20px] font-semibold text-richblack-900"
            >
              Get Started
            </motion.button>
          </div>
        </div>
        <motion.div
          variants={containerVariants3}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            variants={iconVariants}
            animate="animate"
            className="icon absolute left-24 top-40"
          >
            <FaReact size={58} color="#22d3ee" />
          </motion.div>

          <motion.div
            variants={iconVariants2}
            animate="animate"
            className="absolute left-40 hidden md:block top-[330px] "
          >
            <FaNodeJs size={58} color="#4ade80" />
          </motion.div>

          <motion.div
            variants={iconVariants4}
            animate="animate"
            className="icon absolute right-24 top-40"
          >
            <SiExpress size={58} color="#d4d4d4" />
          </motion.div>
          <motion.div
            variants={iconVariants3}
            animate="animate"
            className="icon absolute md:right-40 hidden md:block top-[300px]"
          >
            <SiMongodb size={58} color="#22c55e" />
          </motion.div>
        </motion.div>
        <motion.div
          variants={developersVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover="hover"
          className=" mx-auto md:max-w-[60%] px-4 py-3 flex flex-col sm:flex-row gap-x-8 items-center rounded-xl border border-red-50 hover:border-red-600 glassEffect "
        >
          <div className="flex flex-row items-center justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="-mr-4 relative"
              href="https://www.linkedin.com/in/lalit-s/"
            >
              <img
                alt="Lalit sharma "
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                className="object-cover rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2 group-hover:scale-110 group-hover:z-300 border-white transition duration-500"
                src={lalit}
              />
              {isHovered && (
                <Developer
                  fName={"Lalit"}
                  lName={"Sharma"}
                  position1={"iOS"}
                  position2={"Developer"}
                />
              )}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              className="-mr-4 relative"
              href="https://www.linkedin.com/in/chaitanyaanand12/"
            >
              <img
                alt="chaitanya "
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                className="object-cover rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2 group-hover:scale-110 group-hover:z-30 border-white transition duration-500"
                src={chaitanya}
              />
              {isHovered1 && (
                <Developer
                  fName={"Chaitanya"}
                  lName={"Anand"}
                  position1={"Software"}
                  position2={"Developer"}
                />
              )}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              class="-mr-4 relative"
              href="https://www.linkedin.com/in/nikhil-raj-291b50265/"
            >
              <img
                alt="Nikhil"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                className="object-cover rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2 group-hover:scale-110 group-hover:z-30 border-white transition duration-500"
                src={nikhil}
              />
              {isHovered2 && (
                <Developer
                  fName={"Nikhil"}
                  lName={"Raj"}
                  position1={"FrontEnd"}
                  position2={"Developer"}
                />
              )}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              class="-mr-4 relative "
              href="https://www.linkedin.com/in/bipulrahi/"
            >
              <img
                alt="Bipul"
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                className=" object-cover rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2 group-hover:scale-110 group-hover:z-30 border-white transition duration-500"
                src={bipul}
              />
              {isHovered3 && (
                <Developer
                  fName={"Bipul"}
                  lName={"Rahi"}
                  position1={"Backend"}
                  position2={"Developer"}
                />
              )}
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              class="-mr-4 relative "
              href="https://www.linkedin.com/in/ashutoshkr01/"
            >
              <img
                alt="Ashu bhai "
                loading="lazy"
                width="100"
                height="100"
                decoding="async"
                className=" object-cover rounded-full w-10 h-10 sm:h-12 sm:w-12 border-2 group-hover:scale-110 group-hover:z-30 border-white transition duration-500"
                src={ashu}
              />
              {isHovered4 && (
                <Developer
                  fName={"Ashutosh"}
                  lName={"Kumar"}
                  position1={"Fullstack"}
                  position2={"Developer"}
                />
              )}
            </a>
          </div>
          <motion.p
            variants={containerVariants2}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover={{ scale: 1.05, originX: 0, color: "#f8e112" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-base font-medium text-white"
          >
            1K+ Happy Developers
          </motion.p>
        </motion.div>
      </div>
      <div className="text-end text-sm text-richblack-200 font-edu-sa">
        <p className="p-2">Developed by Ashutosh Kumar © 2024 DEV-G</p>
      </div>
    </div>
  );
}
