import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { getFullDetailsOfCourse } from "../services/operations/courseDetailsAPI";
import {
  setCompletedLectures,
  setCourseSectionData,
  setEntireCourseData,
  setTotalNoOfLectures,
} from "../slices/viewCourseSlice";
import VideoPageSlider from "../components/core/ViewCourse/VideoPageSlider";
import CoursereviewModal from "../components/core/ViewCourse/CoursereviewModal";

export default function CourseDekho() {
  const [reviewModal, setReviewModal] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { courseId } = useParams();
  const dispatch = useDispatch();
  //"Schema hasn't been registered for model \"ReviewAndRating\".\nUse mongoose.model(name, schema)"

  useEffect(() => {
    const setCourseSpecifiedDetails = async () => {
      const courseData = await getFullDetailsOfCourse(courseId, token);
     // console.log("Course Data: ", courseData);
      dispatch(setCourseSectionData(courseData.courseDetails.courseContent));
      dispatch(setEntireCourseData(courseData.courseDetails));
      dispatch(setCompletedLectures(courseData.completedVideos));
      let lectures = 0;
      courseData?.courseDetails?.courseContent?.forEach((sec) => {
        lectures += sec.subSection.length;
      });
      dispatch(setTotalNoOfLectures(lectures));
    };
    setCourseSpecifiedDetails();
  });

  return (
    <div>
      <div className="relative flex flex-col md:flex md:flex-row min-h-[calc(100vh-3.5rem)]">
        <VideoPageSlider setReviewModal={setReviewModal} />
        <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
          <div className="mx-6">
            <Outlet />
          </div>
        </div>
      </div>
      {reviewModal && <CoursereviewModal setReviewModal={setReviewModal} />}
    </div>
  );
}
