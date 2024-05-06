import React from "react";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { FaChevronCircleRight } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function VideoPageSlider({ setReviewModal }) {
  const [activeStatus, setActiveStatus] = useState("");
  const [videoBarActive, setVideoBarActive] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { sectionId, subSectionId } = useParams();
  const {
    courseSectionData,
    courseEntireData,
    totalNoOfLectures,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    (() => {
      if (!courseSectionData.length) return;
      const currentSectionIndx = courseSectionData.findIndex(
        (data) => data._id === sectionId
      );
      const currentSubSectionIndx = courseSectionData?.[
        currentSectionIndx
      ]?.subSection.findIndex((data) => data._id === subSectionId);
      const activeSubSectionId =
        courseSectionData[currentSectionIndx]?.subSection?.[
          currentSubSectionIndx
        ]?._id;
      setActiveStatus(courseSectionData?.[currentSectionIndx]?._id);
      setVideoBarActive(activeSubSectionId);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseSectionData, courseEntireData, location.pathname]);
  return (
    <>
      <aside>
        {!isSidebarOpen && (
          <button onClick={toggleSidebar}>
            <FaChevronCircleRight
              size={24}
              className="text-white font-bold mt-2 mr-32 ml-2"
            />
          </button>
        )}
        {/* <div
          className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300"
          onClick={toggleSidebar}
        ></div> */}
        <div
          className={`fixed top-0 left-0 z-50 w-[320px] max-w-[350px] bg-richblack-800 transition-all duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Sidebar content here (as in your original code) */}
          <div className="flex h-[100vh] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
            <div className="mx-5 mt-4 flex flex-col items-start justify-center gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
              <div className="flex w-full items-center justify-between ">
                <div
                  onClick={() => {
                    navigate(`/dashboard/enrolled-courses`);
                  }}
                  className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
                  title="back"
                >
                  <IoIosArrowBack size={30} />
                </div>
                <button
                  onClick={() => setReviewModal(true)}
                  className="flex gap-x-2 cursor-pointer rounded-md py-2 px-5 font-semibold text-richblack-900 border border-yellow-50 bg-yellow-50 hover:scale-95 transition-all duration-200 ml-auto"
                >
                  <p>Add Review</p>
                </button>
              </div>
              <div className="flex flex-col">
                <p>{courseEntireData?.courseName}</p>
                <p className="text-sm font-semibold text-richblack-500">
                  {completedLectures?.length} / {totalNoOfLectures}
                </p>
              </div>
            </div>

            <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
              {courseSectionData.map((course, index) => (
                <div
                  className="mt-2 cursor-pointer text-sm text-richblack-5"
                  onClick={() => setActiveStatus(course?._id)}
                  key={index}
                >
                  {/* Section */}
                  <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                    <div className="w-[70%] font-semibold">
                      {course?.sectionName}
                    </div>
                    <div className="flex items-center gap-3">
                      {/* <span className="text-[12px] font-medium">
                    Lession {course?.subSection.length}
                  </span> */}
                      <span
                        className={`${
                          activeStatus === course?.sectionName
                            ? "rotate-0"
                            : "rotate-180"
                        } transition-all duration-500`}
                      >
                        <BsChevronDown />
                      </span>
                    </div>
                  </div>

                  {/* Sub Sections */}
                  {activeStatus === course?._id && (
                    <div className="transition-[height] duration-500 ease-in-out">
                      {course.subSection.map((topic, i) => (
                        <div
                          className={`flex gap-3  px-5 py-2 ${
                            videoBarActive === topic._id
                              ? "bg-yellow-200 font-semibold text-richblack-800"
                              : "hover:bg-richblack-900"
                          } `}
                          key={i}
                          onClick={() => {
                            navigate(
                              `/view-course/${courseEntireData?._id}/section/${course?._id}/sub-section/${topic?._id}`
                            );
                            setVideoBarActive(topic._id);
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={completedLectures.includes(topic?._id)}
                            onChange={() => {}}
                          />
                          {topic.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-5 flex flex-col ...">{/* ... */}</div>

          <div className="absolute top-4 right-4">
            <button onClick={toggleSidebar}>
              {isSidebarOpen ? (
                <ImCross size={20} className="text-yellow-25 -mt-8 -mr-4" />
              ) : (
                <BsChevronRight
                  size={24}
                  className="text-yellow-25 -mt-8 mr-32"
                />
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
