import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const ProfilDokter = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white-light-2 w-full h-screen flex justify-center items-center">
          <div className="bg-white w-1/3 h-screen p-8">
              <ul>
                <li className="p-2">Profil Saya</li>
                <li className="p-2">Daftar Alamat</li>
                <li className="p-2">Favorit</li>
                <li className="p-2">Pasien</li>
                <li className="p-2">Posting Hewan Saya</li>
              </ul>
          </div>

          <div className="bg-white w-full h-screen p-12">
      <div className="bg-white p-10 rounded-xl w-full h-full shadow-2xl">
        <h1 className="py-4 font-bold text-1xl" > Profil Saya</h1>
            <div classname="flex justify-center items-center w-full bg-red-600 h-auto">
                <div className =" w-[100px] h-[100px] bg-orange-400 rounded-full flex justify-center items-center" >D
              </div> 
              <div>
                <p>Destiya Vinka</p>
                <p>Pengasuh Setia</p>
              </div>
            </div>
    
            
      </div>
    </div>
    </div>
    <Footer/>
  </>
  )
}

export default ProfilDokter
