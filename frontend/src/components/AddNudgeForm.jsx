import React, { useState } from "react";
import axios from "axios";

const AddNudgeForm = () => {
  const [nudge, setNudge] = useState({
    title: "",
    description: "",
    eventTag: "",
    scheduleDate: "",
    timings: { from: "", to: "" },
    imageUrl: "",
    icon: "",
    oneLineInvite: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("timings")) {
      const timingsKey = name.split(".")[1];
      setNudge((prevNudge) => ({
        ...prevNudge,
        timings: {
          ...prevNudge.timings,
          [timingsKey]: value,
        },
      }));
    } else {
      setNudge((prevNudge) => ({
        ...prevNudge,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Payload being sent:", nudge);
      const res = await axios.post("http://localhost:3000/api/nudges", nudge);
      console.log("Nudge created:", res.data);

      setNudge({
        title: "",
        description: "",
        eventTag: "",
        scheduleDate: "",
        timings: { from: "", to: "" },
        imageUrl: "",
        icon: "",
        oneLineInvite: "",
      });
    } catch (err) {
      console.error("Error creating nudge:", err.response.data);
      alert(err.response.data.error || "Failed to create nudge");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Create Nudge</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={nudge.title}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Description</label>
          <input
            type="text"
            name="description"
            value={nudge.description}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Event Tag</label>
          <input
            type="text"
            name="eventTag"
            value={nudge.eventTag}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Schedule Date</label>
          <input
            type="date"
            name="scheduleDate"
            value={nudge.scheduleDate}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">From Time</label>
            <input
              type="time"
              name="timings.from"
              value={nudge.timings.from}
              onChange={handleChange}
              required
              className="mt-1 p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">To Time</label>
            <input
              type="time"
              name="timings.to"
              value={nudge.timings.to}
              onChange={handleChange}
              required
              className="mt-1 p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={nudge.imageUrl}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">Icon URL</label>
          <input
            type="text"
            name="icon"
            value={nudge.icon}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium">One Line Invite</label>
          <input
            type="text"
            name="oneLineInvite"
            value={nudge.oneLineInvite}
            onChange={handleChange}
            required
            className="mt-1 p-2 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Nudge
        </button>
      </form>
    </div>
  );
};

export default AddNudgeForm;
