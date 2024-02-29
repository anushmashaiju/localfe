// Scroll.jsx
import React from 'react';
import './scroll.css';

function Scroll({ selectedDistrict }) {
    return (
        <div className="scroll">
            <marquee behavior='scroll' direction='right' className="rolling-booking">
                <h3 className="scrolltext">Welcome to {selectedDistrict || 'Local Connect'}</h3>
            </marquee>
        </div>
    );
}

export default Scroll;



