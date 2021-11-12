import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtrainingComponent } from './newtraining.component';

describe('NewtrainingComponent', () => {
  let component: NewtrainingComponent;
  let fixture: ComponentFixture<NewtrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
