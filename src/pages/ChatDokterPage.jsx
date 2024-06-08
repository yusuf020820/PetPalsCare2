import React, { useState } from 'react';
import Navbar from "../Components/Navbar-after";
import Footer from '../Components/Footer-after';
import { Link } from 'react-router-dom';
import { FaPaperclip, FaPaperPlane } from 'react-icons/fa';

// Import gambar untuk setiap pasien
import Wira from '../assets/images/Wira.png';
import Gus from '../assets/images/Gus.png';
import nining from '../assets/images/nining.png';
import Yanto from '../assets/images/Yanto.png';
import Sinta from '../assets/images/Sinta.png';

const patients = [
  { id: 1, name: 'Wira Wicaksana', message: 'Dok? Anjing saya mau vaksin', unread: true },
  { id: 2, name: 'Gus Septianto', message: 'Ada yang bisa saya bantu?', unread: false },
  { id: 3, name: 'Nining Sumangingsih', message: 'Dok, kucing saya sering MENCRET', unread: true },
  { id: 4, name: 'Yanto Kusuma Jaya', message: 'Dok, kucing saya sering nyakar saya ', unread: true },
  { id: 5, name: 'Sinta Amelia', message: 'Dok, Kucing saya sering sakit akhir-akhir iniKucingnya lucu kak, mau saya adopsi', unread: false },
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

const ChatDokterPage = () => {
  const [patientPhotos, setPatientPhotos] = useState({});

  const handleFileUpload = (event, patientId) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPatientPhotos((prevPhotos) => ({
          ...prevPhotos,
          [patientId]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Fungsi untuk mendapatkan gambar berdasarkan nama pasien
  const getImageForPatient = (name) => {
    switch (name) {
      case 'Wira Wicaksana':
        return Wira;
      case 'Gus Septianto':
        return Gus;
      case 'Nining Sumangingsih':
        return nining;
      case 'Yanto Kusuma Jaya':
        return Yanto;
      case 'Sinta Amelia':
        return Sinta;
      default:
        return "";
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {/* Konten Utama */}
        <div className="flex flex-grow">
          {/* Sidebar Profil Pengguna */}
          <div className="w-1/4 bg-white border-r p-4 flex flex-col justify-between">
            <ul className="space-y-4">
              <li>
                <Link to="#" className="text-black hover:underline">Profil Saya</Link>
              </li>
              <li>
                <Link to="#" className="text-black hover:underline">Pesan</Link>
              </li>
              <li>
                <Link to="#" className="text-black hover:underline">Posting Hewan Saya</Link>
              </li>
              <li className="mt-8">
                <Link to="/Posting-hewan" className="text-black hover:underline">Keluar</Link>
              </li>
            </ul>
          </div>
          {/* Konten Chat */}
          <div className="w-3/4 bg-gray-100 flex flex-col">
            <div className="flex border-b">
              <div className="w-1/3 bg-white p-4">
                {patients.map((patient) => (
                  <div key={patient.id} className={`p-4 my-4 flex items-center justify-between cursor-pointer hover:bg-gray-200`}>
                    <div className="flex items-center">
                      <img
                        src={patientPhotos[patient.id] || getImageForPatient(patient.name)}
                        alt={patient.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{patient.name}</h3>
                        <p className="text-sm text-gray-500">{patient.message}</p>
                      </div>
                    </div>
                    {patient.unread && <span className="text-red-500 text-sm font-semibold">●</span>}
                    <label htmlFor={`file-upload-${patient.id}`} className="ml-4 cursor-pointer text-[#3182ce]">
                      {}
                    </label>
                    <input
                      id={`file-upload-${patient.id}`}
                      type="file"
                      accept="image/*"
                      onChange={(event) => handleFileUpload(event, patient.id)}
                      className="hidden"
                    />
                  </div>
                ))}
              </div>
              <div className="w-2/3 bg-gray-50 p-4 flex flex-col">
                <div className="flex-grow overflow-y-auto p-4">
                  <ChatMessage message="Dok saya ingin berkonsultasi" time="10:17" />
                  <ChatMessage message="Dok, Kucing saya sering sakit akhir-akhir ini" time="10:17" />
                </div>
                {/* Tambahkan elemen input untuk mengirim pesan di bawah chat */}
                <div className="flex items-center border-t p-2 bg-white">
                  <input
                    type="text"
                    className="flex-grow p-2 border rounded-full mr-2"
                    placeholder="Tulis Pesan..."
                  />
                  <button>
                    <FaPaperclip />
                  </button>
                  <button className="ml-2 p-2 rounded-full bg-[#ED9455] hover:bg-[#ed9455] text-white">
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ChatDokterPage;
