import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from'./Login';
import Registration from "./Registration";

const RouterPage = () =>
{
    return(
        <div>
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/Registration" element = {<Registration />} />
            </Routes>
        </Router>
        </div>
    );
};
export default RouterPage;
