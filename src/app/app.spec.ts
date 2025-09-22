// Import necessary testing utilities from Angular.
import { TestBed } from '@angular/core/testing';
// Import the component you are testing. Assuming 'App' is now 'AppComponent'.
import { AppComponent } from './app';
// Import the router module for routing-related tests.
import { RouterModule } from '@angular/router';
// Import the zoneless change detection provider.
import { provideZonelessChangeDetection } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // For standalone components, you import them directly instead of using 'declarations'.
      imports: [AppComponent, RouterModule.forRoot([])],
      // The `provideZonelessChangeDetection` function is added to the providers array.
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
  });

  it('should create the app', () => {
    // Create a fixture for the AppComponent.
    const fixture = TestBed.createComponent(AppComponent);
    // Get the component instance.
    const app = fixture.componentInstance;
    // Assert that the component instance was created successfully.
    expect(app).toBeTruthy();
  });

  it('should render the title in the header', () => {
    // Create a fixture for the AppComponent.
    const fixture = TestBed.createComponent(AppComponent);
    // Trigger change detection to render the template.
    fixture.detectChanges();
    // Get the native element (the root DOM element) of the component.
    const compiled = fixture.nativeElement as HTMLElement;
    // Assert that the header element contains the correct title.
    const header = compiled.querySelector('header h1');
    expect(header).toBeTruthy();
    expect(header?.textContent).toContain('Event-Organizer');
  });
});
