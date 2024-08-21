import React from 'react';
import { FaPaw, FaBroom, FaTree } from 'react-icons/fa';

const services = [
    {
      id: 1,
      icon: FaPaw,
      title: 'Animal Care',
      description:
        'We ensure that all animals in the jungle are well-fed, healthy, and happy. Our team is dedicated to providing the best care for every creature.',
    },
    {
      id: 2,
      icon: FaBroom,
      title: 'Jungle Cleanliness',
      description:
        'Our jungle cleaning services make sure the environment remains pristine. We work tirelessly to keep the jungle clean and free from any pollutants.',
    },
    {
      id: 3,
      icon: FaTree,
      title: 'Environmental Conservation',
      description:
        'We focus on preserving the natural habitat of the jungle, planting trees, and ensuring that the ecosystem remains balanced and thriving.',
    },
  ];
const Services = () => {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
      <h2 className='text-white text-2xl mb-4 sm:px-2 md:px-10'>Our Services</h2>
      <div className=" mx-auto grid grid-cols-1 gap-10 sm:px-2 md:px-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-lg bg-gray-800 p-6 shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-md bg-green-600 p-3">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Services
