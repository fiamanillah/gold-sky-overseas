import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicePage from '../pages/ServicePage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';
import PhotoGallery from '../pages/PhotoGallery';
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'services',
                element: <ServicePage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'Gallery',
                element: <PhotoGallery />,
            },
        ],
    },
    {
        path: '/404',
        element: <ErrorPage />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default function MainRoutes() {
    return <RouterProvider router={routes} />;
}
