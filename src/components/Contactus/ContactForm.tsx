'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic
    console.log('Form submitted:', formData);
    // Reset form (optional)
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Send Us An Message
        </h2>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
          {/* Row: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your name..."
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email..."
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Row: Message Textarea */}
          <textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
