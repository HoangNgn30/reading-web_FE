import HeaderOnly from '../layouts/HeaderOnly';
import MainDivider from '../components/home/MainDivider';

const publicRoutes = [
    {
        path: '/',
        component: MainDivider,
        layout: HeaderOnly,
    },
];
export { publicRoutes };
