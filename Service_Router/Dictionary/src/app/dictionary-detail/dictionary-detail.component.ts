import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Dictionary} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  wordDetail: Dictionary = {
    id: 10,
    word: 'none',
    meaning: 'none'
  };

  constructor(private activeRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    // this.wordDetail.id = +this.activeRoute.snapshot.params['id'];
    this.wordDetail.id = +this.activeRoute.snapshot.paramMap.get('id');
    this.wordDetail = this.dictionaryService.findById(this.wordDetail.id);


    // this.activeRoute.paramMap.subscribe((params: ParamMap) => {
    //   this.wordDetail.id = +params.get('id');
    //   this.wordDetail = this.dictionaryService.findById(this.wordDetail.id);
    // });
    console.log(this.wordDetail.id);
  }
}
