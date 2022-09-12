import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
  const { day } = useParams(); // const day = useParams().day; 와 동일
  const words = useFetch(`http://localhost:3002/words?day=${day}`);

  return (
    <table>
      <tbody>
        {words.map((word) => (
          <Word word={word} key={word.id} />
        ))}
      </tbody>
    </table>
  );
}
