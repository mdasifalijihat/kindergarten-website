import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <section>
        <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="w-full h-[300px] rounded-xl">
          <SwiperSlide><img src="/images/banner1.jpg" className="w-full h-full object-cover rounded-xl" /></SwiperSlide>
          <SwiperSlide><img src="/images/banner2.jpg" className="w-full h-full object-cover rounded-xl" /></SwiperSlide>
        </Swiper>
      </section>

      {/* About Section */}
      <section className="text-center px-4">
        <h2 className="text-3xl font-bold text-primary">Welcome to Our Kindergarten</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          A beautiful place to grow and learn. We nurture creativity, kindness, and confidence in every child.
        </p>
      </section>

      {/* Class Summary */}
      <section className="px-4">
        <h3 className="text-2xl font-semibold mb-4">Class Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-100 rounded-xl text-center">
            <h4 className="text-xl font-bold">Nursery</h4>
            <p>Students: 18</p>
          </div>
          <div className="p-4 bg-green-100 rounded-xl text-center">
            <h4 className="text-xl font-bold">KG</h4>
            <p>Students: 22</p>
          </div>
          <div className="p-4 bg-blue-100 rounded-xl text-center">
            <h4 className="text-xl font-bold">Class 1</h4>
            <p>Students: 25</p>
          </div>
        </div>
      </section>

      {/* Notification */}
      <section className="px-4">
        <h3 className="text-2xl font-semibold mb-4">Latest Notifications</h3>
        <div className="space-y-2">
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h4 className="font-semibold">📢 Admission Open for Session 2025</h4>
            <p className="text-sm text-gray-600">Start Date: August 1, 2025</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h4 className="font-semibold">🎉 Annual Cultural Program</h4>
            <p className="text-sm text-gray-600">Date: July 20, 2025</p>
          </div>
        </div>
      </section>
    </div>
  )
}
