/**
 * Utility Functions Index
 * 
 * Central export point for all utility functions
 */

export {
  validateNumeric,
  validateAge,
  validateWeight,
  validateHeight,
  validateUserInput,
} from './validation';

export {
  calculateBMR,
  calculateTDEE,
  calculateDailyCalories,
  calculateMacros,
  calculateDiet,
} from './diet';

export { generateWorkout } from './workout';

export { saveResults, loadResults, clearResults } from './storage';
