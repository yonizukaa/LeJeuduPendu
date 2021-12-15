import React, { useEffect, useState } from "react";
import "../App.css";

const GOOD_LETTER = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbnéàâêè";
const correct_letter = [];
export function CallApi() {
  const [word, setWord] = useState(undefined);
  const [user, setUser] = useState(undefined);
  const [score, setScore] = useState();
  useEffect(() => {
    (async () => {
      const { data } = await getWord();
      setWord(data);
      console.log(data);
    })();
    return () => {};
  }, []);
  useEffect(() => {
    (async () => {
      const { data } = await getScore();
      setScore(data);
      console.log(data);
    })();
    return () => {};
  }, []);

  const handleKeyDown = (event) => {
    if (GOOD_LETTER.includes(event.key)) {
      console.log("A key was pressed", event.key);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown, false);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const getWord = async () => {
    const dataJson = await fetch("https://animalfinderapi.herokuapp.com/word");
    return await dataJson.json();
  };
  const getScore = async () => {
    const dataJson = await fetch("https://animalfinderapi.herokuapp.com/score");
    return await dataJson.json();
  };

  if (!word) {
    return <p>Waiting...</p>;
  }

  if (word.lenght == true) {
    const gagner = "YOU WINNNN";
  } else {
    const Lose = "You LOSE loserrrrrr";
  }

  return (
    <div className="mot">
      {console.log(word.word)}
      {word.word.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correct_letter.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}
