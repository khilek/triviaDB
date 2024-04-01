export class Question {
  constructor(data) {
    this.question = data.question
    this.answer = data.correct_answer
    this.answers = data.incorrect_answers
  }


  get QuestionCard() {
    return `
  
  <section class="row card bg-dark text-light">
    <div class="text-center">${this.question}</div>
  </section>
  <section class="row">
    <div class="col-6 card selectable">${this.answer}</div>
    <div class="col-6 card selectable">${this.answers[0]}</div>
  </section>
  <section class="row">
    <div class="col-6 card selectable">${this.answers[1]}</div>
    <div class="col-6 card selectable">${this.answers[2]}</div>
  </section>
  
  `
  }






}







/** data from API
{
  "type": "multiple",
  "difficulty": "easy",
  "category": "Entertainment: Video Games",
  "question": "Who made Garry&#039;s Mod?",
  "correct_answer": "Garry Newman",
  "incorrect_answers": [
      "Randy Newman",
      "Facepunch Studios",
      "Gabe Newell"
  ]

  */