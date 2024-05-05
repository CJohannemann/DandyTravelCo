import GoToTop from '../../components/GoToTop';
import './ArkansasStlmoItinerary.scss'


const ArkansasStlmoItinerary = () => {
    return (
        <>
        <GoToTop />
         <div className='whitespace' style={{ paddingTop: "150px" }}></div>
            <div className="box">
                <p id="coverPhotoArkansasStlmo"></p>
            </div>

            <div className="verbiage">
                <div className="content-container">
                    <h5>Trip Details</h5>
                    <p>Duration: 11 nights <br />
                        Starting/Ending City: Northern Kentucky (customizable) <br />
                        <i>Pricing varies based on customization. <span>See </span>
                            <a href="/pricing">
                                <u>pricing page</u>
                            </a>
                            <span> for details.</span>
                        </i>
                    </p>
                    <p></p>
                </div>

                <div>
                    <h5>Things we love on this route:</h5>
                    <p>
                        • Trip includes natural wonders, historic sites, and rejuvenating experiences. <br />
                        • Experience 3 big cities and 1 national park.
                    </p>
                </div>
            </div>

            <div className="book-btn-container">
                <a href="/Plan-Your-Trip" id="book-btn">Book Now</a>
            </div>

            <div className="ark-stlmo-route-img-conatiner">
                <p id="ark-stlmo-route-img"></p>
            </div>
        </>
    )
}

export default ArkansasStlmoItinerary;