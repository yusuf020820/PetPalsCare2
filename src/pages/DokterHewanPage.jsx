import React from 'react';
import DokterCewe from '../assets/images/DokterCewe.png';
import DokterCowo from '../assets/images/DokterCowo.png';
import DokterHewan from '../assets/images/DokterHewan.png';
import Navbar from "../Components/Navbar-after";
import Footer from '../Components/Footer-after';

// Komponen Kartu (Card) yang menerima properti teks
const Card = ({ image, doctorName, specialty, experience }) => (
  <div className='w-1/4 rounded overflow-hidden shadow-2xl flex flex-col'>
    <img className="h-auto w-full" src={image} alt="Dokter" />
    <div className="px-6 py-4 flex-grow flex flex-col justify-between text-center">
      <div className="font-bold text-xl mb-2">
        <h1 className="text-lg" style={{ whiteSpace: 'nowrap' }}>{doctorName}</h1>
      </div>
      <p className="text-[#667479] text-xs mb-2" style={{ textAlign: 'justify' }}>Spesialis: {specialty}</p>
      <p className="text-[#667479] text-xs mb-4" style={{ textAlign: 'justify' }}>Pengalaman: {experience}</p>
      <div className="flex justify-center mt-2">
        <a href="/Detail-dokter-pria">
        <button className="bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-8 rounded-full">Lihat Detail</button>
        </a>
      </div>
    </div>
  </div>
);

const DokterHewanPage = () => {
  const cardsData = [
    { image: DokterCowo, doctorName: "Drh. Muhammad Ali", specialty: "Hewan Domestik dan Eksotik", experience: "7 Tahun" },
    { image: DokterCewe, doctorName: "Drh. Zahra Salsabila", specialty: "Kucing dan Anjing", experience: "7 Tahun" },
    { image: DokterCowo, doctorName: "Drh. Septian Priatama", specialty: "Hewan Ternak dan Unggas", experience: "7 Tahun" },
    { image: DokterCewe, doctorName: "Drh. Ami Kosriami", specialty: "Anjing dan Kucing, Ternak", experience: "7 Tahun" },
    { image: DokterCowo, doctorName: "Drh. Arjuna Wijaya", specialty: "Hewan Domestik dan Eksotik", experience: "10 Tahun" },
    { image: DokterCewe, doctorName: "Drh. Silvia Candra", specialty: "Kucing dan Anjing", experience: "5 Tahun" },
    { image: DokterCowo, doctorName: "Drh. Dimas Pratama", specialty: "Hewan Ternak dan Unggas", experience: "10 Tahun" },
    { image: DokterCewe, doctorName: "Drh. Diyah Pitaloka", specialty: "Anjing dan Kucing, Ternak", experience: "7 Tahun" },
    { image: DokterCowo, doctorName: "H.M.A.Cholik", specialty: "Hewan Domestik dan Eksotik", experience: "7 Tahun" },
    { image: DokterCewe, doctorName: "Drh. Anindita Ika A", specialty: "Kucing dan Anjing", experience: "5 Tahun" },
    { image: DokterCowo, doctorName: "Drh. Cokro Susmito", specialty: "Hewan Ternak dan Unggas", experience: "7 Tahun" },
    { image: DokterCewe, doctorName: "Drh. Yana Rosa", specialty: "Anjing dan Kucing, Ternak", experience: "7 Tahun" }
  ];

  return (
    <>
      <Navbar />
      <div className='w-full h-auto pt-8 px-20 container relative'>
        <img src={DokterHewan} alt="Dokter Hewan" className="w-auto h-auto relative" />
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/4 -translate-y-1/2 text-white px-12 py-4 text-left w-full max-w-full">
          <h1 className="text-3xl font-bold mb-2">Temukan Dokter Hewan:</h1>
          <h2 className="text-xl font-semibold mb-2">Solusi Terbaik</h2>
          <h2 className="text-xl font-semibold mb-2">untuk Kesehatan Hewan</h2>
          <h4 className="text-2xs mb-2" style={{ fontSize: '0.5rem' }}>Layanan Kesehatan Berkualitas yang Memberikan Perhatian</h4>
          <h className="text-2xs mb-2" style={{ fontSize: '0.5rem' }}>Terbaik untuk Hewan Peliharaan Anda.</h>
        </div>
      </div>
      <div className='w-full h-auto pt-8 px-20 container'>
        <div>
          {[...Array(3)].map((_, sectionIndex) => (
            <div key={sectionIndex} className='py-8 flex gap-4'>
              {cardsData.slice(sectionIndex * 4, sectionIndex * 4 + 4).map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DokterHewanPage;
