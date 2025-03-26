import HeaderOnly from '../layouts/HeaderOnly';
import MainDivider from '../components/home/MainDivider';
import Login from '../components/login/Login';
import Signup from '../components/signup/SignUp';
import React from 'react';

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
];

const protectedRoutes = [
    // {
    //     path: '/post-story',
    //     component: PostStory,
    //     layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    // },
    // {
    //     path: '/managed-story',
    //     component: ManagedStories,
    //     layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    // }
];

export { publicRoutes, protectedRoutes };
