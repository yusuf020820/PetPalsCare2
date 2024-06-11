import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Wira from '../assets/images/Wira.png';

const chatData = [
  { id: 1, sender: 'user', message: 'Selamat siang bang, saya berminat untuk adopsi anjing nya', time: '12:25' },
  { id: 2, sender: 'owner', message: 'Selamat siang juga banh, Booleeeeh!', time: '12:30' },
  { id: 3, sender: 'user', message: 'COD mana bang?', time: '12:32' },
  { id: 4, sender: 'owner', message: 'Di Jl. Dhoho ya, jembatan 2 bang dekat tambal ban👌', time: '12:34' },
  { id: 5, sender: 'user', message: 'Boleh minta serlok gak bang?', time: '12:36' },
  { id: 6, sender: 'owner', message: 'Sorry banh ketiduran tadi😅', time: '17:27' },
  { id: 7, sender: 'user', message: 'Walahh, yaudah OTW Abis isya aja bang🕶', time: '17:32' },
  { id: 8, sender: 'owner', message: 'Oke bang hati-hati👍', time: '17:36' },
  { id: 9, sender: 'user', message: 'Siap🐕 Meluncur abangku🔥🔥🔥', time: '18:12' }
];

const ChatMessage = ({ sender, message, time }) => {
  const isUser = sender === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-2xl p-4 rounded-lg shadow-md ${isUser ? 'bg-[#fdf5e6]' : 'bg-[#f5f5f5]'}`}>
        <p>{message}</p>
        <p className="text-xs text-gray-500 text-right">{time}</p>
      </div>
    </div>
  );
};

const ChatPemilikPage = () => {
  const [messages, setMessages] = useState(chatData);
  const [newMessage, setNewMessage] = useState('');
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const navigate = useNavigate();

  const handleSendMessage = () => {
    if (newMessage.trim() !== '' || uploadedPhoto) {
      const newChat = {
        id: messages.length + 1,
        sender: 'user',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        photo: uploadedPhoto
      };
      setMessages([...messages, newChat]);
      setNewMessage('');
      setUploadedPhoto(null); // Reset uploaded photo after sending message
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelesaiClick = () => {
    navigate('/adopsi');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-md flex flex-col">
        <div className="flex items-center p-6 border-b">
          <img src={Wira} alt="Dr. Muhammad Ali" className="w-16 h-16 rounded-full mr-4" />
          <div className="flex-1">
            <h2 className="text-xl font-bold">Wira Wicaksana</h2>
            <p className="text-md text-gray-500">Online</p>
          </div>
          <button className="text-orange-500 font-semibold" onClick={handleSelesaiClick}>Selesai</button>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="mb-4">
            <p className="text-gray-500">Welcome to PetPals Care!</p>
          </div>
          {messages.map((chat) => (
            <ChatMessage key={chat.id} sender={chat.sender} message={chat.message} time={chat.time} />
          ))}
        </div>
        <div className="p-6 border-t flex items-center">
          <input
            type="text"
            className="flex-1 p-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#ED9455] focus:border-transparent"
            placeholder="Tulis Pesan..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="ml-2 px-4 py-2 bg-[#ED9455] text-white rounded-full focus:outline-none"
            onClick={handleSendMessage}
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPemilikPage;
