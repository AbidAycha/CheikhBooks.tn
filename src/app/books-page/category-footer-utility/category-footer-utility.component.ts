import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-footer-utility',
  templateUrl: './category-footer-utility.component.html',
  styleUrls: ['./category-footer-utility.component.css'],
})
export class CategoryFooterUtilityComponent implements OnInit {
  showHideFilterStatus: boolean;
  @Input() buttonFilter = false;
  @Input() numberOfBooks=0;
  @Output() showHideFilters = new EventEmitter<boolean>();

  constructor() {
    this.showHideFilterStatus = false;
  }
  showHideFiltersAction() {
    this.showHideFilterStatus = !this.showHideFilterStatus;
    this.showHideFilters.emit(this.showHideFilterStatus);
  }
  ngOnInit(): void {}
}
