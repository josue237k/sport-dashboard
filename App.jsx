import React from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext.jsx';
import { DataProvider } from './contexts/DataContext.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Athletes from './pages/Athletes.jsx';
import Sports from './pages/Sports.jsx';
import Specialities from './pages/Specialities.jsx';
import UsersPage from './pages/Users.jsx';

import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

const DashboardLayout = () => (
  <div className="main-wrapper d-flex">
    <Sidebar />
    <div className="flex-grow-1 min-vh-100 d-flex flex-column">
      <Header />
      <main className="content-area flex-grow-1 p-4">
        <Outlet />
      </main>
    </div>
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <AuthProvider>
          <HashRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<PrivateRoute />}>
                <Route element={<DashboardLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/athletes" element={<Athletes />} />
                  <Route path="/sports" element={<Sports />} />
                  <Route path="/specialities" element={<Specialities />} />
                  <Route path="/users" element={<UsersPage />} />
                </Route>
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </HashRouter>
        </AuthProvider>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;