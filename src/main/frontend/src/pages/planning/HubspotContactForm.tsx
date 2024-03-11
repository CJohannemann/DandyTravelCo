   import React, {useEffect} from "react";
    
    const HubspotContactForm = props => {
        const { region, portalId, formId } = props;
        useEffect(() => {
            const script = document.createElement('script');
            script.src='https://js.hsforms.net/forms/shell.js';
            document.body.appendChild(script);
    
            script.addEventListener('load', () => {
                // @TS-ignore
                if (window["HBST"]) {
                    // @TS-ignore
                    window["HBST"].forms.create({
                        region: region,
                        portalId: portalId,
                        formId: formId,
                        target: '#hubspotForm'
                    })
                }
            });
        }, []);
    
        return (
            <div>
                <div id="hubspotForm"></div>
                </div>
        );
    };
    
    export default HubspotContactForm;