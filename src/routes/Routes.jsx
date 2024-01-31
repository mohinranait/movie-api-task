import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import SingleMovie from '../pages/SingleMovie/SingleMovie';
import Checkout from '../pages/Checkout/Checkout';
import MyBooking from '../pages/MyBooking/MyBooking';

const myRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element : <Home />
            },
            {
                path: '/movie/:id',
                element : <SingleMovie />
            },
            {
                path: '/checkout/:id',
                element : <Checkout />
            },
            {
                path: '/my-booking',
                element : <MyBooking />
            },
        ]
    }
])

export default myRoutes;