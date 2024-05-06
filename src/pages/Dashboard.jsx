import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/core/Dashboard/Sidebar";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);
  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="custom-loader"></div>;
      </div>
    );
  }
  return (
    <div className=" relative flex min-h-[calc(100vh-3.5rem)] bg-richblack-900">
      <Sidebar />
      <div className="h-[calc(100vh-3.5rem)] overflow-auto flex-1">
        <div className="mx-auto w-11/12 max-w-[1000px] py-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
