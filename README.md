# Workout Tracker SPA

This is a **single-page application (SPA)** built with **Angular** that allows users to log their workouts. It includes features such as **search, filtering, pagination**, and **data persistence using localStorage**.

## Features

- **Add Users and Workouts**: Users can input their name, workout type, and duration (in minutes).
- **Display Workout List**: The user workout data is displayed in a structured table grid.
- **Search by Name**: Users can search for a specific user by their name.
- **Filter by Workout Type**: Users can filter the workout list based on the type of workout.
- **Pagination**: The list supports pagination for better usability when more than 5 users exist.
- **Data Persistence**: The workout data is stored in `localStorage`, ensuring that it remains available even after refreshing the page.
- **Optional Feature**: Users can track their workout progress using charts.

## Technologies Used

- **Angular** (Frontend framework)
- **TailwindCSS** (Styling)
- **localStorage** (For data persistence)
- **Jasmine/Karma** (For unit testing)

## Setup & Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   ng serve
   ```
4. Open the browser and go to `http://localhost:4200/`.



## Unit Testing

This project includes **unit tests** for:
1. **A Component (`WorkoutListComponent`)**
2. **A Service (`WorkoutService`)**

### Run Unit Tests

```sh
ng test
```

# Code Coverage
### Code Coverage Summary

## Overall Coverage

- **Statements**: 61.22% (30/49)
- **Branches**: 40% (2/5)
- **Functions**: 38.88% (7/18)
- **Lines**: 65.9% (29/44)

## Per Component

### app
- **Statements**: 100% (7/7)
- **Functions**: 100% (2/2)
- **Branches**: 100% (2/2)
- **Lines**: 100% (6/6)

### app/components/user-input
- **Statements**: 45.45% (5/11)
- **Functions**: 0% (0/2)
- **Lines**: 45.45% (5/11)

### app/components/workout-chart
- **Statements**: 66.66% (6/9)
- **Functions**: 40% (2/5)
- **Lines**: 75% (6/8)

### app/components/workout-list
- **Statements**: 54.54% (12/22)
- **Functions**: 33.33% (3/9)
- **Branches**: 0% (0/3)
- **Lines**: 63.15% (12/19)


```sh
ng test --code-coverage
```

The **code coverage report** will be generated in the `coverage/` folder. Open `index.html` inside this folder to view detailed reports.

## License

This project is for **educational purposes** and is **open-source**. Feel free to modify and improve it!
