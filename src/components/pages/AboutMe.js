import React from 'react';

import '../../styles/Content.css';

export default function AboutMe() {
    return (
        <> 
        <div className='aboutDiv' id='about'>
            <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=PastelOrange&eyeType=Default&eyebrowType=UpDown&mouthType=Disbelief&skinColor=Light'/>
            <h2 className='aboutTitle'>About Me: </h2>
            <p className='aboutTxt'> Welcome to my portfolio! I am a current senior at Davidson college studying computer science and Hispanic studies. 
            I have worked in computer science for 2 years of college courses and am now learning full stack web development 
            through the UNCC bootcamp. I plan to go to graduate school to study cybersecurity and continue my computer science education.
             </p>
        </div>
        </>
    );
}

