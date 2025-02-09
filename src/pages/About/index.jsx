

import React from "react";

const About = () => {
  return (
    <div className="bg-blue-50 text-black py-12 px-6">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Dive into the world of sports data with real-time insights, player analytics, and leaderboard rankings.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section 1 - What We Offer */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-900"> What We Offer</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <span className="text-black font-medium">Comprehensive Player Stats:</span> Get in-depth statistics including goals, assists, win ratios, and more.
            </li>
            <li>
              <span className="text-black font-medium">Live Score Updates:</span> Track real-time scores and match results across different leagues.
            </li>
            <li>
              <span className="text-black font-medium">Performance Analytics:</span> Analyze player strengths, weaknesses, and historical data for better insights.
            </li>
            <li>
              <span className="text-black font-medium">Custom Leaderboards:</span> Compare player rankings, create custom leaderboards, and celebrate top performers.
            </li>
            <li>
              <span className="text-black font-medium">Fan Engagement:</span> Join discussions, share opinions, and be part of a thriving sports community.
            </li>
          </ul>
        </section>

        {/* Section 2 - Our Mission */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">🎯 Our Mission</h2>
          <p className="text-gray-800 leading-relaxed">
            Our goal is to empower fans and analysts with detailed player data, ensuring every sports enthusiast has the tools to track, compare, and celebrate their favorite athletes.
            Whether you're an aspiring coach, a die-hard fan, or an analyst, our platform is designed to bring **sports data to life**.
          </p>
        </section>

        {/* Section 3 - Why Choose Us */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Data Accuracy</h3>
              <p className="text-gray-700">We ensure real-time updates and precise player analytics, so you never miss crucial insights.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Global Coverage</h3>
              <p className="text-gray-700">Covering multiple sports leagues worldwide, from football to basketball and beyond.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Advanced Search</h3>
              <p className="text-gray-700">Easily find player stats, comparisons, and historical data using our advanced search tools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-800 mb-2">Community Driven</h3>
              <p className="text-gray-700">Interact with fellow fans, share rankings, and engage in meaningful sports discussions.</p>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-6 text-blue-900">Our Offices</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Office 1 */}
            <div className="bg-orange-500 hover:bg-orange-300 text-white rounded-lg shadow-md p-6 w-80 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Head Office</h3>
              <p className="text-gray-300 text-center">
                4 Sports Avenue <br />
                Mumbai <br />
                Maharashtra 324511
              </p>
            </div>

            {/* Office 2 */}
            <div className="bg-orange-500 hover:bg-orange-300 text-white rounded-lg shadow-md p-6 w-80 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2">Branch Office</h3>
              <p className="text-gray-300 text-center">
                7 Street, <br />
                Stadium Banglore <br />
                Karnataka 232254
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
