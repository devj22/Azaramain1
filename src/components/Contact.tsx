import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

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
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in learning more? Get in touch with our team
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <div className="flex items-start mb-6">
                <MapPin className="text-indigo-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">
                    123 Luxury Avenue, Downtown District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Phone className="text-indigo-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">
                    Sales: +1 (555) 123-4567<br />
                    Support: +1 (555) 987-6543
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-indigo-600 mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">
                    info@luxeliving.com<br />
                    sales@luxeliving.com
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-600 text-white p-6 rounded-lg">
              <h4 className="font-semibold text-xl mb-4">Visit Our Sales Office</h4>
              <p className="mb-4">
                Our sales office is open for visits and inquiries. Schedule a tour to experience our luxury apartments firsthand.
              </p>
              <div className="mb-4">
                <p className="font-medium">Opening Hours:</p>
                <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p>Saturday - Sunday: 10:00 AM - 5:00 PM</p>
              </div>
              <button className="bg-white text-indigo-600 hover:bg-gray-100 font-medium px-6 py-2 rounded-md transition-colors duration-300">
                Schedule a Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;