import React from 'react';
import '../App.css';
//import PersonalIcon from '../docs/personal-logo-200.png';
import Ethan1 from '../docs/ethan-1.jpg';
import Ethan2 from '../docs/ethan-2.jpg';
import Ethan3 from '../docs/ethan-3.jpg';
import Ethan4 from '../docs/ethan-4.JPEG';


// Security
//https://owasp.org/www-project-web-security-testing-guide/
//https://owasp.org/www-project-zap/

function Home () {
    return (
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
            

                <div id="row">
                    <div className='child'>
                        <img className='img-resize-3' src={Ethan1} alt="prof1"/>
                    </div>
                    <div className='child'>
                        <img className='img-resize-3' src={Ethan2} alt="prof2"/>
                    </div>
                    <div className='child'>
                        <img  className='img-resize-3' src={Ethan3} alt="prof3"/>
                    </div>
                    <div className='child'>
                        <img  className='img-resize-3' src={Ethan4} alt="prof4"/>
                    </div>
                </div>
            </div>
    );
}

export default Home;