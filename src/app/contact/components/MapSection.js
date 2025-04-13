import React from "react";

export default function MapSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Our Location
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          {/* Replace the src URL with your actual Google Maps embed URL if available */}
          <iframe
            title="RV College of Engineering"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.628632156638!2d77.53565231529452!3d12.972442990897256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167241b1a9e7%3A0xb4c9fc2d4a798acb!2sRV%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1681900000000"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
