import { Button } from "@mui/material";
import React from "react";

type Props = { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> };

export const RegistrationButton = ({ setIsOpen }: Props) => {
  return (
    <Button variant="contained" onClick={() => setIsOpen(true)}>
      登録モーダル
    </Button>
  );
};
