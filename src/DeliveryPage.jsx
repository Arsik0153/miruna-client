import React from 'react';

const DeliveryPage = () => {
    return (
        <div className="container">
            <div className="delivery">
                <div>
                    <h1>Delivery</h1>
                    <h3>Delivery terms</h3>
                    <h4>In delivery zone:</h4>
                    <p>Price: 1000 ₸</p>
                    <p>Time: 20-40 minutes</p>
                    <br/>
                    <h4>Out of delivery zone:</h4>
                    <p>Price: 1700 ₸</p>
                    <p>Time: 40-70 minutes</p>
                    <br/>
                    <h3>Delivery time</h3>
                    <p>Weekdays: 09:00 - 19:00</p>
                    <p>Weekends: 10:00 - 18:00</p>
                    <br/>
                    <h3>Minimum order amount</h3>
                    <p>3000 ₸</p>
                </div>
                <div>
                    <iframe title="delivery zone"
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3a3c7a52539b8b069031eba1c04a989e0628d2d355d6728237cc27402abdf3f4&amp;source=constructor"
                        width="500" height="410" frameBorder="0" />
                </div>
            </div>
        </div>
    );
};

export default DeliveryPage;
