import { motion } from "framer-motion";
import { useState, useRef } from "react";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    setLoading(true);
    // Wait to simulate Formspree delay
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      formRef.current.reset(); // Auto-clear fields
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-bold">Let's Talk</h2>
        <div className="w-12 h-1 bg-purple-600 mx-auto my-4 rounded" />
        <p className="text-gray-500">
          Got a question, idea, or opportunity? I'd love to hear from you.
        </p>
      </div>

      {/* Success message */}
      {submitted && (
        <motion.div
          className="bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded text-sm md:text-base mb-6 text-center shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Thank you! Your message has been successfully sent.
        </motion.div>
      )}

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        action="https://formspree.io/f/mjkrdlvq"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6 relative"
      >
        {/* Spam trap */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <input type="hidden" name="_subject" value="New Portfolio Contact Submission" />

        {/* Name */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Your name"
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="you@example.com"
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Write your message..."
          ></textarea>
        </motion.div>

        {/* Submit */}
        <motion.div variants={itemVariants}>
          <button
            type="submit"
            disabled={loading || submitted}
            className={`px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md shadow transition-all duration-300 ${
              (loading || submitted) && "opacity-60 cursor-not-allowed"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </motion.div>
      </motion.form>

      {/* Hidden iframe to suppress redirect */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
    </div>
  );
}
