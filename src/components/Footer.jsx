import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlanDetails } from "../redux/slices/planDetails";
import Loading from "./Loading";

const Footer = () => {
  const { data, error, loading } = useSelector((state) => state.planDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlanDetails());
  }, [dispatch]);

  if (loading) return <Loading />;

  if (error)
    return <p className="text-center text-lg text-red-500">Error: {error}</p>;
  return (
    <footer className="z-50 bg-gray-900 py-2 px-3 text-center sm:flex sm:items-center grid grid-cols-2 gap-4 sm:justify-between bottom-0 right-0 w-full">
      <p className="text-sm text-gray-300">
        <h1 className="text-white">Footer @2024</h1>
      </p>
      <p className="text-sm text-gray-300">
        Current Plan:{" "}
        <span className="font-semibold text-white">{data?.plan}</span>
      </p>
      <p className="text-sm text-gray-300">
        Days Left:{" "}
        <span className="font-semibold text-white">{data?.daysLeft}</span>
      </p>
      <p className="text-sm text-gray-300">
        Maximum Surveys:{" "}
        <span className="font-semibold text-white">{data?.maxSurveys}</span>
      </p>
      <p className="text-sm text-gray-300">
        Surveys Used:{" "}
        <span className="font-semibold text-white">{data?.surveysUsed}</span>
      </p>
      <button className="mt-2 sm:mt-0 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        Upgrade Plan
      </button>
    </footer>
  );
};

export default Footer;
