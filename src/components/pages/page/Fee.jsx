import React from 'react'
import FeeCard from '../components/FeeCard'

const feesData = [
  {
    className: 'Nursery',
    admissionFee: 2000,
    classFee: 1500,
    examFee: 500,
    sessionFee: 1000
  },
  {
    className: 'KG',
    admissionFee: 2500,
    classFee: 1600,
    examFee: 600,
    sessionFee: 1200
  },
  {
    className: 'Class 1',
    admissionFee: 3000,
    classFee: 1800,
    examFee: 700,
    sessionFee: 1500
  }
]

export default function Fees() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">💰 Class Fees</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {feesData.map((fee, index) => (
          <FeeCard key={index} {...fee} />
        ))}
      </div>
    </div>
  )
}
