import React from 'react'
import logo from '../assets/images/logo.png'


const PopUpKonfirmasi = () => {
  return (
    <>
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 container'>
        <div className=' bg-white p-6 rounded-lg shadow-lg w-1/2'>
          <div className='flex justify-start border border-black p-8'>
            <div className='h-20 w-20 rounded-full bg-white border'>
              <img src={logo} alt="" />
            </div>
            <div className='py-4 px-8'>
              <h1>Drh. Muhammad Ali</h1>
              <p>Dokter Hewan</p>
            </div>
          </div>

          <div className='py-4'>
            <div className=' border border-black p-8'>
              <div className='flex justify-between w-full p-4'>
                <h4>Biaya Sesi 30 Menit</h4>
                <p>Rp 25.000</p>
              </div>
              <div className='flex justify-between w-full p-4'>
                <h4>Biaya Layanan</h4>
                <p>Rp   2.000</p>
              </div>
              <div className='flex justify-between w-full p-4'>
                <h4>Total Pembayaran</h4>
                <p>Rp 27.000</p>
              </div>
            </div>
          </div>

          <div className='flex justify-between'>
            <div className='w-2/3 h-20 flex items-center justify-start'>
              <form action="" className=' w-full h-auto '>
                <input type="text" className='border border-black rounded-md w-full h-8 p-2 bg-[#D9D9D9] hover:bg-[#bebebe]' placeholder='Masukan  voucer'/>
              </form>
            </div>

            <div className=' flex h-auto w-auto justify-center items-center '>
              <button className='border border-black rounded-md w-full h-8 px-12 bg-[#D9D9D9] hover:bg-[#bebebe]'>Terapkan</button>
            </div>

          </div>

          <div></div>

        </div>
      </div>


    </>
  )
}

export default PopUpKonfirmasi