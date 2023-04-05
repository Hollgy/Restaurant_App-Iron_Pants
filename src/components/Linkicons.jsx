
import React from 'react';
import ButtonImage1 from '/public/images/foodicon.png';
import ButtonImage2 from '/public/images/drinksicon.png';
import ButtonImage3 from '/public/images/eventicon.png';
import ButtonImage4 from '/public/images/mapicon.png';

function Linkicons() {
    return (
        <section className='Buttongroup'>
            <div>
                <a>
                    <img className='linkicon1' src={ButtonImage1} alt="Button 1" />
                </a>
            </div>
            <div>
                <a>
                    <img className='linkicon2' src={ButtonImage2} alt="Button 2" />
                </a>
            </div>
            <div>
                <a>
                    <img className='linkicon3' src={ButtonImage3} alt="Button 3" />
                </a>
            </div>
            <div>
                <a>
                    <img className='linkicon4' src={ButtonImage4} alt="Button 4" />
                </a>
            </div>
        </section>
    );
}

export default Linkicons;
