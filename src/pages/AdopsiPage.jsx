import React from 'react'
import logo from '../assets/images/logo.png'
import Navbar from '../Components/Navbar-after'
import Footer from '../Components/Footer-after'




const data = [
  { id: 1, JenisHewan: 'Kucing Anggora', Nama: "Fluffy", Kelamin: "Betina", Usia: "2 Bulan", imageUrl: "https://i.ibb.co.com/ckN3v0F/Angora.png" },
  { id: 1, JenisHewan: "Iguana Green", Nama: "Greendy", Kelamin: "Jantan", Usia: "9 Bulan", imageUrl: "https://i.ibb.co.com/MnCPpF6/iguana.png" },
  { id: 1, JenisHewan: "Kelinci Alaska", Nama: "Bunny", Kelamin: "Betina", Usia: "6 Bulan", imageUrl: "https://i.ibb.co.com/WDQmvjH/kelinci.png" },
  { id: 1, JenisHewan: "Kura-kura Darat", Nama: "Xeca", Kelamin: "Betina", Usia: "5 Tahun", imageUrl: "https://i.ibb.co.com/bFVrLxx/kura.png" },
  { id: 1, JenisHewan: "Kucing Persia", Nama: "Sassy", Kelamin: "Betina", Usia: "2 Tahun", imageUrl: "https://i.ibb.co.com/K98b2mf/persia.png" },
  { id: 1, JenisHewan: "Anjing Shiba Inu", Nama: "Cleo", Kelamin: "Betina", Usia: "2 Tahun", imageUrl: "https://i.ibb.co.com/ct4kv3b/shiba.png" },
  { id: 1, JenisHewan: "Kucing Lokal", Nama: "(Belum Ada)", Kelamin: "Jantan", Usia: "2 Bulan", imageUrl: "https://i.ibb.co.com/c8kJ9x9/lokal.png" },
  { id: 1, JenisHewan: "Anjing Maltase", Nama: "Fuzzy", Kelamin: "Betina", Usia: "3 Bulan", imageUrl: "https://i.ibb.co.com/wSh5zGx/maltase.png" },
]



const Card = ({ JenisHewan, Nama, Kelamin, Usia, imageUrl }) => {
  return (
    <div className=' rounded overflow-hidden shadow-2xl'>
      <img className="w-full h-48 object-cover rounded-t" src={imageUrl} alt={Nama} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h1>{JenisHewan}</h1>
        </div>
        <p className="text-[#667479] text-base">Nama: {Nama}</p>
        <div className=' flex gap-2'>
          <p className="text-[#667479] text-xs">Kelamin: {Kelamin}</p>
          <p className="text-[#667479] text-xs">Usia: {Usia}</p>
        </div>
        <a href="/Detail-hewan">
        <button className="mt-4 w-full py-1 bg-[#ED9455] hover:bg-[#f89b59] text-white rounded-lg transition duration-300">
          Lihat Detail
        </button>
        </a>
      </div>
    </div>
  )
}

const AdopsiPage = () => {
  return (
    <>
      <Navbar />
      <div className=' w-full h-auto pt-8 px-20 container'>
      <img src="adopsi.png" alt="adopsi" className="w-auto h-auto relative"/>
        <div>
          <div className="absolute top-80 left-3/4 transform -translate-x-1/4 -translate-y-1/2 text-white px-12 py-4 text-left w-full max-w-full">
          <h1 className="text-3xl font-bold mb-2">Temukan Sahabat Baru:</h1>
          <h2 className="text-xl font-semibold mb-2">Adopsi Hewan</h2>
          <h2 className="text-xl font-semibold mb-2">Berikan Kasih Sayang</h2>
          <h4 className="text-2xs mb-2" style={{ fontSize: '0.5rem' }}>"Satu tindakan, satu ikatan, satu keluarga, jadilah bagian</h4>
          <h className="text-2xs mb-2" style={{ fontSize: '0.5rem' }}>dari perubahan dengan mengadopsi hari</h>
        </div>
        </div>

        <div >
          <div className='py-8 flex gap-4'>
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((item) => (
                  <Card key={item.id} Nama={item.Nama} JenisHewan={item.JenisHewan} Kelamin={item.Kelamin} Usia={item.Usia} imageUrl={item.imageUrl} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default AdopsiPage