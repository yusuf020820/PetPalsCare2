import React, { useRef, useState } from "react";
import axios from "axios";
import Logo from "../assets/images/logo.png";

const RegisterDokterPage = () => {
  const fileInputRefSTR = useRef(null);
  const fileInputRefSIP = useRef(null);

  const [formData, setFormData] = useState({
    nama: "",
    no_hp: "",
    alamat_praktek: "",
    email: "",
    password: "",
    str_aktif: "",
    sip_aktif: "",
    gender: "",
    usia: "",
    lulusan: "",
    spesialis: "",
    biaya: "",
    pengalaman: "",
  });

  const handleFileUploadSTR = () => {
    fileInputRefSTR.current.click();
  };

  const handleFileUploadSIP = () => {
    fileInputRefSIP.current.click();
  };

  const handleFileChangeSTR = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, str_aktif: file.name });
  };

  const handleFileChangeSIP = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, sip_aktif: file.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/api/dokter/register",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("There was an error registering the doctor!", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        {/* kiri */}
        <div className="w-1/2 h-screen bg-[#F7DBA7] flex justify-center items-center custom-border-radius rotate-180">
          <div>
            <div className="p-4 flex justify-center items-center rotate-180">
              <a href="/Login-dokter">
                <button className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold">
                  Masuk
                </button>
              </a>
            </div>
            <div className="h-auto w-full max-w-72 rotate-180">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>
        {/* end kiri */}

        {/* kanan */}
        <div className="w-1/2 h-auto flex justify-center items-center">
          <div className="w-full p-20 text-center">
            <div className="text-lg w-auto h-auto font-semibold">
              <h1 className="">Daftar Akun Dokter Hewan</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="py-2">
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nama"
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  name="no_hp"
                  value={formData.no_hp}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="No Handphone"
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  name="alamat_praktek"
                  value={formData.alamat_praktek}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Alamat Praktek"
                />
              </div>
              <div className="py-2">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
              </div>
              <div className="py-2">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Kata Sandi"
                />
              </div>
              <div className="py-2">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div className="py-2">
                <input
                  type="number"
                  name="usia"
                  value={formData.usia}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Usia"
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  name="lulusan"
                  value={formData.lulusan}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Lulusan"
                />
              </div>
              <div className="py-2">
                <input
                  type="text"
                  name="spesialis"
                  value={formData.spesialis}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Spesialis"
                />
              </div>
              <div className="py-2">
                <input
                  type="number"
                  name="biaya"
                  value={formData.biaya}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Biaya Konsultasi"
                />
              </div>
              <div className="py-2">
                <input
                  type="number"
                  name="pengalaman"
                  value={formData.pengalaman}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#eee] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Pengalaman (dalam tahun)"
                />
              </div>

              <div className="text-left py-2">
                <p className="font-medium">Upload STR Aktif</p>
                <div className="mt-2">
                  <input
                    ref={fileInputRefSTR}
                    type="file"
                    id="file-upload-str"
                    className="hidden"
                    onChange={handleFileChangeSTR}
                  />
                  <button
                    type="button"
                    className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-6 rounded-full font-semibold size-1 flex items-center justify-center"
                    onClick={handleFileUploadSTR}
                  >
                    <i className="fa fa-upload mr-2"></i>
                    <span>Upload File</span>
                  </button>
                </div>
              </div>

              <div className="text-left py-2">
                <p className="font-medium">Upload SIP Aktif</p>
                <div className="mt-2">
                  <input
                    ref={fileInputRefSIP}
                    type="file"
                    id="file-upload-sip"
                    className="hidden"
                    onChange={handleFileChangeSIP}
                  />
                  <button
                    type="button"
                    className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-6 rounded-full font-semibold size-1 flex items-center justify-center"
                    onClick={handleFileUploadSIP}
                  >
                    <i className="fa fa-upload mr-2"></i>
                    <span>Upload File</span>
                  </button>
                </div>
              </div>

              <div className="p-4">
                <button
                  type="submit"
                  className="w-auto h-auto bg-[#DE9455] hover:bg-[#D68B4B] text-white font-bold py-2 px-16 rounded-full font-semibold size-1"
                >
                  Daftar Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* end kanan */}
      </div>
    </>
  );
};

export default RegisterDokterPage;
