import Navbar from "../Components/Navbar-after";
import Footer from '../Components/Footer-after';
import logo from "../assets/images/logo.png";

const data = [
  {
    id: 1,
    JenisHewan: "Kucing Anggora",
    Nama: "Fluffy",
    Kelamin: "Betina",
    Usia: "2 Bulan",
    imageUrl: "https://i.ibb.co.com/ckN3v0F/Angora.png",
  },
  {
    id: 2,
    JenisHewan: "Kelinci Alaska",
    Nama: "Bunny",
    Kelamin: "Betina",
    Usia: "6 Bulan",
    imageUrl: "https://i.ibb.co.com/WDQmvjH/kelinci.png",
  },
  {
    id: 3,
    JenisHewan: "Kucing Persia",
    Nama: "Sassy",
    Kelamin: "Betina",
    Usia: "2 Tahun",
    imageUrl: "https://i.ibb.co.com/K98b2mf/persia.png",
  },
  {
    id: 4,
    JenisHewan: "Kucing Lokal",
    Nama: "(Belum Ada)",
    Kelamin: "Jantan",
    Usia: "2 Bulan",
    imageUrl: "https://i.ibb.co.com/c8kJ9x9/lokal.png",
  },
];

const Card = ({ JenisHewan, Nama, Kelamin, Usia, imageUrl }) => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={Nama} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">
          <h1>{JenisHewan}</h1>
        </div>
        <div className="text-sm">
          <p className="text-[#667479]">Nama: {Nama}</p>
          <div className="text-sm flex justify-between"> 
            <p className="text-[#667479]">Kelamin: <span style={{ marginRight: '5px' }}>{Kelamin}</span></p>
            <p className="text-[#667479]">Usia: {Usia}</p>
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full py-2 bg-[#ED9455] hover:bg-[#f89b59] text-white rounded-lg transition duration-300">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};






const PostingHewanPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start">
        <div className="w-1/3 h-screen p-8">
          <ul>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="/Profil">Profil Saya</a>
            </li>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="/Profil-chat">Pesan</a>
            </li>
            <li className="p-2 hover:bg-gray-400 border-collapse rounded-lg">
              <a href="#">Posting Hewan Saya</a>
            </li>
            <div className="py-4">
              <li className="py-2 px-2 hover:bg-gray-400 border-collapse rounded-lg">
                <a href="http://localhost:5173/">Keluar</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="w-full h-auto p-4">
          <div className="bg-white p-0 rounded-xl w-full h-full shadow-2xl">
            <h1 className="p-4 text-2xl font-bold">Postingan Hewan Saya</h1>
            <div className="px-4 py-2">
              <button className="text-white py-2 px-4 rounded-md bg-[#DE9455] hover:bg-[#D68B4B]">
                <a href="/Upload-hewan">+ Posting Hewan</a>
              </button>
            </div>

            {/* Grid */}
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-auto w-auto">
                {data.map((item) => (
                  <Card
                    key={item.id}
                    Nama={item.Nama}
                    JenisHewan={item.JenisHewan}
                    Kelamin={item.Kelamin}
                    Usia={item.Usia}
                    imageUrl={item.imageUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostingHewanPage;
