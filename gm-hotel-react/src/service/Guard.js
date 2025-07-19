// src/service/Guard.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ApiService from './ApiService'; // Adjust if it's in another folder

export const ProtectedRoute = ({ element }) => {
  const location = useLocation();

  return ApiService.isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export const AdminRoute = ({ element }) => {
  const location = useLocation();

  return ApiService.isAdmin() ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
