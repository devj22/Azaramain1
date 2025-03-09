import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  // This state holds the success/error status message after sending
  const [statusMessage, setStatusMessage] = useState<string>("");

  // Handle input/textarea changes in a single function
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_06r7hs9", // Replace with your EmailJS Service ID
        "template_d8yfpg3", // Replace with your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        },
        "8Ylj76VKCYAxAKbF7" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          // Reset form
          setFormData({ name: "", email: "", mobile: "", message: "" });
          // Clear status message after 3 seconds
          setTimeout(() => setStatusMessage(""), 3000);
        },
        (error) => {
          setStatusMessage("Failed to send message. Try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        {/* Close button */}
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4">Get More Details Enquire Now</h2>

        {/* Display success or error message */}
        {statusMessage && <p className="text-green-600 mb-2">{statusMessage}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="w-full p-2 border mb-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email*"
            className="w-full p-2 border mb-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile*"
            className="w-full p-2 border mb-2 rounded"
            value={formData.mobile}
            onChange={handleChange}
            required
          />

          {/* New Message Field */}
          <textarea
            name="message"
            placeholder="Your Message*"
            className="w-full p-2 border mb-2 rounded"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
          />

          <button
            type="submit"
            className="w-full bg-[#c95e4e] text-white py-2 mt-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
