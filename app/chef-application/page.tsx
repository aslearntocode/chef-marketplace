'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';

// Initialize EmailJS once at the component level
emailjs.init("e9U94PXWRfdTFyJAx"); // Replace with your actual public key

export default function ChefApplication() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    experience: '',
    specialty: '',
    location: '',
  });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [menuFile, setMenuFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    
    setLoading(true);
    setError(null);

    try {
      const templateParams = {
        to_name: "Divine Hands",
        to_email: "thedivinehands3@gmail.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        bio: formData.bio || "Not provided",
        experience: formData.experience || "Not provided",
        specialty: formData.specialty || "Not provided",
        location: formData.location || "Not provided",
        message: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone || "Not provided"}
          Bio: ${formData.bio || "Not provided"}
          Experience: ${formData.experience || "Not provided"}
          Specialty: ${formData.specialty || "Not provided"}
          Location: ${formData.location || "Not provided"}
        `
      };

      const response = await emailjs.send(
        "service_v6midud", // Replace with your service ID
        "template_3orrjsa", // Replace with your template ID
        templateParams
      );

      if (response.status === 200) {
        console.log("Email sent successfully!");
        router.push('/chef-application/success');
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFD700] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Chef Application Form</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                required
                className="w-full p-2 border rounded"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                required
                className="w-full p-2 border rounded"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                className="w-full p-2 border rounded"
                onChange={(e) => setProfileImage(e.target.files?.[0] || null)}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Menu File (PDF, DOC, DOCX)</label>
              <input
                type="file"
                accept=".pdf"
                className="w-full p-2 border rounded"
                onChange={(e) => setMenuFile(e.target.files?.[0] || null)}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Bio</label>
              <textarea
                className="w-full p-2 border rounded"
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Experience</label>
              <textarea
                className="w-full p-2 border rounded"
                rows={4}
                value={formData.experience}
                onChange={(e) => setFormData({...formData, experience: e.target.value})}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Specialty</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.specialty}
                onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full font-bold transition-colors ${
                loading 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-[#FFD700] text-black hover:bg-[#F7C948]'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 