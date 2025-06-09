import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../shared/ui/Button'

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Networking, but with
              <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Perfect Icebreakers
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Tired of awkward cold messages? Let our AI write and send personalized, charismatic messages to connect you with the right people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Get Started
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Rizz Work?</h2>
            <p className="text-xl text-gray-600">Make genuine connections, faster.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-purple-50">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Meaningful Connections</h3>
              <p className="text-gray-600">Connect with professionals in your field who are open to networking.</p>
            </div>

            <div className="text-center p-8 rounded-xl bg-pink-50">
              <div className="w-16 h-16 bg-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Messages</h3>
              <p className="text-gray-600">Our AI analyzes profiles to draft the perfect, personalized opening line.</p>
            </div>

            <div className="text-center p-8 rounded-xl bg-indigo-50">
              <div className="w-16 h-16 bg-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Effortless "Rizz"</h3>
              <p className="text-gray-600">Break the ice with confidence and charisma, every single time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Network Smarter?</h2>
          <p className="text-xl mb-8">Stop guessing and start connecting.</p>
          <Link to="/auth">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Sign Up for Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 