import { useState } from "react";

function useFilter<T>(data: T[], filterFn: (item: T) => boolean) {
  const [filteredData, setFilteredData] = useState(data);

  const applyFilter = () => {
    setFilteredData(data.filter(filterFn));
  };

  return { filteredData, applyFilter };
}

export default useFilter;
