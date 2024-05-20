import React from 'react';
import { FaUser, FaMapMarkerAlt, FaHeart, FaSignOutAlt, FaPaperPlane } from 'react-icons/fa';

const patients = [
  { id: 1, name: 'Wira Wicaksana', message: 'Dok! Anjing saya mau vaksin 🩺', unread: true },
  { id: 2, name: 'Agus Septianto', message: 'ada yang bisa saya bantu?', unread: false },
  { id: 3, name: 'Nining Sumaningsih', message: 'Dok, kucing saya sering MUNTAH 🩺', unread: true },
  { id: 4, name: 'Yanto Kusuma Jaya', message: 'Dok, kucing saya sering nyakar saya 🩺', unread: true },
  { id: 5, name: 'Sinta Amelia', message: 'Dok, kucing saya sering sakit akhir-akhir ini 🩺', unread: false },
];

const ChatMessage = ({ message, time }) => {
  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-xs p-4 rounded-lg shadow-md bg-pink-100">
        <p>{message}</p>
        <p className="text-xs text-gray-500 text-right">{time}</p>
      </div>
    </div>
  );
};

const ProfilUserChat = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-white border-r">
        <div className="p-4 border-b flex items-center">
          <FaUser className="text-gray-500 mr-3" />
          <h2 className="font-semibold text-lg">Profil Saya</h2>
        </div>
        <ul>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaMapMarkerAlt className="text-gray-500 mr-3" />
            Daftar Alamat
          </li>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaHeart className="text-gray-500 mr-3" />
            Favorit
          </li>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaUser className="text-gray-500 mr-3" />
            Pasien
          </li>
          <li className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaSignOutAlt className="text-gray-500 mr-3" />
            Keluar
          </li>
        </ul>
      </div>
      <div className="w-3/4 bg-gray-100">
        <div className="flex border-b">
          <div className="w-1/3 bg-white p-4">
            {patients.map((patient) => (
              <div
                key={patient.id}
                className={`p-4 flex items-center justify-between ${patient.unread ? 'bg-orange-100' : ''} cursor-pointer hover:bg-gray-200`}
              >
                <div className="flex items-center">
                  <img src="https://via.placeholder.com/50" alt={patient.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-semibold">{patient.name}</h3>
                    <p className="text-sm text-gray-500">{patient.message}</p>
                  </div>
                </div>
                {patient.unread && <span className="text-red-500 text-sm font-semibold">●</span>}
              </div>
            ))}
          </div>
          <div className="w-2/3 bg-gray-50 p-4 flex flex-col">
            <div className="flex-grow overflow-y-auto p-4">
              <ChatMessage message="Dok saya ingin berkonsultasi" time="10:17" />
              <ChatMessage message="Dok, kucing saya sering sakit akhir-akhir ini" time="10:17" />
            </div>
            <div className="p-4 border-t bg-white flex items-center">
              <input type="text" className="flex-grow p-2 border rounded-lg mr-2" placeholder="Tulis Pesan..." />
              <button className="bg-orange-500 text-white p-2 rounded-lg shadow hover:bg-orange-600">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilUserChat;
