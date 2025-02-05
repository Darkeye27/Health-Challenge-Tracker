import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { User } from './Models/user.model';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from './components/user-input/user-input.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppComponent, // Import the standalone component
        UserInputComponent,
        WorkoutListComponent,
        WorkoutChartComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear();
  });

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize users from local storage', () => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'Test User',
        workouts: [{ type: 'Running', minutes: 30 }]
      }
    ];
    localStorage.setItem('users', JSON.stringify(mockUsers));

    component.ngOnInit(); // Call ngOnInit to initialize users

    expect(component.users.length).toBe(1);
    expect(component.users[0].name).toBe('Test User');
  });
  
});