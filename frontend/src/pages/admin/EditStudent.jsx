import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    collegeName: "",
    roomNo: "",
    fees: "",
    installments: [],
  });

  // 📥 FETCH SINGLE STUDENT
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await API.get(`/students/${id}`);
        setStudent(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStudent();
  }, [id]);

  // ✏️ BASIC FIELD CHANGE
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  // 🔄 INSTALLMENT CHANGE
  const handleInstallmentChange = (index, field, value) => {
    const updated = [...student.installments];
    updated[index][field] = value;

    setStudent({ ...student, installments: updated });
  };

  // 🚀 UPDATE API
  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.put(`/students/${id}`, student);

    navigate("/admin");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">

      <h2 className="text-2xl font-bold mb-4">Edit Student</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* BASIC INFO */}
        <input
          name="name"
          value={student.name || ""}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full"
        />

        <input
          name="collegeName"
          value={student.collegeName || ""}
          onChange={handleChange}
          placeholder="College"
          className="border p-2 w-full"
        />

        <input
          name="roomNo"
          value={student.roomNo || ""}
          onChange={handleChange}
          placeholder="Room No"
          className="border p-2 w-full"
        />

        <input
          type="number"
          name="fees"
          value={student.fees || ""}
          onChange={handleChange}
          placeholder="Fees"
          className="border p-2 w-full"
        />

        {/* INSTALLMENTS */}
        <div>
          <h3 className="font-bold">Installments</h3>

          {student.installments?.map((inst, index) => (
            <div key={index} className="border p-2 mt-2 rounded">

              <p>Installment {index + 1}</p>

              <input
                type="number"
                value={inst.amount}
                onChange={(e) =>
                  handleInstallmentChange(index, "amount", e.target.value)
                }
                placeholder="Amount"
                className="border p-1 w-full"
              />

              <input
                type="date"
                value={inst.dueDate?.slice(0, 10)}
                onChange={(e) =>
                  handleInstallmentChange(index, "dueDate", e.target.value)
                }
                className="border p-1 w-full mt-1"
              />

              {/* PAID TOGGLE */}
              <label className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={inst.paid}
                  onChange={(e) =>
                    handleInstallmentChange(index, "paid", e.target.checked)
                  }
                />
                Paid
              </label>

            </div>
          ))}
        </div>

        <button className="bg-green-500 text-white px-4 py-2">
          Update Student
        </button>

      </form>
    </div>
  );
}