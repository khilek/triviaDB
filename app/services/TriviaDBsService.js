import { AppState } from "../AppState.js"
import { Question } from "../models/TriviaDB.js"

class TriviaDBsService {

  async getQuestions() {
    console.log('getting ❓')
    const response = await fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
    console.log('❓s', response)
    const pojos = await response.json()
    console.log('POJOS', pojos);
    const questions = pojos.results.map(pojo => new Question(pojo))
    console.log('Questions', questions);
    AppState.questions = questions
  }


}




export const triviadbsService = new TriviaDBsService()