import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Root from './routes/Root'
import FrontPage from './routes/FrontPage/FrontPage'
import SignIn from './routes/Auth/SignIn/SignIn'
import SignUp from './routes/Auth/SignUp/SignUp'
import ForgotPassword from './routes/Auth/ForgotPassword/ForgotPassword'
import ResetPassword from './routes/Auth/ResetPassword/ResetPassword'
import Updated from './routes/Auth/Updated/Updated'
import Verification from './routes/Auth/Verification/Verification'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <FrontPage/>,
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
      path: '/home',
      element: <div>Home Page</div>,
      errorElement: <ErrorPage />
    },
  ]
)


// createRoutesFromElements(
//   <Route
//     path='/'
//     element={<Root />}
//     errorElement={<ErrorPage />}
//   >
//     <Route errorElement={<ErrorPage />}>
//       <Route index element={<FrontPage />} />
//       <Route 
//         path='auth/sign-in'
//         element={<SignIn />}
//       />
//       <Route 
//         path='auth/sign-up'
//         element={<SignUp />}
//       />
//     </Route>
//   </Route>
// )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
