import React from 'react';
import Navbar from "../Components/Navbar";
import heroImage from "../assets/images/hero-home.jpg";
import image1 from '../assets/images/vectorhome1.png';
import image2 from "../assets/images/vectorhome2.png";
import image3 from "../assets/images/vectorhome3.png";
import image4 from "../assets/images/vectorhome4.png";
import { Description } from '@headlessui/react';

const data = [
  {id:1,Imgurl:image1,text:"Lokasi Dokter Hewan", Description:"Kemudahan untuk menemukan dokter hewan terdekat dengan cepat."},
  {id:2,Imgurl:image2,text:"Konsultasi Dokter", Description:"Berkonsultasi dengan dokter hewan secara online untuk memperoleh saran penanganan."},
  {id:3,Imgurl:image3,text:"Adopsi Hewan", Description:"Menjelajahi daftar-daftar hewan yang anda inginkan untuk dipelihara."},
  {id:4,Imgurl:image4,text:"Temukan Pengadopsi", Description:"Anda dapat mengunggah profil hewan anda untuk menemukan pengadopsi yang cocok."},
]



const Card = ({Imgurl, text , Description}) => {
  return (
    <div className="bg-[#F1F1F1] shadow-md rounded-lg p-6">
    <div className="flex items-start justify-start mb-4">
    <img src={Imgurl} alt={text} className="h-10"/>
    </div>
    <h2 className="text-xl font-semibold mb-2">{text}</h2>
    <p className="text-gray-600">{Description}</p>
    </div>
  )
}



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


     
      <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((item) => (
                  <Card key={item.id} Imgurl={item.Imgurl} text={item.text} Description={item.Description} />
                ))}
              </div>
            </div>

       
    </>
  );
}

export default HomepageBefore;
