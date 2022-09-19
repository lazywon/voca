import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word, { Iword } from "./Word";

export default function Day() {
  const { day } = useParams<{ day: string }>(); // const day = useParams().day; 와 동일
  const words: Iword[] = useFetch(`http://localhost:3002/words?day=${day}`);

  return (
    <>
      <h2>Day {day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
