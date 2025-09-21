import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Toast } from './toast'; // Ensure this imports the correct component

describe('ToastComponent', () => {
  let component: Toast; // Use the correct class name
  let fixture: ComponentFixture<Toast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Toast] // Ensure you declare the correct component
    }).compileComponents();

    fixture = TestBed.createComponent(Toast);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
