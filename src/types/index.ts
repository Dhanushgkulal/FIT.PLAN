/**
 * FitPlan Type Definitions Index
 * 
 * Central export point for all type definitions
 */

// User input types
export type {
  Gender,
  ActivityLevel,
  Goal,
  TrainingLocation,
  TrainingDays,
  ExperienceLevel,
  UserInput,
} from './user';
export { UserInputConstraints } from './user';

// Diet calculation types
export type { DietInput, DietResults } from './diet';
export {
  ActivityMultipliers,
  GoalCalorieAdjustments,
  CalorieFloors,
  MacroConstants,
} from './diet';

// Workout plan types
export type {
  ExerciseCategory,
  WorkoutInput,
  Exercise,
  ExerciseDetail,
  WorkoutDay,
  WorkoutPlan,
  TrainingSplit,
} from './workout';
export { VolumeRanges, RepRanges, RestPeriods } from './workout';

// Validation types
export type {
  ValidationErrors,
  ValidationResult,
  ValidationRule,
  FieldValidator,
} from './validation';

// Storage types
export type { StoredResults } from './storage';
export { STORAGE_KEY } from './storage';
