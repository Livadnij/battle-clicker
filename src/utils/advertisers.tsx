import { trackEvent } from "utils/analytics";

export const initAdvertisers = () => {
  const apiKey = process.env.REACT_APP_TAPPADS_API_KEY;

  if (window.TappAdsAdvSdk && apiKey) {
    window.TappAdsAdvSdk.init(apiKey, { debug: true })
      .then(() => {
        console.log("TappAdsAdvSdk initialized successfully");
        trackTappAdsSdkEvent();
      })
      .catch((err: any) => {
        trackEvent.ERROR({
          error: `Error initializing TappAdsAdvSdk : ${err}`,
        });
        console.error("Error initializing TappAdsAdvSdk:", err);
      });
  }

  const trackTappAdsSdkEvent = () => {
    if (!window.TappAdsAdvSdk) {
      trackEvent.ERROR({
        error: `TappAdsAdvSdk is not available`,
      });
      console.error("TappAdsAdvSdk is not available");
      return;
    }

    window.TappAdsAdvSdk.event({ isOld: false })
      .then(() => {
        console.log("Event sent successfully");
      })
      .catch((err) => {
        trackEvent.ERROR({
          error: `Error sending event : ${err}`,
        });
        console.error("Error sending event:", err);
      });
  };
};
