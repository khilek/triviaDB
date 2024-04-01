import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { TriviaDBsController } from "./controllers/TriviaDBsController.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [TriviaDBsController],
    view: /*html*/`
    <div class="bg-white p-3">
      <div class="card-body">
        <h1 class="text-center">Who Wants to be a Trivia'naire?</h1>
        <!-- <button class="btn btn-dark" onclick="app.HomeController.testButton()">😎</button> -->
      </div>
    </div>
<section class="container" id="question-card">
  <!-- <section class="row card bg-dark text-light">
    <div class="text-center">TEST</div>
  </section>
  <section class="row">
    <div class="col-6 card">TEST</div>
    <div class="col-6 card">TEST</div>
  </section>
  <section class="row">
    <div class="col-6 card">TEST</div>
    <div class="col-6 card">TEST</div>
  </section> -->
  </section>


    `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])