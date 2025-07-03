import React from 'react'

export default function StudentCard({ name, class: studentClass, position, handwritingScore, skills, photo }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center border border-primary/20">
      <img src={photo} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border-2 border-primary" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{studentClass}</p>
      <p className="text-sm">Position: <span className="font-medium text-green-600">{position}</span></p>
      <p className="text-sm">Handwriting Score: {handwritingScore}/10</p>
      <div className="mt-2">
        <p className="text-sm font-medium underline">Skills:</p>
        <ul className="text-sm text-gray-700 space-y-1">
          {skills.map((skill, i) => (
            <li key={i}>✅ {skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
