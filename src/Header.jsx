import React from 'react';

const Header = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="left">
                    <div className="logo">
                        Miruna
                    </div>
                    <a href="#" className="nav-item">
                        Delivery
                    </a>
                    <a href="#" className="nav-item">
                        Contacts
                    </a>
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
