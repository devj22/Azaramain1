import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your actual EmailJS Service ID, Template ID, and Public Key
    const serviceID = 'service_06r7hs9';
    const templateID = 'template_d8yfpg3';
    const publicKey = '8Ylj76VKCYAxAKbF7';

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.error(error.text);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#c95e4e] mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in learning more? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-[#c95e4e] mb-6">Get In Touch</h3>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#c95e4e] focus:border-[#c95e4e]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#c95e4e] focus:border-[#c95e4e]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#c95e4e] focus:border-[#c95e4e]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#c95e4e] focus:border-[#c95e4e]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full font-medium py-3 rounded-md bg-[#c95e4e] text-white hover:bg-[#b04e40] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-[#c95e4e] mb-6">Contact Information</h3>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <div className="flex items-start mb-6">
                <MapPin className="text-[#c95e4e] mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">
                  SITE ADDRESS:
Cs no. 1/404, Motishah Lane, Love Lane,
Maplawadi compound, Mazgaon, Mumbai-10.<br />
AZARA REDSTONE LLP
501 Everest Co.op. Hsg. Soc. Ltd,
164 Hill Road, Bandra (W), Mumbai – 50

                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Phone className="text-[#c95e4e] mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">
                  +91 81694 81035
                  <br />
                  +91 78689 00090

                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-[#c95e4e] mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">
                  info@redstonegroup.in<br />
                  sales@redstonegroup.in

                  </p>
                </div>
              </div>
            </div>

            {/* Visit Our Office Section - Styled like Contact Information */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
