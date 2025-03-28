import HeaderOnly from '../layouts/HeaderOnly';
import MainDivider from '../components/home/MainDivider';
import Login from '../components/login/Login';
import Signup from '../components/signup/SignUp';
import ResetPassword from '../components/reset-password/ResetPassword';
import PostStory from '../components/story/PostStory';
import UpdateStory from '../components/story/UpdateStory';
import React from 'react';
import ManagedStories from '../components/story/ManagedStories';
import StoryInfo from '../components/story/StoryInfo';
import Categories from '../components/features/Categories';
import Followed from '../components/features/Followed';
import History from '../components/features/History';
import Books from '../components/features/Books';
import Profile from '../components/auth/Profile';     

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
    {
        path: '/story/:id',
        component: StoryInfo,
        layout: ({ children }) => <>{children}</>,
    },
    {
        path: '/categories',
        component: Categories,
        layout: HeaderOnly,
    },
    {
        path: '/followed',
        component: Followed,
        layout: HeaderOnly,
    },
    {
        path: '/history',
        component: History,
        layout: HeaderOnly,
    },
    {
        path: '/books',
        component: Books,
        layout: HeaderOnly,
    },
    {
        path: '/profile',
        component: Profile,
        layout: HeaderOnly,
    },
];

const protectedRoutes = [
    {
        path: '/add-story',
        component: PostStory,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    },
    {
        path: `/update-story/:storyId`,
        component: UpdateStory,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    },
    {
        path: '/managed-story',
        component: ManagedStories,
        layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    }
];

export { publicRoutes, protectedRoutes };
