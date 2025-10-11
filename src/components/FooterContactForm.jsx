"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FooterContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    honeypot: "",
    timestamp: Date.now(),
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Validation patterns
  const patterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^[6-9]\d{9}$/,
    company: /^[a-zA-Z0-9\s&.,'-]{2,100}$/,
    message: /^[\s\S]{10,500}$/,
  };

  // Suspicious pattern detection
  const isSuspicious = (text) => {
    const suspiciousPatterns = [/<script/i, /javascript:/i, /on\w+\s*=/i, /(https?:\/\/){2,}/i, /(\w)\1{10,}/, /<iframe/i, /eval\(/i, /(viagra|cialis|casino|lottery)/i];
    return suspiciousPatterns.some((pattern) => pattern.test(text));
  };

  const validateField = (name, value) => {
    if (!value && ["name", "email", "phone", "message"].includes(name)) {
      return "This field is required";
    }

    if (isSuspicious(value)) {
      return "Invalid content detected";
    }

    switch (name) {
      case "name":
        if (!patterns.name.test(value)) {
          return "Please enter a valid name (letters only)";
        }
        break;
      case "email":
        if (!patterns.email.test(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "phone":
        if (!patterns.phone.test(value)) {
          return "Please enter a valid Indian mobile number";
        }
        break;
      case "company":
        if (value && !patterns.company.test(value)) {
          return "Please enter a valid company name";
        }
        break;
      case "message":
        if (!patterns.message.test(value)) {
          return "Message must be between 10-500 characters";
        }
        break;
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    // Time-based check
    const timeSpent = Date.now() - formData.timestamp;
    if (timeSpent < 3000) {
      setErrors({ submit: "Something went wrong. Please try again later!" });
      return;
    }

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!["honeypot", "timestamp"].includes(key)) {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          honeypot: "",
          timestamp: Date.now(),
        });
      } else {
        setSubmitStatus("error");
        setErrors({
          submit: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrors({
        submit: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'
      >
        <div>
          <label className='block text-xs font-medium text-gray-600 mb-1.5'>
            Full Name<span className='text-tb-blue'>*</span>
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter your name'
            maxLength={50}
            className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.name ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all`}
          />
          {errors.name && <p className='text-xs text-red-500 mt-1'>{errors.name}</p>}
        </div>

        <div>
          <label className='block text-xs font-medium text-gray-600 mb-1.5'>
            Email Address<span className='text-tb-blue'>*</span>
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter your email'
            maxLength={100}
            className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.email ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all`}
          />
          {errors.email && <p className='text-xs text-red-500 mt-1'>{errors.email}</p>}
        </div>

        <div>
          <label className='block text-xs font-medium text-gray-600 mb-1.5'>
            Mobile Number<span className='text-tb-blue'>*</span>
          </label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='10-digit mobile number'
            maxLength={10}
            className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.phone ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all`}
          />
          {errors.phone && <p className='text-xs text-red-500 mt-1'>{errors.phone}</p>}
        </div>

        <div>
          <label className='block text-xs font-medium text-gray-600 mb-1.5'>Company Name</label>
          <input
            type='text'
            name='company'
            value={formData.company}
            onChange={handleChange}
            placeholder='Enter your company'
            maxLength={100}
            className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.company ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all`}
          />
          {errors.company && <p className='text-xs text-red-500 mt-1'>{errors.company}</p>}
        </div>

        {/* Honeypot field - hidden from users */}
        <input
          type='text'
          name='honeypot'
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete='off'
          className='absolute opacity-0 pointer-events-none'
          aria-hidden='true'
        />

        <div className='md:col-span-2'>
          <label className='block text-xs font-medium text-gray-600 mb-1.5'>
            Message<span className='text-tb-blue'>*</span>
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            rows={3}
            placeholder='Type your message (10-500 characters)...'
            maxLength={500}
            className={`w-full px-3.5 py-2.5 md:py-3 text-sm rounded-lg border ${errors.message ? "border-red-400 focus:ring-red-400/30" : "border-gray-300 focus:ring-tb-blue/30 focus:border-tb-blue"} outline-none transition-all resize-none`}
          />
          {errors.message && <p className='text-xs text-red-500 mt-1'>{errors.message}</p>}
          <p className='text-xs text-gray-500 mt-1'>{formData.message.length}/500</p>
        </div>

        {errors.submit && (
          <div className='md:col-span-2'>
            <p className='text-xs text-red-500 bg-red-50 p-3 rounded-lg'>{errors.submit}</p>
          </div>
        )}

        {submitStatus === "success" && (
          <div className='md:col-span-2'>
            <p className='text-xs text-green-600 bg-green-50 p-3 rounded-lg'>✓ Message sent successfully! We'll get back to you soon.</p>
          </div>
        )}

        <div className='md:col-span-2'>
          <motion.button
            type='submit'
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            disabled={isSubmitting}
            className={`w-full px-6 py-2.5 md:py-3 text-sm md:text-base rounded-lg ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-tb-blue hover:bg-[#009ecc] cursor-effect-text"} text-white font-medium transition-colors shadow-sm hover:shadow-md`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </div>
      </form>
    </div>
  );
}
