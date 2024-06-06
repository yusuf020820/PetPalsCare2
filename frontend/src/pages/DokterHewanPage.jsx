import { useState, useEffect } from "react";
import DokterCowo from "../assets/images/DokterCowo.png";
import DokterHewan from "../assets/images/DokterHewan.png";
import Navbar from "../Components/Navbar-after";
import Footer from "../Components/Footer-after";
import axios from "axios";

// Komponen Kartu (Card) yang menerima properti teks
const Card = ({ image, doctorName, specialty, experience }) => (
  <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center font-poppins">
    <img className="w-full h-72 object-fill" src={image} alt="Dokter" />
    <div className="p-4 flex flex-col items-start w-full">
      <h2 className="text-xl font-semibold text-slate-900 line-clamp-1">
        {doctorName}
      </h2>
      <p className="text-gray-500 text-sm mt-2 line-clamp-1">
        <span className="font-medium">Spesialis:</span> {specialty}
      </p>
      <p className="text-gray-500 text-sm mt-1">
        <span className="font-medium">Pengalaman:</span> {experience}
      </p>
      <button className="mt-4 w-full py-1 bg-[#ED9455] hover:bg-[#f89b59] text-white rounded-lg transition duration-300">
        Lihat Detail
      </button>
    </div>
  </div>
);

const DokterHewanPage = () => {
  const [dokterData, setDokterData] = useState([]);

  useEffect(() => {
    const fetchDokterData = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/dokter");
        setDokterData(response.data.dokter);
      } catch (error) {
        console.error("There was an error fetching the dokter data!", error);
      }
    };

    fetchDokterData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-auto pt-8 px-20 container relative font-poppins">
        <img
          src={DokterHewan}
          alt="Dokter Hewan"
          className="w-auto h-auto relative"
        />
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/4 -translate-y-1/2 text-white px-12 py-4 text-left w-full max-w-full">
          <h1 className="text-4xl font-bold mb-2">Temukan Dokter Hewan</h1>
          <h2 className="text-xl font-semibold">Solusi Terbaik</h2>
          <h2 className="text-xl font-semibold mb-2">untuk Kesehatan Hewan</h2>
          <h4 className="text-sm mb-2 max-w-md">
            Layanan Kesehatan Berkualitas yang Memberikan Perhatian Terbaik
            untuk Hewan Peliharaan Anda.
          </h4>
        </div>
      </div>
      <div className="w-full h-auto pt-8 px-20 container">
        <div>
          {[...Array(3)].map((_, sectionIndex) => (
            <div key={sectionIndex} className="py-8 flex gap-4">
              {dokterData
                .slice(sectionIndex * 4, sectionIndex * 4 + 4)
                .map((doctor, index) => (
                  <Card
                    key={index}
                    image={DokterCowo} // Anda bisa mengganti ini dengan gambar yang sesuai untuk setiap dokter
                    doctorName={doctor.nama}
                    specialty={doctor.spesialis}
                    experience={doctor.pengalaman}
                  />
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
