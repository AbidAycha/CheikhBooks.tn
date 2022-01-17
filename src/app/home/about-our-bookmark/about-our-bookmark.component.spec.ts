import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurBookmarkComponent } from './about-our-bookmark.component';

describe('AboutOurBookmarkComponent', () => {
  let component: AboutOurBookmarkComponent;
  let fixture: ComponentFixture<AboutOurBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOurBookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOurBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
