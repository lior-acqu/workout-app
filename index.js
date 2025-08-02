// workouts
const shirleasy = {
  name: "Shirlis Zerstörung",
  duration: 20,
  pause: 20,
  difficulty: "Easy",
  workout: [
    {
      name: "Calf Raises",
      reps: 30,
      info: "Make sure to go up and down completely",
      area: ["Legs"],
      muscle: ["Calves", "Feet"],
    },
    "pause",
    {
      name: "Squats (Explosive)",
      reps: 20,
      info: "Go up quickly, feel free to use resistance",
      area: ["Legs"],
      muscle: ["Gluteus Maximus", "Quads"],
    },
    "pause",
    {
      name: "Ausfallschritt",
      reps: 20,
      info: "Alternate legs, feel free to jump between reps",
      area: ["Legs"],
      muscle: ["Quads", "Gluteus Maximus"],
    },
    "pause",
    {
      name: "Glute Bridge",
      reps: 10,
      info: "Ideally with resistance band, keep core engaged, optionally only on one leg",
      area: ["Legs"],
      muscle: ["Gluteus Maximus", "Hamstrings", "Lower Back"],
    },
    "pause",
    {
      name: "Schreckige Gluteus Medius Exercise",
      reps: 10,
      info: "Good luck ;)",
      area: ["Legs"],
      muscle: ["Gluteus Medius"],
    },
    "pause",
    {
      name: "Sit-Ups",
      reps: 20,
      info: "Optionally extend legs",
      area: ["Core"],
      muscle: ["Abs"],
    },
    "pause",
    {
      name: "Superman",
      reps: 20,
      info: "Lift legs and chest",
      area: ["Pull"],
      muscle: ["Lats", "Shoulders", "Lower Back"],
    },
    "pause",
    {
      name: "Bicep Curls",
      reps: "Per side 20",
      info: "Really only use the bicep",
      area: ["Pull"],
      muscle: ["Biceps"],
    },
    "pause",
    {
      name: "Chest Press",
      reps: 20,
      info: "Press hands together in front of body and go up and down",
      area: ["Push"],
      muscle: ["Chest", "Biceps"],
    },
    "pause",
    {
      name: "Shoulder Press",
      reps: 15,
      info: "Press hands together in front of head and go up and down",
      area: ["Push"],
      muscle: ["Shoulder", "Chest", "Biceps"],
    },
    "pause",
    {
      name: "Push-Ups",
      reps: 10,
      info: "Keep shoulders close to body",
      area: ["Push"],
      muscle: ["Triceps", "Chest"],
    },
  ],
};

const posture = {
  name: "Posture",
  duration: 5,
  difficulty: "Easy",
  pause: 5,
  workout: [
    {
      name: "Corner Stretch",
      reps: 1,
      info: "Stretch your arms out in a corner and make one step inside",
      area: ["Stretch"],
      muscle: ["Chest", "Bicep", "Shoulder"],
    },
    "pause",
    {
      name: "Back Squeezes",
      reps: 20,
      info: "Lie on your stomach, and hold stretched arms up",
      area: ["Pull"],
      muscle: ["Shoulders", "Upper Back"],
    },
    "pause",
    {
      name: "Glute Bridge",
      reps: 15,
      info: "Ideally with resistance band, keep core engaged, optionally only on one leg",
      area: ["Legs"],
      muscle: ["Gluteus Maximus", "Hamstrings", "Lower Back"],
    },
  ],
};

// workouts
const fullbodylior = {
  name: "FBL",
  duration: 25,
  difficulty: "Intermediate",
  pause: 20,
  workout: [
    {
      name: "Calf Raises",
      reps: 30,
      info: "Ideally on an edge",
      area: ["Legs"],
      muscle: ["Calves", "Feet"],
    },
    "pause",
    {
      name: "Squats (Explosive)",
      reps: 25,
      info: "Use resistance or weights, quick movements",
      area: ["Legs"],
      muscle: ["Gluteus Maximus", "Quads"],
    },
    "pause",
    {
      name: "Bulgarian Split Squats",
      reps: "Per side 20",
      info: "Use bed or chair, weight on front leg",
      area: ["Legs"],
      muscle: ["Quads", "Gluteus Maximus"],
    },
    "pause",
    {
      name: "Glute Bridge",
      reps: "Per side 15",
      info: "Ideally with resistance band, keep core engaged, great for posture",
      area: ["Legs"],
      muscle: ["Gluteus Maximus", "Hamstrings", "Lower Back"],
    },
    "pause",
    {
      name: "Side Plank Raises",
      reps: "Per side 15",
      info: "Good luck ;)",
      area: ["Legs"],
      muscle: ["Gluteus Medius"],
    },
    "pause",
    {
      name: "Kerze",
      reps: 15,
      info: "Hold on top",
      area: ["Core"],
      muscle: ["Abs"],
    },
    "pause",
    {
      name: "Hip Raises",
      reps: "Per side 10",
      info: "On the side, focus on obliques",
      area: ["Core"],
      muscle: ["Obliques"],
    },
    "pause",
    {
      name: "Superman",
      reps: 20,
      info: "Lift legs and chest",
      area: ["Pull"],
      muscle: ["Lats", "Shoulders", "Lower Back"],
    },
    "pause",
    {
      name: "Lat Pulls",
      reps: 20,
      info: "Use resistance band or towel (or mat)",
      area: ["Pull"],
      muscle: ["Lats", "Shoulders"],
    },
    "pause",
    {
      name: "Bicep Curls",
      reps: "Per side 25",
      info: "Really only use the bicep",
      area: ["Pull"],
      muscle: ["Biceps"],
    },
    "pause",
    {
      name: "Chest Press",
      reps: 20,
      info: "Press hands together in front of body and go up and down, alternatively use resistance band",
      area: ["Push"],
      muscle: ["Chest"],
    },
    "pause",
    {
      name: "Shoulder Press",
      reps: 15,
      info: "Press hands together in front of head and go up and down, alternatively use resistance band",
      area: ["Push"],
      muscle: ["Shoulder", "Chest"],
    },
    "pause",
    {
      name: "Push-Ups",
      reps: 15,
      info: "Keep shoulders close to body",
      area: ["Push"],
      muscle: ["Triceps", "Chest"],
    },
    "pause",
    {
      name: "Tricep Extensions",
      reps: "Per side 10",
      info: "Really only use tricep, use weights or resistance bands",
      area: ["Push"],
      muscle: ["Triceps"],
    },
  ],
};

const workoutSelection = [shirleasy, posture, fullbodylior];

var chosenWorkout = [];
var steps = 0;
var time = 0;
var mins = 0;
var secs = 0;
var pad = "00";
var pausetime = 0;

for (let i = 0; i < workoutSelection.length; i++) {
  document.querySelector(".sel-btns").innerHTML +=
    "<button onclick='chooseWorkout(" +
    i +
    ")'>" +
    workoutSelection[i].name +
    " (" +
    workoutSelection[i].duration +
    " mins)" +
    "</button>";
}

function chooseWorkout(option) {
  chosenWorkout = workoutSelection[option].workout;
  pausetime = workoutSelection[option].pause;
  document.querySelector(".start-window").style.display = "none";
  document.querySelector(".main-window").style.display = "flex";
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function workout() {
  if (steps == 0) {
    // start
    timer();
    document.getElementById("nextStep").innerHTML = "Next";
  }
  if (steps >= chosenWorkout.length - 1) {
    // last exercise
    document.getElementById("nextStep").innerHTML = "Done";
  }
  if (steps >= chosenWorkout.length) {
    // done
    document.querySelector(".main-window").style.display = "none";
    document.querySelector(".close-window").style.display = "flex";
  } else if (chosenWorkout[steps] == "pause") {
    // pause
    var nextExercise = time + pausetime;
    document.getElementById("nextStep").disabled = true;
    while (time <= nextExercise) {
      document.getElementById("currentTask").innerHTML = "Rest";
      document.getElementById("reps").innerHTML =
        nextExercise - time + "s remaining";
      document.getElementById("muscleGroup").innerHTML =
        "Next: " +
        chosenWorkout[steps + 1].name +
        " (" +
        chosenWorkout[steps + 1].info +
        ")";
      document.getElementById("area").style.display = "none";
      document.getElementById("info").style.display = "none";
      // update only every 100 seconds
      await sleep(100);
    }
    document.getElementById("nextStep").disabled = false;
    document.getElementById("area").style.display = "block";
    document.getElementById("info").style.display = "block";
    steps++;
    workout();
  } else {
    // normal
    document.getElementById("currentTask").innerHTML =
      chosenWorkout[steps].name;
    document.getElementById("reps").innerHTML =
      chosenWorkout[steps].reps + " rep(s)";
    document.getElementById("info").innerHTML = chosenWorkout[steps].info;
    document.getElementById("area").innerHTML =
      chosenWorkout[steps].area.join(", ");
    document.getElementById("muscleGroup").innerHTML =
      chosenWorkout[steps].muscle.join(", ");
    steps++;
  }
}

function timer() {
  setInterval(function () {
    time++;
    secs = time % 60;
    mins = Math.floor(time / 60);
    var secStr = "" + secs;
    var minStr = "" + mins;
    document.getElementById("timer").innerHTML =
      pad.substring(0, pad.length - minStr.length) +
      minStr +
      ":" +
      pad.substring(0, pad.length - secStr.length) +
      secStr;
  }, 1000);
}
