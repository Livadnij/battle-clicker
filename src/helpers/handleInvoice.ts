import axios from "axios";
import { useTelegram } from "hooks/useTelegram";

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
  console.log(tg, apiUrl, amount, handleCallback);
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
          //   setUser({ ...user!, balance: fightPrice });
          //   goRegister();
        }
      });
      // tg.onEvent("invoiceClosed", (data: any) => {
      //   console.log("tg onEvent (invoiceClosed)", data);
      // });
    }
  } catch (error) {
    console.error("Failed to create invoice:", error);
  }
};
