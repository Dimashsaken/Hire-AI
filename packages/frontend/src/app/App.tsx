import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage, AuthPage, DashboardPage } from '../pages'
import { Header } from '../widgets/Header'

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
} 