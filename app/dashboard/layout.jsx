import React from 'react'
import Header from './_component/Header'
import Head from 'next/head'

const DashboardLayout = ({ children }) => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36">
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
