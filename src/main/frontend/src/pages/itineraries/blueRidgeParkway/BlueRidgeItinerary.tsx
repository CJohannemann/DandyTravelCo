import './BlueRidgeItinerary.scss'


const BlueRidgeItinerary = () => {
    return (
        <>
         <div className='whitespace' style={{ paddingTop: "150px" }}></div>
            <div className="box">
                <p id="coverPhotoBlueRidge"></p>
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
                        • Trip includes so many scenic overlooks, mountains, waterfalls, and wildlife. <br />
                        • Great hiking trails and historic structures.
                    </p>
                </div>
            </div>

            <div className="book-btn-container">
                <a href="/Plan-Your-Trip" id="book-btn">Book Now</a>
            </div>

            <div className="blue-ridge-route-img-conatiner">
                <p id="blue-ridge-route-img"></p>
            </div>
        </>
    )
}

export default BlueRidgeItinerary;