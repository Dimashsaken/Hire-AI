import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../../../shared/ui/Button'

export const Header: React.FC = () => {
  const location = useLocation()
  const isDashboard = location.pathname === '/dashboard'

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <span className="text-2xl font-bold text-purple-500">Rizz Work</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {!isDashboard && (
              <>
                <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">
                  Home
                </Link>
                <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">
                  Features
                </a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
                  Pricing
                </a>
              </>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            {!isDashboard ? (
              <>
                <Link to="/auth">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/auth">
                  <Button>Get Started</Button>
                </Link>
              </>
            ) : (
              <div className="text-gray-600">
                Welcome back!
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
