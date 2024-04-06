import './NorthEastItinerary.scss'


const NorthEastItinerary = () => {
    return (
        <>
            <div style={{ paddingTop: "150px" }}></div>
            <div className="box">
                <p id="coverPhoto"></p>
            </div>

            <div className="verbiage">
                <div className="content-container">
                    <h5>Trip Details</h5>
                    <p>Duration: 18 nights <br />
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
                        • Explore all the northeast hast to offer in one trip
                    </p>
                </div>
            </div>

            <div className="book-btn-container">
                <a href="/Plan-Your-Trip" id="book-btn">Book Now</a>
            </div>

            <div className="north-east-route-img-conatiner">
                <p id="north-east-route-img"></p>
            </div>
        </>
    )
}

export default NorthEastItinerary;