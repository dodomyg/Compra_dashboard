import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSteps } from "../redux/slices/setupSteps";
import Loading from "./Loading";

const Guide = () => {
  const { data, error, loading } = useSelector((state) => state.setupSteps);
  const dispatch = useDispatch();

  const [index, setIndex] = useState(null);

  useEffect(() => {
    dispatch(getSteps());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      setIndex(data[0]?.id);
    }
  }, [data]);

  const toggleAccordion = (i) => {
    setIndex(i === index ? null : i);
  };

  if (loading) return <Loading />;
  if (error)
    return <p className="text-center text-lg text-red-500">Error: {error}</p>;

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold text-center mb-8">Setup Guide</h1>

      <div className="flex flex-col lg:gap-10">
        {data &&
          data.map((item) => (
            <div
              className={`border-2 rounded-lg p-2 ${
                index === item?.id ? "border-black" : "border-gray-400"
              }`}
              key={item.id}
            >
              <div
                className="flex items-center justify-between my-2 cursor-pointer"
                onClick={() => toggleAccordion(item?.id)}
              >
                <h2 className="text-xl font-semibold">{item?.title}</h2>
                <p className="text-2xl">{index === item?.id ? "-" : "+"}</p>
              </div>
              {index === item?.id && <hr className="w-[97%] mx-auto my-1" />}
              {index === item?.id && <p className="text-xl">{item?.ans}</p>}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Guide;
