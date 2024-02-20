import { useEffect, useState } from "react";
import Row from "../row/Row";
import {
  handleAddCol,
  handleAddRow,
  handleRemoveCol,
  handleRemoveRow,
} from "./handler";

const DynamicTable = (props: { tableData: any; columnHeaders: any }) => {
  const [tableColumns, setTableColumns] = useState(props.columnHeaders);
  const [tableData, setTableData] = useState(props.tableData);

  useEffect(() => {
    setTableData(props.tableData);
    setTableColumns(props.columnHeaders);
    console.log(tableColumns);
  }, [props.tableData, props.columnHeaders]);

  return (
    <table>
      <thead>
        <tr>
          {tableColumns.map((header: any, index: number) => {
            const { id, ...rest } = header;
            return (
              <th key={index}>
                {Object.keys(rest).map((key, index) => (
                  <th key={index}>{rest[key]}</th>
                ))}
              </th>
            );
          })}
          <th>
            <button
              onClick={() =>
                handleAddCol(
                  tableColumns,
                  tableData,
                  setTableColumns,
                  setTableData
                )
              }
            >
              + Col
            </button>
          </th>
          <th>
            <button
              onClick={() => handleRemoveCol(tableColumns, setTableColumns)}
            >
              - Col
            </button>
          </th>
          <th>
            <button onClick={() => handleAddRow(tableData, setTableData)}>
              + Row
            </button>
          </th>
          <th>
            <button onClick={() => handleRemoveRow(tableData, setTableData)}>
              - Row
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((rowData: any, index: number) => (
          <Row key={index} rowData={rowData} id={index} />
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
