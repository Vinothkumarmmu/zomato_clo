import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from '../day82solu/home';
import FilterPage from "./filterpage";
import DetailsPage from "./detailspage";
// import Header from "../day84solu/header";
import RootLayout from "../day84solu/layout";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="filter" element={<FilterPage />} />
            <Route path="details" element={<DetailsPage />} />
        </Route>
    )
);
 function App(){
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    );
 }
export default App;