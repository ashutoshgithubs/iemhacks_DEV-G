import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import MyProfile from "../../../assets/Logo/MyprofileText.png";
import { formattedDate } from "../../../utils/dateFormatter";

export default function Myprofile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  return (
    <div>
      {/* <h1 className="mb-14 text-3xl font-medium text-richblack-5">
        My Profile
      </h1> */}
      <div className="flex justify-center mb-4">
        <img
          src={MyProfile}
          alt="profile"
          className="h-20 text-black bg-yellow-50 border rounded-full "
        />
      </div>
      <div className="flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/dashboard/settings");
          }}
          className="hidden md:flex gap-x-2 cursor-pointer rounded-md py-2 px-5 font-semibold text-richblack-900 border border-yellow-50 bg-yellow-50 hover:scale-95 transition-all duration-200"
        >
          <p>Edit</p>
          <BiEditAlt />
        </button>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">About</p>
          <button
            onClick={() => {
              navigate("/dashboard/settings");
            }}
            className="hidden md:flex gap-x-2 cursor-pointer rounded-md py-2 px-5 font-semibold text-richblack-900 border border-yellow-50 bg-yellow-50 hover:scale-95 transition-all duration-200"
          >
            <p>Edit</p>
            <BiEditAlt />
          </button>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-richblack-5"
              : "text-richblack-400"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>
      <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <button
            onClick={() => {
              navigate("/dashboard/settings");
            }}
            className="hidden md:flex gap-x-2 cursor-pointer rounded-md py-2 px-5 font-semibold text-richblack-900 border border-yellow-50 bg-yellow-50 hover:scale-95 transition-all duration-200"
          >
            <p>Edit</p>
            <BiEditAlt />
          </button>
        </div>
        <div className="flex max-w-[500px] justify-between">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-richblack-600">First Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Email</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Gender</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 ml-8 sm:ml-0">
            <div>
              <p className="mb-2 text-sm text-richblack-600">Last Name</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Phone Number</p>
              <p className="text-sm font-medium text-richblack-5">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-richblack-600">Date Of Birth</p>
              <p className="text-sm font-medium text-richblack-5">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
