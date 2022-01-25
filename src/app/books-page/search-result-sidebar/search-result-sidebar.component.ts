import {
  Component,
  DoBootstrap,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BooksServiceService } from 'src/app/Services/books-service.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-result-sidebar',
  templateUrl: './search-result-sidebar.component.html',
  styleUrls: ['./search-result-sidebar.component.css'],
})
export class SearchResultSidebarComponent implements OnInit {
  isExpanded: boolean;
  listOfCategories;
  @Input() search: string;
  @Output() applyFilter = new EventEmitter<any>();

  constructor(private serviceSearchBooks: BooksServiceService) {
    this.isExpanded = false;
    this.listOfCategories = serviceSearchBooks.categoriesList;
    this.search = '';
  }
  applyRemoveFilter(filterForm: NgForm): void {
    this.serviceSearchBooks
      .filterBooks(filterForm.value, this.search)
      .subscribe((data) => {
        this.applyFilter.emit(data);
      });
  }
  ngOnInit(): void {}
}
