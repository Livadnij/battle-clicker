export const initAdvertisers = () => {
  const apiKey = process.env.REACT_APP_TAPPADS_API_KEY;

  if (window.TappAdsAdvSdk && apiKey) {
    window.TappAdsAdvSdk.init(apiKey, { debug: true })
      .then(() => {
        console.log("TappAdsAdvSdk initialized successfully");
        // trackEvent(); // Now it will be accessible
      })
      .catch((err: any) => {
        console.error("Error initializing TappAdsAdvSdk:", err);
      });
  }

  const trackEvent = () => {
    if (!window.TappAdsAdvSdk) {
      console.error("TappAdsAdvSdk is not available");
      return;
    }

    window.TappAdsAdvSdk.event({ isOld: false })
      .then(() => {
        console.log("Event sent successfully");
      })
      .catch((err) => {
        console.error("Error sending event:", err);
      });
  };
};
