import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./components/Rooms";
import Facilities from "./components/Facilities";
import Contact from "./components/Contact";
import Login from "./pages/Login";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AddStudent from "./pages/admin/AddStudent";
import EditStudent from "./pages/admin/EditStudent";

import StudentDashboard from "./pages/student/StudentDashboard";

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Routes>

      {/* PUBLIC ROUTES */}
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/facility" element={<Facilities />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      {/* 🔒 ADMIN ROUTES */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/addstudent"
        element={
          <ProtectedRoute allowedRole="admin">
            <AddStudent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/edit/:id"
        element={
          <ProtectedRoute allowedRole="admin">
            <EditStudent />
          </ProtectedRoute>
        }
      />

      {/* 🔒 STUDENT ROUTE */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRole="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
};

export default App;