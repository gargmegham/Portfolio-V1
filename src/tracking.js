import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const trackGaEvent = (action, label) => {
    trackCustomEvent({
        category: action === "view" ? "Passive" : "Active",
        action,
        label,
    });
};

export default trackGaEvent;
