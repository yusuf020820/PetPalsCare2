import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import logo from "../assets/images/logo.png";

const data = [
  { id: 1, name: 'Maria', description: 'Maria Asal Kepri', imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Item 2', description: 'Deskripsi item 2', imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Item 3', description: 'Deskripsi item 3', imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Item 4', description: 'Deskripsi item 4', imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Item 5', description: 'Deskripsi item 5', imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Item 5', description: 'Deskripsi item 5', imageUrl: 'https://via.placeholder.com/150' },
  // Tambahkan data lainnya
];

// Komponen Card
const Card = ({ name, description, imageUrl }) => {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};
const PostingHewanPage = () => {
  return (
    <>
      <Navbar />
      <div className=" flex justify-center items-center ">

        <div className="w-1/3 h-screen p-8">
          <ul>
            <li className="p-2">Profil Saya</li>
            <li className="p-2">Daftar Alamat</li>
            <li className="p-2">Favorit</li>
            <li className="p-2">Pesan</li>
            <li className="p-2">Posting Hewan Saya</li>
          </ul>
        </div>
        <div className=" w-full h-screen p-12">
          <div className="bg-white p-4 rounded-xl w-full h-full shadow-2xl">
            <h1 className="p-4"> Postingan Hewan Saya </h1>
            <div className="px-4 py-2 ">
              <button className=" text-white  py-2 px-4 rounded-md bg-[#DE9455]
hover:bg-[#D68B4B]"> + Posting Hewan</button>
            </div>
              {/* Grid */}
            <div className="container mx-auto p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((item) => (
                  <Card key={item.id} name={item.name} description={item.description} imageUrl={item.imageUrl} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PostingHewanPage
