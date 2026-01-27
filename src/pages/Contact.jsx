import React from "react";

function Contact() {
  return (
    <section id="contact" className="p-10 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>

      <div className="max-w-md mx-auto space-y-4">
        <input className="input input-bordered w-full" placeholder="Name" />
        <input className="input input-bordered w-full" placeholder="Email" />
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="Message"
        ></textarea>

        <button className="btn btn-primary w-full">Send Message</button>
      </div>
    </section>
  );
}

export default Contact;
