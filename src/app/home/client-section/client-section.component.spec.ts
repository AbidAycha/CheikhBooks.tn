import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSectionComponent } from './client-section.component';

describe('ClientSectionComponent', () => {
  let component: ClientSectionComponent;
  let fixture: ComponentFixture<ClientSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
