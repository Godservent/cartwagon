import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasttrainingComponent } from './pasttraining.component';

describe('PasttrainingComponent', () => {
  let component: PasttrainingComponent;
  let fixture: ComponentFixture<PasttrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasttrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasttrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
