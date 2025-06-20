import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white font-sans">
      {/* Navbar */}
      <nav className="flex flex-wrap items-center p-4 shadow-md bg-gray-900 text-white">
        <img src="logo-transparent.png" className="w-10"></img>
        <h1 className="text-2xl font-bold">PrepBot-AI</h1>

       <div className="flex ml-auto flex-wrap gap-2 sm:text-xs mt-4 sm:mt-0">
         <a href="#features" className="text-gray-300 hover:text-blue-400 font-semibold text-lg">Features</a>
         <a href="#how-it-works" className="text-gray-300 hover:text-blue-400 font-semibold text-lg">How It Works</a>
         <a href="#contact" className="text-gray-300 hover:text-blue-400 font-semibold text-lg">Contact</a>
         <a href="/login" className="bg-cyan-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 font-semibold text-xl">Login</a>
         <a href="/signup" className="bg-cyan-600 text-white px-3 py-1.5 rounded hover:bg-blue-700 font-semibold text-xl">Sign up</a>
       </div>
     </nav>


      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-10 py-20 max-w-7xl mx-auto">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight ">
            Accelerate your career with PrepBot-AI
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Get personalized mock interviews, real-time feedback, and skill analysis powered by AI.
          </p>
          <a href="/signup" className="bg-teal-500 text-white px-6 py-3 rounded-xl animate-pulse text-lg hover:bg-blue-700">
            Start Practicing Now
          </a>
        </div>
        <div className="lg:w-1/2 mt-20 lg:mt-0">
          <img
            src="logo-transparent.png"
            alt="PrepBot-AI"
            className="animate-bounce mix-blend w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800 text-center">
        <h3 className="text-3xl font-bold text-white mb-10">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
          {[
            { title: "Mock Interviews", desc: "HR, Technical, and Behavioral rounds simulated by AI." },
            { title: "Instant Feedback", desc: "Receive performance reports after every session." },
            { title: "Video Practice", desc: "Record and evaluate your communication style." },
          ].map((feature, i) => (
            <div key={i} className="p-6 border border-gray-700 rounded-xl shadow hover:shadow-lg bg-gray-900">
              <h4 className="text-xl font-semibold mb-2 text-blue-400">{feature.title}</h4>
              <p className="text-gray-300">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-900 text-center">
        <h3 className="text-3xl font-bold text-white mb-10">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          {[
            "Login & Set Your Goal",
            "Choose Interview Type",
            "Start the AI Mock Session",
            "Get Feedback & Improve"
          ].map((step, i) => (
            <div key={i} className="bg-gray-800 p-6 border border-gray-700 rounded-xl shadow text-center">
              <div className="text-blue-400 text-3xl font-bold mb-4">{i + 1}</div>
              <p className="text-gray-300 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 border-t border-gray-700 text-center py-6 text-gray-400">
        <p>© 2025 PrepBot-AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
