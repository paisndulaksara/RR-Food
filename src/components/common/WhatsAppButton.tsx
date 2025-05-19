'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+94770562303" // <-- replace with your number (without +, use 94 for Sri Lanka)
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
