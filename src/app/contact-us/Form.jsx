"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/utils";
import Reveal from "@/components/Reveal";
import { AlertCircle } from "react-feather";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message.length > 500) {
      setMessage(message.slice(0, 500)); // Trim to 500 characters if exceeded
    }
  }, [message]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSubmissionMessage(""); // Reset any previous message

    // Prepare data for submission
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (file) {
      formData.append("cv", file);
    }

    try {
      await sendEmail(formData); // Assuming sendEmail is modified to accept FormData
      // setSubmissionMessage("Your message has been sent!");
      reset(); // Reset the form fields
      setFile(null); // Reset file state
    } catch (error) {
      // setSubmissionMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Watch purpose field for dynamic updates
  watch((data) => {
    setSelectedPurpose(data.purpose);
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mt-7 mx-6 text-tb-black md:text-xl'
    >
      <div className='flex flex-col mb-7'>
        <label
          className='font-medium ms-2'
          htmlFor='name'
        >
          Name
        </label>
        <input
          type='text'
          className='text-tb-body bg-neutral-100 rounded-xl border-neutral-200 px-4 py-3 mt-2 focus:outline-tb-blue'
          {...register("name")}
        />
      </div>

      <div className='flex flex-col mb-7'>
        <label
          className='font-medium ms-2'
          htmlFor='email'
        >
          Email Address<span className='text-red-600'> *</span>
        </label>
        <input
          type='email'
          className='text-tb-body bg-neutral-100 rounded-xl border-neutral-200 px-4 py-3 mt-2 focus:outline-tb-blue'
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className='text-red-400 ps-2 pt-4 text-sm flex items-center'>
            <span className='me-2'>
              <AlertCircle size={20} />
            </span>
            {errors.email?.message}
          </p>
        )}
      </div>

      <div className='flex flex-col mb-7'>
        <label
          className='font-medium ms-2'
          htmlFor='purpose'
        >
          What are you looking for?
        </label>
        <select
          {...register("purpose")}
          className='text-tb-body bg-neutral-100 rounded-xl border-neutral-200 px-4 py-3 mt-2 focus:outline-tb-blue'
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
        </select>
        {errors.purpose && (
          <p className='text-red-400 ps-2 pt-4 text-sm flex items-center'>
            <span className='me-2'>
              <AlertCircle size={20} />
            </span>
            {errors.purpose?.message}
          </p>
        )}
      </div>

      {selectedPurpose === "Job Application" && (
        <div className='flex flex-col mb-7'>
          <label
            className='font-medium ms-2'
            htmlFor='cv'
          >
            CV (PDF Only) <span className='text-red-600'>*</span>
            <span className='text-sm text-tb-body'>(Max: 2 MB)</span>
          </label>
          <input
            type='file'
            accept='application/pdf'
            id='cv'
            className='hidden' // Hide the default input
            onChange={(e) => {
              const selectedFile = e.target.files[0];
              if (selectedFile) {
                setFile(selectedFile);
              }
            }}
          />
          <label
            htmlFor='cv'
            className={`flex items-center justify-center border-2 border-dashed rounded-xl p-4 mt-2 
                  ${file ? "border-green-500 bg-green-50" : "border-gray-400 bg-neutral-100"} 
                  cursor-pointer hover:border-blue-400 transition-all`}
          >
            {file ? <span className='text-green-600'>{file.name}</span> : <span className='text-gray-500'>Choose a PDF file...</span>}
          </label>
          {file && file.size > 2 * 1024 * 1024 && <p className='text-red-400 ps-2 pt-4 text-sm'>File size exceeds 2 MB</p>}
          {!file && <p className='text-gray-500 ps-2 pt-4 text-sm'>Only PDF files allowed</p>}
        </div>
      )}

      <div className='flex flex-col'>
        <label
          className='font-medium ms-2'
          htmlFor='message'
        >
          Message<span className='text-red-600'> *</span>
          <span className='text-sm text-tb-body'>(Max Characters: 500)</span>
        </label>
        <textarea
          rows={4}
          {...register("message", {
            required: "Message is required",
            maxLength: {
              value: 500,
              message: "Too Many Characters",
            },
          })}
          onChange={(e) => setMessage(e.target.value)} // Update message state
          className='w-full resize-none bg-neutral-100 rounded-xl border-neutral-200 px-4 py-3 mt-2 focus:outline-tb-blue'
        />
        <p className={`text-sm text-right mt-1 ${message.length > 500 ? "text-red-500" : "text-gray-500"}`}>{message.length > 500 ? `${message.length - 500} character${message.length - 501 === 0 ? "" : "s"} over limit` : `${500 - message.length} character${500 - message.length === 1 ? "" : "s"} remaining`}</p>
        {errors.message && (
          <p className='text-red-400 ps-2 pt-4 text-sm flex items-center'>
            <span className='me-2'>
              <AlertCircle size={20} />
            </span>
            {errors.message?.message}
          </p>
        )}
      </div>

      {submissionMessage && <p className='text-green-500 text-center mt-4'>{submissionMessage}</p>}

      <button
        type='submit'
        disabled={isLoading || !watch("email")}
        className='w-full disabled:bg-sky-200 disabled:border-sky-200 disabled:drop-shadow-none bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm px-6 py-3 mt-4 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg'
      >
        {isLoading ? <span>Submitting...</span> : <span>Submit</span>}
      </button>
    </form>
  );
}
