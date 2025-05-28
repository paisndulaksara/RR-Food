'use client';
import { FaMapMarkerAlt, FaPhone, FaRegClock, FaEnvelope } from 'react-icons/fa';

export default function ContactDetails() {
  return (
    <section className="pb-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-600  dark:text-white mb-8">
              If you would like to know more about our policies or have any questions,
              feel free to contact us anytime. We can also provide a tracking number via email after ordering.
            </p>

            {/* Contact Items with extra spacing */}
            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl text-gray-700 dark:text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Address</h4>
                  <p className="text-sm text-gray-600 dark:text-white">
                    123 RR Street, Coffee City, CA
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <FaPhone className="text-xl text-gray-700 dark:text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-sm text-gray-600 dark:text-white">+1 555-1234</p>
                </div>
              </div>

              {/* Open Hours */}
              <div className="flex items-start gap-4">
                <FaRegClock className="text-xl text-gray-700 dark:text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Open Hours</h4>
                  <p className="text-sm text-gray-600 dark:text-white">
                    Monday - Friday: 09:00 - 17:30<br />
                    Saturday: 10:00 - 14:00
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-xl text-gray-700 dark:text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-sm text-gray-600 dark:text-white">info@rrfoods.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Map */}
          <div className="w-full h-[400px] overflow-hidden rounded shadow-sm">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12676.405950357233!2d79.954416!3d6.736496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1716838912345!5m2!1sen!2slk"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </div>
    </section>
  );
}
