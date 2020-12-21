import React from "react";
import { AlertWithDescription } from "../Alert";
const StockAlert = ({
  ltp,
  stoploss,
  trailingStoploss,
  targetPercentage,
  buyPrice
}) => {
  if (ltp < trailingStoploss || ltp < stoploss) {
    return (
      <AlertWithDescription
        severity={"error"}
        description={"You Hit your stoploss !"}
      />
    );
  }

  if (targetPercentage === 100) {
    return (
      <AlertWithDescription
        severity={"success"}
        description={"You Acheived your Target, Time to book some profits !"}
      />
    );
  }

  if (targetPercentage > 90) {
    return (
      <AlertWithDescription
        severity={"info"}
        description={`Your close to your target, you are ${(
          100 - targetPercentage
        ).toFixed(2)}% away  !`}
      />
    );
  }

  if (buyPrice < ltp) {
    return (
      <AlertWithDescription
        severity={"warning"}
        description={`Your buy price is less than today price <strong>${ltp} </strong>!`}
      />
    );
  }
};

export default StockAlert;
