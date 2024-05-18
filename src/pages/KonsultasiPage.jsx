import React from 'react';

const posts = [
  {
    id: 1,
    content: 'Welcome to Petpals Care!<br />Hello Destya Vinka! drs.Muhammad Ali will be here with you shortly.<br />Please describe your medical condition',
    bgColor: 'bg-gray-200', // Warna abu-abu untuk chat 1
    height: 'h-auto', // Tinggi kolom chat 1 menyesuaikan isi
    maxWidth: 'max-w-full', // Lebar maksimum kolom chat 1
  },
  {
    id: 2,
    content: 'Selamat siang, Saya drh. Muhammad Ali. Ada yang bisa saya bantu? Jangan lupa untuk memberikan feedback untuk saya di akhir sesi ya.',
    bgColor: 'bg-gray-200', // Warna abu-abu untuk chat 2
    height: 'h-auto', // Tinggi kolom chat 2 menyesuaikan isi
    maxWidth: 'max-w-full', // Lebar maksimum kolom chat 2
  },
  {
    id: 3,
    content: 'Selamat siang dok, Saya ingin berkonsultasi mengenai kucing peliharaan saya',
    bgColor: 'bg-[#FCEED5]', // Warna khusus untuk chat 3
    height: 'h-auto', // Tinggi kolom chat 3 menyesuaikan isi
    maxWidth: 'max-w-full', // Lebar maksimum kolom chat 3
    marginLeft: 'ml-16', // Geser ke samping lebih jauh
  },
];

const Chat = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          {/* Bagian ini dihapus sesuai permintaan */}
        </div>
        <div className="mx-auto mt-10 flex flex-col space-y-4 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.id} className={`p-4 ${post.bgColor} ${post.height} ${post.maxWidth} ${post.id === 3 ? post.marginLeft : ''} rounded-lg`}>
              <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: post.content }}></p>
            </div>
          ))}
          <div className="mt-6 w-full px-4 lg:px-0 flex justify-start"> {/* Mengubah margin atas menjadi mt-6 dan menggunakan flex justify-start */}
            <textarea
              className="w-full p-2 border border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="2"
              placeholder="Tulis Pesan..."
              style={{ resize: 'none' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;