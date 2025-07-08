import {
  Video,
  Sparkles,
  Zap,
  Download,
  Settings,
  Star,
  Users,
  Languages,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      {/* Subtle Background Elements       {/* Footer */}
      <div className="relative py-8 border-t border-gray-700 text-center text-gray-400 text-sm bg-gray-800">
        © {new Date().getFullYear()} AI Scene Generator. Built with ❤️ by{" "}
        <span className="text-blue-400 font-bold">Ant Digitals</span>. Powered
        by Google Gemini AI.
      </div>{" "}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-500/5 rounded-full blur-3xl"></div>
      </div>
      {/* Hero Section */}
      <div className="relative py-24 px-6 md:px-10 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Main Title with Minimal Gradient */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight tracking-tight">
              <span className="text-white">AI Scene</span>
              <br />
              <span className="text-blue-400">Generator</span>
            </h1>
            <div className="flex justify-center items-center gap-3 mb-6">
              <Video className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-gray-300">
                Powered by Google Gemini AI
              </span>
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Create{" "}
            <span className="text-blue-400 font-bold">
              cinematic video scenes
            </span>{" "}
            with AI in seconds. Perfect for{" "}
            <span className="text-white font-bold">VEO 3</span>,
            <span className="text-white font-bold"> Sora</span> &
            <span className="text-blue-400 font-bold"> AI filmmakers</span>.
            বাংলা ভাষায়ও সাপোর্ট করে!
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-full text-gray-300 text-sm font-medium">
              🎯 11 Location Types
            </span>
            <span className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-full text-gray-300 text-sm font-medium">
              🎭 11 Character Options
            </span>
            <span className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-full text-gray-300 text-sm font-medium">
              🌈 9 Mood Settings
            </span>
            <span className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-full text-gray-300 text-sm font-medium">
              💡 10 Lighting Options
            </span>
            <span className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-full text-gray-300 text-sm font-medium">
              🎬 11 Camera Angles
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="/app"
              className="group bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3"
            >
              <Zap className="w-6 h-6" />
              Start Creating Scenes
            </a>
            <a
              href="#features"
              className="group border-2 border-gray-600 hover:border-gray-500 bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-lg text-gray-300 hover:text-white font-bold text-lg transition-all duration-300 flex items-center gap-3"
            >
              <Star className="w-6 h-6" />
              Explore Features
            </a>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div
        id="features"
        className="relative py-24 px-6 md:px-10 bg-gray-800/50 border-y border-gray-700/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              Why Choose Our Tool?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional-grade AI scene generation with unmatched
              customization and multilingual support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="group bg-gray-800 border border-gray-700 rounded-lg p-8 hover:shadow-lg hover:border-gray-600 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Lightning Fast Generation
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Generate multiple structured scenes in seconds with Google
                Gemini AI. No waiting, just instant professional results.
              </p>
            </div>

            <div className="group bg-gray-800 border border-gray-700 rounded-lg p-8 hover:shadow-lg hover:border-gray-600 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Advanced Customization
              </h3>
              <p className="text-gray-300 leading-relaxed">
                50+ customization options including location, mood, lighting,
                camera angles, and character types for perfect scenes.
              </p>
            </div>

            <div className="group bg-gray-800 border border-gray-700 rounded-lg p-8 hover:shadow-lg hover:border-gray-600 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Download className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                VEO 3 & Sora Optimized
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Output specifically designed for cutting-edge AI video
                generation tools like Google VEO 3 and OpenAI Sora.
              </p>
            </div>

            <div className="group bg-gray-800 border border-gray-700 rounded-lg p-8 hover:shadow-lg hover:border-gray-600 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Languages className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Multilingual Support
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Create scenes in Bengali, English, Hindi, Arabic, and 10+
                languages with perfect cultural context.
              </p>
            </div>

            <div className="group bg-gray-800 border border-gray-700 rounded-lg p-8 hover:shadow-lg hover:border-gray-600 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Download className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Professional Export
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Export as JSON for developers, TXT for scripts, or copy
                individual scenes. Professional workflow ready.
              </p>
            </div>

            <div className="group bg-gray-800 border border-gray-700 rounded-lg p-8 hover:shadow-lg hover:border-gray-600 transition-all duration-300">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                User Feedback System
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Built-in feedback system with email integration and rating
                system to continuously improve your experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* How It Works Section */}
      <div className="relative py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              Simple 4-step process to create amazing video scenes
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: 1,
                title: "Input Your Story",
                description:
                  "Describe your story idea and choose how many scenes you want to generate.",
                icon: "📝",
              },
              {
                step: 2,
                title: "Customize Everything",
                description:
                  "Select from 50+ options: location, character, mood, lighting, camera angles, and language preferences.",
                icon: "🎨",
              },
              {
                step: 3,
                title: "AI Magic Happens",
                description:
                  "Google Gemini AI generates professional, cinematic scenes optimized for video creation tools.",
                icon: "✨",
              },
              {
                step: 4,
                title: "Export & Create",
                description:
                  "Download as JSON/TXT, copy scenes, or edit manually. Ready for VEO 3, Sora, and other AI tools.",
                icon: "🚀",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-8 p-8 bg-gray-800 border border-gray-700 rounded-lg hover:shadow-lg hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center text-3xl font-bold text-white">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-3xl">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="relative py-20 px-6 md:px-10 bg-gray-800/50 border-t border-gray-700/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">
                50+
              </div>
              <div className="text-gray-300 font-medium">
                Customization Options
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">
                10+
              </div>
              <div className="text-gray-300 font-medium">
                Languages Supported
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">
                3
              </div>
              <div className="text-gray-300 font-medium">Export Formats</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">
                ∞
              </div>
              <div className="text-gray-300 font-medium">
                Creative Possibilities
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Final CTA Section */}
      <div className="relative py-24 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Ready to Create Magic?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Join the AI revolution in video creation. Start generating cinematic
            scenes today!
          </p>
          <a
            href="/app"
            className="bg-blue-600 hover:bg-blue-700 px-12 py-5 rounded-lg text-white font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-4"
          >
            <Video className="w-8 h-8" />
            Start Creating Now
            <Sparkles className="w-8 h-8" />
          </a>
        </div>
      </div>
      {/* Footer */}
      <div className="relative py-8 border-t border-gray-800/50 text-center text-gray-400 text-sm bg-gray-900/50">
        © {new Date().getFullYear()} AI Scene Generator. Built with � by{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-bold">
          Ant Digitals
        </span>
        . Powered by Google Gemini AI.
      </div>
    </div>
  );
};

export default Landing;
