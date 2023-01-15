import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from'./Login';
import Registration from "./Registration";
import UserDashboard from "./UserDashboard";

const RouterPage = () =>
{
    return(
        <div>
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/Registration" element = {<Registration />} />
                <Route path = "/userDashboard" element = {<UserDashboard/>}/>
            </Routes>
        </Router>
        </div>
    );
};
export default RouterPage;
