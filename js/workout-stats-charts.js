let workoutChartInstance = null;
let exerciseChartInstance = null;

function updateCharts() {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const workouts = filterWorkouts(startDate, endDate);
    generateCharts(workouts);
}

function filterWorkouts(startDate, endDate) {
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];

    return workouts.filter(workout => {
        if (!workout.date) return false;

        const workoutDate = new Date(workout.date);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        if (start && workoutDate < start) return false;
        if (end && workoutDate > end) return false;

        return true;
    });
}

function generateCharts(workouts) {
    const labels = [];
    const durations = [];
    const exerciseCounts = {};

    workouts.forEach(workout => {
        labels.push(workout.date);
        durations.push(parseInt(workout.duration));
        exerciseCounts[workout.exercise] = (exerciseCounts[workout.exercise] || 0) + 1;
    });

    // Tyhjennetään aiemmat kaaviot ennen uusien luomista
    if (workoutChartInstance) workoutChartInstance.destroy();
    if (exerciseChartInstance) exerciseChartInstance.destroy();

    const ctx1 = document.getElementById('workoutChart').getContext('2d');
    workoutChartInstance = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Treeni Kesto (min)',
                data: durations,
                backgroundColor: '#4CAF50',
                borderColor: '#388E3C',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    const ctx2 = document.getElementById('exerciseChart').getContext('2d');
    exerciseChartInstance = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: Object.keys(exerciseCounts),
            datasets: [{
                label: 'Treeni Tyyppi',
                data: Object.values(exerciseCounts),
                backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300'],
            }]
        },
        options: {
            responsive: true,
        }
    });
}

// Alustetaan kaaviot sivun latauksen yhteydessä
generateCharts(JSON.parse(localStorage.getItem('workouts')) || []);
