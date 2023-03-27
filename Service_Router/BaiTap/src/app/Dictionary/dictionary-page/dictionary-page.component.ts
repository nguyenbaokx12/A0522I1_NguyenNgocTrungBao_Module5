import { Component, OnInit } from '@angular/core';
import { IWord } from '../../model/dictionary';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  word: IWord[];

  constructor() { }

  ngOnInit(): void {
  }

}
