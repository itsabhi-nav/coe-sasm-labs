"use client";

import { useEffect, useState } from "react";

export default function NewsEventsSection() {
  const [newsEvents, setNewsEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsEvents() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/news_events?fields=title,date,description,image,status&filter[status][_eq]=published&sort=-date`
        );

        if (!res.ok) throw new Error("Failed to fetch news & events");

        const json = await res.json();

        const items = (json.data || [])
          .filter((item) => item.image)
          .map((item) => ({
            ...item,
            imageUrl: `/api/proxy-image?id=${item.image}`,
          }));

        setNewsEvents(items);
      } catch (err) {
        console.error("❌ Error fetching news & events:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchNewsEvents();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          News & Events
        </h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading news & events...</p>
        ) : newsEvents.length === 0 ? (
          <p className="text-center text-gray-600">No events found.</p>
        ) : (
          <div className="space-y-8">
            {newsEvents.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="md:w-1/3">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium mt-1">
                    {item.date}
                  </p>
                  <p className="text-lg text-gray-700 mt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
