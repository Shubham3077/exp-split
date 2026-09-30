import { useState } from "react";
import { getYears } from "../utils/yearDropdown";
import SummaryMetricBar from "./SummaryMetricBar";
import MetricSummaryCard from "./MetricSummaryCard";
import Dropdown from "./Dropdown";

const Summary = () => {
  const PASTYEARS = 1;
  const FUTUREYEARS = 2;
  const years = getYears(PASTYEARS, FUTUREYEARS);
  const [selectedYear, setSelectedYear] = useState(years[1]);
  const yearOptions = years.map((year) => (year))

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Summary</h1>

        {/* this is will be the year dropdown */}
    
        <Dropdown
          name="year"
          value={selectedYear}
          onChange={(value) => setSelectedYear(Number(value))}
          options={yearOptions}
        />
      </div>

      <div className="mt-4">
        <p className="text-xs ">Net Total</p>
        <h3 className="text-xl font-semibold">
          14,53,422 <span className="text-xs! text-gray-500">₹</span>
        </h3>
        <p className="text-xs font-light text-gray-400">+14% from last year</p>
      </div>

      <SummaryMetricBar />
      <MetricSummaryCard />
    </div>
  );
};

export default Summary;
