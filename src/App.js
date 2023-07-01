
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home.jsx';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import Orders from './components/Orders.jsx'
import Blogs from './components/Blogs.jsx'
import { useSelector } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


function App() {
  const { isAuthenticated } = useSelector((state) => state.root);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

       {/* this using childern route */}
        {/* <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        /> */}
        {/* 
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myorders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyOrders />
            </ProtectedRoute>
          }
        /> */}

        {/* <Route
          path="/myblog"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyBlog />
            </ProtectedRoute>
          }
        /> */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/myorders' element={<Orders />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
