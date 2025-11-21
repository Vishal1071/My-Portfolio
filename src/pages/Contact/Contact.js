import React from 'react';
import './Contact.css';
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // EmailJS configuration
      const emailjs = window.emailjs;

      // Replace these with your EmailJS credentials
      const SERVICE_ID = 'your_service_id';
      const TEMPLATE_ID = 'your_template_id';
      const PUBLIC_KEY = 'your_public_key';

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="min-h-screen bg-black text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">

            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Let's Work Together</h1>

            <div className="grid lg:grid-cols-2 gap-12">

              {/* Left Section - Contact Info */}
              <div className="space-y-8">
                <p className="text-gray-400 text-lg leading-relaxed">
                  I'm always excited to work on new projects and collaborate with amazing people.
                  Whether you have a project in mind or just want to connect, feel free to reach out!
                </p>

                <div className="space-y-6 pt-8">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="text-gray-500 text-sm">Email:</p>
                      <p className="text-white">vishalsonagar48@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="text-gray-500 text-sm">Phone:</p>
                      <p className="text-white">+91 93137 71337</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-gray-400" />
                    <div>
                      <p className="text-gray-500 text-sm">Location:</p>
                      <p className="text-white">Ahmedabad, India</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-8">
                  <a
                    href="https://github.com/Vishal1071"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-black" />
                  </a>
                  <a
                    href="https://instagram.com/veeshal_45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                  >
                    <Instagram className="w-6 h-6 text-black" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vishal-sonagara-0b2427365"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-black" />
                  </a>
                </div>
              </div>

              {/* Right Section - Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors duration-300 text-white resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full px-6 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? 'Sending...' : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {status === 'success' && (
                    <p className="text-green-500 text-center">Message sent successfully!</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
                  )}
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
