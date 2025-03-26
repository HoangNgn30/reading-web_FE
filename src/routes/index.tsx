import HeaderOnly from '../layouts/HeaderOnly';
import MainDivider from '../components/home/MainDivider';
import Login from '../components/login/Login';
import Signup from '../components/signup/SignUp';
import ResetPassword from '../components/reset-password/ResetPassword';
import PostStory from '../components/post-story/PostStory';
import React from 'react';
import { Layout } from 'lucide-react';

const publicRoutes = [
    {
        path: '/',
        component: MainDivider,
        layout: HeaderOnly,
    },
    {
        path: '/login',
        component: Login,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    },
    {
        path: '/signup',
        component: Signup,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    },
    {
        path: '/reset-password',
        component: ResetPassword,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    },
];

const protectedRoutes = [
    {
        path: '/add-story',
        component: PostStory,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    }
];

export { publicRoutes, protectedRoutes };
