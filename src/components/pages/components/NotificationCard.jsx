import { FaDownload } from 'react-icons/fa'

export default function NotificationCard({ title, description, date, attachment }) {
  return (
    <div className="bg-white shadow-md border-l-4 border-primary p-4 rounded-lg">
      <div className="flex items-start justify-between flex-wrap gap-2">
        <div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
          <p className="text-xs text-gray-500 mt-1">📅 Date: {date}</p>
        </div>
        {attachment && (
          <a
            href={attachment}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline mt-2 flex items-center gap-1"
          >
            <FaDownload /> Download
          </a>
        )}
      </div>
    </div>
  )
}
