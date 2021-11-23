import React from 'react';
import '../style.css';
import '../style2.css';


function HeroImg(props) {
    return(
        <section className='image-container'>
            <img className='hero-image' src={ props.img } alt='hero_image' />
        </section>
    )
}

export default HeroImg;