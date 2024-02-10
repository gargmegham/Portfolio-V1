import { trackCustomEvent } from 'gatsby-plugin-google-gtag';

const trackGaEvent = (action, label) => {
  trackCustomEvent({
    category: action === 'view' ? 'Passive' : 'Active',
    action,
    label,
  });
};

export default trackGaEvent;
