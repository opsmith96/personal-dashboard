import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles({
  root: {
    color: "#ffffff",
    backgroundColor: "#424242",
  },
});

export const useCrypto = () => {
  const [btcPriceDollar, setBtcPriceDollar] = useState<string>();
  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((data) => {
        setBtcPriceDollar(data.bpi.USD.rate);
      });
  });
  return { btcPriceDollar };
};
