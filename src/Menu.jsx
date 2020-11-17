import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Menu = () => {
    const [menu, setMenu] = useState();

    useEffect(() => {
        axios.get('menu')
            .then(res => {
                setMenu(res.data.rows);
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className="container">
            <div className="menu">
                <h2>Menu</h2>

                <h3 className="menu-group-name">Bar Bites</h3>
                <div className="menu-group">
                    {menu && menu.map(item => (
                        <div className="menu-item" key={item.id}>
                            <img src={item.link} alt="Item"
                                 className="menu-item-img"/>
                            <h5>{item.name}</h5>
                            <p className="description">{item.description}</p>
                            <p className="price">{item.price} ₸</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;
