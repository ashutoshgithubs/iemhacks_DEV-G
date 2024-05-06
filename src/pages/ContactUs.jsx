import React from "react";
import ContactUsForm from "../components/contactPage/ContactUsForm";
import ContactDetails from "../components/contactPage/ContactDetails";
import Footer from "../components/common/Footer";
export default function ContactUs() {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white md:flex-row mb-8">
        <div className="md:w-[40%]">
          <ContactDetails />
        </div>
        <div className="md:w-[60%] border border-richblack-600 text-richblack-300 rounded-xl p-7 md:p-14 flex gap-3 flex-col">
          <h1 className="text-4xl leading-10 font-semibold text-richblack-5 items-center">
            Got an Idea? We&apos;ve got the skills. Let&apos;s team up
          </h1>
          <p className="items-center">
            Tell us more about yourself and what you&apos;ve got in mind.
          </p>
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
