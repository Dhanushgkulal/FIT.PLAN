/**
 * Test file to verify all type exports work correctly
 * This file should be deleted after verification
 */

import type {
  // User types
  Gender,
  ActivityLevel,
  Goal,
  TrainingLocation,
  TrainingDays,
  ExperienceLevel,
  UserInput,
  // Diet types
  DietInput,
  DietResults,
  // Workout types
  ExerciseCategory,
  WorkoutInput,
  Exercise,
  ExerciseDetail,
  WorkoutDay,
  WorkoutPlan,
  TrainingSplit,
  // Validation types
  ValidationErrors,
  ValidationResult,
  ValidationRule,
  FieldValidator,
  // Storage types
  StoredResults,
} from './index';

import {
  UserInputConstraints,
  ActivityMultipliers,
  GoalCalorieAdjustments,
  CalorieFloors,
  MacroConstants,
  VolumeRanges,
  RepRanges,
  RestPeriods,
  STORAGE_KEY,
} from './index';

// Type checks - these should all compile successfully
const testGender: Gender = 'male';
const testActivity: ActivityLevel = 'medium';
const testGoal: Goal = 'gain_weight';
const testLocation: TrainingLocation = 'gym';
const testDays: TrainingDays = 5;
const testExperience: ExperienceLevel = 'intermediate';
const testCategory: ExerciseCategory = 'push';
const testSplit: TrainingSplit = 'push_pull_legs';

// Object type checks
const testUserInput: UserInput = {
  gender: 'male',
  age: 25,
  weight: 75,
  height: 180,
  activityLevel: 'medium',
  goal: 'gain_weight',
  trainingLocation: 'gym',
  trainingDays: 5,
  experienceLevel: 'intermediate',
};

const testDietResults: DietResults = {
  bmr: 1800,
  tdee: 2500,
  dailyCalories: 2900,
  protein: 150,
  carbs: 350,
  fat: 80,
  fiber: 40,
};

const testExercise: Exercise = {
  name: 'Bench Press',
  category: 'push',
  location: 'gym',
  equipment: ['barbell', 'bench'],
};

const testWorkoutDay: WorkoutDay = {
  day: 'Day 1',
  focus: 'Push',
  exercises: [
    {
      name: 'Bench Press',
      sets: '4-5',
      reps: '6-10',
      rest: '90-120s',
    },
  ],
};

const testWorkoutPlan: WorkoutPlan = {
  weeklyPlan: [testWorkoutDay],
  totalTrainingDays: 5,
};

const testValidationErrors: ValidationErrors = {
  age: 'Age must be between 10 and 100',
  general: 'Please fix the errors above',
};

const testStoredResults: StoredResults = {
  timestamp: Date.now(),
  userInput: testUserInput,
  dietResults: testDietResults,
  workoutPlan: testWorkoutPlan,
};

// Constant checks
const ageMin = UserInputConstraints.age.min; // should be 10
const activityMultiplier = ActivityMultipliers.medium; // should be 1.55
const calorieAdjustment = GoalCalorieAdjustments.gain_weight; // should be 400
const maleFloor = CalorieFloors.male; // should be 1500
const proteinRatio = MacroConstants.proteinPerKg; // should be 2.0
const beginnerSets = VolumeRanges.beginner; // should be { min: 2, max: 3 }
const bulkReps = RepRanges.gain_weight; // should be '6-10'
const bulkRest = RestPeriods.gain_weight; // should be '90-120s'
const storageKey = STORAGE_KEY; // should be 'fitplan_results'

console.log('All type imports verified successfully!');
