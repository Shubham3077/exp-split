import { cardOptions } from "../utils/summaryCardOptions";

const MetricSummaryCard = () => {
  return (
    <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
      {cardOptions.map((item) => (
        <div key={item.id} className="border rounded-lg border-gray-100 p-2">
          <p className={`text-sm ${item.color}`}>{item.title}</p>
          <h3 className="text-xl font-semibold">
            {item.amount} <span className="text-xs! text-gray-500">₹</span>
          </h3>
          <p className="text-xs font-light text-gray-400 mt-2">
            +14% from last year
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetricSummaryCard;
