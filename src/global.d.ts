declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  const content: string;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}

interface Window {
  TappAdsAdvSdk?: {
    init: (appId: string, debug: { debug: boolean }) => Promise<void>;
    showAd: (containerId: string) => void;
    event: (eventData: { isOld: boolean }) => Promise<void>;
  };
}
