import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar-after";
import Footer from "../Components/Footer-after";

const ProfilUserPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Atau bisa juga redirect ke halaman login
  }

  return (
    <>
      <Navbar />
      <div className="bg-white-light-2 w-full h-auto flex justify-start">
        <div className=" w-1/3 h-screen p-8  ">
          <ul>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="/Profil">Profil Saya</a>
            </li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg">
              <a href="#">Daftar Alamat</a>
            </li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg">
              <a href="#">Favorit</a>
            </li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg">
              <a href="#">Pesan</a>
            </li>
            <li className="p-2  hover:bg-gray-400 border-collapse rounded-lg">
              <a href="/Posting-hewan">Posting Hewan Saya</a>
            </li>
            <li className="py-8 px-2">
              {" "}
              <a href="http://localhost:5173/"> Keluar</a>
            </li>
          </ul>
        </div>

        <div className=" w-full h-auto p-12">
          <div className="bg-white p-10 rounded-xl w-full h-auto shadow-2xl">
            <h1 className="py-4 font-bold text-1xl">Profil Saya</h1>
            <div className="flex justify-start items-center gap-4 pt-6">
              <div className=" w-[100px] h-[100px] bg-orange-400 rounded-full flex justify-center items-center">
                <p>{userData.nama[0]}</p>
              </div>

              <div>
                <h1>{userData.nama}</h1>
                <p>Pengasuh Setia</p>
              </div>
            </div>
            <div className="h-1/2 flex justify-start gap-8 items-center  w-full h-auto gap-28">
              <div className="py-4">
                <p>Umur</p>
                <p>{userData.usia} Tahun</p>
              </div>
              <div className="py-4">
                <p>Jenis Kelamin</p>
                <p>{userData.gender}</p>
              </div>
            </div>
            <div className="py-4">
              <p>Nomor Handphone</p>
              <p>{userData.no_hp}</p>
            </div>
            <div className="py-4">
              <p>Email</p>
              <p>{userData.email}</p>
            </div>
            <div className="py-4">
              <p>Alamat</p>
              <p>{userData.alamat}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilUserPage;
