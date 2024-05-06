import React, { useEffect, useState } from "react";
import RatingStars from "../../common/RatingStars";
import GetAvgRating from "../../../utils/avgRating";
import { Link } from "react-router-dom";

const CourseCardPro = ({ course, Height }) => {
 // console.log("Lets print course in course card pro: ", course);
  const [avgReviewCount, setAvgReviewCount] = useState(0);

  useEffect(() => {
    const count = GetAvgRating(course.ratingAndReview);
    //console.log(" count in Course card pro: ", count);
    setAvgReviewCount(count);
  }, [course]);
  console.log("avgReviewCount count in Course card pro: ", avgReviewCount);

  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className="">
          <div className="rounded-lg">
            <img
              src={course?.thumbnail}
              alt="course thumnail"
              className={`${Height} rounded-xl object-cover `}
            />
          </div>
          <div className="flex flex-col gap-2 px-1 py-3">
            <p className="text-xl text-richblack-5">{course?.courseName}</p>
            <p className="text-sm text-richblack-50">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className="flex items-center gap-2">
              {/* const n = Math.floor(Math.random() * 5) + 1; */}
              {/* <span className="text-yellow-5">randomNumber</span> */}
              {course?.studentsEnrolled?.length ? (
                <RatingStars Review_Count={Math.floor(Math.random() * 4) + 1} />
              ) : (
                <RatingStars Review_Count={0} />
              )}
              <span className="text-richblack-400">
                {course?.studentsEnrolled?.length} Review
              </span>
            </div>
            <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseCardPro;
