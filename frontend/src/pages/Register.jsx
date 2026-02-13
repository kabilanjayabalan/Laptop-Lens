import { useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../assets/register.png";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(formData);
    alert("Registration Successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaeaea] p-6">

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden flex">

        {/* 🔥 LEFT IMAGE SECTION */}
        <div className="w-1/2 hidden md:block relative">
          <img
            src={registerImage}
            alt="Register"
            className="h-full w-full object-cover"
          />

          {/* Optional overlay text */}
          <div className="absolute inset-0 bg-[#33363b]/40 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">
              Join Our Community
            </h2>
          </div>
        </div>

        {/* 📝 RIGHT FORM SECTION */}
        <div className="w-full md:w-1/2 p-10">

          <h1 className="text-4xl font-bold text-[#33363b] text-center">
            Create Your Account
          </h1>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Fill in your details to get started
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="input-style"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="input-style"
              required
            />

            {/* Country + Phone */}
            <div className="grid grid-cols-3 gap-4">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="input-style col-span-1"
                required
              >
                <option value="">Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
              </select>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="input-style col-span-2"
                required
              />
            </div>

            {/* Password */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input-style"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm text-[#33363b]">
              <input
                type="checkbox"
                name="agree"
                className="accent-[#33363b]"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <span>
                I agree to the{" "}
                <span className="cursor-pointer hover:underline">
                  Terms & Conditions
                </span>
              </span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#33363b] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
            >
              Create Account
            </button>
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-400 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Continue with Google */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3
              border border-gray-300 py-3 rounded-lg
              hover:bg-gray-100 transition duration-300"
            >
              {/* Google SVG Logo */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
              >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.6l6.9-6.9C35.96 2.5 30.42 0 24 0 14.7 0 6.64 5.8 2.7 14.3l8 6.2C12.6 14.4 17.8 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.1 24.5c0-1.6-.14-3.2-.4-4.7H24v9h12.4c-.54 2.9-2.2 5.3-4.7 6.9l7.2 5.6C43.9 36.6 46.1 30.9 46.1 24.5z"/>
                <path fill="#FBBC05" d="M10.7 28.5c-.5-1.4-.7-2.9-.7-4.5s.25-3.1.7-4.5l-8-6.2C1 17.1 0 20.4 0 24s1 6.9 2.7 9.7l8-6.2z"/>
                <path fill="#34A853" d="M24 48c6.42 0 11.8-2.1 15.8-5.7l-7.2-5.6c-2 1.3-4.6 2.1-8.6 2.1-6.2 0-11.4-4.9-13.3-11.3l-8 6.2C6.64 42.2 14.7 48 24 48z"/>
              </svg>

              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>


          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/" className="text-[#33363b] font-medium hover:underline">
              Sign In
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Register;
