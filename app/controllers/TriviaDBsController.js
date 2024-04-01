import { AppState } from "../AppState.js";
import { Question } from "../models/TriviaDB.js";
import { triviadbsService } from "../services/TriviaDBsService.js";
import { setHTML } from "../utils/Writer.js";
export class TriviaDBsController {
  constructor() {
    this.getQuestions()
    AppState.on('questions', this.drawQuestions)
  }


  drawQuestions() {
    console.log('Drawing ❓')
    const questions = AppState.questions
    let questionsCard = ''
    questions.forEach(question => questionsCard += question.QuestionCard)
    setHTML('question-card', questionsCard)
  }

  getQuestions() {
    triviadbsService.getQuestions()

  }
}