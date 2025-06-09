import React from 'react'
import { AuthByEmail } from '../features/auth-by-email'

export const AuthPage: React.FC = () => {
  const handleSuccess = () => {
    // Navigation will be handled by the AuthByEmail component
    console.log('Auth successful')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 shadow-2xl rounded-lg overflow-hidden">
        <div className="hidden md:block bg-gradient-to-br from-gray-900 via-gray-800 to-black p-12 text-white">
          <h1 className="text-4xl font-bold text-white mb-4">Rizz Work</h1>
          <p className="text-lg text-gray-300">
            Stop being awkward. Start connecting.
          </p>
        </div>
        <div className="p-8 bg-white">
          <AuthByEmail onSuccess={handleSuccess} />
        </div>
      </div>
    </div>
  )
} 