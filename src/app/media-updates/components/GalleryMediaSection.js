import React from "react";

export default function GalleryMediaSection() {
  const mediaItems = [
    {
      image: "/images/gallery1.jpg",
      caption:
        "Dr. Y S R Murty, VC, RVU with Dr. K N Subramanya, Principal, RVCE during the Inauguration of COE‑SASM in 2021",
    },
    {
      image: "/images/gallery2.jpg",
      caption: "Prof John Volakis, Director, FIU‑Miami visit in 2021",
    },
    {
      image: "/images/gallery3.jpg",
      caption:
        "C. Vinod Hayagriv, VP, RSST with RVCE leadership during a visit in 2023",
    },
    {
      image: "/images/gallery4.jpg",
      caption: "Dr. D C Pande delivering an expert talk at COE‑SASM in 2021",
    },
    {
      image: "/images/gallery5.jpg",
      caption: "Dr. K S Sandya expert talk at COE‑SASM in 2023",
    },
    {
      image: "/images/gallery6.jpg",
      caption:
        "Dr. Surendra Pal visited COE‑SASM in 2023 and engaged with RVCE leadership",
    },
    {
      image: "/images/gallery7.jpg",
      caption:
        "COE‑SASM Team showcased innovative research at WAMS‑2023 in Gandhinagar, Gujarat",
    },
    {
      image: "/images/gallery8.jpg",
      caption:
        "FMCW RADAR design project won first prize at a national contest (2024)",
    },
    {
      image: "/images/gallery9.jpg",
      caption:
        "Best Paper Award at IEEE SPACE, Bangalore, July 2024 for a Modulated Metasurface based Antenna",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Gallery & Media
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={`Gallery ${index + 1}`}
                className="w-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4 bg-black bg-opacity-60">
                <p className="text-sm text-white">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
