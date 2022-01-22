import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-search-page',
  templateUrl: './result-search-page.component.html',
  styleUrls: ['./result-search-page.component.css'],
})
export class ResultSearchPageComponent implements OnInit {
  showButton: boolean;
  showFilters: boolean;

  constructor() {
    this.showButton = true;
    this.showFilters = false;
  }
  showHideFilters(showFilterStatus: boolean) {
    this.showFilters = showFilterStatus;
  }

  ngOnInit(): void {}
}
