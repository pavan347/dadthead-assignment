import React, { useState } from "react";
import MainSection from "../../components/MainSection";
import { FaTimes } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [formModal, setFormModal] = useState(false);

  const [formError, setFormError] = useState(false);
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const isFormValid = () => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^[1-9][0-9]{9}$/;

    if (formData.name === "") {
      return "Name is required.";
    } else if (!nameRegex.test(formData.name)) {
      return "Name must contain only letters and spaces.";
    } else if (formData.email === "") {
      return "Email is required.";
    } else if (formData.phoneNo === "") {
      return "Phone number is required.";
    } else if (!phoneRegex.test(formData.phoneNo)) {
      return "Phone number must be a valid 10-digit number.";
    } else if (formData.message === "") {
      return "Message is required.";
    }

    return "";
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    let message = isFormValid();
    if (message !== "") {
      setFormError(true);
      setIsLoading(false);
      setFormErrorMessage(message);
      return;
    } else {
      setFormError(false);
      setFormErrorMessage("");
    }

    const ourFormData = formData;
    const apiKey = import.meta.env.VITE_EMAIL_API_KEY;
    ourFormData.access_key = apiKey;

    const json = JSON.stringify(ourFormData);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      setFormData({
        name: "",
        email: "",
        phoneNo: "",
        message: "",
      });
      setFormModal(true);
      setFormError(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* main */}
      <section className="main w-full">
        <MainSection
          title="Contact Us"
          tagline="Partner with Us to Elevate Your Brand - Let's Create Impactful Marketing Solutions Together."
          image="./contactbg.jpg"
        />
      </section>

      <section
        id="formcontainer"
        className="contact-form my-10 md:my-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
      >
        <div className="rounded-md overflow-hidden flex flex-col md:flex-row">
          <div className="left-container w-full md:w-[60%] relative">
            <img
              src="./contactformbg.jpg"
              alt="Contact Us"
              className="w-full h-[0px] md:h-full object-cover"
            />
            <img
              src="./logo.png"
              alt="logo"
              className="h-[0px] md:h-40 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div
            className="right-container  w-full  md:w-[40%] bg-gray-300 text-black
            py-10 px-8 md:px-12"
          >
            <div className="contact-head flex flex-col text-center text-white md:text-black">
              <h2 className="text-2xl font-bold">Let's Transform Your Brand</h2>
              <p>
                Innovative strategies and creative solutions tailored to your
                business needs—let's make your brand stand out!
              </p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-y-5 mt-5">
              <input
                type="text"
                name="name"
                id="name"
                className="rounded p-3 
              border border-gray-500 focus:outline-none focus:border-black"
                placeholder="Enter Your Full Name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                id="email"
                className="rounded p-3 
              border border-gray-500 focus:outline-none focus:border-black"
                placeholder="Enter Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="number"
                name="phoneNo"
                id="phoneNo"
                className="rounded p-3 
              border border-gray-500 focus:outline-none focus:border-black"
                placeholder="Enter Your Phone Number"
                required
                value={formData.phoneNo}
                onChange={handleChange}
              />

              <textarea
                name="message"
                id="message"
                className="rounded p-3
              border border-gray-500 focus:outline-none focus:border-black"
                placeholder="Tell Us About Your Project or Marketing Needs"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
              ></textarea>

              {formError && (
                <p className="text-red-500 text-sm font-medium text-center">
                  {formErrorMessage}
                </p>
              )}

              <button
                type="submit"
                className={
                  "bg-yellow-500 text-lg font-medium text-white py-2 rounded-md border-2 hover:text-yellow-500 hover:bg-transparent hover:border-yellow-500 hover:transition-all cursor-pointer disabled:cursor-none disabled:bg-gray-600 disabled:text-white-600 "
                }
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contat-map-container w-full my-10 md:my-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="map w-full rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89207.45137772709!2d80.34407270555775!3d16.26070511320395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a752c8de14c55%3A0xf6198532362cf7be!2sDad%20The%20AD%20agency!5e0!3m2!1sen!2sin!4v1745053297716!5m2!1sen!2sin"
            loading="lazy"
            className="w-full h-[500px] md:h-[600px] border-none"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {formModal && (
          <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
            <div className="bg-white w-[80%] md:w-[60%] lg:w-[40%] relative p-10 rounded-md flex flex-col items-center justify-center">
              <div className="tick  p-3 text-center text-green-500 text-5xl ">
                <TiTick className="rounded-full border-2 border-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-primary ">Thank You!</h2>
              <p className="text-center">
                Your message has been sent successfully. Our Team will reach you out shortly.
              </p>
              <div className="close-btn absolute top-5 right-5 cursor-pointer  text-color-heading p-2 rounded-full">
                <FaTimes onClick={() => setFormModal(false)} />
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default Contact;
