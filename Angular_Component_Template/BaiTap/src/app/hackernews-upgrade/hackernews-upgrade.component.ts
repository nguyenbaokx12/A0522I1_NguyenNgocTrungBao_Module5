import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hackernews-upgrade',
  templateUrl: './hackernews-upgrade.component.html',
  styleUrls: ['./hackernews-upgrade.component.css']
})
export class HackernewsUpgradeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  article = {
    title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
    url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
  };

  upgradeArticle(title, url) {
    this.article.title = title.value;
    this.article.url = url.value;
  }
}
