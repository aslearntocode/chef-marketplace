'use client';

export default function ChefApplication() {
  return (
    <main className="min-h-screen py-24 px-4 bg-[#F4C430]">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Chef Application</h1>
        
        <p className="mb-8 text-lg">Please click the button below to fill out our chef application form.</p>
        
        <a 
          href="https://forms.gle/Dn7MFLjGE5ocSvbH6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Open Application Form
        </a>
      </div>
    </main>
  );
} 