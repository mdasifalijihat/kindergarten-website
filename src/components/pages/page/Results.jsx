import React, { useState } from 'react'
import ResultTable from '../components/ResultTable'

const allResults = [
  {
    name: 'Rahim Uddin',
    photo: '/images/students/rahim.jpg',
    class: 'Nursery',
    examType: 'Monthly',
    totalMarks: 95
  },
  {
    name: 'Sumaiya Akter',
    photo: '/images/students/sumaiya.jpg',
    class: 'KG',
    examType: 'Half-Yearly',
    totalMarks: 88
  },
  {
    name: 'Fahim Hasan',
    photo: '/images/students/fahim.jpg',
    class: 'Class 1',
    examType: 'Annual',
    totalMarks: 90
  }
]

export default function Results() {
  const [selectedClass, setSelectedClass] = useState('All')
  const [selectedExam, setSelectedExam] = useState('All')

  const filteredResults = allResults.filter(student => {
    const classMatch = selectedClass === 'All' || student.class === selectedClass
    const examMatch = selectedExam === 'All' || student.examType === selectedExam
    return classMatch && examMatch
  })

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">📊 Exam Results</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <select className="select select-bordered" value={selectedClass} onChange={e => setSelectedClass(e.target.value)}>
          <option>All</option>
          <option>Nursery</option>
          <option>KG</option>
          <option>Class 1</option>
        </select>

        <select className="select select-bordered" value={selectedExam} onChange={e => setSelectedExam(e.target.value)}>
          <option>All</option>
          <option>Monthly</option>
          <option>Half-Yearly</option>
          <option>Annual</option>
        </select>

        <button onClick={() => window.print()} className="btn btn-primary">Download PDF</button>
      </div>

      {/* Result Table */}
      <ResultTable results={filteredResults} />
    </div>
  )
}

 