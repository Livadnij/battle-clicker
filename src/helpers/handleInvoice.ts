import axios from "axios";
import { trackEvent } from "utils/analytics";

type Invoice = {
  tg: any;
  apiUrl: string;
  amount: number;
  handleCallback: () => void;
};

export const handleInvoice = async ({
  tg,
  apiUrl,
  amount,
  handleCallback,
}: Invoice) => {
  try {
    const response = await axios.post(apiUrl! + "/get-invoice", {
      amount: amount,
      description: "Deposit stars to get access to paid fights",
      title: "Buy Fights",
    });

    if (response.data.invoiceLink) {
      // Open the payment link inside Telegram WebApp
      tg.openInvoice(response.data.invoiceLink, (invoiceStatus: string) => {
        if (invoiceStatus === "paid") {
          handleCallback();
        }
        if (invoiceStatus === "cancelled") {
          trackEvent.DEPOSIT_ERROR({ error: `Deposit was cancelled` });
        }
      });
    }
  } catch (error) {
    trackEvent.DEPOSIT_ERROR({ error: `Failed to create invoice. ${error}` });
    console.error("Failed to create invoice:", error);
  }
};
