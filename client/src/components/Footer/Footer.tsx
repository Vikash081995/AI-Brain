import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box
        mt={4}
        py={2}
        textAlign={"center"}
        style={{
          backgroundColor: "black",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        <Typography variant="body2" color="white">
          © 2025 AI Brain. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
