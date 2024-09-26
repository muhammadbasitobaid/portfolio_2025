import React from 'react';

// Reusable TextInput Component
const TextInput = ({ label, type, id, placeholder, required = false }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-300">{label}</label>
      <input
        type={type}
        id={id}
        className="shadow-sm bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

// Reusable TextareaInput Component
const TextareaInput = ({ label, id, rows, placeholder }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-300">{label}</label>
      <textarea
        id={id}
        rows={rows}
        className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg shadow-sm border border-gray-600 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

// Reusable SelectInput Component
const SelectInput = ({ label, id, options }) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-300">{label}</label>
      <select
        id={id}
        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 placeholder-gray-400"
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <form action="#" className="space-y-8">
        {/* First Row: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <TextInput label="Your name" type="text" id="name" placeholder="John Doe" required />
          <TextInput label="Your email" type="email" id="email" placeholder="name@flowbite.com" required />
        </div>

        <SelectInput
          label="Select an option"
          id="countries"
          options={[
            { label: "Choose a country", value: "" },
            { label: "United States", value: "US" },
            { label: "Canada", value: "CA" },
            { label: "France", value: "FR" },
            { label: "Germany", value: "DE" }
          ]}
        />
        {/* Message */}
        <TextareaInput label="Your message" id="message" rows="6" placeholder="Leave a comment..." />



        {/* Submit Button */}
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
