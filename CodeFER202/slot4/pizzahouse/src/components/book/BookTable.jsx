import React, { useState } from "react";
import "./BookTable.css";

function BookTable() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking sent successfully!");
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section className="book">
      <h2 className="book-title">Book Your Table</h2>

      <form className="book-form" onSubmit={handleSubmit}>
        <div className="book-row">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            value={form.email}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="dine-in">Dine In</option>
            <option value="take-away">Take Away</option>
            <option value="delivery">Delivery</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Please write your comment"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="book-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default BookTable;
