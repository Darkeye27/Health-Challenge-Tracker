import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from './user-input.component';
import { User, Workout } from '../../Models/user.model';

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, UserInputComponent], // Import the standalone component here
    }).compileComponents();

    fixture = TestBed.createComponent(UserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a new user when onSubmit is called', () => {
    // Arrange
    const emitSpy = spyOn(component.addUser, 'emit');
    const mockDateNow = 1; // Fixed value for Date.now()
    spyOn(Date, 'now').and.returnValue(mockDateNow); // Mock Date.now()

    component.userName = 'John Doe';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    // Act
    component.onSubmit();

    // Assert
    const expectedUser: User = {
      id: mockDateNow, // Use the mocked value
      name: 'John Doe',
      workouts: [{ type: 'Running', minutes: 30 }]
    };
    expect(emitSpy).toHaveBeenCalledWith (expectedUser );
  });

  it('should reset the form after onSubmit is called', () => {
    // Arrange
    component.userName = 'John Doe';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    // Act
    component.onSubmit();

    // Assert
    expect(component.userName).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBe(0);
  });
});