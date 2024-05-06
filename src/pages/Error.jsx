import React from "react";
import error404 from "../assets/Logo/404error.png";

const Error = () => {
  return (
    <div className="flex min-h-screen overflow-y-hidden justify-center items-center ">
      {/* Error - 404 Not found */}
      <img src={error404} alt="error" />
    </div>
  );
};

export default Error;
