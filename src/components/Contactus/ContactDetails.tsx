'use client';

import { useEffect, useState } from 'react';
import { getContactInfo } from '@/api/contact';
import { FaMapMarkerAlt, FaPhone, FaRegClock, FaEnvelope } from 'react-icons/fa';

type ContactData = {
  title: string;
  description: string;
  address: string;
  phone: string;
  weekday_hours: string;
  weekend_hours: string;
  email: string;
  map: string;
};

export default function ContactDetails() {
  const [contact, setContact] = useState<ContactData | null>(null);

  useEffect(() => {
    getContactInfo().then(setContact);
  }, []);

  if (!contact) return <p className="text-center py-10">Loading contact info...</p>;

  return (
    <section className="pb-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* LEFT COLUMN: Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{contact.title}</h2>
            <p className="text-gray-600 dark:text-white mb-8">{contact.description}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl text-gray-700 dark:text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Address</h4>
                  <p className="text-sm text-gray-600 dark:text-white">{contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-xl text-gray-700 dark:text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-sm text-gray-600 dark:text-white">{contact.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaRegClock className="text-xl text-gray-700 dark:text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Open Hours</h4>
                  <p className="text-sm text-gray-600 dark:text-white">
                    {contact.weekday_hours}<br />
                    {contact.weekend_hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaEnvelope className="text-xl text-gray-700 dark:text-white mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-sm text-gray-600 dark:text-white">{contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Map */}
          <div className="w-full h-[400px] overflow-hidden rounded shadow-sm">
            <iframe
              src={contact.map}
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
