 'use client';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form';

// Define the shape of our form data
interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm<IFormInput>();

  // This function will only be called if validation succeeds
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Form submitted:', data);
    alert('Thank you for your message!');
    reset(); // Reset the form fields
  };

  return (
    <section className="relative py-20 transition-colors duration-300">
      {/* Background Images (unchanged) */}
      <div className="absolute inset-0 -z-10">
         <div className="hidden sm:block w-full h-full">
           <Image src="/images/contact-us.jpg" alt="Contact background desktop" fill className="object-cover" />
         </div>
         <div className="block sm:hidden w-full h-full">
           <Image src="/images/contact-us-mobile.jpg" alt="Contact background mobile" fill className="object-cover" />
         </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white mb-10 tracking-wide">
          Contact Us
        </h2>

        {/* Use the handleSubmit from the hook */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto bg-gray-50 dark:bg-zinc-900 p-8 rounded-xl shadow-xl space-y-6"
        >
          {/* Row: Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-1 text-black dark:text-white">Name</label>
              <input
                type="text"
                placeholder="Your name"
                {...register('name', { required: 'Name is required.' })}
                className={`w-full bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a566] ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1 text-black dark:text-white">Email</label>
              <input
                type="email"
                placeholder="Your email"
                {...register('email', { 
                  required: 'Email is required.', 
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format."
                  } 
                })}
                className={`w-full bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a566] ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          {/* Row: Phone */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-black dark:text-white">Mobile Number</label>
            <input
              type="tel"
              placeholder="e.g. +94 77 123 4567"
              {...register('phone', { 
                pattern: {
                  value: /^\+?\d{10,}$/,
                  message: 'Please enter a valid phone number.'
                }
              })}
              className={`w-full bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a566] ${errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
          </div>

          {/* Row: Message */}
          <div>
            <label className="block text-sm font-semibold mb-1 text-black dark:text-white">Message</label>
            <textarea
              placeholder="Type your message here..."
              rows={5}
              {...register('message', { 
                required: 'Message is required.',
                minLength: { value: 10, message: 'Message must be at least 10 characters long.' }
              })}
              className={`w-full bg-white dark:bg-black text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9a566] ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'}`}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

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