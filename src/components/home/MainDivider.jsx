import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StarBackgound from '../background/StarBackground';

function MainDivider() {
    useEffect(() => {
        const loginSuccess = localStorage.getItem('loginSuccess');
        if (loginSuccess) {
            toast.success('Đăng nhập thành công! 🚀', { autoClose: 1000 });
            localStorage.removeItem('loginSuccess');
        }
    }, []);

    return (
        <div className="w-full">
            <div className="felx flex-col">
                <div className="absolute w-full">
                    <StarBackgound />
                </div>
            </div>
            <ToastContainer position="top-right" />
        </div>
    );
}

export default MainDivider;
