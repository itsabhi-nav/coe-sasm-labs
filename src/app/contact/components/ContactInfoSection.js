import React from "react";

export default function ContactInfoSection() {
  const contacts = [
    {
      name: "Dr. Geetha K S",
      designation: "Vice Principal, RVCE",
      email: "geethaks@rvce.edu.in",
      phone: "99007 00990",
      icon: "👩‍⚕️",
    },
    {
      name: "Dr. Shushrutha K S",
      designation: "Associate Professor, ECE Dept, RVCE",
      email: "shushruthaks@rvce.edu.in",
      phone: "M-9964179197",
      icon: "👨‍🏫",
    },
    {
      name: "Dr. Mahesh A",
      designation: "Associate Professor, ECE Dept, RVCE",
      email: "mahesha@rvce.edu.in",
      phone: "M-9886531812",
      icon: "👨‍🏫",
    },
    {
      name: "Prof. M. Shambulinga",
      designation: "Assistant Professor, TCE Dept, RVCE",
      email: "shambulingam@rvce.edu.in",
      phone: "M-9916292488",
      icon: "👨‍💼",
    },
    {
      name: "Mr. Raghunandan",
      designation: "Foreman, ECE Dept, RVCE",
      email: "raghunandan@rvce.edu.in",
      phone: "M-9481426697",
      icon: "👷",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Contact Information
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          For general inquiries, facility utilization, training, or
          collaboration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 flex items-start"
            >
              <div className="text-4xl mr-4">{contact.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{contact.name}</h3>
                <p className="text-lg text-gray-700 mb-1">
                  {contact.designation}
                </p>
                <p className="text-lg text-gray-700 mb-1">
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    {contact.email}
                  </a>
                </p>
                <p className="text-lg text-gray-700">
                  <span className="font-semibold">Phone:</span> {contact.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg text-gray-700">
            RV College of Engineering, Bangalore, India
          </p>
        </div>
      </div>
    </section>
  );
}
