import React from 'react';
import Footer from '../Components/Footer-after';
import Navbar from "../Components/Navbar-after";
import DokterCowo from '../assets/images/DokterCewe.png';

const posts = [
  {
    id: 1,
    title: 'Drh. Zahra Salsabila, M.Si',
    href: '#',
    description: 'KEDIRI',
    author: {
      imageUrl: 'https://drive.google.com/uc?id=1oonn5IChr3VGrSBLD2Pg853o18FPEvbu', // Ganti dengan URL gambar yang benar
    },
  },
  // More posts...
];

const Example = () => {
  return (
    <div className="bg-white py-12 sm:py-16"> {/* Mengurangi padding di sini */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between bg-white shadow-lg rounded-lg p-6 w-full">
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-x-6 mt-3 w-full">
                {post.author.imageUrl && (
                  <img src={DokterCowo} alt="" className="h-40 w-40 rounded-full bg-gray-50" />
                )}
                <div className="flex flex-col mt-3 sm:mt-0 w-full">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {/* <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a> */}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">
                  <div style={{ marginBottom: '5px' }}>
                    <span style={{ color: '#564741' }}><strong>Nama:</strong></span> {post.title}
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                    <span style={{ color: '#564741' }}><strong>Region/Wilayah:</strong></span> Kediri
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                    <span style={{ color: '#564741' }}><strong>Lulusan:</strong></span> Pendidikan Profesi Dokter Hewan, Fakultas Kedokteran Hewan, Universitas Udayana, Bali
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                    <span style={{ color: '#564741' }}><strong>Lulusan 2:</strong></span> Biologi Reproduksi, Sekolah Pascasarjana, Institut Pertanian Bogor
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                    <span style={{ color: '#564741' }}><strong>Pengalaman:</strong></span> 5 Tahun
                  </div>
                  <div style={{ marginBottom: '5px' }}>
                    <span style={{ color: '#564741' }}><strong>Spesialis Hewan:</strong></span> Kucing dan Anjing
                  </div>
                </p>
                
                  <div className="mt-5 flex space-x-4">
                    <button className="px-4 py-2 bg-[#ED9455] text-white rounded-lg hover:bg-[#d8854c]">
                      <a href="/Pop-Up-Konfirmasi">Konsultasi</a>
                    </button>
                    <button className="px-4 py-2 bg-[#ED9455] text-white rounded-lg hover:bg-[#d8854c]">Lokasi Praktik</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const DetailDokterCewe = () => {
  return (
    <>
      <Navbar />
      <Example />
      <Footer />
    </>
  );
};

export default DetailDokterCewe;
