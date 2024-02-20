import DynamicTable from "./components/dynamictable/DynamicTable";
import { dataType, tableData } from "./data";
import { columnHeaders } from "./data";
import { useEffect, useState } from "react";

const App = () => {
  const [initialTableData, setInitialTableData] = useState<any>([]);
  const [initialColumnHeaders, setInitialColumnHeader] = useState<dataType>([]);

  useEffect(() => {
    setInitialTableData(columnHeaders);
    setInitialColumnHeader(tableData);
  }, []);

  return (
    <>
      <DynamicTable tableData={tableData} columnHeaders={columnHeaders} />
    </>
  );
};
export default App;
