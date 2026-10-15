/**
 * Storage Types
 * 
 * Defines types for localStorage persistence
 * Requirements: 18.1-18.4
 */

import type { UserInput } from './user';
import type { DietResults } from './diet';
import type { WorkoutPlan } from './workout';

/**
 * Complete results data structure for localStorage
 * 
 * @property timestamp - Unix timestamp when results were generated
 * @property userInput - Original user input data
 * @property dietResults - Calculated diet targets
 * @property workoutPlan - Generated workout plan
 */
export interface StoredResults {
  timestamp: number;
  userInput: UserInput;
  dietResults: DietResults;
  workoutPlan: WorkoutPlan;
}

/**
 * localStorage key for storing results
 */
export const STORAGE_KEY = 'fitplan_results' as const;
