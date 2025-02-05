import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutListComponent } from './workout-list.component';
import { User } from '../../Models/user.model';
import { FormsModule } from '@angular/forms';

describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, WorkoutListComponent] 
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
  });

  beforeEach(() => {
   
    component.users = [
      {
        id: 1,
        name: 'John Doe',
        workouts: [
          { type: 'Running', minutes: 30 },
          { type: 'Cycling', minutes: 45 }
        ]
      },
      {
        id: 2,
        name: 'Jane Smith',
        workouts: [
          { type: 'Swimming', minutes: 60 },
          { type: 'Running', minutes: 20 }
        ]
      },
      {
        id: 3,
        name: 'Mike Johnson',
        workouts: [
          { type: 'Yoga', minutes: 50 },
          { type: 'Cycling', minutes: 40 }
        ]
      }
    ];
    component.ngOnInit(); 
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize filteredUsers with input users', () => {
    expect(component.filteredUsers.length).toBe(3);
    expect(component.filteredUsers).toEqual(component.users);
  });

  it('should filter users based on search term', () => {
    component.searchTerm = 'Jane';
    component.onSearch();

    expect(component.filteredUsers.length).toBe(1);
    expect(component.filteredUsers[0].name).toBe('Jane Smith');
  });

  it('should filter users based on workout type', () => {
    component.workoutTypeFilter = 'Running';
    component.onFilter();

    expect(component.filteredUsers.length).toBe(2); 
  });

  it('should paginate users correctly', () => {
    component.itemsPerPage = 2; 
    component.currentPage = 1; 

    const paginatedUsers = component.paginatedUsers;

    expect(paginatedUsers.length).toBe(2); 
    expect(paginatedUsers[0].name).toBe('John Doe');
    expect(paginatedUsers[1].name).toBe('Jane Smith');
  });

  it('should change page correctly', () => {
    component.itemsPerPage = 2; 
    component.currentPage = 1; 

    component.changePage(2); 
    expect(component.currentPage).toBe(2); 

    component.changePage(3); 
    expect(component.currentPage).toBe(2); 

    component.changePage(1); 
    expect(component.currentPage).toBe(1); 
  });

  it('should calculate total pages correctly', () => {
    component.itemsPerPage = 2; 
    expect(component.totalPages).toBe(2); 
  });
});