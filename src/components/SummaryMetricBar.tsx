const SummaryMetricBar = () => {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100 flex mt-2">
      <div className="bg-red-400" style={{ width: "73%" }} />
      <div className="bg-blue-500" style={{ width: "21%" }} />
      <div className="bg-yellow-400" style={{ width: "6%" }} />
    </div>
  );
};

export default SummaryMetricBar;
