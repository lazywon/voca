import React from "react";
import { useParams } from "react-router-dom";
import dummy from "../db/data.json";

export default function Day() {
  //   const day = useParams().day;
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <table>
      <tbody>
        {wordList.map((word) => (
          <tr key={word.id}>
            <td>{word.eng}</td>
            <td>{word.kor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
