import React from "react";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./components/layout/AppLayout";
import ProtectedRoute from "./components/guards/ProtectedRoute";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import GameDetails from "./pages/products/components/detailGame/GameDetails";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<GameDetails />} />
          </Route>
          <Route path="*" element={<Navigate to="/users" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
