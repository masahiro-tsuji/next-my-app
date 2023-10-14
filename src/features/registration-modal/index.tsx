import { Typography, Button, Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { RegistrationButton } from "./components/RegistrationButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "gray",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const RegistrationModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <RegistrationButton setIsOpen={setIsOpen} />
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{ width: "1500px", height: "700px" }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            何かを登録するモーダル
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};
