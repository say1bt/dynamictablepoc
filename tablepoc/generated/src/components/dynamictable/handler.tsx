export const handleAddCol = (
  tableColumns: any,
  tableData: any,
  setTableColumns: any,
  setTableData: any
) => {
  const newColName: string =
    prompt("Enter the name of the new column:") || "New Column";
  const newColumnId: number = Date.now();

  const insertIndex = tableColumns.length > 0 ? tableColumns.length - 1 : 0;
  const newColumns = [
    ...tableColumns.slice(0, insertIndex),
    { id: newColumnId, [newColName]: newColName },
    ...tableColumns.slice(insertIndex),
  ];

  const updatedData = tableData.map((rowData: any) => {
    return {
      ...rowData,
      [newColName]: null,
    };
  });

  setTableColumns(newColumns);
  setTableData(updatedData);
};

export const handleRemoveCol = (tableColumns: any, setTableColumns: any) => {
  if (tableColumns.length > 0) {
    const updatedColumns = tableColumns.slice(0, -1);
    setTableColumns(updatedColumns);
  }
};

export const handleAddRow = (tableData: any, setTableData: any) => {
  const newRows: any = [
    ...tableData,
    { id: Date.now(), fullName: "", age: null, city: "" },
  ];
  setTableData(newRows);
};

export const handleRemoveRow = (tableData: any, setTableData: any) => {
  if (tableData.length > 0) {
    const updatedRows = tableData.slice(0, -1);
    setTableData(updatedRows);
  }
};
