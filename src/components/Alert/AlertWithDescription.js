import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

const AlertWithDescription = ({ description, title, severity }) => {
  return (
    <Alert severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {description}
    </Alert>
  );
};

export { AlertWithDescription };
