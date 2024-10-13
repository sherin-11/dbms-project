import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import OnlyAdmin from './components/OnlyAdmin';
import AdminBookingsScreen from './screens/AdminBookingsScreen';
import AdminCreateRoomScreen from './screens/AdminCreateRoomScreen';
import AdminEditRoomScreen from './screens/AdminEditRoomScreen';
import AdminEditUserScreen from './screens/AdminEditUserScreen';
import AdminRoomsScreen from './screens/AdminRoomsScreen';
import AdminUsersScreen from './screens/AdminUsersScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MyBookingsScreen from './screens/MyBookingsScreen';
import PasswordScreen from './screens/PasswordScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import RoomDetailsScreen from './screens/RoomDetailsScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="mt-4">
          <Routes>
            <Route index element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/account/profile" element={<ProfileScreen />} />
            <Route path="/account/password" element={<PasswordScreen />} />
            <Route path="/bookings/me" element={<MyBookingsScreen />} />
            <Route path="/admin/rooms" element={<AdminRoomsScreen />} />
            <Route path="/admin/rooms/create" element={<AdminCreateRoomScreen />} />
            <Route path="/admin/rooms/:id/edit" element={<AdminEditRoomScreen />} />
            <Route path="/admin/bookings" element={<AdminBookingsScreen />} />
            <Route path="/admin/users" element={<AdminUsersScreen />} />
            <Route path="/admin/users/:id/edit" element={<AdminEditUserScreen />} />
            <Route path="/room/:id" element={<RoomDetailsScreen />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
