import { useEffect, useState } from "react";
import Cell from "../cell/Cell";
import "./styles.css";
import { dataType } from "../../data";

const Row = (props: { rowData: any; id: number }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false);
  // const [intialRowData, setInitialRowData] = useState<dataType>([]);

  const handleEditClick = (id: number) => {
    setIsEditable(true);
  };

  const handleDoneClick = (id: number) => {
    setIsEditable(false);
  };

  const handleCancelClick = (id: number) => {
    setIsEditable(false);
  };

  return (
    <tr>
      {Object.values(props.rowData).map((data, index) => {
        return (
          <Cell key={index} value={data} id={index} isEditable={isEditable} />
        );
      })}
      <td>
        {!isEditable && (
          <button onClick={() => handleEditClick(props.id)}>Edit</button>
        )}{" "}
        {isEditable && (
          <>
            <button onClick={() => handleDoneClick(props.id)}>✔</button>
            <button onClick={() => handleCancelClick(props.id)}>❌</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Row;
