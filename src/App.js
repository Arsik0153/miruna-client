import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Route path="/"><HomePage/></Route>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
