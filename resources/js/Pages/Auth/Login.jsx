import InputError from "@/Components/InputError";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import {
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { Google as GoogleIcon } from "@mui/icons-material"; // Import Google icon if needed

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("login"), {
      onFinish: () => reset("password"),
    });
  };

  return (
    <GuestLayout>
      <Head title="Log in" />
      <div className="bg-slate-200 p-8 rounded-lg shadow-md w-full max-w-md">
        <Typography variant="h4" component="h1" className="font-bold mb-2">
          Login now
        </Typography>
        <Typography variant="body1" className="mb-6">
          Hi, Welcome back <span className="wave">👋</span>
        </Typography>
        <Button
          variant="contained"
          color="error"
          className="w-full mb-4"
          startIcon={<GoogleIcon />}
        >
          Login with Google
        </Button>
        <div className="flex items-center mb-4">
          <Divider sx={{ flexGrow: 1 }} />
          <Typography variant="body2" className="mx-2 text-gray-500">
            or Login with Email
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </div>
        <form onSubmit={submit}>
          <div className="mb-4">
            <TextField
              variant="outlined"
              label="Email"
              fullWidth
              onChange={(e) => setData("email", e.target.value)}
              value={data.email}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
          </div>
          <div className="mb-4">
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              fullWidth
              onChange={(e) => setData("password", e.target.value)}
              value={data.password}
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <FormControlLabel
              control={
                <Checkbox
                  checked={data.remember}
                  onChange={(e) => setData("remember", e.target.checked)}
                  color="primary"
                />
              }
              label="Remember Me"
            />
            <Link href="#" className="text-sm text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full"
            disabled={processing}
          >
            Login
          </Button>
        </form>
        <Typography variant="body2" className="mt-4 text-center">
          Not registered yet?{" "}
          <Link href="register" className="text-blue-500">
            Create an account
          </Link>
        </Typography>
      </div>
    </GuestLayout>
  );
}
