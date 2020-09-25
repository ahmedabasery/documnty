import React from "react";
import ItemActions from "./ItemActions";

export default ({ itemProperties, items }) => {
  //pN is arrow ffunction that return the input number as 3 digit num
  const pN = (n) => (n > 99 ? n : n > 9 ? "0" + n : "00" + n);
  return items.map((item, i) => (
    <tr key={i}>
      <td>{pN(i + 1)}</td>
      {itemProperties.map((P, pi) => (
        <td key={pi}>{item[P]}</td>
      ))}
      <td>
        <ItemActions index={i} />
      </td>
    </tr>
  ));
};
