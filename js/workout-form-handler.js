document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault()

    const date = document.getElementById('date').value
    const exercise = document.getElementById('exercise').value
    const duration = document.getElementById('duration').value

    const workout = { date, exercise, duration }

    let workouts = JSON.parse(localStorage.getItem('workouts')) || []
    workouts.push(workout)
    localStorage.setItem('workouts', JSON.stringify(workouts))

    document.getElementById('exercise').value = ''
    document.getElementById('duration').value = ''

    displayWorkouts()
})

function displayWorkouts() {
    const workoutList = document.getElementById('workout-list')
    workoutList.innerHTML = ''
    const workouts = JSON.parse(localStorage.getItem('workouts')) || []

    workouts.forEach((workout, index) => {
        const div = document.createElement('div')
        div.classList.add('entry')
        div.innerHTML = `<strong>${workout.date}</strong>: ${workout.exercise} (${workout.duration} min)
                         <button onclick="deleteWorkout(${index})">Poista</button>`
        workoutList.appendChild(div)
    })
}

function deleteWorkout(index) {
    let workouts = JSON.parse(localStorage.getItem('workouts')) || []
    workouts.splice(index, 1)
    localStorage.setItem('workouts', JSON.stringify(workouts))
    displayWorkouts()
}
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0]
    document.getElementById('date').value = today
})
displayWorkouts()