import { Component, OnInit } from '@angular/core';
import { IWord } from 'src/app/model/dictionary';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionaryDetail: IWord | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
