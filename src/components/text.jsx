import React from "react";

function Structure() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('your-hero-image.jpg')" }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Brewing a Legacy Since 1925
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-xl">
            Where tradition meets innovation across plantations, hardware, and hospitality.
          </p>
          <a
            href="#about"
            className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-lg"
          >
            Explore Our Journey
          </a>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">About Meezan</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A Sri Lankan legacy built on excellence, collaboration, and sustainability — spanning
            generations and industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">The Meezan Story</h3>
            <p className="mt-2 text-sm text-gray-600">
              Discover how Mr. S.M. Mohideen pioneered a family legacy in tea and beyond.
            </p>
            <a
              href="/about/story"
              className="mt-4 inline-block text-amber-600 font-medium hover:underline"
            >
              Read More
            </a>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Mission & Vision</h3>
            <p className="mt-2 text-sm text-gray-600">
              Empowering progress and sustainability across all our ventures.
            </p>
            <a
              href="/about/mission-vision"
              className="mt-4 inline-block text-amber-600 font-medium hover:underline"
            >
              Learn More
            </a>
          </div>
          <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Chairman’s Message</h3>
            <p className="mt-2 text-sm text-gray-600">
              A reflection of our progress, challenges, and hopes for the future.
            </p>
            <a
              href="/about/chairman-message"
              className="mt-4 inline-block text-amber-600 font-medium hover:underline"
            >
              Message
            </a>
          </div>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Divisions</h2>
          <p className="mt-4 text-gray-600 mb-12">Diverse services under one trusted name.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <a
              href="/plantations"
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl">Plantations</h3>
              <p className="text-sm mt-2 text-gray-600">
                Hatale, Ancoombra & Nagala estates producing award-winning tea.
              </p>
            </a>
            <a
              href="/hardware"
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl">Hardware</h3>
              <p className="text-sm mt-2 text-gray-600">
                Serving Matale’s construction needs since the 1950s.
              </p>
            </a>
            <a
              href="/hospitality"
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl">Hospitality</h3>
              <p className="text-sm mt-2 text-gray-600">
                Experience serenity at our tea shop and holiday bungalows.
              </p>
            </a>
            <a
              href="/education"
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl">Education</h3>
              <p className="text-sm mt-2 text-gray-600">
                Empowering future generations through knowledge and leadership.
              </p>
            </a>
            <a
              href="/news"
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl">News</h3>
              <p className="text-sm mt-2 text-gray-600">
                Press releases and updates from across the group.
              </p>
            </a>
            <a
              href="/contact"
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl">Contact</h3>
              <p className="text-sm mt-2 text-gray-600">
                Visit us, get directions, or send an inquiry.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold">Meezan Group</h4>
            <p className="mt-2 text-sm text-gray-400">Brewing tradition. Building the future.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li><a href="/">Home</a></li>
              <li><a href="/about/story">The Meezan Story</a></li>
              <li><a href="/plantations">Plantations</a></li>
              <li><a href="/hardware">Hardware</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Connect</h4>
            <p className="text-sm text-gray-400 mt-2">Matale, Sri Lanka</p>
            <p className="text-sm text-gray-400">Email: info@meezangroup.lk</p>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-8">
          &copy; 2025 Meezan Group. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Structure;
