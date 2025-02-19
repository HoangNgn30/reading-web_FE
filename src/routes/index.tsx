import HeaderOnly from '../layouts/HeaderOnly';
import MainDivider from '../components/home/MainDivider';
import Login from '../components/login/Login';
import React from 'react';
import Signup from '../components/signup/SignUp';
import Profile from '../components/profile/Profile';
import Admin from '../components/admin/Admin';
import ManageIntroductions from '../components/admin/manage-intro/page';
import ManageMembers from '../components/admin/manage-members/page';
import ManageUsers from '../components/admin/manage-users/page';

const publicRoutes = [
    {
        path: '/',
        component: MainDivider,
        layout: HeaderOnly,
    },
    { path: '/login', component: Login, layout: ({ children }: { children: React.ReactNode }) => <>{children}</> },
    { path: '/signup', component: Signup, layout: ({ children }: { children: React.ReactNode }) => <>{children}</> },
    { path: '/profile', component: Profile, layout: ({ children }: { children: React.ReactNode }) => <>{children}</> },
    { path: '/admin', component: Admin, layout: ({ children }: { children: React.ReactNode }) => <>{children}</> },
    {
        path: '/admin/manage-users',
        component: ManageUsers,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    },
    {
        path: '/admin/manage-introductions',
        component: ManageIntroductions,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    },
    {
        path: '/admin/manage-members',
        component: ManageMembers,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    },
];
export { publicRoutes };
