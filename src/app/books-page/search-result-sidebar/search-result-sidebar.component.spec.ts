import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultSidebarComponent } from './search-result-sidebar.component';

describe('SearchResultSidebarComponent', () => {
  let component: SearchResultSidebarComponent;
  let fixture: ComponentFixture<SearchResultSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
