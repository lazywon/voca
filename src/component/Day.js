import React from "react";
import { useParams } from "react-router-dom";
import dummy from "../db/data.json";
import Word from "./Word";

export default function Day() {
  //   const day = useParams().day;
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <table>
      <tbody>
        {wordList.map((word) => (
          <Word word={word} key={word.id} />
        ))}
      </tbody>
    </table>
  );
}
