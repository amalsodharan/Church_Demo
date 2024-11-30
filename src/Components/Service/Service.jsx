import React from 'react'
import './Service.css';

function Service() {
  return (
    <div className='service-main'>
        <div className="service-head">
            <h1>Upcoming Services</h1>
        </div>
        <div className="service-content">
            <div className="service-event">
                <h5 className='d1'>13</h5>
                <h5 className='d2'>July</h5>
                <h5 className='d3'>2024</h5>
            </div>
            <div className="service-detail">
                <div className="detail-head">
                    <h4>Holy Qubono</h4>
                </div>
                <div className="detail-time">
                    <h5>8:30 am - 2:30 pm</h5>
                </div>
                <div className="detail-location">
                    <h5>St. George & St. Anthony Coptic Orthodox Church, 1081 Cadboro Rd Ottawa, Ontario Canada</h5>
                </div>
            </div>
            <div className="service-more">
                <h5>Find out more</h5>
            </div>
        </div>
        <div className="service-button">
            <button className='ser-but'>Church Calender</button>
        </div>
    </div>
  )
}

export default Service
