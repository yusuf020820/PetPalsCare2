import React from 'react';
import Navbar from "../Components/Navbar";
import heroImage from "../assets/images/hero-home.jpg";
import vh1 from "../assets/images/vectorhome1.png";
import vh2 from "../assets/images/vectorhome2.png";
import vh3 from "../assets/images/vectorhome3.png";
import vh4 from "../assets/images/vectorhome4.png";

const HomepageBefore = () => {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute left-[130px] top-[180px]">
          <div className="text-neutral-800 text-5xl font-bold font-sans capitalize leading-[68px]">
            Hewan Sehat, Hati Bahagia 
            <p>Temukan Perawatan Terbaik</p>
          </div>

          <div className="w-[480px] text-stone-500 text-base font-normal font-sans mt-4">
            Bersama-sama, kita berkomitmen untuk mengubah dan memperbaiki kesejahteraan hewan serta menciptakan kehidupan yang penuh kebahagiaan bagi mereka!
          </div>
          <button className="w-[163px] px-7 pt-3.5 pb-2.5 bg-[#ED9455] hover:bg-[#e28d51] transition duration-300 rounded-full flex justify-center items-center mt-10">
            <span className="text-white">Explore Now</span>
          </button>
        </div>
      </div>


      <div className="max-w-screen-xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div className="bg-[#F1F1F1] shadow-md rounded-lg p-6">
        <div className="flex items-start justify-start mb-4">
        <img src={vh1} alt="Icon" className="h-10"/>
        </div>
        <h2 className="text-xl font-semibold mb-2">Lokasi Dokter Hewan</h2>
        <p className="text-gray-600">Kemudahan untuk menemukan dokter hewan terdekat dengan cepat.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F1F1F1] shadow-md rounded-lg p-6">
        <div className="flex items-start justify-start mb-4">
        <img src={vh2} alt="Icon" className="h-10"/>
        </div>
        <h2 className="text-xl font-semibold mb-2">Konsultasi Dokter</h2>
        <p className="text-gray-600">Berkonsultasi dengan dokter hewan secara online untuk memperoleh saran penanganan.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F1F1F1] shadow-md rounded-lg p-6">
        <div className="flex items-start justify-start mb-4">
        <img src={vh3} alt="Icon" className="h-10"/>
        </div>
        <h2 className="text-xl font-semibold mb-2">Adopsi Hewan</h2>
        <p className="text-gray-600">Menjelajahi daftar-daftar hewan yang anda inginkan untuk dipelihara.</p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#F1F1F1] shadow-md rounded-lg p-6">
        <div className="flex items-start justify-start mb-4">
        <img src={vh4} alt="Icon" className="h-10"/>
        </div>
        <h2 className="text-xl font-semibold mb-2">Temukan Pengadopsi</h2>
        <p className="text-gray-600">Anda dapat mengunggah profil hewan anda untuk menemukan pengadopsi yang cocok.</p>
        </div>

       
      </div>
    </>
  );
}

export default HomepageBefore;
