import { getLetterMatchCount } from "../helpers";
import axios from "axios";

//Pular unit testes
// menos testes para cuidar e menos refatoração de test quando for refatorar o código

//desvantagens:
//mais dificil de fazer um diagnostico de qnd seu teste falhar
//

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD:"SET_SECRET_WORD"
};

//RETORNA UM OBJETO
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });

    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};


export const getSecretWord = () => {return (dispatch) => {axios.get('http://localhost:3030')}}