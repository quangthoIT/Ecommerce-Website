import { Link } from "react-router";

const Error = () => {
  return (
    <div className="lg:container mx-auto flex flex-col items-center justify-center h-[320px] text-center">
      <h1 className="text-[60px] font-bold text-red-500 font-inter leading-none">
        404
      </h1>
      <h3 className="text-3xl font-semibold text-[#272343] mb-2 font-inter">
        Page Not Found
      </h3>
      <p className="text-base text-gray-600 mb-4 font-inter">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="h-[50px] flex items-center justify-center p-2 bg-[#007580] text-white rounded-md text-base font-medium hover:bg-[#005f66] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
