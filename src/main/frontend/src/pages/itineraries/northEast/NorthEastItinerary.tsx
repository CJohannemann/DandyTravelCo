import { url } from "inspector";
import './NorthEastItinerary.scss'
import Northeast from './img/Northeast.png'


const NorthEastItinerary = () => {
    return (
        <>
            <div style={{ paddingTop: "150px" }}></div>
            <div className="box">
                <div className="north-east-itin-img">
                    <div className="chr">
                        <h2 id="chr-txt">Northeast</h2>
                    </div>
                </div>
            </div>
            <div className="north-east-route-img-conatiner">
                <p id="north-east-route-img"></p>
            </div>
        </>
    )
}

export default NorthEastItinerary;