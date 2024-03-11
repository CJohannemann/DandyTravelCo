import HubspotContactForm from "./HubspotContactForm";
import './Planning.scss';


const Planning = () => {
	return (
		<main>
			<div className="container">
				<div className="row">
					<div className="col">
						<HubspotContactForm
							region="na1"
							portalId="44898461"
							formId='dc650af4-0afe-4c39-997c-46da81c5549f'
						/>
					</div>
				</div>
			</div>
		</main>
	);
};


export default Planning;