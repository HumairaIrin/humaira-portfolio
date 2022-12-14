import React from 'react';
import './Project.css';

const Project = ({ emoji, heading, detail, color }) => {
    return (
        <div className="card" style={{ borderColor: { color } }}>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    );
};

export default Project;