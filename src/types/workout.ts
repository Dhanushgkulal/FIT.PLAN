/**
 * Workout Plan Types
 * 
 * Defines types for workout plan generation and exercise database
 * Requirements: 12.1-12.4, 13.1-13.3, 14.1-14.3, 15.1-15.3, 16.1-16.6
 */

import type { TrainingLocation, TrainingDays, ExperienceLevel, Goal } from './user';

/**
 * Exercise category for training split organization
 */
export type ExerciseCategory =
  | 'push'
  | 'pull'
  | 'legs'
  | 'core'
  | 'cardio'
  | 'upper'
  | 'lower'
  | 'full_body';

/**
 * Input data required for workout plan generation
 */
export interface WorkoutInput {
  trainingDays: TrainingDays;
  trainingLocation: TrainingLocation;
  experienceLevel: ExperienceLevel;
  goal: Goal;
}

/**
 * Exercise database entry
 * 
 * @property name - Exercise name
 * @property category - Exercise category for split organization
 * @property location - Where exercise can be performed
 * @property equipment - Required equipment list
 */
export interface Exercise {
  name: string;
  category: ExerciseCategory;
  location: 'home' | 'gym' | 'both';
  equipment: string[];
}

/**
 * Exercise detail with prescription (sets, reps, rest)
 * 
 * @property name - Exercise name
 * @property sets - Number of sets (e.g., "3-4")
 * @property reps - Number of repetitions (e.g., "6-10")
 * @property rest - Rest period between sets (e.g., "90-120s")
 */
export interface ExerciseDetail {
  name: string;
  sets: string; // e.g., "3-4"
  reps: string; // e.g., "6-10"
  rest: string; // e.g., "90-120s"
}

/**
 * Single day in the workout plan
 * 
 * @property day - Day identifier (e.g., "Day 1")
 * @property focus - Training focus for the day (e.g., "Push", "Pull", "Rest")
 * @property exercises - List of exercises with prescriptions
 */
export interface WorkoutDay {
  day: string; // "Day 1", "Day 2", etc.
  focus: string; // "Push", "Pull", "Legs", "Upper", "Lower", "Full Body", "Rest"
  exercises: ExerciseDetail[];
}

/**
 * Complete weekly workout plan
 * 
 * @property weeklyPlan - Array of workout days (7 days, includes rest days)
 * @property totalTrainingDays - Number of training days (excluding rest days)
 */
export interface WorkoutPlan {
  weeklyPlan: WorkoutDay[];
  totalTrainingDays: number;
}

/**
 * Training split type based on days per week
 */
export type TrainingSplit =
  | 'full_body' // 3 days
  | 'upper_lower' // 4 days
  | 'push_pull_legs_upper_lower' // 5 days
  | 'push_pull_legs'; // 6 days

/**
 * Volume prescription ranges by experience level
 */
export const VolumeRanges: Record<ExperienceLevel, { min: number; max: number }> = {
  beginner: { min: 2, max: 3 },
  intermediate: { min: 3, max: 4 },
  advanced: { min: 4, max: 5 },
} as const;

/**
 * Rep range prescriptions by goal
 */
export const RepRanges: Record<Goal, string> = {
  gain_weight: '6-10',
  stay_lean: '8-12',
  lose_weight: '10-15',
} as const;

/**
 * Rest period prescriptions by goal
 */
export const RestPeriods: Record<Goal, string> = {
  gain_weight: '90-120s',
  stay_lean: '60-90s',
  lose_weight: '60s',
} as const;
