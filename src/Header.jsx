import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="left">
                    <Link to="/" className="logo">
                        Miruna
                    </Link>
                    <Link to="/delivery" className="nav-item">
                        Delivery
                    </Link>
                    <Link to="/contacts" className="nav-item">
                        Contacts
                    </Link>
                </div>
                <div className="right">
                    <div className="contacts">
                        <p>Nur-Sultan</p>
                        <a href="tel:+7(777)-777-77-77">+7(777)-777-77-77</a>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
