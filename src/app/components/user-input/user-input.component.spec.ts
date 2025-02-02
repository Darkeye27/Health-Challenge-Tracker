import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserInputComponent } from './user-input.component';
import { FormsModule } from '@angular/forms';


declare var jasmine: any;

describe('UserInputComponent', () => {
  let component: UserInputComponent;
  let fixture: ComponentFixture<UserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [UserInputComponent]
    })
    .compileComponents();
});

 beforeEach(() => {
  fixture = TestBed.createComponent(UserInputComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
 });

 it('should create with dark the me elements', () =>{
  expect(component).toBeTruthy();
  const form = fixture.nativeElement.querySelector('form');
  expect(form.classList).toContain('bg-slate-800');
 });

 it('should emit new user with workout data', () => {
  spyOn(component.addUser, 'emit');
  const testData = {
    name: 'Test User',
    type: 'Cycling',
    minutes: 45
  };

  component.userName = testData.name;
  component.workoutType = testData.type;
  component.workoutMinutes = testData.minutes;
  fixture.detectChanges();

  const form = fixture.nativeElement.querySelector('form');
  form.dispatchEvent(new Event('submit'));

  const expectedUser = jasmine.objectContaining({
    name: testData.name,
    workouts: jasmine.arrayContaining([
      jasmine.objectContaining({
        type: testData.type,
        minutes: testData.minutes
      })
    ])
  });

  expect(component.addUser.emit).toHaveBeenCalledWith(expectedUser);
 });

});
