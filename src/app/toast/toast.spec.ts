import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastComponent } from './toast'; // Ensure this imports the correct component

describe('ToastComponent', () => {
  let component: ToastComponent; // Use the correct class name
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastComponent] // Ensure you declare the correct component
    }).compileComponents();

    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
