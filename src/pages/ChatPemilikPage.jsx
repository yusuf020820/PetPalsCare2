import React from 'react';
import { FaMapMarkerAlt, FaClock, FaHandshake } from 'react-icons/fa';

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
      <div className={`max-w-xs p-4 rounded-lg shadow-md ${isUser ? 'bg-yellow-100' : 'bg-gray-100'}`}>
        <p>{message}</p>
        <p className="text-xs text-gray-500 text-right">{time}</p>
      </div>
    </div>
  );
};

const ChatPemilikPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h2 className="text-lg font-bold mb-2">Welcome to PetPals Care!</h2>
          <div className="flex items-center mb-2">
            <img src="https://via.placeholder.com/50" alt="Shiba Inu" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <h3 className="font-bold text-lg">Chat with Pet Owner</h3>
              <div className="flex items-center text-sm text-gray-600">
                <FaMapMarkerAlt className="mr-1" /> Location: Jl. Dhoho
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaClock className="mr-1" /> Available: 12:30 - 18:00
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <FaHandshake className="mr-1" /> Status: Ready to meet
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 space-y-4">
          {chatData.map((chat) => (
            <ChatMessage key={chat.id} sender={chat.sender} message={chat.message} time={chat.time} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPemilikPage;
