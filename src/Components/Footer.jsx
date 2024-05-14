import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-black-300">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">About PetPalsCare</h5>
            <p>PetPalsCare is dedicated to providing the best care for your pets. Our mission is to ensure the happiness and well-being of your furry friends.</p>
          </div>
          <div className="p-4">
            <h5 className="text-xl font-bold mb-2">Contact Us</h5>
            <p>Have questions or concerns? Contact us at:</p>
            <ul className="list-disc list-inside">
              <li>Email: info@petpalscare.com</li>
              <li>Phone: 1-800-PET-CARE</li>
              <li>Address: 123 Pet Care Street, Cityville, State, Country</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto">
          <p className="text-center text-sm">© {new Date().getFullYear()} PetPalsCare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer