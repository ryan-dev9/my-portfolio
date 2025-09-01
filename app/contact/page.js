"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
      }, 2500);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_xtwm8l3", // Your Service ID
        "template_bo8hcin", // Your Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "Gi3DYipsiiXxGfZE7" // Your Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };
  return (
    <section className="min-h-screen py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="mt-6 text-5xl font-bold font-[Orbitron] text-center  mb-8">
          Contact <span className="text-blue-500">Us</span>
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-black p-6 rounded-2xl shadow-lg space-y-5"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg text-xl font-semibold bg-white/5  border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg text-xl font-semibold bg-white/5 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg text-xl font-semibold bg-white/5 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <div className="relative w-64">
            <motion.button
              type="submit"
              onClick={handleClick}
              className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-300 font-semibold  flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
              disabled={isSending}
            >
              {isSending ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              ) : (
                "Send Message"
              )}
            </motion.button>

            <AnimatePresence>
              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-[-510px] left-[170px] w-[300px] sm:w-[400px] scale-125 z-60 sm:left-[420px] -translate-x-1/2 font-semibold bg-green-400 px-4 py-2 rounded-lg shadow-lg"
                >
                  ✅ Message Sent Successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
}

