import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import tableImg from './img/tables.jpg';
import axios from 'axios';

const Booking = () => {
    const [ startDate, setStartDate ] = useState(new Date());
    const [ step, setStep ] = useState(0);
    const [ fname, setFName ] = useState('');
    const [ lname, setLName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ tel, setTel ] = useState('');
    const [ tableNumber, setTableNumber ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            customer_fname: fname,
            customer_lname: lname,
            customer_email: email,
            customer_phone_no: tel,
            date_booked: new Date(),
            date_booked_for: startDate,
            table_number: tableNumber
        };

        axios.post('bookings/', data)
            .then(res => {
                setStep(2);
            })
            .catch(err => {
                alert('Error');
                console.log(err);
            })

    }

    const nextStep = (step) => {
        if (step === 1) {
            if (tableNumber < 1 || tableNumber > 12) {
            } else {
                setStep(step);
            }
        }
    }

    return (
        <div className="container booking-container">
            <form className="booking" onSubmit={e => handleSubmit(e)}>
                <h2>Make a reservation</h2>
                {step === 0 && (
                    <>
                        <label>Select date and time</label>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="dd.MM.yyyy HH:mm"
                            minDate={new Date()}
                        />
                        <label>Select table</label>
                        <img src={tableImg} alt="Tables"/>
                        <input type="number" placeholder="1" min="1" max="12" value={tableNumber}
                               onChange={e => setTableNumber(e.target.value)}/>
                        <button className="submit" onClick={() => nextStep(1)}>Next</button>
                    </>
                )}
                {step === 1 && (
                    <>
                        <label>Name</label>
                        <input type="text" placeholder="First name" value={fname}
                               onChange={e => setFName(e.target.value)} required/>
                        <input type="text" placeholder="Last name" value={lname}
                               onChange={e => setLName(e.target.value)} required/>
                        <label>E-mail</label>
                        <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}
                               required/>
                        <label>Phone</label>
                        <input type="tel" placeholder="+7(777)-777-77-77" value={tel}
                               onChange={e => setTel(e.target.value)} required/>
                        <button className="submit" type="submit">Submit</button>
                    </>
                )}
                {step === 2 && (
                    <p className="success">Thanks for booking!</p>
                )}
            </form>
        </div>
    );
};

export default Booking;
