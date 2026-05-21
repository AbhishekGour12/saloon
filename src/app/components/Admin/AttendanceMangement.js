"use client"
import { authAPI } from "@/app/lib/auth";
import { studentAPI } from "@/app/lib/student";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AttendanceManagement({attendance}) {
  console.log(attendance)
const [searchName, setSearchName] = useState("");
const [searchClass, setSearchClass] = useState("");
const [searchDate, setSearchDate] = useState("");


  
// FILTERED DATA
const filteredAttendance = attendance?.filter((record) => {
  const name = record?.name || "";
  const grade = record?.grade || "";
  const date = record?.date || "";

  return (
    name.toLowerCase().includes(searchName.toLowerCase()) &&
    grade.toLowerCase().includes(searchClass.toLowerCase()) &&
    (searchDate === "" ||
      new Date(date).toLocaleDateString("en-CA") === searchDate)
  );
});

   

   
  return (
    <motion.div
      key="attendance"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Attendance Records</h1>
        <p className="text-gray-600">Track student attendance and punctuality</p>
      </div>
      {/* FILTERS */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
  {/* Search Name */}
  <input
    type="text"
    placeholder="Search by Student Name"
    value={searchName}
    onChange={(e) => setSearchName(e.target.value)}
    className="px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400"
  />

  {/* Search Class */}
  <input
    type="text"
    placeholder="Search by Class"
    value={searchClass}
    onChange={(e) => setSearchClass(e.target.value)}
    className="px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400"
  />

  {/* Filter by Date */}
  <input
    type="date"
    value={searchDate}
    onChange={(e) => setSearchDate(e.target.value)}
    className="px-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400"
  />
</div>

      
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Student Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Class</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
             { filteredAttendance?.length > 0 && filteredAttendance.map((record, index) => (

                <motion.tr
                  key={record._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-purple-50/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(record.date).toLocaleDateString("en-CA")}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  {new Date(record.date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}
</td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      record.status === "Present" 
                        ? "bg-green-100 text-green-800" 
                        : record.status === "Late"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                      {record.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}