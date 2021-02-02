import React from "react";
import Chip from "../UtilityComponents/Chip";
const StockSentiment = ({ ltp, twoHundredMA, fiftyMA }) => {
  const lableText = (ltp, twoHundredMA, fiftyMA) => {
    var value = 0;

    if (ltp > fiftyMA || ltp > twoHundredMA) {
      value = 1;
    }
    if (ltp > fiftyMA && ltp > twoHundredMA) {
      value = 2;
    }

    if (ltp < fiftyMA || ltp < twoHundredMA) {
      value = 3;
    }
    if (ltp < fiftyMA && ltp < twoHundredMA) {
      value = 4;
    }
    switch (value) {
      case 1:
        return { label: "Bullish", color: 'green' };

      case 2:
        return { label: "Very Bullish", color: 'green' };

      case 3:
        return { label: "Bearish", color: 'red' };
      case 4:
        return { label: "Very Bearish", color: 'red' };
       default :
       return { label: "Neutral", color: 'grey' };
    }
  };
  var response = lableText(ltp, twoHundredMA, fiftyMA);
  return <Chip background={response.color} label={response.label} />;
};

export default StockSentiment;
