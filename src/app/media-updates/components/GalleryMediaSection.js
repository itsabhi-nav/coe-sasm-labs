"use client"; // 👈 NOW a proper Client Component

import { useEffect, useState } from "react";

export default function GalleryMediaSection() {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMedia() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/gallery_media?fields=image,caption,status&filter[status][_eq]=published&sort=sort`
        );

        if (!res.ok) throw new Error("Failed to fetch gallery");

        const json = await res.json();

        const items = (json.data || [])
          .filter((item) => item.image)
          .map((item) => ({
            ...item,
            imageUrl: `/api/proxy-image?id=${item.image}`,
          }));

        setMediaItems(items);
      } catch (err) {
        console.error("❌ Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMedia();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Gallery & Media
        </h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading gallery...</p>
        ) : (
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            {mediaItems.length === 0 ? (
              <p className="text-center text-gray-600">No media items found.</p>
            ) : (
              mediaItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 break-inside-avoid rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.caption || `Gallery ${index + 1}`}
                    className="w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="p-4 bg-black bg-opacity-60">
                    <p className="text-sm text-white">{item.caption}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}
