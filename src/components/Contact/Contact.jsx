import React, { useState } from "react";
import "./Contact.css";
import "../Topic/Topic";
import Navbar from "../Navbar/Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setSubmitted(true);
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="cover">
        <p className="stack">Contact Me</p>
      </div>
      <div className={`contactcontainer ${submitted ? "submitted" : ""}`}>
        <form
          action="https://getform.io/f/cbc05cce-0934-42e4-bc5c-252e56ee4d1d"
          method="POST"
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>

          <button
            type="submit"
            className={`submit-button ${submitted ? "success" : ""}`}
            disabled={submitted}
          >
            {submitted ? "Submitted!" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
