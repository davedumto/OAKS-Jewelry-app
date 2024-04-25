import React from 'react';
import Necklace from "../../public/images/Popupnecklace.svg"

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  const imageUrl = Necklace;  // Replace with your actual image URL
  const repeatCount = 4;  // Number of times the image should be repeated

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity ease-in-out duration-300 overflow-hidden">
      <div className="bg-white w-[60%] h-[90%] p-4 rounded-lg shadow-xl overflow-auto">
        <div className='text-center flex justify-between'>
          <h1 className='font-[400] mx-auto text-[32px]'>Slim Silver Necklace</h1>
          <button 
            onClick={onClose} 
            className="top-2 right-2 text-[20px] bg-red-600 w-[40px] h-[40px] rounded-full font-[300] p-1 text-white hover:bg-red-700"
          >
            &times;
          </button>
        </div>
        
        <div className="flex justify-between overflow-hidden">
          <div className="flex-col">
            <div className="bg-beige rounded-2xl h-[350px] flex">
              <img src={Necklace} alt="" className='mx-auto'/>
            </div>
            <div className="flex space-x-4 mt-4 mb-4 overflow-hidden">
              {Array.from({ length: repeatCount }, (_, index) => (
                <img key={index} src={imageUrl} alt="Repeated Image" className="w-24 h-24 rounded-md shadow-lg" />
              ))}
            </div>
            <div className='overflow-auto pt-[2rem]'>
              <h1>What you will get</h1>
              <textarea 
                name="input" 
                className='border-solid border rounded-md w-full r bg-slate-100 overflow-hidden p-3 '
                cols="30" 
                rows="10" 
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;