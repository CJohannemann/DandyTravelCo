import React, { useEffect } from 'react';

const HubspotContactForm = ({ region, portalId, formId }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/shell.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region,
                    portalId,
                    formId,
                    target: '#hubspotForm', // Specify the target element
                });
            }
        });
    }, [region, portalId, formId]);

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    );
};

export default HubspotContactForm;