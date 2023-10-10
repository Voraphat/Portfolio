import React, { useState } from "react";
import "./Contact.css";
import "../Topic/Topic";
import Kojohn from '../Kojohn/Kojohn'
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
    // ส่งข้อมูลที่กรอกไปยังเซิร์ฟเวอร์หรือประมวลผลตามที่คุณต้องการ
    console.log(formData);

    // เมื่อส่งข้อมูลสำเร็จให้เปลี่ยนสถานะเป็น submitted
    setSubmitted(true);
  };

  return (
    <div>
      <Kojohn/>
      <div className="cover">
        <p className="stack">Contact Me</p>
      </div>

      <div className={`contactcontainer ${submitted ? "submitted" : ""}`}>
        <form onSubmit={handleSubmit}>
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
