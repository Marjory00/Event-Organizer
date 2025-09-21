import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListManager } from './guest-list-manager';

describe('GuestListManager', () => {
  let component: GuestListManager;
  let fixture: ComponentFixture<GuestListManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuestListManager]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestListManager);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
