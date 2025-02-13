import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'https://be-aiot-lab-landing-page.onrender.com';

const Profile = () => {
    const navigate = useNavigate();
    const user = {
        id: 1,
        name: 'Nguyen Van A',
        email: 'user@example.com',
        avatar: '',
        position: 'Developer',
    };

    // thay bằng api getProfile

    const handleLogOut = async () => {
        try {
            await axios.post(`${API_BASE_URL}/logout`);
            Cookies.remove('jwt');
            toast.success('Đăng xuất thành công', { autoClose: 1000 });
            setTimeout(() => navigate('/login'), 1000);
        } catch (error) {
            toast.error('Đăng xuất thất bại, hãy thử lại!');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center">
                {user.avatar ? (
                    <img src={user.avatar} alt="Avatar" className="w-24 h-24 rounded-full border" />
                ) : (
                    <FaUserCircle className="text-gray-400 w-24 h-24" />
                )}
                <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-500 mt-2">{user.position}</p>
                <button
                    onClick={handleLogOut}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                    Đăng xuất
                </button>
            </div>
        </div>
    );
};

export default Profile;
