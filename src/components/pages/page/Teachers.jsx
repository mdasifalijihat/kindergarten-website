import React from 'react'
import TeacherCard from '../components/TeacherCard'

const teachers = [
  {
    name: 'Ms. Fatema Begum',
    joinedDate: '2021-02-01',
    qualification: 'B.Ed in English',
    classes: ['Nursery', 'KG'],
    subject: 'English',
    cvLink: '/files/cv/fatema.pdf',
    photo: '/images/teachers/fatema.jpg'
  },
  {
    name: 'Mr. Sazzad Hossain',
    joinedDate: '2020-08-15',
    qualification: 'M.Sc in Mathematics',
    classes: ['Class 1'],
    subject: 'Math',
    cvLink: '/files/cv/sazzad.pdf',
    photo: '/images/teachers/sazzad.jpg'
  }
]

export default function Teachers() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">👨‍🏫 Our Teachers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <TeacherCard key={index} {...teacher} />
        ))}
      </div>
    </div>
  )
}
