import Link from 'next/link';

export default function Success() {
  return (
    <div className="min-h-screen bg-[#FDBE28] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Application Submitted Successfully!</h1>
          <p className="text-gray-700 mb-8">
            Thank you for applying to join our platform. We will review your application and get back to you soon.
          </p>
          <Link 
            href="/"
            className="bg-[#FDBE28] text-black px-8 py-3 rounded-full font-bold hover:bg-[#E5AB14] transition-colors inline-block"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 