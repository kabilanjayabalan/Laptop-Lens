import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Profiles reviewed", value: "128" },
  { label: "Recommendations saved", value: "24" },
  { label: "Avg. match score", value: "92%" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("laptopLensUser") || "null");

  useEffect(() => {
    document.title = "Dashboard | Laptop Lens";
  }, []);

  const handleSignOut = () => {
    window.localStorage.removeItem("laptopLensUser");
    navigate("/signin", { replace: true });
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] px-6 py-8 text-[#1f2933]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="overflow-hidden rounded-[32px] bg-[#16324f] text-white shadow-2xl">
          <div className="grid gap-6 px-8 py-10 md:grid-cols-[1.7fr_1fr] md:px-12">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#c8e1ff]">
                Laptop Lens
              </p>
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
                Welcome back, {user?.name || "there"}.
              </h1>
              <p className="mt-4 max-w-2xl text-base text-[#d7e6f8] md:text-lg">
                Your recommendation workspace is ready. Compare laptops, review saved picks,
                and continue the shortlist you started.
              </p>
            </div>

            <div className="rounded-[28px] bg-white/10 p-6 backdrop-blur">
              <p className="text-sm text-[#d7e6f8]">Signed in as</p>
              <p className="mt-2 text-xl font-semibold">{user?.email}</p>
              <p className="mt-1 text-sm text-[#d7e6f8]">{user?.role}</p>
              <button
                onClick={handleSignOut}
                className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#16324f] transition hover:bg-[#f4f1ea]"
              >
                Sign out
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[24px] bg-white p-6 shadow-lg shadow-[#16324f]/10"
            >
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold">{stat.value}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[28px] bg-white p-7 shadow-lg shadow-[#16324f]/10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Demo account
            </p>
            <h2 className="mt-4 text-2xl font-semibold">Your login is now wired up end to end.</h2>
            <p className="mt-3 text-slate-600">
              The current authentication flow uses a demo backend account so the project has a
              working login path while the rest of the product is still taking shape.
            </p>
            <div className="mt-6 rounded-[22px] bg-[#f8fafc] p-5 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Email:</span> demo@laptoplens.app
              </p>
              <p className="mt-2">
                <span className="font-semibold">Password:</span> LaptopLens123
              </p>
            </div>
          </article>

          <article className="rounded-[28px] bg-[#dbeafe] p-7 text-[#16324f] shadow-lg shadow-[#16324f]/10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#3b82f6]">
              Next step
            </p>
            <h2 className="mt-4 text-2xl font-semibold">Ready for real users</h2>
            <p className="mt-3 leading-7">
              When you want, we can replace the demo credential check with Mongo-backed users,
              hashed passwords, and route-level authorization.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
