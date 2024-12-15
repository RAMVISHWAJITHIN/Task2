import React, { useEffect, useState } from "react";
import axios from "axios";

const NudgeList = () => {
  const [nudges, setNudges] = useState([]);

  const fetchNudges = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/nudges");
      setNudges(res.data);
    } catch (err) {
      console.error("Error fetching nudges:", err);
    }
  };

  const deleteNudge = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/nudges/${id}`);
      fetchNudges(); // Refresh list after deletion
    } catch (err) {
      console.error("Error deleting nudge:", err);
    }
  };

  useEffect(() => {
    fetchNudges();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">All Nudges</h2>
      {nudges.length > 0 ? (
        <ul className="space-y-4">
          {nudges.map((nudge) => (
            <li
              key={nudge._id}
              className="border rounded-lg p-4 flex flex-col md:flex-row justify-between items-center"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{nudge.title}</h3>
                <p className="text-gray-600 mb-1">{nudge.description}</p>
                <p className="text-gray-500 text-sm">
                  {nudge.date} at {nudge.time}
                </p>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <img
                  src={nudge.image}
                  alt={nudge.title}
                  className="w-24 h-24 object-cover rounded"
                />
                <button
                  onClick={() => deleteNudge(nudge._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">No nudges available</p>
      )}
    </div>
  );
};

export default NudgeList;
