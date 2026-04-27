import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../../components/Navbar";

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await API.get("/students");
        setStudents(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStudents();
  }, []);

  const deleteStudent = async (id) => {
    await API.delete(`/students/${id}`);
    setStudents((prev) => prev.filter((s) => s._id !== id));
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name?.toLowerCase().includes(search.toLowerCase()) ||
      s.roomNo?.includes(search)
  );

  const totalStudents = students.length;

  const totalCollection = students.reduce((sum, s) => {
    const paid =
      s.installments?.reduce(
        (t, i) => (i.paid ? t + Number(i.amount || 0) : t),
        0
      ) || 0;
    return sum + paid;
  }, 0);

  const totalPendingFees = students.reduce((sum, s) => {
    const paid =
      s.installments?.reduce((t, i) => t + Number(i.amount || 0), 0) || 0;
    return sum + (s.fees - paid);
  }, 0);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-3 sm:p-4 md:p-6 mt-16">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-center md:text-left">
          Admin Dashboard
        </h1>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-gray-600">Total Students</p>
          <h2 className="text-lg font-bold">{totalStudents}</h2>
        </div>

        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-gray-600">Total Collection</p>
          <h2 className="text-lg font-bold text-green-600">
            ₹{totalCollection}
          </h2>
        </div>

        <div className="bg-white p-4 rounded shadow text-center">
          <p className="text-gray-600">Pending Fees</p>
          <h2 className="text-lg font-bold text-red-500">
            ₹{totalPendingFees}
          </h2>
        </div>
      </div>

      {/* SEARCH + ADD */}
      <div className="bg-white p-4 rounded shadow mb-4 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => navigate("/admin/addstudent")}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          + Add Student
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white p-2 sm:p-4 rounded shadow overflow-x-auto">
        <table className="w-full min-w-[700px] border text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-2">Name</th>
              <th>Room</th>
              <th>Total</th>
              <th>Paid</th>
              <th>Due</th>
              <th>Fine</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((s) => {
              const paid =
                s.installments?.reduce(
                  (t, i) => (i.paid ? t + Number(i.amount || 0) : t),
                  0
                ) || 0;

              return (
                <tr key={s._id} className="text-center border-t hover:bg-gray-50">
                  <td className="p-2">{s.name}</td>
                  <td>{s.roomNo}</td>
                  <td>₹{s.fees}</td>
                  <td>₹{paid}</td>
                  <td className="text-red-500">₹{s.fees - paid}</td>
                  <td className="text-red-500">₹{s.totalFine || 0}</td>

                  <td className="space-x-1 sm:space-x-2">
                    <button
                      onClick={() => navigate(`/admin/edit/${s._id}`)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs sm:text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteStudent(s._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs sm:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
    </>
  );
}