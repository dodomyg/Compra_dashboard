import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurveyMetrics } from "../redux/slices/surveyMetrics";
import Loading from "./Loading";

const Metrics = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.surveyMetrics);

  useEffect(() => {
    dispatch(getSurveyMetrics());
  }, [dispatch]);

  const values = [
    { name: "Active", value: data?.active },
    { name: "Completed", value: data?.completed },
    { name: "Abandoned", value: data?.abandoned },
  ];

  if (loading) return <Loading />;
  if (error)
    return <p className="text-center text-lg text-red-500">Error: {error}</p>;

  return (
    <div className="mt-10 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        Survey Metrics
      </h2>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 sm:gap-5 gap-4 lg:mt-8 md:mt-6 mt-4">
        {values?.map((item, i) => (
          <div
            key={i}
            className="bg-slate-300 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <h3 className="text-xl font-semibold mb-4">{item?.name}</h3>
            <p className="text-4xl font-bold text-dark">{item?.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
