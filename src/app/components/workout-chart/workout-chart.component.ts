import { AfterViewInit, Component, Input } from '@angular/core';
import { User } from '../../Models/user.model';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-workout-chart',
  imports: [],
  templateUrl: './workout-chart.component.html',
  styleUrl: './workout-chart.component.css'
})
export class WorkoutChartComponent implements AfterViewInit {
  @Input() users: User[] = [];

  ngAfterViewInit(){
    this.renderChart();
  }

  renderChart(){
    const ctx = document.getElementById('workoutChart') as HTMLCanvasElement;
    Chart.register(...registerables);
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.users.map(user => user.name),
        datasets: [{
          label: 'Total Workout Minutes',
          data: this.users.map(user => user.workouts.reduce((sum, workout) => sum + workout.minutes, 0)),
          backgroundColor: '#6366f1',
          borderColor: '#8b5cf6',
          borderWidth: 2,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
