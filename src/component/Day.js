import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Day() {
  //   const day = useParams().day;
  const { day } = useParams();
  //   const wordList = dummy.words.filter((word) => word.day === Number(day));
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3002/words?day=${day}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setWords(data);
      });
  }, [day]);

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
