import { getContactInfo } from '@/api/contact';
import { FaMapMarkerAlt, FaPhone, FaRegClock, FaEnvelope } from 'react-icons/fa';

// NOTE: We have removed 'use client', useState, and useEffect.
// This is now a Server Component.

// Define the type for your data
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

// The component is now 'async' to allow 'await' for data fetching
export default async function ContactDetails() {
  // Fetch data directly on the server. The page will wait for this to finish.
  const contact: ContactData | null = await getContactInfo().catch(() => null);

  // If data fails to load, show a simple message.
  if (!contact) {
    return (
      <section className="text-center py-20">
        <p>Error: Could not load contact information.</p>
      </section>
    );
  }

  // If data loads successfully, return the JSX with the data.
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