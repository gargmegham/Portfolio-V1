import { trackCustomEvent } from "gatsby-plugin-google-analytics";

export default trackGaEvent = (action, label) => {
    trackCustomEvent({
        category: action === "view" ? "Passive" : "Active",
        action,
        label,
    });
};
