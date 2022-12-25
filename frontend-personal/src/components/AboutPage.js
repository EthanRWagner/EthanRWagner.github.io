import React from 'react';
import '../App.css';
import PC from '../docs/PC.jpg';
import keyboard1 from '../docs/keyboard-1.jpg';
import keyboard2 from '../docs/keyboard-2.jpg';

function About () {

    return (
        <div className='content-container'>
            <h1>University Life</h1>
            <p>
                I was admitted to Cal Poly SLO in 2019 as a general engineering major, originally wanting to pursue alternative energy engineering.
                After being inspired by science fiction, the daunting chanllenge of coding, and public presentation from brain-computer interfacing 
                &#40;BCI&#41; companies, I switched my major to computer engineering in the Winter of 2020. To approach my interest in brain-computer
                interfacing, I tacked on biomedical engineering as a second major in my undergraduate studies. For the purpose of becoming better at
                developing software I changed my computer engineering studies to computer science. My computer science studies are general in concentration
                but tailored towards a hybrid of artifical intelligence, game design, and graphics. My biomedical engineering studies are concentrated in 
                bioinstrumentation, which involves circuit analysis, signal analysis, and biomedical imaging. Together, these majors have provided me a well-rounded 
                skillset in biomaterials, biomechanics, transport phenomena, signal analysis, artifical intelligence, algorithm design, theory of computation,
                and digital design/computer architecture.
            </p>
            <p>
                I have recieved twelve &#40;12&#41; dean's list awards &#8212; achieving a 3.5 GPA or above in a quarter &#8212; and three &#40;3&#41; president's 
                list awards &#8212; achieving three &#40;3&#41; dean's list awards in an academic award. Cumulatively, I have retained a 3.69 GPA. I have an expected 
                undergraduate graduation date of December 2023.
            </p>
            <p>
                In Fall 2022, I was accepted in the BS + MS Blended Master's Program at Cal Poly in computer science. This will extend my stay at Cal Poly for a maximum 
                of two years, with an expected graduation date of June 2025. My thesis topic is to research and construct a computational model for vision, simulate the 
                processing and perception of light and images, and induce a high&#8211;resolution phosphene image in an organism&#39;s visual field through electrical stimulation.
                &nbsp;<a href='https://www.mugizirwebangira.com/' target='_blank' rel='noreferrer noopener'>Dr. Mugizi Rwebangira</a> is my advisor in the master's program.
            </p>
            <h1>Personal Life</h1>
            <p>
                Outside of my studies, I train Brazillian jiu jitsu &#40;almost&#41; everyday at Paragon. I started training January 9th, 2021 and am currently a white belt. 
                I have competed at JJWL Fullerton &#40;208lb weight class&#41; placing 2nd in no gi, JJWL San Diego &#40;208lb weight class&#41; placing 1st overall in gi and 
                3rd in no-gi, and JJWL Phoenix &#40;208lb weight class&#41; placing 1st in gi and 1st in no-gi. I also lift weights to supplement my strength for jiu jitsu. Of
                course to supplement all this physical activity, I have been experimenting with nutrition and cooking since I was a freshman in high school. I am a big fan of 
                listening to podcasts in the background of lifting, walking from place to place, or doing more passive activities. 
            </p>
            <p>
                My video game of choice is Valorant by Riot 
                Games, I am ranked Platinum III. To run this game smoothly and out of my own desire for computers and electronics, I built my own PC and mechanical keyboard 
                in March of 2021. My PC has the following specifications:
                <br></br>
                <a href='https://www.newegg.com/tools/custom-pc-builder/showcase/Ethan-s-Personal-Computer/ID-27332336?gid=27332336' 
                        target='_blank' rel='noreferrer noopener'>Link to my PC build</a>
                <ul>
                    <li>
                        CPU: AMD Ryzen 7 5800X
                    </li>
                    <li>
                        GPU: ASUS Dual GeForce NVIDIA RTX 3060 12 GB
                    </li>
                    <li>
                        Motherboard: ASUS ROG Strix B550-F Gaming &#40;WiFi 6&#41; AMD AM4 &#40;3rd Gen Ryzen&#41; ATX Gaming Motherboard
                    </li>
                    <li>
                        Memory: G.SKILL Trident Z RGB 32GB RAM DDR4 3200 
                    </li>
                    <li>
                        Power Supply: EVGA SuperNOVA 850W 80 Plus Gold
                    </li>
                    <li>
                        Storage: SAMSUNG 860 EVO Series M.2 2280 2TB SATA III SSD
                    </li>
                    <li>
                        Case: Cooler Master MasterBox MB520 ARGB ATX Mid-Tower
                    </li>
                    <li>
                        CPU Cooler: CoolerMaster MasterLiquid ML240L RGB V2
                    </li>
                    <li>
                        Main Monitor: ASUS VG278QR 27" 165Hz
                    </li>
                    <li>
                        Secondary Monitor: ASUS TUF Gaming VG24VQ 24" 144Hz
                    </li>
                </ul>
                <div className='img-box'>
                    <img className='img-resize' src={PC} alt='pc-1'/>
                </div>
            </p>
            <p>
                The mechanical keyboard I made took me around 18 hours to build because of the lubrication of the switches, soldering of the components, programming of 
                the keyboard profile. I used QMK firmware to program the Bit-C MCU on the keyboard. There are default profiles that can be programmed to the MCU, which
                I used with some editing because of some added peripherals I added to the keyboard. My keyboard featured the following components:
                <ul>
                    <li>
                        Case: Nullbits Nibble 65% Customizable Keyboard &#40;Black&#41;
                    </li>
                    <li>
                        MCU: Bit-C &#40;White&#41;
                    </li>
                    <li>
                        Switches: Kailh Bronze Speed
                    </li>
                    <li>
                        Key Caps: DROP + Redsuns GMK Red Samurai Keycap Set for 65% Keyboards
                    </li>
                    <li>
                        Mount Stabilizers: Original Cherry PCB-Mount Stabilizers
                    </li>
                    <li>
                        Mounting Plate: OEM FR4 Plate for Nibble 65% Mechanical Keyboard Kit &#40;Black&#41;
                    </li>
                    <br></br>
                    <div className='img-box'>
                        <img className='img-resize-2' src={keyboard1} alt='keyboard-1'/>
                    </div>
                    <br></br>
                    <div className='img-box'>
                        <img className='img-resize-2' src={keyboard2} alt='keyboard-2'/>
                    </div>
                </ul> 
            </p>
        </div>
    );
}

export default About;