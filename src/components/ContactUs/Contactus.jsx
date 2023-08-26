import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnect } from "../../Services/apiconnector";
import { contactusEndpoint } from "../../Services/apis";
import CountryCode from "../../data/countrycode.json";
const Contactus = () => {
  const [loading, setloading] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSumbitSuccessful },
  } = useForm();
  useEffect(() => {
    if (isSumbitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
      });
    }
  }, [reset, isSumbitSuccessful]);

  const SumbitContactForm = async (data) => {
    console.log(data);
    reset();
    try {
      setloading(true);
      const response = await apiConnect(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      console.log(response);
    } catch (error) {}
  };

  return (
    <form className="" onSubmit={handleSubmit(SumbitContactForm)}>
      <div className="flex gap-5">
        {/* firstname */}
        <div className="flex text-black flex-col">
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your firstname"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && <span>please Enter your name</span>}
        </div>

        {/* lastname */}
        <div className="flex text-black flex-col">
          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter your lastname"
            {...register("lastname")}
          />
        </div>
      </div>

      {/* email */}
      <div className="flex text-black flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>please Enter your email</span>}
      </div>

      {/* phone number */}
      <div className="flex flex-col">
        <label htmlFor="phonenumber">Phone Number</label>
        <div className="flex flex-row  gap-10">
          <select
            name="dropdown"
            id="dropdown"
            className="bg-richblack-800 ml-4 w-[50px] "
            {...register("countrycode", { required: true })}
          >
            {CountryCode.map((element, index) => (
              <option className="" key={index} value={element.code}>
                {element.code} - {element.country}
              </option>
            ))}
          </select>

          <input
            type="number"
            id="phonenumber"
            name="phonenumber"
            placeholder="enter your phonenumber"
            className="text-black w-[calc(100%-90px)] "
            {...register("phonenumber", {
              required: {
                value: true,
                message: "enter the correct phone number",
              },
              maxLength: {
                value: 10,
                message: "invalid number more than 10 character ",
              },
              minLength: { value: 8, message: "invalid phone number entered " },
            })}
          />
        </div>
        {errors.phonenumber && <span>{errors.phonenumber.message}</span>}
      </div>

      {/* message */}
      <div className="flex text-black flex-col">
        <label htmlFor="message">Message</label>
        <textarea
          type="message"
          name="message"
          id="message"
          cols={30}
          rows={7}
          placeholder="Enter your message"
          {...register("message", { required: true })}
        />
        {errors.message && <span>please Enter your message</span>}
      </div>

      <button
        type="sumbit"
        className="rounded  text-black text-center flex items-center mx-auto mt-6 p-2 font-bold hover:p-1 transition-all duration-200 bg-yellow-100"
      >
        Send Message
      </button>
    </form>
  );
};

export default Contactus;
