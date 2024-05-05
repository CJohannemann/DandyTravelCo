import GoToTop from '../../components/GoToTop';
import './FloridaItinerary.scss'


const FloridaItinerary = () => {
    return (
        <>
        <GoToTop />
         <div className='whitespace' style={{ paddingTop: "150px" }}></div>
            <div className="box">
                <p id="coverPhotoFlorida"></p>
            </div>

            <div className="verbiage">
                <div className="content-container">
                    <h5>Trip Details</h5>
                    <p>Duration: 12 nights <br />
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
                        • Explore vibrant cities, sandy beaches and natural beauty. <br />
                        • Allows for the right amount of relaxation on beaches between busy locations.<br />
                        • Check 2 national parks off your bucket list.
                    </p>
                </div>
            </div>

            <div className="book-btn-container">
                <a href="/Plan-Your-Trip" id="book-btn">Book Now</a>
            </div>

            <div className="florida-route-img-conatiner">
                <p id="florida-route-img"></p>
            </div>
        </>
    )
}

export default FloridaItinerary;