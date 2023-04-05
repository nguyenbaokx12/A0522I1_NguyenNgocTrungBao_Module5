import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Dictionary[] = [
    {id: 1, word: 'one', meaning: 'một'},
    {id: 2, word: 'two', meaning: 'hai'},
    {id: 3, word: 'three', meaning: 'ba'},
    {id: 4, word: 'four', meaning: 'bốn'},
    {id: 5, word: 'five', meaning: 'năm'},
  ]

  constructor() {
  }

  findAll() {
    return this.words;
  }

  findById(id: number) {
    return this.words.find(words => words.id === id);
  }


}
