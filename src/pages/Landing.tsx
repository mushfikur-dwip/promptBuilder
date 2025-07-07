import React from 'react';

const Landing = () => {
    return (
      <div>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
          {/* Hero Section */}
          <div className="py-20 px-6 md:px-10 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                🎬 AI Scene Generator
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Generate cinematic video scenes powered by{" "}
                <span className="text-blue-400 font-semibold">
                  Google Gemini API
                </span>
                . Perfect for VEO 3, Sora & AI filmmakers.
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href="/app"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-200"
                >
                  Get Started
                </a>
                {/* <a
                  href="https://github.com/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-xl text-gray-300 hover:text-white transition-all duration-200 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297a12 12 0 0 0-3.793 23.396c.6.113.82-.261.82-.58v-2.165c-3.338.727-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.808 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.469-2.382 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 6 0c2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.22 0 4.61-2.807 5.624-5.48 5.922.43.372.823 1.102.823 2.222v3.293c0 .32.218.697.825.579A12 12 0 0 0 12 .297" />
                  </svg>
                  GitHub
                </a> */}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="py-20 px-6 md:px-10 bg-gray-800/30 border-t border-gray-700">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Why Use This Tool?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="mb-4 flex justify-center text-blue-400 text-3xl">
                    🚀
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Fast Scene Generation
                  </h3>
                  <p className="text-gray-400">
                    Generate multiple structured scenes with AI in seconds.
                  </p>
                </div>
                <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="mb-4 flex justify-center text-purple-400 text-3xl">
                    ✨
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Custom Style Controls
                  </h3>
                  <p className="text-gray-400">
                    Define mood, lighting, camera, voice & more.
                  </p>
                </div>
                <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300">
                  <div className="mb-4 flex justify-center text-yellow-400 text-3xl">
                    🎞️
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Optimized for VEO/Sora
                  </h3>
                  <p className="text-gray-400">
                    Output designed for AI video generation tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="py-20 px-6 md:px-10 bg-gray-900 border-t border-gray-800">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                How It Works
              </h2>
              <div className="space-y-8 text-left text-gray-300">
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 font-bold text-xl">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Input Story Context
                    </h4>
                    <p>Provide your story idea and how many scenes you want.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 font-bold text-xl">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Choose Style Settings
                    </h4>
                    <p>Customize location, mood, camera angle, and more.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 font-bold text-xl">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Generate with Gemini AI
                    </h4>
                    <p>
                      We send your data to Gemini API and bring your story to
                      life.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 font-bold text-xl">4</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Export / Edit Scenes
                    </h4>
                    <p>Download as JSON/TXT or manually adjust your script.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="py-10 border-t border-gray-800 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} AI Scene Generator. Built with 💡 by
            Ant Digitals.
          </div>
        </div>
      </div>
    );
};

export default Landing;