import React from 'react'
import { Button } from '@/shared/ui/Button'
import { Header } from '@/widgets/Header/ui/Header'
import { ProspectList } from '@/widgets/ProspectList/ui/ProspectList'

export const DashboardPage: React.FC = () => {
  const handleLogout = () => {
    // TODO: Implement logout functionality with Supabase
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome to Rizz Work! Here are your potential prospects.
            </p>
          </div>

          <ProspectList />
        </div>
      </main>
    </div>
  )
} 