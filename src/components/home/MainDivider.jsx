import React, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Activity from '../activity/Activity';
import StarBackgound from '../background/StarBackground';
import Contact from '../contact/Contact';
import Introduce from '../introduce/Introduce';
import MainContent from '../main-content/MainContent';

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
                <MainContent></MainContent>
                <div className="absolute w-full">
                    <Introduce />
                    <StarBackgound />
                    <Contact />
                </div>
            </div>
            <ToastContainer position="top-right" />
        </div>
    );
}

export default MainDivider;