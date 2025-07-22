"use client";

import { useState } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset the form
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      interest: "",
      message: "",
    });

    // Hide success message after 3s
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="w-full bg-white py-24 px-4" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Ready to invest in your future? Contact us today for site visits and detailed information.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Info */}
          <div className="bg-green-600 text-white rounded-2xl p-8 shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-white/90">
              Our expert team is ready to help you find the perfect plot for your dream home or investment.
              Get personalized assistance and site visit arrangements.
            </p>

            <div className="space-y-4 text-white/90 text-sm">
              <div>
                <p className="font-semibold">📞 Call Us</p>
                <a href="tel:+918790670641">+91 996 666 9863</a>
              </div>
              <div>
                <p className="font-semibold">📧 Email Us</p>
                <a href="mailto:saanvikaproperties@gmail.com">saanvikaproperties@gmail.com</a>
              </div>
              <div>
                <p className="font-semibold">📍 Visit Us</p>
                <p>
                  Plot No: 130, GSR Enclave Building, Near Mini Shilparamam,<br />
                  Phase-2 Uppal Bhagirath, Uppal, Telangana.
                </p>
                <p>Sales Office: 10 AM – 7 PM</p>
              </div>
              <div>
                <p className="font-semibold">🕒 Office Hours</p>
                <p>Daily: 10 AM – 7 PM</p>
                
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-4">
              <p className="text-white font-medium mb-2">Follow Us:</p>
              <div className="flex gap-4 text-xl">
                <a href="https://www.instagram.com/saanvika__properties/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/people/Saanvika-Properties/61565686707825/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                  <FaFacebookF />
                </a>
                <a href="https://www.youtube.com/@saanvika_properties-r1m" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                  <FaYoutube />
                </a>
                <a href="https://wa.me/919966669863" target="_blank" rel="noopener noreferrer" className="hover:text-white/80">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-200">
            {submitted && (
              <div className="text-green-600 font-medium bg-green-50 border border-green-200 px-4 py-2 rounded-lg text-center">
                ✅ Your message has been submitted successfully!
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address *</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="you@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Interest In</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select your interest</option>
                <option value="Residential Plot">Residential Plot</option>
                <option value="Farm Land">Farm Land</option>
                <option value="Site Visit">Site Visit</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Any specific requirements or questions?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
