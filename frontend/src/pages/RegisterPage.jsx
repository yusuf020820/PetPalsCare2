import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import "aos/dist/aos.css";
import AOS from "aos";
import axios from "axios";

const RegisterPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [nama, setNama] = useState("");
  const [no_hp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [usia, setUsia] = useState("");
  const [alamat, setAlamat] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validasi input
    if (!nama || !no_hp || !email || !password || !gender || !usia || !alamat) {
      setError("Semua data harus diisi.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/register", {
        nama,
        no_hp,
        email,
        password,
        gender,
        usia,
        alamat,
      });
      console.log(response.data);
      // Redirect to login page after successful registration
      window.location.href = "/Login-PetPalsCare";
    } catch (error) {
      console.error("There was an error!", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="w-1/2 h-screen bg-[#F7DBA7] flex justify-center items-center custom-border-radius rotate-180"
          data-aos="fade-left"
        >
          <div className="">
            <div className="h-auto w-full max-w-72" data-aos="zoom-in">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div
              className="p-4 flex justify-center items-center"
              data-aos="fade-up"
            >
              <a href="/Login-PetPalsCare">
                <button className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold ">
                  Masuk{" "}
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="w-1/2 h-screen flex justify-center items-center"
          data-aos="fade-right"
        >
          <div className=" w-full p-20 text-center">
            <div className="text-lg w-auto h-auto font-semibold ">
              <h1 className="">Daftar Akun</h1>
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="py-2" data-aos="fade-up">
              <input
                type="text"
                name="nama"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>
            <div className="py-2" data-aos="fade-up">
              <input
                type="text"
                name="noHp"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="No Handphone"
                value={no_hp}
                onChange={(e) => setNoHp(e.target.value)}
              />
            </div>
            <div className="py-2" data-aos="fade-up">
              <input
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="py-2" data-aos="fade-up">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Kata Sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5 text-gray-700"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-gray-700"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825a10.05 10.05 0 01-1.875.175c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 011.875-.175m11.717 4.826a3 3 0 00-4.244-4.244m3.27 2.489A10.07 10.07 0 0112 5c4.478 0 8.268 2.943 9.542 7-.733 2.332-2.03 4.32-3.757 5.689"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="py-2" data-aos="fade-up">
              <select
                name="gender"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled>
                  Jenis Kelamin
                </option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div className="py-2" data-aos="fade-up">
              <input
                type="text"
                name="usia"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Usia"
                value={usia}
                onChange={(e) => setUsia(e.target.value)}
              />
            </div>
            <div className="py-2" data-aos="fade-up">
              <input
                type="text"
                name="alamat"
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Alamat"
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
              />
            </div>
            <div className="p-4" data-aos="fade-up">
              <button
                onClick={handleRegister}
                className=" w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold size-1 "
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
