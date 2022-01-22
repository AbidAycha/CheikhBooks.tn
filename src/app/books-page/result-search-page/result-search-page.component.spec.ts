import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSearchPageComponent } from './result-search-page.component';

describe('ResultSearchPageComponent', () => {
  let component: ResultSearchPageComponent;
  let fixture: ComponentFixture<ResultSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
