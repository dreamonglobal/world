import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <p className="text-2xl text-zinc-300 mb-2">Page Not Found</p>
        <p className="text-zinc-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-red-600 hover:to-pink-600 transition shadow-lg"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border border-zinc-700 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-zinc-900 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
