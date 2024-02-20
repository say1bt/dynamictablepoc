import { useEffect, useState } from "react";
import "./styles.css";

const Cell = (props: { id: any; value: any; isEditable: boolean }) => {
  const [value, setValue] = useState<any>("");

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Typinng", e);
    setValue(e.target.value);
  };

  useEffect(() => {
    setValue(props.value);
  }, []);

  return (
    <td>
      <input
        disabled={!props.isEditable}
        className="table-data"
        id={props.id}
        value={value}
        onChange={(e) => handleChangeData(e)}
      />
    </td>
  );
};

export default Cell;
