import GoToTop from '../../components/GoToTop';
import './CharlestonItinerary.scss'


const CharlestonItinerary = () => {
    return (
        <>
        <GoToTop />
         <div className='whitespace' style={{ paddingTop: "150px" }}></div>
            <div className="box">
                <p id="coverPhotoCharleston"></p>
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
                        • This trip is rich with history, vibrant culture, and picturesque streets. <br />
                        • Whether you’re a foodie, history enthusiast, or nature lover, there’s something for everyone.
                    </p>
                </div>
            </div>

            <div className="book-btn-container">
                <a href="/Plan-Your-Trip" id="book-btn">Book Now</a>
            </div>

            <div className="charleston-route-img-conatiner">
                <p id="charleston-route-img"></p>
            </div>
        </>
    )
}

export default CharlestonItinerary;