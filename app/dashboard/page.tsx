import authOptions from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'

const Dashboard = async() => {
  const session = await getServerSession(authOptions)
  return (
    <div>
      
    </div>
  )
}

export default Dashboard