"use client";
import { Container, Typography, Button } from "@mui/material";
import React from "react";

export default function Page() {
  return (
    <Container content="main">
      <Typography>ページ１</Typography>
      <Button variant="contained" href="/main-menu">
        戻る
      </Button>
    </Container>
  );
}
