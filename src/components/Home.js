import React from 'react';
import {Route, Routes} from "react-router-dom";
import Woman from "../pages/Woman";


// import logo4 from "../Cards/unsplash_xXJ6utyoSw0.png"
//  import {Link,Routes, Route} from "react-router-dom";
// import Woman from "./Woman";
// import Man from "../Cards/Man";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Routes>
                <Route path="woman" element={<Woman/>}/>
            </Routes>
        </div>
    );
};

export default Home;