import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, FloatingLabel } from "flowbite-react";
import Input from "postcss/lib/input";

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
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-2">Login now</h1>
        <p className="text-lg mb-6">
          Hi, Welcome back <span className="wave">👋</span>
        </p>
        <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg flex items-center justify-center mb-4 hover:bg-pink-300">
          <i className="fab fa-google mr-2"></i> Login with Google
        </button>
        <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">or Login with Email</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <form onSubmit={submit}>
          <div className="mb-4">
            {/* <label className="block text-sm font-bold mb-2">Email</label> */}
            <FloatingLabel
              variant="outlined"
              label="Email"
              onChange={(e) => setData("email", e.target.value)}
              value={data.email}
            />
            <InputError message={errors.email} className="mt-2" />
          </div>
          <div className="mb-4">
            {/* <label className="block text-sm font-bold mb-2">Password</label> */}
            <div className="relative">
              <FloatingLabel
                variant="outlined"
                type="password"
                label="Password"
                onChange={(e) => setData("password", e.target.value)}
                value={data.password}
              />
              <i
                className="fas fa-eye absolute right-3 top-3 text-gray-500 cursor-pointer"
                id="togglePassword"
              ></i>
              <InputError message={errors.password} className="mt-2" />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                className="form-checkbox text-blue-500"
                checked={data.remember}
                onChange={(e) => setData("remember", e.target.checked)}
              />
              <span className="ml-2 text-sm">Remember Me</span>
            </label>
            <Link href="#" className="text-sm text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <Button
            onClick={submit}
            onSubmit={submit}
            className="w-full"
            color="blue"
            isProcessing={processing}
            disabled={processing}
            pill
          >
            Login
          </Button>
        </form>
        <p className="mt-4 text-center text-sm">
          Not registered yet?{" "}
          <Link href="register" className="text-blue-500">
            Create an account
          </Link>
        </p>
      </div>
    </GuestLayout>
  );
}
