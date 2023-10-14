import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
// ルートディレクトリ
export default function Home() {
  return (
    <Container content="main">
      <Typography>Hello NextJs</Typography>
      <Button variant="contained" href="/main-menu">
        /main-pageへ画面遷移
      </Button>
    </Container>
  );
}
