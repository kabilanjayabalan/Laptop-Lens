import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eaeaea]">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-center text-[#33363b]">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Enter your credentials to connect your account
        </p>

        <div className="mb-5">
          <label className="block text-sm font-medium text-[#33363b] mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-[#33363b]"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-[#33363b] mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-lg bg-[#eaeaea] focus:outline-none focus:ring-2 focus:ring-[#33363b]"
          />
        </div>

        <div className="flex justify-between items-center text-sm mb-6">
          <label className="flex items-center text-[#33363b]">
            <input type="checkbox" className="mr-2 accent-[#33363b]" />
            Remember me
          </label>
          <span className="text-[#33363b] cursor-pointer hover:underline">
            Forgot Password
          </span>
        </div>

        <button className="w-full bg-[#33363b] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300">
          Sign In
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full border border-gray-300 py-3 rounded-lg text-[#33363b] hover:bg-gray-100 transition duration-300">
          Sign in with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-[#33363b] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignIn;
