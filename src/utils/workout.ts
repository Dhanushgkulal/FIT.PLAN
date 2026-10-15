/**
 * Workout Generation Functions
 * 
 * Creates weekly workout plans based on user constraints and goals.
 * Requirements: 12.1-12.4, 13.1-13.3, 14.1-14.3, 15.1-15.3, 16.1-16.6
 */

import type {
  WorkoutInput,
  WorkoutPlan,
  WorkoutDay,
  ExerciseDetail,
  Exercise,
  ExerciseCategory,
  TrainingSplit,
} from '../types/workout';
import { VolumeRanges, RepRanges, RestPeriods } from '../types/workout';
import { exerciseDatabase } from '../data/exercises';

/**
 * Determine training split based on days per week
 * 
 * @param trainingDays - Number of training days per week
 * @returns Training split type
 * 
 * Requirements: 12.1, 12.2, 12.3, 12.4
 */
function getTrainingSplit(trainingDays: WorkoutInput['trainingDays']): TrainingSplit {
  switch (trainingDays) {
    case 3:
      return 'full_body';
    case 4:
      return 'upper_lower';
    case 5:
      return 'push_pull_legs_upper_lower';
    case 6:
      return 'push_pull_legs';
  }
}

/**
 * Get the weekly training schedule based on split
 * 
 * @param split - Training split type
 * @returns Array of day focuses (7 days including rest days)
 */
function getWeeklySchedule(split: TrainingSplit): string[] {
  switch (split) {
    case 'full_body':
      // 3 days: Full Body x3
      return ['Full Body', 'Rest', 'Full Body', 'Rest', 'Full Body', 'Rest', 'Rest'];
    case 'upper_lower':
      // 4 days: Upper, Lower, Upper, Lower
      return ['Upper', 'Lower', 'Rest', 'Upper', 'Lower', 'Rest', 'Rest'];
    case 'push_pull_legs_upper_lower':
      // 5 days: Push, Pull, Legs, Upper, Lower
      return ['Push', 'Pull', 'Legs', 'Rest', 'Upper', 'Lower', 'Rest'];
    case 'push_pull_legs':
      // 6 days: Push, Pull, Legs, Push, Pull, Legs
      return ['Push', 'Pull', 'Legs', 'Push', 'Pull', 'Legs', 'Rest'];
  }
}

/**
 * Filter exercises by training location
 * 
 * @param location - User's training location
 * @returns Filtered exercise list
 * 
 * Requirements: 13.1, 13.2
 */
function filterExercisesByLocation(location: WorkoutInput['trainingLocation']): Exercise[] {
  return exerciseDatabase.filter((exercise) => {
    return exercise.location === location || exercise.location === 'both';
  });
}

/**
 * Get exercises for a specific category
 * 
 * @param exercises - Available exercises
 * @param category - Exercise category to filter by
 * @param count - Number of exercises to return
 * @param offset - Starting index offset for variety
 * @returns Array of exercises
 */
function getExercisesForCategory(
  exercises: Exercise[],
  category: ExerciseCategory,
  count: number,
  offset: number = 0
): Exercise[] {
  const filtered = exercises.filter((ex) => ex.category === category);
  // Apply offset and wrap around if needed
  const startIndex = offset % Math.max(1, filtered.length);
  const result: Exercise[] = [];
  
  for (let i = 0; i < count && i < filtered.length; i++) {
    const index = (startIndex + i) % filtered.length;
    result.push(filtered[index]);
  }
  
  return result;
}

/**
 * Prioritize exercises based on goal
 * Gain weight: Favor compound barbell movements (first in list)
 * Lose weight: Favor higher variety and metabolic exercises
 * 
 * @param exercises - Exercise list to prioritize
 * @param goal - User's fitness goal
 * @returns Prioritized exercise list
 */
function prioritizeExercisesByGoal(exercises: Exercise[], goal: WorkoutInput['goal']): Exercise[] {
  if (goal === 'gain_weight') {
    // Prioritize heavy compound movements (barbell exercises first)
    return [...exercises].sort((a, b) => {
      const aHasBarbell = a.equipment.includes('barbell');
      const bHasBarbell = b.equipment.includes('barbell');
      if (aHasBarbell && !bHasBarbell) return -1;
      if (!aHasBarbell && bHasBarbell) return 1;
      return 0;
    });
  } else if (goal === 'lose_weight') {
    // Mix bodyweight and varied equipment for metabolic effect
    return [...exercises].sort((a, b) => {
      const aIsBodyweight = a.equipment.includes('bodyweight');
      const bIsBodyweight = b.equipment.includes('bodyweight');
      // Spread bodyweight throughout the list
      if (aIsBodyweight && !bIsBodyweight) return Math.random() - 0.5;
      return 0;
    });
  }
  // stay_lean: balanced approach, keep default order
  return exercises;
}

/**
 * Get exercises for a training day based on focus and goal
 * 
 * @param focus - Training day focus
 * @param exercises - Available exercises
 * @param goal - User's fitness goal
 * @param dayIndex - Index of the day for exercise variety
 * @returns Array of exercises for the day
 */
function getExercisesForDay(
  focus: string,
  exercises: Exercise[],
  goal: WorkoutInput['goal'],
  dayIndex: number
): Exercise[] {
  const dayExercises: Exercise[] = [];

  // Adjust exercise count based on goal
  const exerciseCount = goal === 'gain_weight' ? 4 : goal === 'lose_weight' ? 6 : 5;

  // Use day index to rotate core exercises for variety
  const coreOffset = dayIndex;

  switch (focus) {
    case 'Push':
      dayExercises.push(...prioritizeExercisesByGoal(
        getExercisesForCategory(exercises, 'push', exerciseCount),
        goal
      ));
      dayExercises.push(...getExercisesForCategory(exercises, 'core', 1, coreOffset));
      break;
    case 'Pull':
      dayExercises.push(...prioritizeExercisesByGoal(
        getExercisesForCategory(exercises, 'pull', exerciseCount),
        goal
      ));
      dayExercises.push(...getExercisesForCategory(exercises, 'core', 1, coreOffset));
      break;
    case 'Legs':
      dayExercises.push(...prioritizeExercisesByGoal(
        getExercisesForCategory(exercises, 'legs', exerciseCount),
        goal
      ));
      dayExercises.push(...getExercisesForCategory(exercises, 'core', 1, coreOffset));
      break;
    case 'Upper':
      const pushCount = goal === 'gain_weight' ? 2 : 3;
      const pullCount = goal === 'gain_weight' ? 2 : 3;
      dayExercises.push(...prioritizeExercisesByGoal(
        getExercisesForCategory(exercises, 'push', pushCount),
        goal
      ));
      dayExercises.push(...prioritizeExercisesByGoal(
        getExercisesForCategory(exercises, 'pull', pullCount),
        goal
      ));
      break;
    case 'Lower':
      dayExercises.push(...prioritizeExercisesByGoal(
        getExercisesForCategory(exercises, 'legs', exerciseCount),
        goal
      ));
      dayExercises.push(...getExercisesForCategory(exercises, 'core', 1, coreOffset));
      break;
    case 'Full Body':
      const fbCount = goal === 'lose_weight' ? 2 : goal === 'gain_weight' ? 1 : 2;
      dayExercises.push(...prioritizeExercisesByGoal(
        getExercisesForCategory(exercises, 'push', fbCount),
        goal
      ));
      dayExercises.push(...prioritizeExercisesByGoal(
        getExercisesForCategory(exercises, 'pull', fbCount),
        goal
      ));
      dayExercises.push(...prioritizeExercisesByGoal(
        getExercisesForCategory(exercises, 'legs', fbCount),
        goal
      ));
      dayExercises.push(...getExercisesForCategory(exercises, 'core', 1, coreOffset));
      break;
  }

  // Add cardio based on goal - MORE for lose_weight, SOME for stay_lean, MINIMAL for gain_weight
  if (goal === 'lose_weight') {
    // Add cardio to EVERY training day
    dayExercises.push(...getExercisesForCategory(exercises, 'cardio', 1, dayIndex));
  } else if (goal === 'stay_lean' && (focus === 'Upper' || focus === 'Lower' || focus === 'Full Body')) {
    // Add cardio to some days
    dayExercises.push(...getExercisesForCategory(exercises, 'cardio', 1, dayIndex));
  }
  // gain_weight: No cardio added

  return dayExercises;
}

/**
 * Apply exercise prescription (sets, reps, rest) based on goal and experience
 * 
 * @param exercise - Exercise to prescribe
 * @param goal - User's fitness goal
 * @param experienceLevel - User's experience level
 * @returns Exercise detail with prescription
 * 
 * Requirements: 14.1, 14.2, 14.3, 15.1, 15.2, 15.3
 */
function prescribeExercise(
  exercise: Exercise,
  goal: WorkoutInput['goal'],
  experienceLevel: WorkoutInput['experienceLevel']
): ExerciseDetail {
  // Get volume based on experience level
  const volumeRange = VolumeRanges[experienceLevel];
  const sets = `${volumeRange.min}-${volumeRange.max}`;

  // Get reps and rest based on goal
  let reps = RepRanges[goal];
  let rest = RestPeriods[goal];

  // Special handling for cardio exercises
  if (exercise.category === 'cardio') {
    reps = '15-20 min';
    rest = 'N/A';
  }

  // Special handling for core exercises
  if (exercise.category === 'core') {
    reps = '12-15';
    rest = '60s';
  }

  return {
    name: exercise.name,
    sets,
    reps,
    rest,
  };
}

/**
 * Generate complete weekly workout plan
 * 
 * @param input - Workout generation input
 * @returns Complete workout plan with weekly schedule
 * 
 * Requirements: 12.1-12.4, 13.1-13.3, 14.1-14.3, 15.1-15.3, 16.1-16.6
 */
export function generateWorkout(input: WorkoutInput): WorkoutPlan {
  // Step 1: Determine training split
  const split = getTrainingSplit(input.trainingDays);

  // Step 2: Get weekly schedule
  const schedule = getWeeklySchedule(split);

  // Step 3: Filter exercises by location
  const availableExercises = filterExercisesByLocation(input.trainingLocation);

  // Step 4: Build workout days
  const weeklyPlan: WorkoutDay[] = schedule.map((focus, index) => {
    const day = `Day ${index + 1}`;

    if (focus === 'Rest') {
      return {
        day,
        focus: 'Rest',
        exercises: [],
      };
    }

    // Get exercises for this training day (pass index for variety)
    const dayExercises = getExercisesForDay(focus, availableExercises, input.goal, index);

    // Apply prescriptions
    const prescribedExercises = dayExercises.map((exercise) =>
      prescribeExercise(exercise, input.goal, input.experienceLevel)
    );

    return {
      day,
      focus,
      exercises: prescribedExercises,
    };
  });

  return {
    weeklyPlan,
    totalTrainingDays: input.trainingDays,
  };
}
