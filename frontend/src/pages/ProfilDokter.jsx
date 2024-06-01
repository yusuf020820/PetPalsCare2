import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar-after";
import Footer from "../Components/Footer-after";

const ProfilDokter = () => {
  const [dokterData, setDokterData] = useState(null);

  useEffect(() => {
    // Ambil data dokter dari localStorage
    const storedDokterData = localStorage.getItem("dokterData");
    if (storedDokterData) {
      setDokterData(JSON.parse(storedDokterData));
    }
  }, []);

  // Fungsi untuk menghapus data dokter dari localStorage
  const handleLogout = () => {
    localStorage.removeItem("dokterData");
    // Redirect ke halaman login
    window.location.href = "http://localhost:5173/";
  };

  return (
    <>
      <Navbar />
      <div className="bg-white-light-2 w-full h-auto flex justify-start container">
        <div className="w-1/3 h-screen p-8">
          <ul>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="/Profil-dokter">Profil Saya</a>
            </li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg">
              <a href="#">Daftar Alamat</a>
            </li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg">
              <a href="#">Favorit</a>
            </li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg">
              <a href="/Chat-dokter">Pasien</a>
            </li>
            <li className="py-2 px-2  hover:bg-gray-400 border-collapse rounded-lg">
              <button onClick={handleLogout}>Keluar</button>
            </li>
          </ul>
        </div>

        <div className="w-full h-auto p-12">
          <div className="bg-white p-10 rounded-xl w-full h-auto shadow-2xl">
            <h1 className="py-4 font-bold text-1xl"> Profil Saya</h1>
            {dokterData && (
              <div className="flex justify-start items-center gap-4 pt-6">
                <div className="w-[100px] h-[100px] bg-orange-400 rounded-full flex justify-center items-center">
                  <p>{dokterData.nama.substring(0, 2)}</p>
                </div>

                <div>
                  <h1>{`Drh. ${dokterData.nama}`}</h1>
                  <p>Dokter Hewan</p>
                </div>
              </div>
            )}
            {dokterData && (
              <div className=" h-1/2 flex justify-start gap-8 items-center  w-full h-auto gap-28">
                <div className="py-4">
                  <p>Umur</p>
                  <p>{dokterData.usia}</p>
                </div>
                <div className="py-4">
                  <p>Jenis Kelamin</p>
                  <p>{dokterData.gender}</p>
                </div>
              </div>
            )}
            {dokterData && (
              <div className="py-4">
                <p>Nomor Handphone</p>
                <p>{dokterData.no_hp}</p>
              </div>
            )}
            {dokterData && (
              <div className="py-4">
                <p>Email</p>
                <p>{dokterData.email}</p>
              </div>
            )}
            {dokterData && (
              <div className="py-4">
                <p>Lulusan</p>
                <p>{dokterData.lulusan}</p>
              </div>
            )}
            {dokterData && (
              <div className="py-4">
                <p>Spesialis</p>
                <p>{dokterData.spesialis}</p>
              </div>
            )}
            <div className="">
              <p>Biaya</p>
              <p>{dokterData.biaya}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilDokter;
