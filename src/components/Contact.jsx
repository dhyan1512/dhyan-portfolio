import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h2>
        <p className="text-gray-600 mb-10">Feel free to reach out for collaborations or just to say hello 👋</p>

        <form
          action="https://formspree.io/f/xldjzppe"
          method="POST"
          className="grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 px-6 rounded-full hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
