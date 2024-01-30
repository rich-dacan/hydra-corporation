import React from "react";
import { Button } from "./style";

interface ButtonProps {
  children: React.ReactNode;
  inverted?: boolean;
  noBorder?: boolean;
}

const ButtonDefault = ({ children, inverted, noBorder }: ButtonProps) => {
  return (
    <Button inverted={inverted} noBorder={noBorder}>
      {children}
    </Button>
  );
};

export default ButtonDefault;
