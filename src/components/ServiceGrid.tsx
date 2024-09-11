import React from 'react';

const ServiceGrid = () => {
  const services = [
    { name: 'Consultation', icon: 'user', iconColor: 'text-blue-500' },
    { name: 'Project Management', icon: 'tasks', iconColor: 'text-orange-500' },
    { name: 'Selection', icon: 'check-circle', iconColor: 'text-cyan-400' },
    { name: 'Scalability', icon: 'arrows-alt', iconColor: 'text-purple-500' },
    { name: 'Ongoing Support', icon: 'sync', iconColor: 'text-purple-400' },
    { name: 'Onboarding', icon: 'door-open', iconColor: 'text-blue-900' },
  ];

  const ServiceCard = ({ service }) => {
    return (
      <div className="bg-white shadow-md rounded-lg flex flex-col items-center p-4 w-40 h-40 hover:shadow-xl transition-shadow duration-300">
        <div className={`text-4xl mb-4 ${service.iconColor}`}>
          <i className={`fas fa-${service.icon}`}></i> {/* Assuming Font Awesome */}
        </div>
        <div className="text-lg font-semibold">{service.name}</div>
      </div>
    );
  };

  return (
    <div className="flex gap-5">
      {/* Left Side (Grid of Services) */}
      <div className="flex-1">
        <div className="grid grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Right Side (Text Section) */}
      <div className="flex-1 ml-12 flex flex-col justify-center p-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          Our Hiring Model Developers
        </h2>
        <p className="text-gray-600 mb-6">
          Hiring dedicated developers can provide numerous benefits for your business. Our team of experts can help you scale your development efforts, access specialized skills, and deliver projects more efficiently.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg font-semibold">
          Hire Now
        </button>
      </div>
    </div>
  );
};

export default ServiceGrid;
