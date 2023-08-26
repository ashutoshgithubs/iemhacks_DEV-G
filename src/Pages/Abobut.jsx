import React from "react";
import HighLightText from "../components/core/Homepage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quotes from "../components/core/About/Quotes";
import FoundingStory from "../assets/Images/FoundingStory.png";
import Stack from "../components/core/About/Stack";
import LearningGrid from "../components/core/About/LearningGrid";
import GetinTouch from "../components/core/About/GetinTouch";
import Footer from "../components/common/Footer";
const Abobut = () => {
  return (
    <div className="mt-[100px] mx-auto text-white">
      {/* secctioon1 */}
      <section>
        <div>
          <header>
            Driving Innovation in Online Education
            <HighLightText text={"Brighter Fture"} />
            <p>
              Studynotation is at the forefront of driving innovation in online
              Education, we are passionate about creating the bright future by
              offering cutting-edge courses, leveraging emerging technologies
              and nuturing a vibrant learning community
            </p>
          </header>

          <div className="flex gap-x-3 mx-auto">
            <img src={BannerImage1}></img>
            <img src={BannerImage2}></img>
            <img src={BannerImage3}></img>
          </div>
        </div>
      </section>

      {/* section2 */}
      <section>
        <div>
          <Quotes />
        </div>
      </section>

      {/* section 3 */}
      <section>
        <div className="flex flex-col">
            {/*  */}
          <div className="flex">
            <div>
              <h1>Our Founding Story </h1>
              <p>
                Our e learning platform was born out of a shared vision and
                passion for transforming education. it all begin with a group of
                educators , technologiests and life long learners who recognized
                the need for accessible , flexible and high quaility learning
                opportunities in a rapidly envolving digital world
              </p>
              <p>
                As eperience educator ourselves , we witness firsthand the
                limitation and challenges of traditional education . We believe
                that education should not be confine to the walls of classrooms
                or restricted by geographical boundaries . we envisioned a
                platform that could bridge these gaps and empower indivisuak
                from all walks of the life to unlock their full potential
              </p>
            </div>
            <div>
              <img src={FoundingStory} />
            </div>
          </div>

          <div className="flex ">

            <div>
            <h1>Our Visiono</h1>
            <p>
                With This vision in mind ,we set on a journey to create a e-learning platform that would revoltionze the way people Learn . 
                Our team of dedicted experts works tirelessly to develop a robust and intutive that combine cutting-edge technology with engaging content fostering a dynamic and interactive learning experience
            </p>
            </div>

            <div>
                <h1>
                    Our Mission
                </h1>
                <p>
                    Our mission is going beyond just from a delivering courses online , We want to create a  vibrant community of learning, where individuals are connect , collaborate  and learm from one another .
                    We believe that knowledge thrives in enviromentof sharing and dialogue and we faster this spirint of collaboration through formus , live sessions and networking opportunities
                </p>
            </div>

          </div>
        </div>
      </section>



      {/* section4  */}
        <Stack/>


        {/* section 5 */}
        <div className="flex flex-col gap-3 mx-auto mb-[140px] items-center justify-center">
        <LearningGrid/>
        <GetinTouch/>
        </div>

        <section>
            <div>
                Reviews from othere learners
                {/* <ReviewSlider/> */}
            </div>
        </section>

    <Footer/>
    </div>
        
  );
};

export default Abobut;
