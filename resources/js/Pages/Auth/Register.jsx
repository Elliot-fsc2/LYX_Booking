import InputError from "@/Components/InputError";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, FloatingLabel } from "flowbite-react";

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

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-bold mb-2">Sign Up now</h1>
          <p className="text-lg mb-6">
            Hi, Welcome{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
          </p>
          <button className="w-full btn-google text-white py-2 px-4 rounded-lg flex items-center justify-center mb-4 bg-red-700">
            <i className="fab fa-google mr-2"></i> Sign Up with Google
          </button>
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">or Sign Up with Email</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <form onSubmit={submit}>
            <div className="mb-4">
              {/* <label className="block text-gray-700 mb-2">First Name</label> */}
              <FloatingLabel
                variant="outlined"
                label="First Name"
                onChange={(e) => setData("first_name", e.target.value)}
                value={data.first_name}
              />
              <InputError message={errors.first_name} className="mt-2" />
            </div>
            <div className="mb-4">
              {/* <label className="block text-gray-700 mb-2">Last Name</label> */}
              <FloatingLabel
                variant="outlined"
                label="Last Name"
                onChange={(e) => setData("last_name", e.target.value)}
                value={data.last_name}
              />
              <InputError message={errors.last_name} className="mt-2" />
            </div>
            <div className="mb-4">
              {/* <label className="block text-gray-700 mb-2">Email</label> */}
              <FloatingLabel
                variant="outlined"
                label="Email"
                onChange={(e) => setData("email", e.target.value)}
                value={data.email}
              />
              <InputError message={errors.email} className="mt-2" />
            </div>
            <div className="mb-4">
              {/* <label className="block text-gray-700 mb-2">Password</label> */}
              <div className="relative">
                <FloatingLabel
                  variant="outlined"
                  label="Password"
                  type="password"
                  onChange={(e) => setData("password", e.target.value)}
                  value={data.password}
                />
                <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>

                <InputError message={errors.password} className="mt-2" />
              </div>
            </div>
            <div className="mb-4">
              {/* <label className="block text-gray-700 mb-2">
                Confirm Password
              </label> */}
              <div className="relative">
                <FloatingLabel
                  variant="outlined"
                  label="Confirm Password"
                  type="password"
                  onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                  }
                  value={data.password_confirmation}
                />
                <i className="fas fa-eye absolute right-3 top-3 text-gray-500"></i>

                <InputError
                  message={errors.password_confirmation}
                  className="mt-2"
                />
              </div>
            </div>
            <Button
              onClick={submit}
              className="w-full"
              gradientMonochrome="purple"
              isProcessing={processing}
              disabled={processing}
              pill
            >
              Sign Up
            </Button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </GuestLayout>
  );
}
