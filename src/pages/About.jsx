import React from "react";
import HighlightedText from "../components/core/HomePage/HighlightedText";
import image1 from "../assets/Images/aboutus1.webp";
import image2 from "../assets/Images/aboutus2.webp";
import image3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/About/Quote";
import image4 from "../assets/Images/FoundingStory.png";
import Stats from "../components/core/About/Stats";
import LearningTable from "../components/core/About/LearningTable";
import Footer from "../components/common/Footer";
import ContactForm from "../components/core/About/ContactForm";

export default function About() {
  return (
    <div>
      {/* Part1 */}
      <section className=" bg-richblack-700 ">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <div className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            <h1>
              Driving Innovation in Online Education for a{" "}
              <HighlightedText text={"Brighter Future"} />
            </h1>
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              DEV-G is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </div>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute grid grid-cols-3 gap-3 lg:gap-5 bottom-0  translate-x-[-50%] translate-y-[30%] left-[50%] w-[100%]">
            <img src={image1} alt="im1" />
            <img src={image2} alt="im2" />
            <img src={image3} alt="im3" />
          </div>
        </div>
      </section>

      {/* Section 2*/}
      <section className="border-b border-richblack-700">
        <div className="h-[110px]"></div>
        <div className="mx-auto w-11/12 max-w-maxContent">
          <Quote />
        </div>
      </section>
      {/* Section 3 */}
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src={image4}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 4-> Stats part */}
      <section className="bg-richblack-700">
        <div>
          <Stats />
        </div>
      </section>
      {/* Section 5 */}
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningTable />
        <ContactForm />
      </section>
      {/* Section  Review*/}
      <section className="text-3xl mt-6 font-semibold text-transparent text-center text-white mb-4">
        {/* Reviews from other learners */}
      </section>
      <Footer />
    </div>
  );
}
