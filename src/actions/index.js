//Pular unit testes
// menos testes para cuidar e menos refatoração de test quando for refatorar o código

//desvantagens:
//mais dificil de fazer um diagnostico de qnd seu teste falhar
//

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

//RETORNA UM OBJETO
export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS };
}
