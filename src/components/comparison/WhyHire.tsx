import React from "react";
const whyHireData = [
    {
      id: 1,
      icon: "🚀", // Replace with any icon or component, like from FontAwesome
      title: "Expert Developers",
      description: "Our team of experts brings specialized knowledge and experience to your project."
    },
    {
      id: 2,
      icon: "🔒", // Replace with any icon or component
      title: "Secure & Reliable",
      description: "We follow best practices to ensure your project is safe, secure, and reliable."
    },
    {
      id: 3,
      icon: "⚙️", // Replace with any icon or component
      title: "Custom Solutions",
      description: "We tailor our solutions to meet your specific business needs and goals."
    },
    {
        id: 4,
        icon: "⚙️", // Replace with any icon or component
        title: "Custom Solutions",
        description: "We tailor our solutions to meet your specific business needs and goals."
      },
      {
        id: 5,
        icon: "⚙️", // Replace with any icon or component
        title: "Custom Solutions",
        description: "We tailor our solutions to meet your specific business needs and goals."
      },
  ];
const WhyHire = () => {
  return (
    <section className="py-12 bg-white text-center">
    <div className="container mx-auto">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-blue-600 mb-4">
        Why Hire Dedicated Developers?
      </h2>
      <p className="text-gray-600 mb-10">
        Hiring dedicated developers can provide numerous benefits for your business.
        Our team of experts can help you scale your development efforts, access
        specialized skills, and deliver projects more efficiently.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whyHireData.map((item) => (
          <div
            key={item.id}
            className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              item.id === 1
                ? "border-2 border-blue-500 bg-white shadow-xl col-span-1  h-full" // Custom design for the first card
                : "border border-gray-200 bg-gray-50"
            }`}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default WhyHire;