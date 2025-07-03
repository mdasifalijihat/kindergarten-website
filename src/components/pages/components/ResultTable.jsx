import React from 'react'

export default function ResultTable({ results }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="table w-full">
        <thead>
          <tr className="bg-base-200 text-base">
            <th>Photo</th>
            <th>Name</th>
            <th>Class</th>
            <th>Exam</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {results.map((student, index) => (
            <tr key={index}>
              <td><img src={student.photo} className="w-12 h-12 rounded-full object-cover" alt={student.name} /></td>
              <td>{student.name}</td>
              <td>{student.class}</td>
              <td>{student.examType}</td>
              <td>{student.totalMarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
