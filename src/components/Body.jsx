import { useRecoilState } from "recoil";
import { renderStatee } from '../utils/conrend.js'

const Body = () => {
    const [render, setRender] = useRecoilState(renderStatee)

    const handleClick = () => {
        setRender('menu')
    }

    return (
        <section className="wrapper">
            <img className="kolla-meny" src="/images/Testtext.png" alt="" onClick={handleClick} />
        </section>
    )
}


export default Body