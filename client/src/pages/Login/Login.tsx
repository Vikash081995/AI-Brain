import { Typography, Box, TextField, Button } from "@mui/material";
import { LoginConfigType } from "../../types/Login";
import { Link } from "react-router";
import { routes } from "../../routes";
import { LoginConfig } from "../../config/LoginConfig";

function Login() {
  return (
    <Box
      component="form"
      sx={{
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#111",
        borderRadius: "20px",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#000",
            fontWeight: "bold",
          }}
        >
          Login
        </Typography>

        {LoginConfig.map((item: LoginConfigType) => (
          <Box key={item.label} sx={{ marginBottom: "20px" }}>
            <TextField
              fullWidth
              id={`${item.label.toLowerCase()}-input`}
              label={item.label}
              variant="outlined"
              type={
                item.label.toLowerCase() === "password" ? "password" : "text"
              }
              sx={{
                marginBottom: "10px",
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#000",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000",
                },
              }}
            />
          </Box>
        ))}

        <Button
          variant="contained"
          fullWidth
          sx={{
            marginTop: "20px",
            marginBottom: "20px",
            padding: "10px",
            fontSize: "1.1rem",
            backgroundColor: "#000",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          Login
        </Button>

        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "10px",
              color: "#333",
            }}
          >
            Not a member yet?
          </Typography>
          <Link
            to={routes.register}
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Register here
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
