import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFooterUtilityComponent } from './category-footer-utility.component';

describe('CategoryFooterUtilityComponent', () => {
  let component: CategoryFooterUtilityComponent;
  let fixture: ComponentFixture<CategoryFooterUtilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryFooterUtilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFooterUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
