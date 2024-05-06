import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarLinks } from "../../../data/dashboard-links";
import SidebarLink from "./SidebarLink";
import { VscSignOut } from "react-icons/vsc";
import { logout } from "../../../services/operations/authApi";
import { useNavigate } from "react-router-dom";
import LogoutModal from "../../common/LogoutModal";

export default function Sidebar() {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);
  const [modal, setModal] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="custom-loader"></div>;
      </div>
    );
  }
  return (
    <div>
      <div
        className="hidden md:flex min-w-[222px] flex-col border-r-[1px] border-r-richblack-700
        h-full bg-richblack-800 py-10"
      >
        <div className="flex flex-col">
          {sidebarLinks.map((link) => {
            if (link.type && user?.accountType !== link.type) return null;
            return (
              <SidebarLink key={link.id} Path={link} iconName={link.icon} />
            );
          })}
        </div>
        {/* Horizontal line */}
        <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-600"></div>
        <div className="flex flex-col">
          {/* Setting button */}
          <SidebarLink
            Path={{ name: "Settings", path: "/dashboard/settings" }}
            iconName="VscSettingsGear"
          />

          {/* Logout button */}
          <button
            onClick={() =>
              setModal({
                text1: "Are you ready to say goodbye?",
                text2: "Your will be logged out after this.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1: () => dispatch(logout(navigate)),
                btn2: () => setModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium transition-all duration-200 text-richblack-300"
          >
            <div className="flex gap-x-2">
              <VscSignOut className="text-lg" />
              <p>Logout</p>
            </div>
          </button>
        </div>
      </div>
      {modal && <LogoutModal data={modal} />}
    </div>
  );
}
