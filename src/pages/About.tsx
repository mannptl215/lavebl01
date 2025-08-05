
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Navbar />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About VIZMORA
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering creativity through cutting-edge AI technology. We transform your vision into reality with our advanced AI-powered content generation and enhancement services.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-900/50 border border-blue-600/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To democratize AI-powered content creation and make professional-grade image and video processing accessible to everyone. We believe that powerful creative tools should be intuitive, affordable, and available to creators worldwide.
              </p>
            </div>
            
            <div className="bg-slate-900/50 border border-blue-600/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become the leading platform for AI-driven content transformation, where imagination meets technology. We envision a future where anyone can bring their creative ideas to life with just a few clicks.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-400">Constantly pushing the boundaries of what's possible with AI technology.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Quality</h3>
                <p className="text-gray-400">Delivering exceptional results that exceed expectations every time.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Accessibility</h3>
                <p className="text-gray-400">Making advanced AI tools available and easy to use for everyone.</p>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-slate-900/50 border border-blue-600/20 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Our Technology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced AI Models</h3>
                <p className="text-gray-300 mb-4">
                  We leverage state-of-the-art machine learning models for image enhancement, generation, and transformation. Our AI is trained on diverse datasets to ensure high-quality, versatile outputs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-4">
                  Built on robust cloud infrastructure to ensure fast processing times, scalability, and reliability. Your creations are processed securely and efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Why Choose VIZMORA?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-900/30 border border-blue-600/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Fast Processing</h3>
                <p className="text-gray-400 text-sm">Get results in seconds, not hours</p>
              </div>
              <div className="bg-slate-900/30 border border-blue-600/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">High Quality</h3>
                <p className="text-gray-400 text-sm">Professional-grade outputs every time</p>
              </div>
              <div className="bg-slate-900/30 border border-blue-600/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Easy to Use</h3>
                <p className="text-gray-400 text-sm">Intuitive interface for all skill levels</p>
              </div>
              <div className="bg-slate-900/30 border border-blue-600/10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
                <p className="text-gray-400 text-sm">Your data and creations are safe with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
