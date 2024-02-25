import React, { useState, useEffect, useCallback } from 'react';
import '../styles/Game.css';
import Keyboard from './Keyboard';
import CurrentWord from './CurrentWord';
import Heart from './Heart';

const Game = () => {
  const [wordCollection] = useState(["programmation", "wordpress", "gare", "train", "glace", "code", "licorne"]);
  const [currentWord, setCurrentWord] = useState(null);
  const [alphabet] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split(''));
  const [usedLetter, setUsedLetter] = useState([]);
  const [win, setWin] = useState(0); // 0 : neutral | -1 lost | 1 win
  const [attempt, setAttempt] = useState(0);
  const maxAttempt = 9;

  const pickNewWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * wordCollection.length);
    return wordCollection[randomIndex];
  }, [wordCollection]);

  const launchNewGame = useCallback(() => {
    setCurrentWord(pickNewWord());
    setUsedLetter([]);
    setWin(0);
    setAttempt(0);
  }, [pickNewWord]);

  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.keyCode === 13) {
        launchNewGame();
      }
    };

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [launchNewGame]);

  const clickLetter = useCallback((letter) => {
    if (usedLetter.indexOf(letter) === -1) {
      const newUsedLetter = [letter, ...usedLetter];
      let newAttempt = attempt;
      if (currentWord.indexOf(letter) === -1) {
        newAttempt += 1;
      }

      let newWin = 1;
      for (let i = 0; i < currentWord.length; i++) {
        if (newUsedLetter.indexOf(currentWord[i]) === -1) {
          newWin = 0;
        }
      }

      if (newAttempt >= maxAttempt && newWin === 0) {
        newWin = -1;
      }

      setUsedLetter(newUsedLetter);
      setAttempt(newAttempt);
      setWin(newWin);
    }
  }, [attempt, currentWord, maxAttempt, setAttempt, setUsedLetter, setWin, usedLetter]);

  return (
    <div id="game">
      <h1>Jeu du pendu</h1>

      {currentWord !== null &&
        <Heart
          attempt={attempt}
          maxAttempt={maxAttempt}
        />
      }

      {currentWord !== null &&
        <CurrentWord
          currentWord={currentWord}
          usedLetter={usedLetter}
          win={win}
        />
      }

      {win === 0 && currentWord !== null &&
        <Keyboard
          alphabet={alphabet}
          usedLetter={usedLetter}
          action={clickLetter}
        />
      }

      {win === 1 &&
        <p id="win_message">WIN !!!</p>
      }

      {win === -1 &&
        <p id="lost_message">LOST !!!</p>
      }

      {(currentWord === null || win !== 0) &&
        <button id="play_new_game" onClick={launchNewGame}>Nouvelle partie</button>
      }
    </div>
  );
};

export default Game;
