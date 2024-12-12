import InputError from "@/Components/InputError"; // Ensure this is compatible with Material-UI
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, TextField, Box, Typography, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google"; // Import Google icon

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        bgcolor="background.default"
      >
        <Box bgcolor="white" p={4} borderRadius={2} boxShadow={3} width={300}>
          <Typography variant="h4" component="h1" gutterBottom>
            Sign Up now
          </Typography>
          <Typography variant="body1" gutterBottom>
            Hi, Welcome{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </Typography>
          <Button
            variant="contained"
            color="error"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{ mb: 2 }}
          >
            Sign Up with Google
          </Button>

          <Divider sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              or Sign Up with Email
            </Typography>
          </Divider>

          <form onSubmit={submit}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={data.first_name}
              onChange={(e) => setData("first_name", e.target.value)}
              error={Boolean(errors.first_name)}
              helperText={errors.first_name}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={data.last_name}
              onChange={(e) => setData("last_name", e.target.value)}
              error={Boolean(errors.last_name)}
              helperText={errors.last_name}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
              error={Boolean(errors.password_confirmation)}
              helperText={errors.password_confirmation}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={processing}
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <Link href="/login" color="primary">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </GuestLayout>
  );
}
