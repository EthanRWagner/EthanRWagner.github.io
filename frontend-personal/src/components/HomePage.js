import React from 'react';
import '../App.css';
import PersonalIcon from '../docs/personal-logo-200.png';

function Home () {

    return (
        <div>
            <div className='content-container'>
                <h1>A short introduction...</h1>
                <p>
                    Howdy! My name is Ethan Wagner. I am an undergraduate student in computer science and biomedical engineering at
                    California Polytechnic State University, San Luis Obispo &#40;Cal Poly&#41;. I am a 4th year student and am 
                    planning on continuing my studies at Cal Poly in a computer science master's program.
                </p>
                <p>
                    At the intersection of computer science and biomedical engineering, I found a dedicated enthusiasm for computational
                    neuroscience. This field brought me to a multitude of studies such as anatomy and physiology, brain computer inferfacing, 
                    graphics, artifical intelligence, and signal processing.
                </p>
            </div>

            <div id="row">
                <div className='child'>
                    <img src={PersonalIcon} alt="Snow"/>
                </div>
                <div className='child'>
                    <img src={PersonalIcon} alt="Forest"/>
                </div>
                <div className='child'>
                    <img src={PersonalIcon} alt="Snow"/>
                </div>
                <div className='child'>
                    <img src={PersonalIcon} alt="Forest"/>
                </div>
            </div>
        </div>
    );
}

export default Home;