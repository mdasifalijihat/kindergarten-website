import React from 'react'

export default function FeeCard({ className, admissionFee, classFee, examFee, sessionFee }) {
  const total = admissionFee + classFee + examFee + sessionFee

  return (
    <div className="bg-white rounded-xl shadow-md border border-primary/20 p-6 text-center">
      <h3 className="text-xl font-bold text-primary mb-2">{className}</h3>
      <div className="text-sm text-gray-700 space-y-1">
        <p>📌 Admission Fee: ৳{admissionFee}</p>
        <p>📚 Class Fee: ৳{classFee}</p>
        <p>📝 Exam Fee: ৳{examFee}</p>
        <p>📅 Session Fee: ৳{sessionFee}</p>
      </div>
      <div className="mt-4 font-semibold text-green-600">
        Total: ৳{total}
      </div>
    </div>
  )
}
