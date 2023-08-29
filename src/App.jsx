import React from 'react'
import {
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
    Route,
} from 'react-router-dom'
import ErrorPage from './ErrorPage'
// import Root from './routes/Root'
import Landing from './routes/Landing/Landing'
import SignIn from './routes/Auth/SignIn/SignIn'
import SignUp from './routes/Auth/SignUp/SignUp'
import ForgotPassword from './routes/Auth/ForgotPassword/ForgotPassword'
import ResetPassword from './routes/Auth/ResetPassword/ResetPassword'
import Updated from './routes/Auth/Updated/Updated'
import Verification from './routes/Auth/Verification/Verification'
import Dashboard from './routes/Dashboard/Dashboard'

const App = () => {

    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Landing />,
                errorElement: <ErrorPage />
            },
            {
                path: '/sign-up',
                element: <SignUp />,
                errorElement: <ErrorPage />
            },
            {
                path: '/sign-in',
                element: <SignIn />,
                errorElement: <ErrorPage />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />,
                errorElement: <ErrorPage />
            },
            {
                path: '/reset-password',
                element: <ResetPassword />,
                errorElement: <ErrorPage />
            },
            {
                path: '/successfully-updated',
                element: <Updated />,
                errorElement: <ErrorPage />
            },
            {
                path: '/verification',
                element: <Verification />,
                errorElement: <ErrorPage />
            },
            {
                path: '/dashboard',
                element: <Dashboard />,
                errorElement: <ErrorPage />
            },
            {
                path: '/people',
                element: <div>People's page</div>,
                errorElement: <ErrorPage />
            },
            {
                path: '/bills',
                element: <div>Bills Page</div>,
                errorElement: <ErrorPage />
            },
            {
                path: '/transactions',
                element: <div>Transactions Page</div>,
                errorElement: <ErrorPage />
            },
            {
                path: '/news',
                element: <div>News Page</div>,
                errorElement: <ErrorPage />
            },
        ]
    )

    return (
        <RouterProvider router={router} />
    )
}

export default App