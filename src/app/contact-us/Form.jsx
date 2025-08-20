"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, AlertCircle, Send } from "lucide-react";

export default function AnimatedForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccessMessage("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
    setSubmitting(false);
  };

  const FieldGroup = ({ label, name, required, children }) => (
    <div className='mb-8'>
      <label className='font-semibold text-lg mb-2 block'>
        {label} {required && <span className='text-red-500'>*</span>}
      </label>
      <div className='relative'>{children}</div>
      {errors[name] && (
        <div className='flex items-center text-sm text-red-500 mt-1'>
          <AlertCircle
            size={14}
            className='mr-2'
          />
          <span>{errors[name]}</span>
        </div>
      )}
    </div>
  );

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-white rounded-3xl p-8 border-4 max-w-xl mx-auto'
      style={{ borderColor: "#00B6E7", boxShadow: "6px 6px 0px #00B6E7" }}
    >
      <FieldGroup
        label='Name'
        name='name'
        required
      >
        <input
          type='text'
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className='w-full px-5 py-4 rounded-xl border-2'
          style={{ borderColor: "#E5E5E5", backgroundColor: "#F8F8F8" }}
        />
      </FieldGroup>

      <FieldGroup
        label='Email'
        name='email'
        required
      >
        <input
          type='email'
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className='w-full px-5 py-4 rounded-xl border-2'
          style={{ borderColor: "#E5E5E5", backgroundColor: "#F8F8F8" }}
        />
      </FieldGroup>

      <FieldGroup
        label='Message'
        name='message'
        required
      >
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
          className='w-full px-5 py-4 rounded-xl border-2 resize-none'
          style={{ borderColor: "#E5E5E5", backgroundColor: "#F8F8F8" }}
        />
      </FieldGroup>

      <AnimatePresence>
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-4 flex items-center text-green-600 font-semibold'
          >
            <Check
              size={18}
              className='mr-2'
            />{" "}
            {successMessage}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type='submit'
        disabled={submitting}
        className='w-full px-8 py-4 rounded-2xl font-bold text-lg text-white'
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          backgroundColor: submitting ? "#93C5FD" : "#00B6E7",
          boxShadow: submitting ? "none" : "6px 6px 0px #1E40AF",
        }}
      >
        {submitting ? (
          "Sending..."
        ) : (
          <div className='flex items-center justify-center'>
            <Send
              size={20}
              className='mr-2'
            />{" "}
            Send Message
          </div>
        )}
      </motion.button>
    </motion.form>
  );
}
