import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import laptopImage from "../assets/neon-laptop.png";
import googleLogo from "../assets/google logo.jpg";

const initialForm = {
  email: "",
  password: "",
  rememberMe: true,
};

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Sign In | Laptop Lens";

    const storedUser = window.localStorage.getItem("laptopLensUser");
    if (storedUser) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setFieldErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email.trim(),
          password: form.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Unable to sign in right now.");
        setFieldErrors(data.errors || {});
        return;
      }

      window.localStorage.setItem("laptopLensUser", JSON.stringify(data.user));
      navigate("/dashboard", { replace: true });
    } catch (requestError) {
      setError("Could not reach the server. Make sure the backend is running on port 8080.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fdf7ec_0%,#f4f1ea_48%,#ece7de_100%)] p-6">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-[0_24px_80px_rgba(22,50,79,0.16)]">
        <div className="relative hidden w-1/2 overflow-hidden bg-[#16324f] md:flex">
          <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#3b82f6]/30 blur-3xl" />
          <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#f59e0b]/20 blur-3xl" />
          <div className="relative z-10 flex flex-col justify-between p-10 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.45em] text-[#c8e1ff]">Laptop Lens</p>
              <h2 className="mt-6 max-w-md text-4xl font-semibold leading-tight">
                Smarter laptop choices start with a cleaner sign-in flow.
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-[#d7e6f8]">
                Access your saved recommendations, preferences, and comparison sessions in one
                place.
              </p>
            </div>

            <img
              src={laptopImage}
              alt="Laptop Lens hero"
              className="mx-auto w-full max-w-md object-contain"
            />
          </div>
        </div>

        <div className="flex w-full items-center md:w-1/2">
          <div className="w-full p-8 sm:p-10 md:p-12">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f59e0b]">
                Welcome back
              </p>
              <h1 className="mt-4 text-4xl font-semibold text-[#1f2933]">Sign in to continue</h1>
              <p className="mt-3 text-slate-500">
                Use the demo account below to test the login flow.
              </p>
              <p className="mt-4 rounded-2xl bg-[#f8fafc] px-4 py-3 text-sm text-slate-600">
                demo@laptoplens.app / LaptopLens123
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-[#334155]" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-[#1f2933] outline-none transition focus:border-[#16324f] focus:ring-4 focus:ring-[#16324f]/10"
                />
                {fieldErrors.email ? (
                  <p className="mt-2 text-sm text-red-600">{fieldErrors.email}</p>
                ) : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#334155]" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-[#1f2933] outline-none transition focus:border-[#16324f] focus:ring-4 focus:ring-[#16324f]/10"
                />
                {fieldErrors.password ? (
                  <p className="mt-2 text-sm text-red-600">{fieldErrors.password}</p>
                ) : null}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-[#334155]">
                  <input
                    name="rememberMe"
                    type="checkbox"
                    checked={form.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded accent-[#16324f]"
                  />
                  Remember me
                </label>
                <span className="font-medium text-[#16324f]">Forgot password?</span>
              </div>

              {error ? (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-2xl bg-[#16324f] py-3 text-base font-semibold text-white transition hover:bg-[#1c446d] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            <div className="my-6 flex items-center">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="mx-4 text-sm text-slate-400">OR</span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 py-3 font-medium text-[#334155] transition hover:bg-slate-50">
              <img src={googleLogo} alt="Google" className="h-5 w-5 object-contain" />
              Sign in with Google
            </button>

            <p className="mt-8 text-center text-sm text-slate-600">
              Need an account?{" "}
              <Link to="/signup" className="font-semibold text-[#16324f] hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
