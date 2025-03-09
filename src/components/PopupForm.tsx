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
  });

  const [message, setMessage] = useState<string>("");

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        },
        "8Ylj76VKCYAxAKbF7" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setMessage("Message sent successfully!");
          setFormData({ name: "", email: "", mobile: "" }); // Reset form
          setTimeout(() => setMessage(""), 3000);
        },
        (error) => {
          setMessage("Failed to send message. Try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Get More Details Enquire Now</h2>
        
        {message && <p className="text-green-600 mb-2">{message}</p>}

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
          <button type="submit" className="w-full bg-[#c95e4e] text-white py-2 mt-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
