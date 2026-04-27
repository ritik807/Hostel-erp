import React, { useEffect, useMemo, useState } from "react";
import API from "../services/api";
import Navbar from "../../components/Navbar";

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);

  // 📥 FETCH LOGGED-IN STUDENT
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await API.get("/students/dashboard", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        setStudent(res.data);
      } catch (err) {
        console.log(err?.response?.data || err.message);
      }
    };

    fetchStudent();
  }, []);

  // 🟡 SAFE CALCULATIONS (NO HOOK VIOLATION)
  const paid = useMemo(() => {
    if (!student) return 0;

    return (
      student.installments?.reduce(
        (sum, i) =>
          i.paid ? sum + Number(i.amount || 0) : sum,
        0
      ) || 0
    );
  }, [student]);

  const due = useMemo(() => {
    if (!student) return 0;
    return (student.fees || 0) - paid;
  }, [student, paid]);

  const totalFine = useMemo(() => {
    if (!student) return 0;

    const today = new Date();
    let total = 0;

    student.installments?.forEach((inst) => {
      if (!inst.paid && inst.dueDate) {
        const dueDate = new Date(inst.dueDate);

        if (today > dueDate) {
          const days = Math.floor(
            (today - dueDate) / (1000 * 60 * 60 * 24)
          );

          total += days * (inst.finePerDay || 100);
        }
      }
    });

    return total;
  }, [student]);

  // 🟡 LOADING STATE (hooks safe)
  if (!student) {
    return (
      <div className="p-6 animate-pulse">
        <div className="h-6 bg-gray-300 w-1/3 mb-4 rounded"></div>
        <div className="h-24 bg-gray-300 mb-4 rounded"></div>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="h-20 bg-gray-300 rounded"></div>
          <div className="h-20 bg-gray-300 rounded"></div>
          <div className="h-20 bg-gray-300 rounded"></div>
        </div>
        <div className="h-40 bg-gray-300 rounded"></div>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-100 p-6 transition-all mt-16">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-4">
        Student Dashboard
      </h1>

      {/* BASIC INFO */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <p><b>Name:</b> {student.name}</p>
        <p><b>Room No:</b> {student.roomNo}</p>
        <p><b>Email:</b> {student.email}</p>
        <p><b>Total Fees:</b> ₹{student.fees}</p>
      </div>

      {/* FINANCIAL INFO */}
      <div className="grid grid-cols-3 gap-4 mb-4">

        <div className="bg-white p-4 rounded shadow">
          <p>Paid Fees</p>
          <h2 className="text-green-600 font-bold text-lg">
            ₹{paid}
          </h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p>Due Fees</p>
          <h2 className="text-red-600 font-bold text-lg">
            ₹{due}
          </h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p>Total Fine</p>
          <h2 className="text-red-500 font-bold text-lg">
            ₹{totalFine}
          </h2>
        </div>

      </div>

      {/* INSTALLMENTS */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-3">
          Installments
        </h2>

        {student.installments?.map((inst, i) => {
          const today = new Date();
          const dueDate = new Date(inst.dueDate);

          let fine = 0;

          if (!inst.paid && today > dueDate) {
            const days = Math.floor(
              (today - dueDate) /
              (1000 * 60 * 60 * 24)
            );

            fine = days * (inst.finePerDay || 100);
          }

          return (
            <div
              key={i}
              className="border p-3 mb-2 rounded hover:bg-gray-50 transition"
            >
              <p>💰 Amount: ₹{inst.amount}</p>

              <p>
                📅 Due Date: {inst.dueDate?.slice(0, 10)}
              </p>

              <p>
                Status: {inst.paid ? "✅ Paid" : "❌ Pending"}
              </p>

              {!inst.paid && (
                <p className="text-red-500 font-semibold">
                  Fine: ₹{fine}
                </p>
              )}
            </div>
          );
        })}
      </div>

    </div>
    </>
  );
}