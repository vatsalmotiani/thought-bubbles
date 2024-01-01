"use client";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Form() {
  // const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", number: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-96'
    >
      <span className='flex flex-col mb-7'>
        <label
          className='ms-4'
          htmlFor='name'
        >
          Name
        </label>
        <input
          type='name'
          name='name'
          id='name'
          value={formData.name}
          className='rounded-xl px-4 py-3 mt-2'
          placeholder='Enter First Name'
          onChange={(e) => setFormData((formData) => ({ ...formData, ...{ name: e.target.value } }))}
        />
      </span>

      <button
        disabled={isLoading}
        className='disabled:bg-sky-200 disabled:border-sky-200 disabled:drop-shadow-none font-poppins bg-sky-400 border-2 border-sky-500 rounded-xl drop-shadow-sm max-w-max px-6 py-3 mt-4 text-white hover:bg-tb-blue duration-300 hover:drop-shadow-lg'
      >
        {isLoading && <span>Submitting...</span>}
        {!isLoading && <span>Submit</span>}
      </button>
    </form>
  );
}
