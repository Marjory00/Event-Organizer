import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableSchedule } from './printable-schedule';

describe('PrintableSchedule', () => {
  let component: PrintableSchedule;
  let fixture: ComponentFixture<PrintableSchedule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintableSchedule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintableSchedule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
