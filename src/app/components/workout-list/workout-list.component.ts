import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../Models/user.model';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-workout-list',
  imports: [FormsModule, NgFor],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css'
})
export class WorkoutListComponent implements OnInit{
  @Input() users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  workoutTypeFilter: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5;

  ngOnInit() {
    this.filteredUsers = this.users;
  }

  onSearch(){
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.currentPage = 1;
  }

  onFilter(){
    this.filteredUsers = this.users.filter(user => 
      user.workouts.some(workout  => workout.type.toLowerCase().includes(this.workoutTypeFilter.toLowerCase()))
    );
    this.currentPage = 1;
  }

  get paginatedUsers(){
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUsers.slice(startIndex, endIndex);
  }
  changePage(page: number){
    if(page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  get totalPages(){
    return Math.ceil(this.filteredUsers.length / this.itemsPerPage);
  }

}
