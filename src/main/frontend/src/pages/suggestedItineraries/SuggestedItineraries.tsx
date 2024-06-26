import './SuggestedItineraries.scss';
import Florida from '../home/itineraries/Florida.png'
import Michigan from '../home/itineraries/Michigan.png'
import Northeast from '../home/itineraries/Northeast.png'
import BlueRidgeHighway from '../home/itineraries/BlueRidgeHighway.png'
import ArkansasStlmo from '../itineraries/arkansasStLouis/img/ArkansasStlmo.png';
import CharlestonCapture1 from '../itineraries/charleston/img/CharlestonCapture1.png'
import GoToTop from '../components/GoToTop';

const SuggestedItineraries = () => {
    return (
        <>
        <GoToTop />
            <div className={'suggested-itineraries-title'}>
                <p className={'suggested-itineraries-title'}>Suggested Itineraries</p>
            </div>
            <div className="flex-containter">

                <div className="carts">
                    <img className='itin-img' src={Florida} alt={'Florida Beach'} />
                    <p className={'itin-name'}>Florida <br /> <a href='/suggested-itineraries-florida' className={'itin-btn'}>READ MORE</a></p>
                </div>

                <div className="carts">
                    <img className='itin-img' src={Michigan} alt={'Mackinaw Bridge'} />
                    <p className={'itin-name'}>Michigan <br /> <a href='/suggested-itineraries-michigan' className={'itin-btn'}>READ MORE</a>
                    </p>
                </div>

                <div className="carts">
                    <img className='itin-img' style={{ height: "188px" }} src={Northeast} alt={'Ocean front house with lighthouse'} />
                    <p style={{ paddingBottom: "4em" }} className={'itin-name'}>Northeast <br /> <a href='/suggested-itineraries-northeast' className={'itin-btn'}>READ MORE</a></p>
                </div>

                <div className="carts">
                    <img className='itin-img' style={{ height: "188px" }} src={BlueRidgeHighway} alt={'Highway in mountains'} />
                    <p className={'itin-name'}>Blue Ridge Parkway<br /> <a href='suggested-itineraries-blue-ridge-parkway' className={'itin-btn'}>READ MORE</a>
                    </p>
                </div>

                <div className="carts">
                    <img className='itin-img' style={{ height: "188px" }} src={ArkansasStlmo} alt={'Highway in mountains'} />
                    <p className={'itin-name'}>Arkansas - St. Louis<br /> <a href='suggested-itineraries-ark-stlmo' className={'itin-btn'}>READ MORE</a>
                    </p>
                </div>

                <div className="carts">
                    <img className='itin-img' style={{ height: "188px" }} src={CharlestonCapture1} alt={'Houses on a street'} />
                    <p className={'itin-name'}>Charleston, SC<br /> <a href='suggested-itineraries-charleston' className={'itin-btn'}>READ MORE</a>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SuggestedItineraries;