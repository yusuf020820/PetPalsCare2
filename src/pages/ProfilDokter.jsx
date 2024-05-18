import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const ProfilDokter = () => {
  return (
    <>
      <Navbar />
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
          <div className="bg-white p-10 rounded-xl w-full h-auto shadow-2xl">
            <h1 className="py-4 font-bold text-1xl" > Profil Saya</h1>
            <div className="flex justify-start items-center gap-4 pt-6">
              <div className=" w-[100px] h-[100px] bg-orange-400 rounded-full flex justify-center items-center" >
                <p>IMG</p>
              </div>

              <div>
                <h1>Drh. Muhammad Ali</h1>
                <p>Dokter Hewan</p>
              </div>
            </div>
            <div classname="flex justify-start gap-8 items-center bg-red w-full" >
              <div>
                <p>Umur</p>
                <p>27</p>
              </div>
              <div className="py-4">
                <p>Jenis Kelamin</p>
                <p>Laki-laki</p>
              </div>

            </div>
            <div className="py-4">
              <p>Nomor Handphone</p>
              <p>+0123456789</p>
            </div>
            <div className="py-4">
              <p>Email</p>
              <p>muhammadAli</p>
            </div>
            <div className="py-4">
              <p>Lulusan</p>
              <p>Pendidikan Profesi Dokter</p>
            </div>
            <div className="py-4">
              <p>Spesialis</p>
              <p>Hewan domestik dan eksotik</p>
            </div>
            <div className="py-4">
              <p>Biaya</p>
              <p>Rp. 25.000,- </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProfilDokter
