import React from 'react'
import StudentCard from '../components/StudentCard'

const students = [
  {
    name: 'Rahim Uddin',
    class: 'Nursery',
    position: '1st',
    handwritingScore: 9,
    skills: ['Drawing', 'Recitation'],
    photo: '/images/students/rahim.jpg'
  },
  {
    name: 'Sumaiya Akter',
    class: 'KG',
    position: '2nd',
    handwritingScore: 8,
    skills: ['Singing', 'Storytelling'],
    photo: '/images/students/sumaiya.jpg'
  },
  {
    name: 'Fahim Hasan',
    class: 'Class 1',
    position: '1st',
    handwritingScore: 10,
    skills: ['Math Quiz', 'Painting'],
    photo: '/images/students/fahim.jpg'
  }
]

export default function Students() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">🎓 Our Students</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  )
}
