import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import { App } from './App.tsx'
import { Projects } from './Projects.tsx';
import { Experiences } from './Experiences.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/experiences",
        element: <Experiences />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <main className="bg-primary h-screen font-default">
            <RouterProvider router={router} />
        </main>
    </React.StrictMode>,
)
