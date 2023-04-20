import React from "react";
import ButtonImage1 from "/images/foodicon.png";
import ButtonImage2 from "/images/drinksicon.png";
import ButtonImage3 from "/images/eventicon.png";
import ButtonImage4 from "/images/mapicon.png";
import { useRecoilState } from "recoil";
import { renderStatee } from "../utils/conrend";

function Linkicons() {
    const [render, setRender] = useRecoilState(renderStatee);

    const handleMenuClick = () => {
        setRender("menu");
    };
    const handleMyOrderClick = () => {
        setRender("order");
    };
    const handleAboutClick = () => {
        setRender("about");
    };

    return (
        <section className="Buttongroup">
            <div>
                <a onClick={handleMenuClick}>
                    <div className="figure linkicon1">
                        <img
                            className="icon"
                            src={ButtonImage1}
                            alt="Button 1"
                        />
                        <p className="icontext">Meny</p>
                    </div>
                </a>
            </div>
            <div>
                <a onClick={handleMyOrderClick}>
                    <div className="figure linkicon2">
                        <img
                            className="icon"
                            src={ButtonImage2}
                            alt="Button 2"
                        />
                        <p className="icontext">Min order</p>
                    </div>
                </a>
            </div>
            <div>
                <a onClick={handleAboutClick}>
                    <div className="figure linkicon3">
                        <img
                            className="icon"
                            src={ButtonImage3}
                            alt="Button 3"
                        />
                        <p className="icontext">Om Oss</p>
                    </div>
                </a>
            </div>
            <div>
                <a target="_blank" href="https://www.google.com/maps/place/Mekonomen+Butik+Falun/@60.6036299,15.6038979,18z/data=!4m15!1m8!3m7!1s0x4667707fe503409d:0xa35aa6a759718a91!2sRyckepungsv%C3%A4gen,+791+77+Falun!3b1!8m2!3d60.6037078!4d15.6032187!16s%2Fg%2F1tgdgm57!3m5!1s0x4667707f99551d41:0x68ba54e6242f8e07!8m2!3d60.6035195!4d15.6059666!16s%2Fg%2F1tf78qq4">
                    <div className="figure linkicon4">
                        <img
                            className="icon"
                            src={ButtonImage4}
                            alt="Button 4"
                        />
                        <p className="icontext">Hitta Hit!</p>
                    </div>
                </a>
            </div>
        </section>
    );
}

export default Linkicons;
