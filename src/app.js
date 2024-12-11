import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css'; // Import the CSS file
import Header  from './components/Header';
import Body from './components/Body';
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import AboutUs  from './components/AboutUs';
import Error from './components/Error';
import Contact from './components/Contact';
import RestuarantMenu from './components/RestuarantMenu';



const AppLayout = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'about',
                element:<AboutUs />
            },
            {
                path:'contact',
                element:<Contact />
            },{
                path:'/resturants/:resId',
                element:<RestuarantMenu />
            }
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
