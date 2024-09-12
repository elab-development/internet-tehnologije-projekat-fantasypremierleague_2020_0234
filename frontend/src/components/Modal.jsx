import React, {useState} from 'react';
import axiosService from "../utils/axiosService.js";
import {toast} from "react-toastify";

function SimpleModal ({ isOpen, toggleModal, id }) {
    const [role, setRole] = useState(1);

  if (!isOpen) return null;

  const setUserRole = function (e) {
      setRole(e.target.value)
  }
  const saveRole = async function (e) {
      try{
          const response = await axiosService.patch('/dashboard/users/' + id, {
              role_id: role,
          })
          toast.success('Successfully updated.')

      }catch (e) {
          toast.error('Something went wrong, please try again')
      }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
        <div
            className="bg-white rounded-lg p-6 w-80 shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicking inside
        >
            <h2 className="text-xl font-semibold mb-4">Roles</h2>
            <p className="mb-4"></p>
            <select onChange={setUserRole} className="mt-[5px]" name="1">
                <option value="">--Select a role--</option>
                <option value="1">User</option>
                <option value="2">Moderator</option>
                <option value="3">Admin</option>
            </select>
            <div className="mt-[20px]">
                <button
                    onClick={toggleModal}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                >
                    Close
                </button>
                <button
                    onClick={saveRole}
                    className="px-4 py-2 ml-[10px] text-white bg-blue-500 rounded hover:bg-red-600"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
  );
};

export default SimpleModal;
