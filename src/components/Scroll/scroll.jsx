
import React from 'react';
import './scroll.css';

function Scroll({ selectedDistrict }) {
    return (
        <div className="scroll">
            <marquee behavior='scroll' direction='left' className="rolling-booking">
                <h3 className="scrolltext">Welcome to {selectedDistrict || 'Local Connect-select the location to see the posts'}</h3>
            </marquee>
        </div>
    );
}

export default Scroll;



