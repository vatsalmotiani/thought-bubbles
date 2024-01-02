"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/utils";
import { AlertCircle } from "react-feather";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    sendEmail(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mt-7 w-full'
    >
      <div className='flex flex-col mb-7'>
        <label
          className='font-medium ms-2'
          htmlFor='name'
        >
          Name
        </label>
        <input
          type='name'
          placeholder='Your Name'
          className='bg-gray-100 rounded-xl px-4 py-3 mt-2 focus:outline-gray-200'
          {...register("name")}
        />
      </div>
      <div className='flex flex-col mb-7'>
        <label
          className='font-medium ms-2'
          htmlFor='name'
        >
          Email Address<span className='text-red-600'> *</span>
        </label>
        <input
          type='email'
          placeholder='your@email.com'
          className='bg-gray-100 rounded-xl px-4 py-3 mt-2 focus:outline-gray-200'
          {...register("email", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
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
          htmlFor='name'
        >
          What are you looking for?
        </label>
        <select
          {...register("purpose")}
          className='bg-gray-100 rounded-xl px-4 py-3 mt-2 focus:outline-gray-200'
        >
          <option
            disabled
            selected
            value='Other'
          >
            Select Answer
          </option>
          <option value='Potential Client'>To Work Together</option>
          <option value='Job Application'>A Job Oppurtunity</option>
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
      <div className='flex flex-col'>
        <label
          className='font-medium ms-2'
          htmlFor='message'
        >
          Message<span className='text-red-600'> * </span>
          <span className='text-sm text-tb-body'>(Max Characters: 500)</span>
        </label>
        <textarea
          rows={4}
          placeholder='Your message...'
          className='w-full resize-none bg-gray-100 rounded-xl px-4 py-3 mt-2 focus:outline-gray-200'
          {...register("message", {
            required: "Message is required",
            maxLength: {
              value: 500,
              message: "Too Many Characters",
            },
          })}
        ></textarea>
        {errors.message && (
          <p className='text-red-400 ps-2 pt-4 text-sm flex items-center'>
            <span className='me-2'>
              <AlertCircle size={20} />
            </span>
            {errors.message?.message}
          </p>
        )}
      </div>

      <button
        disabled={isLoading}
        className='w-full disabled:bg-sky-200 disabled:border-sky-200 disabled:drop-shadow-none bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm px-6 py-3 mt-4 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg'
      >
        {isLoading && <span>Submitted</span>}
        {!isLoading && <span>Submit</span>}
      </button>
    </form>
  );
}
