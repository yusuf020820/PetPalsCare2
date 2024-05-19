import React from 'react'
import logo from '../assets/images/logo.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'




const data = [
  { id: 1, JenisHewan: 'Anjing Shiba Inu', Nama: "Cleo", Kelamin: "Betina", Usia: 2, imageUrl: "https://via.placeholder.com/150" },
  { id: 1, JenisHewan: "Anjing Shiba Inu", Nama: "Cleo", Kelamin: "Betina", Usia: 2, imageUrl: "https://via.placeholder.com/150" },
  { id: 1, JenisHewan: "Anjing Shiba Inu", Nama: "Cleo", Kelamin: "Betina", Usia: 2, imageUrl: "https://via.placeholder.com/150" },
  { id: 1, JenisHewan: "Anjing Shiba Inu", Nama: "Cleo", Kelamin: "Betina", Usia: 2, imageUrl: "https://via.placeholder.com/150" },
  { id: 1, JenisHewan: "Anjing Shiba Inu", Nama: "Cleo", Kelamin: "Betina", Usia: 2, imageUrl: "https://via.placeholder.com/150" },
  { id: 1, JenisHewan: "Anjing Shiba Inu", Nama: "Cleo", Kelamin: "Betina", Usia: 2, imageUrl: "https://via.placeholder.com/150" },
  { id: 1, JenisHewan: "Anjing Shiba Inu", Nama: "Cleo", Kelamin: "Betina", Usia: 2, imageUrl: "https://via.placeholder.com/150" },
  { id: 1, JenisHewan: "Anjing Shiba Inu", Nama: "Cleo", Kelamin: "Betina", Usia: 2, imageUrl: "https://via.placeholder.com/150" },
]



const Card = ({ JenisHewan, Nama, Kelamin, Usia, imageUrl }) => {
  return (
    <div className=' rounded overflow-hidden shadow-2xl'>
      <img className="w-full h-48 object-cover rounded-t" src={imageUrl} alt={Nama} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <h1>{JenisHewan}</h1>
        </div>
        <p className="text-[#667479] text-base">Nama : {Nama}</p>
        <div className=' flex gap-2'>
          <p className="text-[#667479] text-xs">Kelamin : {Kelamin}</p>
          <p className="text-[#667479] text-xs"> Usia : {Usia} tahun</p>
        </div>
      </div>
    </div>
  )
}

const AdopsiPage = () => {
  return (
    <>
      <Navbar />
      <div className=' w-full h-auto pt-8 px-20 container'>
        <div className='bg-green h-96 w-full'>
          <img src="" alt="" />
        </div>

        <div>
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