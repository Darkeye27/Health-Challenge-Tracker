import { Component, OnInit } from '@angular/core';
import { User , Workout } from './Models/user.model';
import { FormsModule } from '@angular/forms';
import { UserInputComponent } from "./components/user-input/user-input.component";
import { WorkoutListComponent } from "./components/workout-list/workout-list.component";
import { WorkoutChartComponent } from "./components/workout-chart/workout-chart.component";


@Component({
  selector: 'app-root',
  imports: [FormsModule, UserInputComponent, WorkoutListComponent, WorkoutChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(){
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

    users: User[] = [
      {
        id:1,
        name: 'John Doe',
        workouts: [
          {type: 'Running', minutes: 30},
          {type: 'Cycling', minutes: 45}
        ]
      },
      {
        id:2,
        name: 'Jane Smith',
        workouts: [
          {type: 'Swimming', minutes: 60},
          {type: 'Running', minutes: 20}
        ]
      },
      {
        id:3,
        name: 'Mike Johnson',
        workouts: [
          {type: 'Yoga', minutes: 50},
          {type: 'Cycling', minutes: 40}
        ]
      }
    ];
    addUser(user: User){
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
    }

}
