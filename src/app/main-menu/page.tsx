"use client";
import { Container, Typography, Button } from "@mui/material";
import React from "react";
import { EditModal } from "../../features/edit-modal";
import { RegistrationModal } from "../../features/registration-modal";

export default function Page() {
  return (
    <Container content="main">
      <Typography>メインメニュー</Typography>
      <RegistrationModal />
      <EditModal />
      <Button variant="contained" href="/main-menu/page1">
        ページ1へ遷移
      </Button>
    </Container>
  );
}
