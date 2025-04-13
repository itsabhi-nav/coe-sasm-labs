import React from "react";

export default function NewsEventsSection() {
  const newsEvents = [
    {
      title: "Inauguration of COE‑SASM",
      date: "2021",
      description:
        "Dr. Y S R Murty, VC, RVU with Dr. K N Subramanya inaugurated COE‑SASM, marking the beginning of advanced RF and microwave research.",
      image: "/images/gallery1.jpg",
    },
    {
      title: "Prof John Volakis Visit",
      date: "2021",
      description:
        "Prof John Volakis, Director, FIU‑Miami visited and shared insights on global antenna research trends.",
      image: "/images/gallery2.jpg",
    },
    {
      title: "RSST Leadership Visit",
      date: "2023",
      description:
        "C. Vinod Hayagriv, Vice-President, RSST along with RVCE leadership discussed future collaborations at COE‑SASM.",
      image: "/images/gallery3.jpg",
    },
    {
      title: "Expert Talk by Dr. D C Pande",
      date: "2021",
      description:
        "Dr. D C Pande delivered an expert talk on advanced measurement techniques at COE‑SASM.",
      image: "/images/gallery4.jpg",
    },
    {
      title: "Expert Talk by Dr. K S Sandya",
      date: "2023",
      description:
        "Dr. K S Sandya presented advanced antenna design methodologies at COE‑SASM.",
      image: "/images/gallery5.jpg",
    },
    {
      title: "Dr. Surendra Pal Visit",
      date: "2023",
      description:
        "Dr. Surendra Pal visited and engaged with RVCE leadership to explore new research initiatives.",
      image: "/images/gallery6.jpg",
    },
    {
      title: "COE‑SASM at WAMS 2023",
      date: "2023",
      description:
        "The COE‑SASM team showcased innovative research at WAMS‑2023 in Gandhinagar, Gujarat.",
      image: "/images/gallery7.jpg",
    },
    {
      title: "FMCW RADAR Design Contest Winner",
      date: "2024",
      description:
        "An FMCW RADAR for Traffic‑Queue Length Estimation design won first prize at a national contest.",
      image: "/images/gallery8.jpg",
    },
    {
      title: "Best Paper Award at IEEE SPACE",
      date: "July 2024",
      description:
        "COE‑SASM students were awarded the Best Paper Award at IEEE SPACE, Bangalore for a Modulated Metasurface based Antenna.",
      image: "/images/gallery9.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          News & Events
        </h2>
        <div className="space-y-8">
          {newsEvents.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="md:w-1/3">
                <img
                  src={item.image}
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
                <p className="text-lg text-gray-700 mt-4">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
