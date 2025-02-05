import { Component, EventEmitter, Output } from '@angular/core';
import { User , Workout } from '../../Models/user.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
  standalone: true,
})
export class UserInputComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes:  number = 0;

  @Output() addUser = new EventEmitter<User>();

  onSubmit(){
    const newUser: User = {
      id: Date.now(),
      name: this.userName,
      workouts: [{type: this.workoutType, minutes: this.workoutMinutes}]
    };
    this.addUser.emit(newUser);
    this.resetForm();
  }
  resetForm(){
    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = 0;
  }
}
