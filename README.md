<div align="center">

#  FitFlow

**Track Progress. Build Discipline.**

> A modern, high-performance fitness tracking application built with React and Vite. Track workouts, monitor progress, and achieve your fitness goals with an intuitive, responsive interface.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-fit--flow--gray.vercel.app-d3ff00?style=for-the-badge&logo=vercel&logoColor=black)](https://fit-flow-gray.vercel.app/)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![WGER API](https://img.shields.io/badge/WGER-API-d3ff00?style=for-the-badge&logoColor=black)

</div>



---

##  Features

- **Log Workouts** — Record exercises with sets, reps, and weight in seconds
- **Workout History** — View and search all your past sessions, delete entries you don't need
- **Progress Dashboard** — Visual charts tracking your total volume and consistency over time
- **Exercise Library** — Browse hundreds of exercises from the WGER API with images and muscle group tags
- **Persistent Storage** — Workouts are saved to `localStorage` so your data stays between sessions
- **Responsive Design** — Works on desktop, tablet, and mobile

---

##  Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI components & state management |
| Vite | Build tool & dev server |
| Tailwind CSS | Styling & responsive layout |
| Recharts | Progress charts |
| WGER REST API | Exercise data (names, images, muscle groups) |
| localStorage | Client-side data persistence |

---

##  Screenshots

###  Home
![Home](./assets/home.png)

###  Log Workout
![Log Workout](./assets/log-workout.png)

###  Workout History
![History](./assets/history.png)

###  Dashboard & Progress Overview
![Progress](./assets/dashboard.png)

###  Exercise Library
![Exercises](./assets/exercises.png)

---


## 📁 Project Structure

```
FitFlow/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── WorkoutLog.jsx
│   │   ├── WorkoutHistory.jsx
│   │   ├── ProgressChart.jsx
│   │   └── ExerciseSearch.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```
---
##  Run Locally


```bash
# 1. Clone the repo
git clone https://github.com/abdelrahmanelsafty75/FitFlow.git

# 2. Navigate into the project
cd FitFlow

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

##  Live Demo

 **[fit-flow-gray.vercel.app](https://fit-flow-gray.vercel.app/)**



---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.




##  Contact
For questions, suggestions, or collaboration:


#### Author: Abdelrhman Elsafty


- GitHub: @abdelrahmanelsafty75

- Email: abdelrhmanelsafty74@gmail.com

- LinkedIn: www.linkedin.com/in/abdelrahmanelsafty75

---

<div align="center">
  <strong>Made with ❤️ by Abdelrahman Elsafty</strong>
  <br>
  <sub>Front-End Web Development Trainee at ALX</sub>
</div>