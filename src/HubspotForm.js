import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export const HubspotForm = (props) => {
  const { portalId, formId, scriptSrc="//js.hsforms.net/forms/shell.js" } = props;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = scriptSrc;
    
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      window.hbspt.forms.create({
        portalId: portalId,
        formId: formId,
        target: "#hubspotform"
      });
    });
  }, []);

  return <div id="hubspotform"></div>;
}

HubspotForm.propTypes = {
  portalId: PropTypes.string.isRequired,
  formId: PropTypes.string.isRequired,
  scriptSrc: PropTypes.string,
}

HubspotForm.defaultProps = {
  scriptSrc: "//js.hsforms.net/forms/shell.js",
}

export default HubspotForm;
