import React from "react";
import Navbar from "../Components/Navbar";

const PetDetailPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen font-sans flex flex-col md:flex-row p-6 max-w-7xl mt-5 mx-auto">
        {/* Bagian gambar */}
        <div className="w-full md:w-1/2 flex flex-col items-center mb-8 md:mb-0">
          <img
            className="w-full h-3/5 rounded-lg mb-4 object-cover"
            src="https://www.akc.org/wp-content/uploads/2017/11/Shiba-Inu-puppy-standing-outdoors.jpg"
            alt="Pet"
          />
          <div className="flex space-x-3">
            <img
              className="w-24 h-24 rounded-md border-2 border-amber-200"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
            <img
              className="w-24 h-24 rounded-md border-2 border-amber-200"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
            <img
              className="w-24 h-24 rounded-md border-2 border-amber-200"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
            <img
              className="w-24 h-24 rounded-md border-2 border-amber-200"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
            <img
              className="w-24 h-24 rounded-md border-2 border-amber-200"
              src="https://via.placeholder.com/94x94"
              alt="Thumbnail"
            />
          </div>
        </div>

        {/* Bagian deskripsi */}
        <div className="w-full md:w-1/2 md:ml-8 flex flex-col">
          <h1 className="text-2xl font-bold font-sans mb-4">
            Anjing Shiba Inu
          </h1>

          <div className="flex flex-col space-y-4">
            <div className="border-b border-gray-200 py-2">
              <span className="text-gray-500 font-sans">Nama Panggilan: </span>
              <span className="font-sans">Cleo</span>
            </div>
            <div className="border-b border-gray-200 py-2">
              <span className="text-gray-500 font-sans">Kelamin: </span>
              <span className="font-sans">Jantan</span>
            </div>
            <div className="border-b border-gray-200 py-2">
              <span className="text-gray-500 font-sans">Umur: </span>
              <span className="font-sans">2 Tahun</span>
            </div>
            <div className="border-b border-gray-200 py-2">
              <span className="text-gray-500 font-sans">Warna: </span>
              <span className="font-sans">Appricot & Tan</span>
            </div>
            <div className="border-b border-gray-200 py-2">
              <span className="text-gray-500 font-sans">Vaksin: </span>
              <span className="font-sans">Sudah</span>
            </div>
            <div className="border-b border-gray-200 py-2">
              <span className="text-gray-500 font-sans">Obat Cacing: </span>
              <span className="font-sans">Sudah</span>
            </div>
            <div className="border-b border-gray-200 py-2">
              <span className="text-gray-500 font-sans">Lokasi: </span>
              <span className="font-sans">Kediri, Indonesia</span>
            </div>
            <div className="border-b border-gray-200 py-2">
              <span className="text-gray-500 font-sans">
                Tanggal Publikasi:{" "}
              </span>
              <span className="font-sans">12-Oct-2022</span>
            </div>
            <div className="border-b border-gray-200 py-2">
              <span className="text-gray-500 font-sans">
                Informasi Tambahan:{" "}
              </span>
              <span className="font-sans">
                Pure breed Shih Tzu. Struktur tubuh yang baik. Dengan sertifikat
                MKA dan Microchip. Garis keturunan juara.
              </span>
            </div>
          </div>

          <button className="mt-6 px-6 py-3 bg-[#ED9455] hover:bg-[#f89b59] text-white rounded-lg transition duration-300">
            Chat dengan pemilik untuk adopsi
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetDetailPage;
