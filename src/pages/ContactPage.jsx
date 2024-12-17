import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });
  const [errors, setErrors] = useState({});

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validateForm() {
    let newErrors = {};

    if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }

    if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = "Email must be valid";
    }

    if (formData.body.length < 3) {
      newErrors.body = "Body must be at least 3 characters";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form inputs: ", formData);
    } else {
      setErrors(formErrors);
    }
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl ">Contact</h1>
      <form onSubmit={handleSubmit} className="max-w-xl py-8 px-4 ">
        <div className="mb-4">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded w-full py-2 px-4 border-black"
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
        </div>
        <div>
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border rounded w-full py-2 px-4 border-black"
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full py-2 px-4 border-black"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label>Body</label>
          <textarea
            className="border rounded w-full py-2 px-4 border-black "
            name="body"
            value={formData.body}
            onChange={handleChange}
          />
          {errors.body && <p className="text-red-500">{errors.body}</p>}
        </div>
        <button
          className="bg-orange-400 rounded-lg py-2 px-4 mt-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
