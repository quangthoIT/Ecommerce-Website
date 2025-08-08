import { Link, useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const submitHandle = () => {
    navigate("/");
  };
  return (
    <div className="lg:container mx-auto p-[60px]">
      <div className="max-w-[600px] w-full min-h-[260px] p-[40px] mx-auto flex items-center justify-center flex-col rounded-lg border-[1px] border-[#9a9caa]">
        <h3 className="text-3xl text-[#272343] mb-8 font-semibold font-inter uppercase">
          Login
        </h3>
        <form
          action="#"
          onSubmit={submitHandle}
          className="flex flex-col items-center w-full"
        >
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full h-[50px] bg-[#f0f2f3] rounded-md mb-4 pl-4"
          />
          <input
            type="password"
            placeholder="Your Password"
            required
            className="w-full h-[50px] bg-[#f0f2f3] rounded-md mb-4 pl-4"
          />
          <button
            type="submit"
            className="w-full h-[50px] bg-[#007580] rounded-md mb-4 pl-4 text-white text-base font-semibold font-inter cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-base text-[#272343] font-inter font-normal  flex items-center justify-center">
          Don't have an account?
          <Link to={"/auth/register"} className="ml-2 text-[#007580]">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
