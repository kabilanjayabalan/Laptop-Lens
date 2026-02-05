import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="max-w-xl w-full px-6 py-8 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
        <h1 className="text-3xl font-semibold tracking-tight mb-3">
          Laptop Lens
        </h1>
        <p className="text-slate-300 mb-6">
          React + Tailwind frontend. Hook this up to your Spring Boot backend
          and Python ML service.
        </p>
        <div className="grid gap-3 text-sm">
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3">
            <p className="font-medium text-slate-100">Backend</p>
            <p className="text-slate-400">Java Spring Boot + MongoDB</p>
          </div>
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3">
            <p className="font-medium text-slate-100">ML Service</p>
            <p className="text-slate-400">Python + scikit-learn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

