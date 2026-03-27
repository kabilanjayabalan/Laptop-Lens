import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuMoveLeft } from "react-icons/lu";
import { FiHome } from "react-icons/fi";
import { FiCpu } from "react-icons/fi";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 - Page Not Found | Laptop Lens";
  }, []);

  return (
    <div className="h-screen bg-[#eaeaea] flex flex-col items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">

        {/* Logo / Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#33363b] text-white p-4 rounded-full shadow-lg">
            <FiCpu size={32} />
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#33363b] mb-2">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h2>
          <p className="text-base text-gray-600">
            The page you're looking for doesn’t exist or may have been removed.
          </p>
        </div>

        {/* Tech Illustration */}
        <div className="mb-8 relative inline-block">
          <div className="absolute inset-0 bg-[#33363b] rounded-full blur-2xl opacity-10 animate-pulse"></div>
          <div className="relative bg-white border border-gray-200 rounded-full p-8 shadow-md">
            <svg
              className="w-20 h-20 text-[#33363b] mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2.5 bg-[#33363b] text-white rounded-lg font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <FiHome size={18} />
            Go to Homepage
          </button>

          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 border-2 border-[#33363b] text-[#33363b] rounded-lg font-semibold hover:bg-white transition-all flex items-center gap-2"
          >
            <LuMoveLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div className="pt-4 border-t border-gray-300">
          <p className="text-xs text-gray-500 mb-2">Quick links:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate("/signin")}
              className="text-[#33363b] hover:underline text-xs font-medium"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="text-[#33363b] hover:underline text-xs font-medium"
            >
              Sign Up
            </button>
            <button
              onClick={() => navigate("/recommend")}
              className="text-[#33363b] hover:underline text-xs font-medium"
            >
              Get Recommendation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
