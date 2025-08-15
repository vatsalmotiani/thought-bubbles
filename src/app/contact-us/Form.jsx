"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Upload, Check, Send, Sparkles } from "lucide-react";

export default function AnimatedForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState("");

  useEffect(() => {
    if (message.length > 500) {
      setMessage(message.slice(0, 500));
    }
  }, [message]);

  // Floating bubble data
  const bubbles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 15 + Math.random() * 40,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 6 + Math.random() * 8,
  }));

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email Address is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (formData.message.length > 500) newErrors.message = "Too Many Characters";
    if (selectedPurpose === "Job Application" && !file) {
      newErrors.cv = "CV is required for job applications";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setSubmissionMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmissionMessage("Your message has been sent!");
      setFormData({ name: "", email: "", purpose: "", message: "" });
      setSelectedPurpose("");
      setFile(null);
      setMessage("");
    } catch (error) {
      setSubmissionMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const InputWrapper = ({ children, label, required, error, fieldName }) => (
    <motion.div
      className='relative mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.label
        className='block font-bold text-lg mb-3 relative'
        style={{ color: "#1E1E1E" }}
        animate={{
          scale: focusedField === fieldName ? 1.02 : 1,
          color: focusedField === fieldName ? "#00B6E7" : "#1E1E1E",
        }}
      >
        {label}
        {required && (
          <motion.span
            className='text-red-500 ml-1'
            animate={{ rotate: focusedField === fieldName ? [0, 10, -10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            *
          </motion.span>
        )}

        {/* Animated doodle underline */}
        <motion.svg
          className='absolute -bottom-1 left-0'
          width='120'
          height='8'
          viewBox='0 0 120 8'
        >
          <motion.path
            d='M5,5 Q30,2 60,5 T115,5'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeLinecap='round'
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: focusedField === fieldName ? 1 : 0,
              opacity: focusedField === fieldName ? 0.6 : 0,
            }}
            transition={{ duration: 0.8 }}
          />
        </motion.svg>
      </motion.label>

      <motion.div
        className='relative'
        whileHover={{ scale: 1.02 }}
        animate={{
          rotate: error ? [0, 1, -1, 0] : 0,
          scale: focusedField === fieldName ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {children}

        {/* Success sparkle */}
        <AnimatePresence>
          {formData[fieldName] && !error && (
            <motion.div
              className='absolute -top-2 -right-2'
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
            >
              <Sparkles
                size={20}
                className='text-green-500'
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Error message with bounce animation */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            className='flex items-center mt-3 text-red-500 text-sm font-medium'
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: 2 }}
            >
              <AlertCircle
                size={16}
                className='mr-2'
              />
            </motion.div>
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div
      className='relative min-h-screen p-8'
      style={{ backgroundColor: "#F2F2F2" }}
    >
      {/* Animated Background */}
      <div className='absolute inset-0 overflow-hidden'>
        <svg
          className='absolute inset-0 w-full h-full'
          viewBox='0 0 1200 800'
        >
          <defs>
            <pattern
              id='dots'
              x='0'
              y='0'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <circle
                cx='20'
                cy='20'
                r='1'
                fill='#00B6E7'
                opacity='0.15'
              />
            </pattern>
          </defs>
          <rect
            width='100%'
            height='100%'
            fill='url(#dots)'
          />

          {/* Animated paths */}
          <motion.path
            d='M50,300 Q200,200 400,300 T700,300'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            strokeDasharray='6,4'
            opacity='0.3'
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.circle
            cx='1100'
            cy='150'
            r='30'
            stroke='#00B6E7'
            strokeWidth='2'
            fill='none'
            opacity='0.2'
            strokeDasharray='8,4'
            animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Floating Bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className='absolute rounded-full border-2 pointer-events-none'
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            borderColor: "#00B6E7",
            opacity: 0.2,
            backgroundColor: "rgba(0, 182, 231, 0.1)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Main Form Container */}
      <motion.div
        className='relative z-10 max-w-2xl mx-auto'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            className='text-5xl font-black mb-4'
            style={{ color: "#1E1E1E" }}
            animate={{
              rotate: [0, 1, -1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Let's <span style={{ color: "#00B6E7" }}>Connect!</span>
          </motion.h1>
          <motion.div
            className='w-24 h-1 mx-auto rounded-full'
            style={{ backgroundColor: "#00B6E7" }}
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Form Card */}
        <motion.div
          className='relative bg-white rounded-3xl p-8 shadow-2xl border-4'
          style={{
            borderColor: "#00B6E7",
            boxShadow: "8px 8px 0px rgba(0, 182, 231, 0.2)",
          }}
          whileHover={{
            rotate: 0.5,
            boxShadow: "12px 12px 0px rgba(0, 182, 231, 0.3)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div>
            {/* Name Field */}
            <InputWrapper
              label='Name'
              fieldName='name'
            >
              <motion.input
                type='text'
                className='w-full px-6 py-4 text-lg rounded-2xl border-3 transition-all duration-300 font-medium'
                style={{
                  borderColor: focusedField === "name" ? "#00B6E7" : "#E5E5E5",
                  backgroundColor: "#F8F8F8",
                  color: "#1E1E1E",
                }}
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
                whileFocus={{ scale: 1.02 }}
              />
            </InputWrapper>

            {/* Email Field */}
            <InputWrapper
              label='Email Address'
              required
              fieldName='email'
              error={errors.email}
            >
              <motion.input
                type='email'
                className='w-full px-6 py-4 text-lg rounded-2xl border-3 transition-all duration-300 font-medium'
                style={{
                  borderColor: errors.email ? "#EF4444" : focusedField === "email" ? "#00B6E7" : "#E5E5E5",
                  backgroundColor: "#F8F8F8",
                  color: "#1E1E1E",
                }}
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                whileFocus={{ scale: 1.02 }}
              />
            </InputWrapper>

            {/* Purpose Field */}
            <InputWrapper
              label='What are you looking for?'
              fieldName='purpose'
            >
              <motion.select
                className='w-full px-6 py-4 text-lg rounded-2xl border-3 transition-all duration-300 font-medium'
                style={{
                  borderColor: focusedField === "purpose" ? "#00B6E7" : "#E5E5E5",
                  backgroundColor: "#F8F8F8",
                  color: "#1E1E1E",
                }}
                value={formData.purpose}
                onChange={(e) => {
                  handleInputChange("purpose", e.target.value);
                  setSelectedPurpose(e.target.value);
                }}
                onFocus={() => setFocusedField("purpose")}
                onBlur={() => setFocusedField("")}
                whileFocus={{ scale: 1.02 }}
              >
                <option
                  value=''
                  disabled
                >
                  Select an option
                </option>
                <option value='Potential Client'>To Work Together</option>
                <option value='Job Application'>A Job Opportunity</option>
                <option value='Other'>Other</option>
              </motion.select>
            </InputWrapper>

            {/* File Upload - Conditional */}
            <AnimatePresence>
              {selectedPurpose === "Job Application" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <InputWrapper
                    label='CV (PDF Only)'
                    required
                    fieldName='cv'
                    error={errors.cv}
                  >
                    <motion.div
                      className='relative'
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type='file'
                        accept='application/pdf'
                        id='cv'
                        className='hidden'
                        onChange={(e) => {
                          const selectedFile = e.target.files[0];
                          if (selectedFile) {
                            setFile(selectedFile);
                            if (errors.cv) setErrors((prev) => ({ ...prev, cv: "" }));
                          }
                        }}
                      />
                      <motion.label
                        htmlFor='cv'
                        className='flex items-center justify-center border-3 border-dashed rounded-2xl p-8 cursor-pointer transition-all duration-300'
                        style={{
                          borderColor: file ? "#10B981" : errors.cv ? "#EF4444" : "#00B6E7",
                          backgroundColor: file ? "#F0FDF4" : "#F8F8F8",
                        }}
                        animate={{
                          borderColor: file ? "#10B981" : errors.cv ? "#EF4444" : "#00B6E7",
                        }}
                      >
                        <motion.div
                          className='text-center'
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {file ? (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className='flex items-center text-green-600 font-bold text-lg'
                            >
                              <Check
                                size={24}
                                className='mr-3'
                              />
                              {file.name}
                            </motion.div>
                          ) : (
                            <div className='flex items-center text-gray-600 font-bold text-lg'>
                              <Upload
                                size={24}
                                className='mr-3'
                                style={{ color: "#00B6E7" }}
                              />
                              Choose a PDF file...
                            </div>
                          )}
                        </motion.div>
                      </motion.label>
                    </motion.div>
                  </InputWrapper>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Message Field */}
            <InputWrapper
              label='Message'
              required
              fieldName='message'
              error={errors.message}
            >
              <motion.textarea
                rows={5}
                className='w-full px-6 py-4 text-lg rounded-2xl border-3 transition-all duration-300 resize-none font-medium'
                style={{
                  borderColor: errors.message ? "#EF4444" : focusedField === "message" ? "#00B6E7" : "#E5E5E5",
                  backgroundColor: "#F8F8F8",
                  color: "#1E1E1E",
                }}
                value={formData.message}
                onChange={(e) => {
                  const value = e.target.value;
                  handleInputChange("message", value);
                  setMessage(value);
                }}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField("")}
                whileFocus={{ scale: 1.02 }}
              />

              {/* Character Counter */}
              <motion.div
                className='text-right mt-2 text-sm font-bold'
                style={{
                  color: message.length > 500 ? "#EF4444" : "#828282",
                }}
                animate={{
                  scale: message.length > 480 ? [1, 1.1, 1] : 1,
                  color: message.length > 500 ? "#EF4444" : "#828282",
                }}
                transition={{ duration: 0.3 }}
              >
                {500 - message.length} characters remaining
              </motion.div>
            </InputWrapper>

            {/* Success Message */}
            <AnimatePresence>
              {submissionMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  className='text-center mb-6'
                >
                  <motion.div
                    className='inline-flex items-center px-6 py-3 rounded-full font-bold text-lg'
                    style={{
                      backgroundColor: "#10B981",
                      color: "white",
                      boxShadow: "4px 4px 0px rgba(16, 185, 129, 0.3)",
                    }}
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Check
                      size={20}
                      className='mr-2'
                    />
                    {submissionMessage}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <motion.button
              type='button'
              onClick={onSubmit}
              disabled={isLoading || !formData.email}
              className='w-full relative overflow-hidden'
              whileHover={{ scale: 1.05, rotate: -0.5 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className='px-8 py-6 rounded-2xl font-black text-xl border-4 transition-all duration-300'
                style={{
                  backgroundColor: isLoading || !formData.email ? "#93C5FD" : "#00B6E7",
                  borderColor: isLoading || !formData.email ? "#DBEAFE" : "#1E40AF",
                  color: "white",
                  boxShadow: isLoading || !formData.email ? "none" : "6px 6px 0px #1E40AF",
                }}
                animate={{
                  backgroundColor: isLoading || !formData.email ? "#93C5FD" : "#00B6E7",
                }}
              >
                <AnimatePresence mode='wait'>
                  {isLoading ? (
                    <motion.div
                      key='loading'
                      initial={{ opacity: 0, rotate: -180 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 180 }}
                      className='flex items-center justify-center'
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className='w-6 h-6 border-3 border-white border-t-transparent rounded-full mr-3'
                      />
                      Submitting...
                    </motion.div>
                  ) : (
                    <motion.div
                      key='submit'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className='flex items-center justify-center'
                    >
                      <Send
                        size={24}
                        className='mr-3'
                      />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Button sparkles */}
              {!isLoading && formData.email && (
                <>
                  <motion.div
                    className='absolute -top-2 -left-2 w-4 h-4 rounded-full bg-yellow-400'
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  />
                  <motion.div
                    className='absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-pink-400'
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                </>
              )}
            </motion.button>
          </div>

          {/* Decorative elements */}
          <motion.div
            className='absolute -top-4 -right-4 w-8 h-8 rounded-full'
            style={{ backgroundColor: "#00B6E7" }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />

          <motion.div
            className='absolute -bottom-4 -left-4 w-6 h-6 rounded-full'
            style={{ backgroundColor: "#10B981" }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
