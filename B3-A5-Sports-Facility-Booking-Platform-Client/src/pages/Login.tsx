import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import Container from "@/components/shared/Container";
import { Input } from "@/components/ui/input";
import authApi from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { toast } from "sonner";
import { TUser } from "@/types/auth.type";
// import { BiLogoGoogle } from "react-icons/bi";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useAppDispatch();

  const [login] = authApi.useLoginMutation();

  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // //==================== Login Using Email and Password ====================
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging In");
    try {
      const res = await login(data).unwrap();

      const user = verifyToken(res.token) as TUser;

      dispatch(setUser({ user: user, token: res.token }));

      toast.success(res.message, { id: toastId, duration: 2000 });

      reset();

      if (user?.email) {
        navigate(location?.state ? location.state : "/");
      }
    } catch (err: any) {
      toast.error("Somthing went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[url('/public/loginbg.jpg')] bg-[rgba(20,20,20,0.73)] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-fixed">
      <Container>
        <div className="w-full">
          <div className="bg-[#f4f3f081] text-center p-5 sm:p-10 space-y-6 rounded-lg backdrop-blur-sm">
            <h1 className="font-rac text-gray-800 text-3xl md:text-5xl xl:text-7xl font-bold">
              Login
            </h1>

            <form
              className="w-full flex flex-col gap-5 text-left"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                type="email"
                id="in2"
                {...register("email")}
                placeholder="Email"
                required
                className="w-full rounded-lg"
                defaultValue="n@yahoo.com"
              />

              <div className="relative">
                <Input
                  type={showPass ? "text" : "password"}
                  id="in3"
                  {...register("password")}
                  placeholder="Password"
                  required
                  className="w-full rounded-lg"
                  defaultValue="123456Aa@"
                />
                <span
                  className="h-full absolute right-2 top-0 flex justify-center items-center"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )}
                </span>
              </div>

              {/* {loginError && (
                <p className="text-red-500 text-center font-bold">
                  {loginError}
                </p>
              )} */}

              <Input
                type="submit"
                value="Sign In"
                className="btn w-1/2 mx-auto flex-1 bg-red-600 text-white"
              />
            </form>

            <div className="flex flex-col justify-center items-center mt-5 space-y-5">
              <p className="text-base font-medium">
                Dont have an account?
                <Link className="ml-3 text-red-600" to="/register">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
