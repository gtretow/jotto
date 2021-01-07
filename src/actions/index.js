export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

//RETORNA UM OBJETO
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
