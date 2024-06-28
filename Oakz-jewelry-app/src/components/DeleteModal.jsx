import React, { useState } from "react";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 flex flex-col gap-4 rounded-lg ">
        <h2 className="text-xl font-semibold mb-4">Are you sure you want to remove this item?</h2>
        <div className="flex justify-between">
          <button onClick={onClose} className="px-4 py-2 bg-white border-[1px] border-black rounded-lg w-32">No</button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 border-[1px] text-white rounded-lg w-32">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
