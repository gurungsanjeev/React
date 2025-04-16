import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 text-center max-w-xl mb-6">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition-all duration-300"
      >
        Go to Home
      </button>
    </div>
  )
}

export default PageNotFound
