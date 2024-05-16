import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import logo from "../assets/images/logo.png";
const PostingHewanPage = () => {
  return (
   <>
   <Navbar/>
   <div className="bg-red-light-2 w-full h-screen flex justify-center items-center">

    <div className="bg-white w-1/3 h-screen p-8">
      <ul>
        <li className="p-2">Profil Saya</li>
        <li className="p-2">Daftar Alamat</li>
        <li className="p-2">Favorit</li>
        <li className="p-2">Pesan</li>
        <li className="p-2">Posting Hewan Saya</li>
  </ul>
    </div>
    <div className="bg-white w-full h-screen p-12">
      <div className="bg-white p-4 rounded-xl w-full h-full shadow-2xl">
        <h1 className="p-4"> Postingan Hewan Saya </h1>
        <div className="px-4 py-2 ">
          <button className=" text-white  py-2 px-4 rounded-md bg-[#DE9455]
hover:bg-[#D68B4B]"> + Posting Hewan</button>
        </div>
        <div className="bg-white w-full h-2/3 px-4 ">
        <div className="w-1/3 p-4 h-auto rounded overflow-hidden shadow-lg">
            <div className=" w-auto flex justify-center"><img className="w-2/3"src={logo}/> </div>
            <div>Kucing Lokal</div>
            <p>Nama : Lueien</p>
            <div className=" flex justify- text-xs gap-1">
               <p>Kelamin : Jantan</p> 
               <p>Usia : 8 Bulan</p>
            </div>
            <div className="flex justify-start py-4 gap-5">
              <button className="border border-[#DE9455]
hover:bg-[#D68B4B] p-2 rounded-lg">Ubah Data</button>
              <button className=" bg-[#62c018] p-2 rounded-md text-white">Teradopsi</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default PostingHewanPage
 