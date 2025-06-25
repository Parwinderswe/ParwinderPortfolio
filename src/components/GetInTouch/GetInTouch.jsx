import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FiLinkedin, FiGithub } from "react-icons/fi";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
          Email: formData.email,
          Message: formData.message,
          From:"parwinderkaur.swe@gmail.com"
        }),
      });

      const result = await res.json();
      if (result.success) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Email send error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  const contact = [
    { img: <CgMail />, title: "Email", detail: "parwinderkaur.swe@gmail.com" },
    { img: <IoCallOutline />, title: "Phone", detail: "7696720161" },
    { img: <IoLocationOutline />, title: "Location", detail: "Malerkotla" },
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/your-linkedin-username" },
    { icon: <FiGithub />, href: "https://github.com/your-github-username" },
  ];

  return (
    <section id="contact" className="py-20 dark:text-white dark:bg-gray-950 fade-in-section is-visible">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-blue-500"></div>
          <p className="max-w-3xl mx-auto text-2xl text-gray-500">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </div>

        <div className="grid max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-2">
          <div className="space-y-8 text-left">
            <h3 className="mb-6 text-3xl font-bold">Contact Information</h3>
            {contact.map((info, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-purple-400/10">
                  <span className="text-2xl text-purple-600">{info.img}</span>
                </div>
                <div className="text-lg">
                  <h4 className="font-medium">{info.title}</h4>
                  <a
                    href={
                      info.title === "Email"
                        ? `mailto:${info.detail}`
                        : info.title === "Phone"
                        ? `tel:${info.detail}`
                        : undefined
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-purple-500"
                  >
                    {info.detail}
                  </a>
                </div>
              </div>
            ))}
            <div className="pt-4 text-lg">
              <h4 className="mb-4 font-medium">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 text-2xl text-black rounded-full dark:text-white hover:bg-purple-400 dark:hover:text-purple-500 bg-gray-400/30"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 border rounded-lg shadow-md border-border">
            <h3 className="mb-6 text-2xl font-semibold">Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              {["Name", "Email", "Subject", "Message"].map((label) => {
                const isRequired = label !== "Subject";
                const isTextarea = label === "Message";

                return (
                  <div key={label} className="mb-4 text-lg">
                    <label
                      className="block mb-2 font-medium text-left"
                      htmlFor={label.toLowerCase()}
                    >
                      {label}
                      {isRequired && <span className="text-red-700">*</span>}
                    </label>

                    {isTextarea ? (
                      <textarea
                        id={label.toLowerCase()}
                        rows="4"
                        value={formData[label.toLowerCase()]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-black border rounded-md border-input focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required={isRequired}
                      />
                    ) : (
                      <input
                        id={label.toLowerCase()}
                        type="text"
                        value={formData[label.toLowerCase()]}
                        onChange={handleChange}
                        className="w-full px-4 py-2 text-black border rounded-md border-input focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required={isRequired}
                      />
                    )}
                  </div>
                );
              })}

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-10 px-4 font-medium text-white transition-colors bg-purple-600 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
