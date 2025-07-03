import { useRouteError, Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle, FaSadTear, FaSearch } from "react-icons/fa";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  // Determine error type
  let errorType;
  if (error.status === 404) {
    errorType = 'notFound';
  } else if (error.status === 401 || error.status === 403) {
    errorType = 'unauthorized';
  } else {
    errorType = 'general';
  }

  const errorMessages = {
    notFound: {
      title: "404 - Page Not Found",
      icon: <FaSearch className="text-6xl text-blue-500 mb-4" />,
      message: "Oops! The page you're looking for doesn't exist.",
      action: "Return to Home"
    },
    unauthorized: {
      title: "Access Denied",
      icon: <FaExclamationTriangle className="text-6xl text-yellow-500 mb-4" />,
      message: "You don't have permission to view this page.",
      action: "Go to Login"
    },
    general: {
      title: "Something Went Wrong",
      icon: <FaSadTear className="text-6xl text-red-500 mb-4" />,
      message: "An unexpected error occurred. Please try again later.",
      action: "Return to Safety"
    }
  };

  const currentError = errorMessages[errorType];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
        <div className="flex justify-center">
          {currentError.icon}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          {currentError.title}
        </h1>
        <p className="text-gray-600 mb-6">
          {currentError.message} {error.statusText || error.message}
        </p>
        
        <div className="space-y-4">
          <Link
            to={errorType === 'unauthorized' ? "/login" : "/"}
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaHome className="mr-2" />
            {currentError.action}
          </Link>
          
          {errorType === 'notFound' && (
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-2">
                Think this is a mistake?
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Try refreshing the page
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Error code: {error.status || "Unknown"}</p>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-2 text-left">
            <summary className="cursor-pointer">Technical details</summary>
            <pre className="bg-gray-100 p-2 rounded mt-2 text-xs overflow-x-auto">
              {JSON.stringify(error, null, 2)}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}