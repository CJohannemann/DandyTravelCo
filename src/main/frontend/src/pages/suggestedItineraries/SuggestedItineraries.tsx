import './SuggestedItineraries.scss';
import Florida from '../home/itineraries/Florida.png'
import Michigan from '../home/itineraries/Michigan.png'
import Northeast from '../home/itineraries/Northeast.png'
import BlueRidgeHighway from '../home/itineraries/BlueRidgeHighway.png'
import Footer from '../components/footer/Footer';

const SuggestedItineraries = () => {
    return (
        <>
            <div className={'suggested-itineraries-title'}>
                <p className={'suggested-itineraries-title'}>Featured Itineraries</p>
            </div>
            <div className="flex-containter">

                <div className="carts">
                    <img className='itin-img' src={Florida} alt={'Florida Beach'} />
                    <p className={'itin-name'}>Florida <br /> <a className={'itin-btn'}>READ MORE</a></p>
                </div>

                <div className="carts">
                    <img className='itin-img' src={Michigan} alt={'Mackinaw Bridge'} />
                    <p className={'itin-name'}>Michigan <br /> <a className={'itin-btn'}>READ MORE</a>
                    </p>
                </div>

                <div className="carts">
                    <img className='itin-img' style={{ height: "188px" }} src={Northeast} alt={'Ocean front house with lighthouse'} />
                    <p style={{ paddingBottom: "4em" }} className={'itin-name'}>Northeast <br /> <a href='/Suggested-Itineraries-NorthEast' className={'itin-btn'}>READ MORE</a></p>
                </div>

                <div className="carts">
                    <img className='itin-img' style={{ height: "188px" }} src={BlueRidgeHighway} alt={'Highway in mountains'} />
                    <p className={'itin-name'}>Blue Ridge Parkway<br /> <a className={'itin-btn'}>READ MORE</a>
                    </p>
                </div>

                <div className="carts">
                    <img className='itin-img' style={{ height: "188px" }} src={BlueRidgeHighway} alt={'Highway in mountains'} />
                    <p className={'itin-name'}>Arkansas - St. Louis<br /> <a className={'itin-btn'}>READ MORE</a>
                    </p>
                </div>

                <div className="carts">
                    <img className='itin-img' style={{ height: "188px" }} src={BlueRidgeHighway} alt={'Highway in mountains'} />
                    <p className={'itin-name'}>Charlestown, SC<br /> <a className={'itin-btn'}>READ MORE</a>
                    </p>
                </div>
            </div>
            <div className="gap" style={{ paddingTop: "50px" }}></div>
        </>
    );
}

export default SuggestedItineraries;