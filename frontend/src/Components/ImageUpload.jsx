import React, { useState } from "react";

const ImageUpload = ({ userId, onImageUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("foto", selectedFile);
      formData.append("userId", userId);
      onImageUpload(selectedFile); // Mengupdate preview gambar tanpa perlu menunggu response dari server
      // Panggil fungsi untuk mengirim data ke server
      // (handleFotoUpdate pada ProfilUserPage akan memanggil API untuk menyimpan foto ke server)
    } else {
      console.error("No file selected!");
    }
  };

  return (
    <div className="mt-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ImageUpload;
