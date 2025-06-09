import React, { useState } from 'react'
import { supabase } from '../../../shared/api/supabase'
import { Button } from '../../../shared/ui/Button'
import { Input } from '../../../shared/ui/Input'

interface AuthByEmailProps {
  onSuccess?: () => void
  redirectTo?: string
}

export const AuthByEmail: React.FC<AuthByEmailProps> = ({ 
  onSuccess, 
  redirectTo = '/dashboard' 
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
            emailRedirectTo: `${import.meta.env.VITE_APP_URL || 'https://rizz-ai-work-dms3zc1e0-dimashs-projects-05865a53.vercel.app'}/auth/confirm`,
          },
        })

        if (error) {
          setError(error.message)
        } else if (data.user) {
          setMessage('Check your email for the confirmation link!')
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })

        if (error) {
          if (error.message === 'Email not confirmed') {
            setError(
              'Please check your inbox and confirm your email address before signing in.'
            )
          } else {
            setError(error.message)
          }
        } else if (data.user) {
          setMessage('Successfully signed in!')
          onSuccess?.()
          if (typeof window !== 'undefined') {
            window.location.href = redirectTo
          }
        }
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {mode === 'signin' ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-gray-600 mb-6">
          {mode === 'signin' 
            ? 'Sign in to access your Rizz Work dashboard' 
            : 'Create an account to start networking'
          }
        </p>
      </div>

      <form onSubmit={handleAuth} className="space-y-6">
        {mode === 'signup' && (
          <Input
            type="text"
            label="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="Enter your full name"
          />
        )}

        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />

        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
          helperText={mode === 'signup' ? 'Must be at least 6 characters' : undefined}
        />

        {error && (
          <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {message && (
          <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded">
            {message}
          </div>
        )}

        <Button
          type="submit"
          isLoading={loading}
          className="w-full"
          size="lg"
        >
          {mode === 'signin' ? 'Sign In' : 'Create Account'}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <button
          type="button"
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          {mode === 'signin' 
            ? "Don't have an account? Sign up" 
            : 'Already have an account? Sign in'
          }
        </button>
      </div>
    </div>
  )
}
