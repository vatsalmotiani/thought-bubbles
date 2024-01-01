"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/lib/utils";
import Button from "@/components/Button";

export default function Form() {
  // const router = useRouter();
  // const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" });
  // const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [data, setData] = useState("");

  function onSubmit(data) {
    sendEmail(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-[600px]'
    >
      <span className='flex flex-col mb-7'>
        <label
          className='text-tb-black font-poppins font-medium text-lg'
          htmlFor='name'
        >
          Name
        </label>
        <input
          type='name'
          placeholder='Enter Name'
          className='rounded-xl px-4 py-3 mt-2'
          {...register("name")}
        />
      </span>
      <span className='flex flex-col mb-7'>
        <label
          className='text-tb-black font-poppins font-medium text-lg'
          htmlFor='name'
        >
          Email Address<span className='text-red-600'> *</span>
        </label>
        <input
          type='email'
          placeholder='your@email.com'
          className='rounded-xl px-4 py-3 mt-2'
          {...register("mail", { required: "Email Address is required" })}
          aria-invalid={errors.mail ? "true" : "false"}
        />
        {errors.mail && <p className='text-red-400 ps-4 pt-2'>{errors.mail?.message}</p>}
      </span>
      <span className='flex flex-col mb-7'>
        <label
          className='text-tb-black font-poppins font-medium text-lg'
          htmlFor='message'
        >
          Message<span className='text-red-600'> * </span>
          <span className='text-sm text-tb-body'>(Max Characters: 500)</span>
        </label>
        <textarea
          rows={4}
          placeholder='Type your message'
          className='w-full resize-none rounded-xl px-4 py-3 mt-2'
          {...register("message", {
            required: "Message is required",
            maxLength: {
              value: 500,
              message: "Too Many Characters",
            },
          })}
        ></textarea>
        {errors.message && <p className='text-red-400 ps-4 pt-2'>{errors.message?.message}</p>}
      </span>

      <Button
        type='Submit'
        content='Submit'
      />

      {/* <button
        // disabled={isLoading}
        className=' font-poppins bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm max-w-max px-6 py-3 mt-4 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg'
      >
        {isLoading && <span>Submitting...</span>}
        {!isLoading && <span>Submit</span>}
      </button> */}
    </form>
  );
}
