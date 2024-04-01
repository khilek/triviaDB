import { Question } from "./models/TriviaDB.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Question[]} */
  questions = []
}

export const AppState = createObservableProxy(new ObservableAppState())