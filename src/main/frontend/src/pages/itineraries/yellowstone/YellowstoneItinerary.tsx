import GoToTop from '../../components/GoToTop';
import './YellowstoneItinerary.scss'

const YellowstoneItinerary = () => {
    return (
        <>
        <GoToTop />
         <div className='whitespace' style={{ paddingTop: "150px" }}></div>
            <div className="box">
                <p id="coverPhotoMich"></p>
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
                        • Experience 4 great lakes in one trip <br />
                        • Whether you’re exploring the Great Lakes, sand dunes,<br /> or quaint villages, there’s something for everyone.
                    </p>
                </div>
            </div>

            <div className="book-btn-container">
                <a href="/Plan-Your-Trip" id="book-btn">Book Now</a>
            </div>

            <div className="mich-route-img-conatiner">
                <p id="mich-route-img"></p>
            </div>
        </>
    )
}

export default YellowstoneItinerary;