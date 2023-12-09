import Layout from '@/components/Layout';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    service: '',
    phoneNumber: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle the form submission here
  };

  return (
    <Layout>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 p-8 border border-gray-300 rounded-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-gray-700 text-sm font-bold mb-2">Service:</label>
        <input type="text" id="service" name="service" value={formData.service} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-6">
        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-6">
        <label htmlFor="details" className="block text-gray-700 text-sm font-bold mb-2">Details/Comments:</label>
        <textarea id="details" name="details" value={formData.details} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
      </div>

      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </form>
    </Layout>
  );
}

export default ContactForm;
