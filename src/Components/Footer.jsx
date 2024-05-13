import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto flex flex-col items-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Petpals Care</h2>
              <p className="mt-2">Your trusted partner in pet care.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">About Us</a>
              <a href="#" className="hover:text-gray-400">Services</a>
              <a href="#" className="hover:text-gray-400">Testimonials</a>
              <a href="#" className="hover:text-gray-400">Contact</a>
            </div>
            <div className="mt-8">
              <p>&copy; {new Date().getFullYear()} Petpals Care. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
}

export default Footer