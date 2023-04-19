
import React from 'react';
import ButtonImage1 from '/images/foodicon.png';
import ButtonImage2 from '/images/drinksicon.png';
import ButtonImage3 from '/images/eventicon.png';
import ButtonImage4 from '/images/mapicon.png';

function Linkicons() {
    return (
        <section className='Buttongroup'>
            <div>
                <a href=''>
                    <div className='figure linkicon1'>
                        <img className='icon' src={ButtonImage1} alt="Button 1" />
                        <p className='icontext'>Meny</p>
                    </div>
                </a>
            </div>
            <div>
                <a href=''>
                    <div className='figure linkicon2'>
                        <img className='icon' src={ButtonImage2} alt="Button 2" />
                        <p className='icontext'>Drycker</p>
                    </div>
                </a>
            </div>
            <div>
                <a href=''>
                    <div className='figure linkicon3'>
                        <img className='icon' src={ButtonImage3} alt="Button 3" />
                        <p className='icontext'>Event</p>
                    </div>
                </a>
            </div>
            <div>
                <a href=''>
                    <div className='figure linkicon4'>
                        <img className='icon' src={ButtonImage4} alt="Button 4" />
                        <p className='icontext'>Hitta Hit!</p>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Linkicons;
