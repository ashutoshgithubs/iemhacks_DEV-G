import React, { useEffect, useState } from "react";
import { buyCourse } from "../services/operations/paymentProcessAPI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCourseDetails } from "../services/operations/courseDetailsAPI";
import GetAvgRating from "../utils/avgRating";
import Error from "./Error";
import Footer from "../components/common/Footer";
import LogoutModal from "../components/common/LogoutModal";
import { BiInfoCircle } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import RatingStars from "../components/common/RatingStars";
import Markdown from "react-markdown";
import CourseAccordionBar from "../components/core/Course/CourseAccordionBar";
import CourseDetailsCard from "../components/core/Course/CourseDetailsCard";
import { formatDate } from "../services/formatDate";
import { ACCOUNT_TYPE } from "../utils/constants";
import { toast } from "react-hot-toast";
import { addToCart } from "../slices/cartSlice";

function CourseBuyPage() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.profile);
  const { paymentLoading } = useSelector((state) => state.course);

  const [responseDetails, setResponseDetails] = useState(null);
  const [modalData, setModalData] = useState(null);

  // Calling fetchCourseDetails fucntion to fetch the course details
  useEffect(() => {
    // Calling fetchCourseDetails fucntion to fetch the details
    (async () => {
      try {
        const response = await fetchCourseDetails(courseId);
        //console.log("CourseDetails response: ", response);
        setResponseDetails(response);
      } catch (error) {
        console.log("Could not fetch Course Details");
      }
    })();
  }, [courseId]);

  // console.log(
  //   "Course details for rating and review check up: ",
  //   responseDetails
  // );

  //Calculate average review count
  const [avgReviewCount, setAvgReviewCount] = useState(0);
  useEffect(() => {
    // console.log(
    //   "Lets see review and rating: ",
    //   responseDetails?.data?.courseDetails?.reviewAndRating
    // );
    // console.log(
    //   "Lets see the type ofreview and rating: ",
    //   typeof responseDetails?.data?.courseDetails?.reviewAndRating
    // );
    const reviewCount = GetAvgRating(
      responseDetails?.data?.courseDetails?.reviewAndRating
    );
    // console.log("REVIEW CNT: ", reviewCount);
    setAvgReviewCount(reviewCount);
  }, [responseDetails]);

  // console.log("PRINTING AVG REVIEW COUNT: ", avgReviewCount);

  //COLLAPSE ALL FUNCTION HANDLER
  const [isActive, setIsActive] = useState(Array(0));
  const handleActive = (id) => {
    // console.log("called", id)
    setIsActive(
      !isActive.includes(id)
        ? isActive.concat([id])
        : isActive.filter((e) => e !== id)
    );
  };

  // Total number of lectures
  const [totalNoOfLectures, setTotalNoOfLectures] = useState(0);
  useEffect(() => {
    let lectures = 0;
    responseDetails?.data?.courseDetails?.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0;
    });
    setTotalNoOfLectures(lectures);
  }, [responseDetails]);

  if (loading || !responseDetails) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="custom-loader"></div>
      </div>
    );
  }
  if (!responseDetails.success) {
    return <Error />;
  }

  const {
    _id: course_id,
    courseName,
    courseDescription,
    thumbnail,
    price,
    whatYouWillLearn,
    courseContent,
    reviewAndRating,
    instructor,
    studentsEnrolled,
    createdAt,
  } = responseDetails.data?.courseDetails;
  const buyCourseHandler = () => {
    if (token) {
      buyCourse(token, [courseId], user, navigate, dispatch);
      return;
    }
    setModalData({
      text1: "You are not logged in",
      text2: "Please login to Purchase the Course.",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1: () => navigate("/login"),
      btn2: () => setModalData(null),
    });
  };

  if (paymentLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="custom-loader"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (user && user?.accountType === ACCOUNT_TYPE.INSTRUCTOR) {
      toast.error("You are an Instructor. You can't buy a course.");
      return;
    }
    if (token) {
      dispatch(addToCart(responseDetails?.data?.courseDetails));
      return;
    }
    setModalData({
      text1: "You are not logged in!",
      text2: "Please login to add To Cart",
      btn1Text: "Login",
      btn2Text: "Cancel",
      btn1: () => navigate("/login"),
      btn2: () => setModalData(null),
    });
  };

  return (
    <div>
      <div className={`relative w-full bg-richblack-800`}>
        {/* Hero Section */}
        <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
          <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
            <div className="relative block max-h-[30rem] lg:hidden">
              <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
              <img
                src={thumbnail}
                alt="course thumbnail"
                className="aspect-auto w-full"
              />
            </div>
            <div
              className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5`}
            >
              <div>
                <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
                  {courseName}
                </p>
              </div>
              <p className={`text-richblack-200`}>{courseDescription}</p>
              <div className="text-md flex flex-wrap items-center gap-2">
                {/* <span className="text-yellow-25">{avgReviewCount | 3}</span> */}
                <RatingStars
                  Review_Count={Math.floor(Math.random() * 4) + 1}
                  Star_Size={24}
                />
                <span>{`${studentsEnrolled.length} reviews`}</span>
                <span>{`${studentsEnrolled.length} students enrolled`}</span>
              </div>
              <div>
                <p className="">
                  Created By {`${instructor.firstName} ${instructor.lastName}`}
                </p>
              </div>
              <div className="flex flex-wrap gap-5 text-lg">
                <p className="flex items-center gap-2">
                  {" "}
                  <BiInfoCircle /> Created at {formatDate(createdAt)}
                </p>
                <p className="flex items-center gap-2">
                  {" "}
                  <HiOutlineGlobeAlt /> English
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 border-y border-y-richblack-500 py-4 lg:hidden">
              <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                Rs. {price}
              </p>
              <button
                className="cursor-pointer rounded-md bg-yellow-50 px-[20px] py-[8px] font-semibold text-richblack-900"
                onClick={buyCourseHandler}
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className="cursor-pointer rounded-md bg-richblack-800 px-[20px] py-[8px] font-semibold text-richblack-5"
              >
                Add to Cart
              </button>
            </div>
          </div>
          {/* Courses Card */}
          <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute  lg:block">
            <CourseDetailsCard
              course={responseDetails?.data?.courseDetails}
              setModalData={setModalData}
              handleBuyCourse={buyCourseHandler}
            />
          </div>
        </div>
      </div>
      <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
        <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
          {/* What will you learn section */}
          <div className="my-8 border border-richblack-600 p-8">
            <p className="text-3xl font-semibold">What you'll learn</p>
            <div className="mt-5">
              <Markdown>{whatYouWillLearn}</Markdown>
            </div>
          </div>

          {/* Course Content Section */}
          <div className="max-w-[830px] ">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] font-semibold">Course Content</p>
              <div className="flex flex-wrap justify-between gap-2">
                <div className="flex gap-2">
                  <span>
                    {courseContent.length} {`section`}
                  </span>
                  <span>
                    {totalNoOfLectures} {`lectures`}
                  </span>
                  <span>
                    {responseDetails.data?.totalDuration} total length
                  </span>
                </div>
                <div>
                  <button
                    className="text-yellow-25"
                    onClick={() => setIsActive([])}
                  >
                    Collapse all sections
                  </button>
                </div>
              </div>
            </div>

            {/* Course Details Accordion */}
            <div className="py-4">
              {courseContent?.map((course, index) => (
                <CourseAccordionBar
                  course={course}
                  key={index}
                  isActive={isActive}
                  handleActive={handleActive}
                />
              ))}
            </div>

            {/* Author Details */}
            <div className="mb-12 py-4">
              <p className="text-[28px] font-semibold">Author</p>
              <div className="flex items-center gap-4 py-4">
                <img
                  src={
                    instructor.image
                      ? instructor.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${instructor.firstName} ${instructor.lastName}`
                  }
                  alt="Author"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <p className="text-lg">{`${instructor.firstName} ${instructor.lastName}`}</p>
              </div>
              <p className="text-richblack-50">
                {instructor?.additionalDetails?.about}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {modalData && <LogoutModal data={modalData} />}
    </div>
  );
}

export default CourseBuyPage;
