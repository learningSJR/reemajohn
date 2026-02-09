import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="p-10 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Name"
          required
        />

        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          placeholder="Message"
          required
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
