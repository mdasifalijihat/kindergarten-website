import { FaDownload } from 'react-icons/fa'

export default function TeacherCard({ name, joinedDate, qualification, subject, classes, cvLink, photo }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 text-center border border-primary/20">
      <img src={photo} alt={name} className="w-24 h-24 mx-auto rounded-full object-cover mb-3 border-2 border-primary" />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">Joined: {joinedDate}</p>
      <p className="text-sm font-medium text-green-700">Qualification: {qualification}</p>
      <p className="text-sm text-gray-700">Subject: {subject}</p>
      <p className="text-sm">Classes: {classes.join(', ')}</p>
      <a href={cvLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline mt-2">
        <FaDownload className="mr-2" /> Download CV
      </a>
    </div>
  )
}
