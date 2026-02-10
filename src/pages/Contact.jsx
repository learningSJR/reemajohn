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
      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      console.error(error);
      setStatus("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="p-10 bg-base-200  flex flex-col justify-center mx-auto items-center"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-base-100 p-6 rounded-xl shadow space-y-4"
      >
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
          className="textarea textarea-bordered w-full min-h-30"
          placeholder="Message"
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="text-center text-sm">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
