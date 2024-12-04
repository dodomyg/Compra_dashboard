import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurveys } from "../redux/slices/surveys";
import Loading from "./Loading";

const SurveyTable = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const { data, error, loading } = useSelector((state) => state.surveys);

  const dispatch = useDispatch();

  const getSurveyData = useCallback(() => {
    dispatch(getSurveys());
  }, [dispatch]);

  useEffect(() => {
    getSurveyData();
  }, [getSurveyData]);

  // console.log(getSurveyData);

  const clearFilters = () => {
    setSearch("");
    setStatus("All");
  };

  const filteredData = data.filter((d) => {
    return (
      (search === "" || d?.name.toLowerCase().includes(search.toLowerCase())) &&
      (status === "All" || d.status === status)
    );
  });

  if (loading) return <Loading />;
  if (error)
    return (
      <p className="text-red-500 font-bold text-xl text-center p-10">
        Error: {error}
      </p>
    );

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold text-center mb-8">
        Survey list fetched from json-server
      </h1>
      <div className="">
        <h1 className="font-semibold text-xl mb-5">Filter data here</h1>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <input
            type="text"
            placeholder="Search By Survey Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded-md"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="p-2 border rounded-md "
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="Abandoned">Abandoned</option>
          </select>

          <button
            disabled={search === "" && status === "All"}
            onClick={clearFilters}
            className="p-2 bg-blue-600 text-white rounded-md"
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg my-5">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-2 py-2 border border-gray-300">ID</th>
              <th className="px-2 py-2 border border-gray-300">Survey Name</th>
              <th className="px-2 py-2 border border-gray-300">Status</th>
              <th className="px-2 py-2 border border-gray-300">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((survey) => (
                <tr key={survey.id} className="border-b hover:bg-gray-50">
                  <td className="px-2 py-2 border border-gray-300">
                    {survey.id}
                  </td>
                  <td className="px-2 py-2 border border-gray-300">
                    {survey.name}
                  </td>
                  <td className="px-2 py-2 border border-gray-300">
                    {survey.status}
                  </td>
                  <td className="px-2 py-2 border border-gray-300">
                    {survey.createdAt}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No surveys available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyTable;
