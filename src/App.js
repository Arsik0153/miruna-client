import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Footer from "./Footer";
import DeliveryPage from "./DeliveryPage";
import ContactPage from "./ContactPage";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="wrapper">
                    <Header/>
                    <Route exact path="/delivery"><DeliveryPage/></Route>
                    <Route exact path="/contacts"><ContactPage/></Route>
                    <Route exact path="/"><HomePage/></Route>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
