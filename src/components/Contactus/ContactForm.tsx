'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-20 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white mb-10 tracking-wide">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-50 dark:bg-zinc-900 p-8 rounded-xl shadow-xl space-y-6"
        >
          {/* Row: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-black dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a566]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 text-black dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a566]"
              />
            </div>
          </div>

          {/* Row: Phone */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-black dark:text-white">
              Mobile Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="e.g. +94 77 123 4567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a566]"
            />
          </div>

          {/* Row: Message */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-black dark:text-white">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a566]"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-2">
            <button
              type="submit"
              className="bg-[#c9a566] text-white dark:text-black dark:bg-white px-8 py-3 rounded-md font-semibold hover:bg-black hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition-colors duration-300"
            >
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
