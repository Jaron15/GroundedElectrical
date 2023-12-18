import Layout from '@/components/Layout';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import Modal from '../../components/Modal'; 



const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    service: '',
    phoneNumber: '',
    details: '',
  });
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');


  //validation logic
  const validateName = (name) => {
    if (!name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, name: "" }));
    }
  };
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email address." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };
  
  const validateService = (service) => {
    if (!service.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, service: "Service is required." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, service: "" }));
    }
  };
  
  //validation logic end 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    validateName(formData.name);
    validateEmail(formData.email);
    validateService(formData.service);
    const formIsValid = !errors.name && !errors.email && !errors.service &&
    formData.name.trim() && formData.email.trim() && formData.service.trim();

    if (formIsValid) {
        //email service
        const templateParams = {
            name: formData.name,
            service: formData.service,
            email: formData.email,
            phoneNumber: formData.phoneNumber ? formData.phoneNumber : 'Not provided',
            details: formData.details ? formData.details : 'No additional details provided',
          };
          emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
          .then((response) => {
            console.log('Email successfully sent!', response.status, response.text);
            setModalMessage('Thank you! Your message has been sent successfully.');
        setShowModal(true);
            setFormData({
                email: '',
                name: '',
                service: '',
                phoneNumber: '',
                details: '',
            })
          }, (error) => {
            console.log('Failed to send email.', error);
            setModalMessage('Failed to send the email. Please try again.');
            setShowModal(true);

          });
      //email service end
    }
    }
  
//framer variants
  const formVariants = {
    hidden: {
   
      opacity: 0
    },
    visible: {
    
      opacity: 1,
      transition: {
        delay: 0.0,
        staggerChildren: 0.2, duration: 1, 
      }
    }
  };
  const borderVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2, duration: 1, 
      }
    }
  };

  const inputVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      }
    }
  };
  const buttonVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: .7,
      }
    }
  };
  //framer variants end 

  return (
      <div className='bg-black min-h-screen mx-auto w-full'>
         <Modal show={showModal} message={modalMessage} onClose={() => setShowModal(false)} />
            <Layout>
            <motion.div
            variants={borderVariants}
            initial="hidden"
            animate="visible"
             className="sm:p-0.5 bg-gradient-to-t from-darkgold via-gold to-darkgold rounded-lg mx-auto w-full sm:max-w-lg md:max-w-xl lg:max-w-xl xl:max-w-4xl sm:my-10">
                    <motion.form
                        onSubmit={handleSubmit}
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full bg-black sm:bg-zinc-900 p-4 sm:p-8 rounded-lg"
                    >
    <motion.div className="mb-6" variants={inputVariants}>
    <label htmlFor="name" className="block text-white text-sm font-bold mb-2">Name:</label>
    <input type="text" id="name" name="name" placeholder="Enter your name" 
    value={formData.name} 
    onChange={handleChange}
    onBlur={() => validateName(formData.name)} 
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
  </motion.div>

  <motion.div className="mb-6" variants={inputVariants}>
    <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email:</label>
    <input type="email" id="email" name="email" placeholder="Enter your email" 
    value={formData.email} 
    onChange={handleChange} 
    onBlur={() => validateEmail(formData.email)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
  </motion.div>

  <motion.div className="mb-6" variants={inputVariants}>
    <label htmlFor="service" className="block text-white text-sm font-bold mb-2">Service:</label>
    <input type="text" id="service" name="service" placeholder="Type of service needed" 
    value={formData.service} 
    onChange={handleChange} 
    onBlur={() => validateService(formData.service)}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    {errors.service && <p className="text-red-500 text-xs">{errors.service}</p>}
  </motion.div>

  <motion.div className="mb-6" variants={inputVariants}>
    <label htmlFor="phoneNumber" className="block text-white text-sm font-bold mb-2">Phone Number:</label>
    <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number (optional)" 
    value={formData.phoneNumber} 
    onChange={handleChange} 
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
  </motion.div>

  <motion.div className="mb-6" variants={inputVariants}>
    <label htmlFor="details" className="block text-white text-sm font-bold mb-2">Details/Comments:</label>
    <textarea id="details" name="details" placeholder="Your message or comments" value={formData.details} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" rows="4"></textarea>
  </motion.div>

      <motion.button type="submit" variants={buttonVariants} className="custom-button relative w-40 h-14 border-4 border-ridge border-blue-600 bg-transparent text-white text-lg font-bold rounded-md cursor-pointer transition duration-1000"
>
Submit
</motion.button>
    </motion.form>
    </motion.div>
    </Layout>
    </div>
  );
}

export default ContactForm;
