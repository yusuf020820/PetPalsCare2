import Logo from '../assets/images/logo.png'
const LoginDokterPage = () => {
  return (
    <>
      <div className="container flex justify-center items-center">
        {/* kiri */}
        <div className="w-1/2 h-screen flex justify-center items-center" >

          <div className=" w-full p-20 text-center">
            <div className="text-lg w-auto h-auto font-semibold ">
              <h1 className="" >Masuk Sebagai Dokter Hewan</h1>
              </div>
            <div className="py-4">
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder="@email"/>
            </div>
            <div>
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"placeholder="Kata Sandi"/>
            </div>

            <div className="p-4">
              <button className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold size-1 ">Masuk Sekarang</button>
            </div>
          </div>

        </div>
        {/* end kiri */}

        {/* kanan */}
        <div className="w-1/2 h-screen bg-[#F7DBA7] flex justify-center items-center custom-border-radius">
          <div className=''>
            <div className='h-auto w-full max-w-80 '>
              <img src={Logo} alt="Logo" />
            </div>

            <div className='p-4 flex justify-center items-center'>
            <button className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold ">Masuk Sekarang</button>
            </div>
            <div className='flex justify-center items-center '>
            <a href="#" className='text-[#DE9455] hover: text-[#D68B4B]'>Masuk Sebagai Pemilik</a>
            </div>
          </div>
        </div>
        {/* end kanan */}
      </div>
    </>
  )
}

export default LoginDokterPage
