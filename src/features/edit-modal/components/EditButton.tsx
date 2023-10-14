import { Button } from "@mui/material";
import React from "react";

type Props = { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> };

export const EditButton = ({ setIsOpen }: Props) => {
  return (
    <Button variant="contained" onClick={() => setIsOpen(true)}>
      編集モーダル
    </Button>
  );
};
