import wordList from "./wordlist.js";

// utils.js
export function shuffleWord(word) {
  const shuffledWord = word.split('').sort(() => Math.random() - 0.5).join('');
  return shuffledWord;
}

export function getRandomIndex(wordList) {
  if (wordList.length === 0) {
    throw new Error("La liste de mots ne peut pas être vide.");
  }
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex].index;
}

export function getWordAndHint(index) {
  if (!wordList || wordList.length === 0) {
    throw new Error('Invalid wordlist: wordlist is empty');
  }
  const guessedWord = wordList[index].word;
  const hint = wordList[index].hint;
  const shuffledWord = shuffleWord(guessedWord);
  return { word: shuffledWord, hint: hint };
}
