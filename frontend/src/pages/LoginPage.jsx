import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios"; // tambahkan axios

const LoginPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", {
        email,
        password,
      });
      console.log(response.data);
      if (response.data.message === "Login successful") {
        // Redirect to the homepage or perform other actions
        window.location.href = "/Beranda";
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("There was an error!", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {/* kiri */}
        <div
          className="w-1/2 h-screen flex justify-center items-center"
          data-aos="fade-right"
        >
          <div className=" w-full p-20 text-center">
            <div className="text-lg w-auto h-auto font-semibold ">
              <h1 className="">Masuk Akun PetPals Care</h1>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="py-4">
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="p-4">
              <button
                onClick={handleLogin}
                className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold size-1 "
              >
                Masuk Sekarang
              </button>
            </div>
          </div>
        </div>
        {/* end kiri */}

        {/* kanan */}
        <div
          className="w-1/2 h-screen bg-[#F7DBA7] flex justify-center items-center custom-border-radius"
          data-aos="fade-left"
        >
          <div className="">
            <div className="h-auto w-full max-w-72">
              <a href="/" data-aos="zoom-in">
                <img src={Logo} alt="Logo" />
              </a>
            </div>

            <div
              className="p-4 flex justify-center items-center"
              data-aos="fade-up"
            >
              <a href="/Daftar-PetPalsCare">
                <button className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold ">
                  Daftar
                </button>
              </a>
            </div>
            <div
              className="flex justify-center items-center "
              data-aos="fade-up"
            >
              <a href="/Login-dokter" className="text-[#777]">
                Masuk Sebagai Dokter Hewan
              </a>
            </div>
          </div>
        </div>
        {/* end kanan */}
      </div>
    </>
  );
};

export default LoginPage;
