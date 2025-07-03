import React from 'react'

const classRequirements = [
  {
    className: 'Nursery',
    syllabus: ['Alphabet', 'Numbers', 'Colors', 'Drawing'],
    requiredTeachers: ['Art Teacher', 'English Teacher']
  },
  {
    className: 'KG',
    syllabus: ['Basic Math', 'Rhymes', 'Environment', 'Handwriting'],
    requiredTeachers: ['Math Teacher', 'English Teacher']
  },
  {
    className: 'Class 1',
    syllabus: ['Bangla', 'English', 'Math', 'Science'],
    requiredTeachers: ['Bangla Teacher', 'Science Teacher']
  }
]

export default function ClassRequirement() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">📚 Class Requirements</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classRequirements.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-primary/20">
            <h3 className="text-xl font-semibold text-primary">{item.className}</h3>

            <div>
              <h4 className="font-medium underline mb-1">Syllabus:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {item.syllabus.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium underline mb-1">Required Teachers:</h4>
              <ul className="list-disc list-inside text-gray-700">
                {item.requiredTeachers.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
