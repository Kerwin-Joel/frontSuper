import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { Nav } from '../components/nav/Nav'
import { Analytics } from '../components/analytics/Analytics';
import { ListClient } from '../components/listClient/ListClient';
import { CreateClient } from '../components/createClient/CreateClient';





export const AppRouter = () => {
    return (
        <Router>
            <Nav /> 
            <div>
                <Routes>
                    <Route exact path="/" element={<h1>hola :v</h1>   } />
                    <Route exact path="/client" element={<CreateClient />} />
                    <Route exact path="/clients" element={<ListClient />} />
                    <Route exact path="/analytics" element={<Analytics />} />
                    <Route path="*" element={ <Navigate to="/" /> } />
                </Routes>
            </div>
        </Router>
    )
}
