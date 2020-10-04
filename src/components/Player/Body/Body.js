import React from 'react';
import './Body.css'
import Header from "./Header/Header";

const Body = ({spotify}) => {
    return (
        <div className="body">
            <Header spotify = {spotify}/>
            <div className="body__info">
                {<img src="https://i.scdn.co/image/ab67616d00001e02c380c82f7dfca69200a92dc2" alt=""/>}
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description...</p>
                </div>
            </div>
        </div>
    );
};

export default Body;