import HeaderOnly from '../layouts/HeaderOnly';
import MainDivider from '../components/home/MainDivider';
import Login from '../components/login/Login';
import React from 'react';
import Signup from '../components/signup/SignUp';
import Profile from '../components/profile/Profile';

const publicRoutes = [
    {
        path: '/',
        component: MainDivider,
        layout: HeaderOnly,
    },
    { path: '/login', component: Login, layout: ({ children }: { children: React.ReactNode }) => <>{children}</> },
    { path: '/signup', component: Signup, layout: ({ children }: { children: React.ReactNode }) => <>{children}</> },
    { path: '/profile', component: Profile, layout: ({ children }: { children: React.ReactNode }) => <>{children}</> },
];
export { publicRoutes };
