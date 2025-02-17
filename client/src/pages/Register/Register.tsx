import {
  Typography,
  Box,
  TextField,
  Button,
  Container,
  Link,
} from "@mui/material";

function Register() {
  return (
    <Container maxWidth="sm">
      <Box component="form" sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>

        <TextField
          fullWidth
          label="Name"
          id="name"
          name="name"
          margin="normal"
          variant="outlined"
          placeholder="Enter your name"
        />

        <TextField
          fullWidth
          label="Email"
          id="email"
          name="email"
          margin="normal"
          variant="outlined"
          placeholder="Enter your email"
        />

        <TextField
          fullWidth
          label="Password"
          id="password"
          name="password"
          type="password"
          margin="normal"
          variant="outlined"
          placeholder="Enter your password"
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </Box>
      <Box mt={2}>
        <Typography variant="body1">
          Already a member?{" "}
          <Link href="/login" underline="hover">
            Login
          </Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Register;
