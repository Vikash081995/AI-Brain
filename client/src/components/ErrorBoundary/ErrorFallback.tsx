import React from "react";
import { Box, Typography, Button } from "@mui/material";

interface ErrorFallbackProps {
  error: Error;
  onRetry: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, onRetry }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#ffdddd",
        color: "#900",
        borderRadius: "8px",
        maxWidth: "500px",
        margin: "50px auto",
      }}
    >
      <Typography variant="h5" component="h2">
        ⚠️ Something Went Wrong!
      </Typography>
      <Typography variant="body1" component="p" sx={{ margin: "20px 0" }}>
        {error.message}
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={onRetry}
        sx={{ padding: "10px 15px" }}
      >
        Retry
      </Button>
    </Box>
  );
};

export default ErrorFallback;
