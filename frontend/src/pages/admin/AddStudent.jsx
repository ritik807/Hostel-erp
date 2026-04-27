import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from '../services/api'


const AddStudent = () => {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    collegeName: "",
    roomNo: "",
    fees: "",
    installmentCount: 1,
    installments: [],
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setStudent((prev) => {
      let updated = { ...prev, [name]: value };

      // 👉 Installment count change
      if (name === "installmentCount") {
        const count = parseInt(value) || 0;

        updated.installments = Array.from({ length: count }, () => ({
          amount: "",
          dueDate: "",
          paid: false,
          finePerDay: 100,
        }));
      }

      return updated;
    });
  };

  // handle installment field update
  const handleInstallmentChange = (index, field, value) => {
    const updated = [...student.installments];
    updated[index][field] = value;

    setStudent({ ...student, installments: updated });
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/students/submit", student);
    navigate("/admin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-8 relative">

        <button
          onClick={() => navigate("/admin")}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl hover: cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Basic Info */}
          <input name="name" placeholder="Full Name" onChange={handleChange} className="input" />
          <input name="collegeName" placeholder="College Name" onChange={handleChange} className="input" />
          <input name="roomNo" placeholder="Room No" onChange={handleChange} className="input" />
          <input name="fees" type="number" placeholder="Total Fees" onChange={handleChange} className="input" />

          {/* Installment Count */}
          <input
            type="number"
            name="installmentCount"
            placeholder="Number of Installments"
            onChange={handleChange}
            className="input"
            min={1}
          />

          {/* Dynamic Installments */}
          {student.installments.map((inst, index) => (
            <div key={index} className="border p-3 rounded-lg space-y-2">

              <p className="font-semibold">Installment {index + 1}</p>

              {/* Amount */}
              <input
                type="number"
                placeholder="Installment Amount"
                value={inst.amount}
                onChange={(e) =>
                  handleInstallmentChange(index, "amount", e.target.value)
                }
                className="input"
              />

              {/* Due Date */}
              <input
                type="date"
                value={inst.dueDate}
                onChange={(e) =>
                  handleInstallmentChange(index, "dueDate", e.target.value)
                }
                className="input"
              />
            </div>
          ))}

          {/* Email & Password */}
          <input name="email" type="email" placeholder="Email" onChange={handleChange} className="input" />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input" />

          <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;