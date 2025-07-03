import React from 'react'
import NotificationCard from '../components/NotificationCard'

const notices = [
  {
    title: 'Mid-Term Exam Schedule Published',
    description: 'Mid-Term exams will start from 15 July. Please collect your admit cards from the office.',
    date: '2025-07-01',
    attachment: '/files/notices/midterm-schedule.pdf'
  },
  {
    title: 'New Admission Open for Session 2025',
    description: 'Admissions are now open for all classes. Last date to apply is 20 July.',
    date: '2025-06-25',
    attachment: ''
  },
  {
    title: 'School Closed for Eid Vacation',
    description: 'The school will remain closed from 5 July to 12 July due to Eid-ul-Adha vacation.',
    date: '2025-06-30',
    attachment: ''
  }
]

export default function Notices() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">🔔 School Notifications</h2>

      <div className="space-y-4">
        {notices.map((notice, index) => (
          <NotificationCard key={index} {...notice} />
        ))}
      </div>
    </div>
  )
}
