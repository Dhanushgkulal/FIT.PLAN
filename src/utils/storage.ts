/**
 * Storage Utility Functions
 * 
 * Handles localStorage persistence for calculation results
 * Requirements: 18.1, 18.2, 18.3, 18.4
 */

import type { StoredResults } from '../types/storage';
import { STORAGE_KEY } from '../types/storage';

/**
 * Validate stored results structure
 * 
 * @param data - Data to validate
 * @returns True if data is valid StoredResults
 */
function isValidStoredResults(data: unknown): data is StoredResults {
  if (!data || typeof data !== 'object') return false;

  const result = data as Partial<StoredResults>;

  return (
    typeof result.timestamp === 'number' &&
    result.userInput !== undefined &&
    result.dietResults !== undefined &&
    result.workoutPlan !== undefined
  );
}

/**
 * Save calculation results to localStorage
 * 
 * @param results - Complete results to save
 * @returns True if save successful, false otherwise
 * 
 * Requirements: 18.1
 */
export function saveResults(results: StoredResults): boolean {
  try {
    const serialized = JSON.stringify(results);
    localStorage.setItem(STORAGE_KEY, serialized);
    return true;
  } catch (error) {
    console.error('Failed to save results to localStorage:', error);
    return false;
  }
}

/**
 * Load calculation results from localStorage
 * 
 * @returns Stored results if available and valid, null otherwise
 * 
 * Requirements: 18.2, 18.3
 */
export function loadResults(): StoredResults | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    
    if (!data) {
      return null;
    }

    const parsed = JSON.parse(data);

    // Validate structure
    if (!isValidStoredResults(parsed)) {
      console.warn('Invalid stored results structure, clearing storage');
      clearResults();
      return null;
    }

    return parsed;
  } catch (error) {
    console.error('Failed to load results from localStorage:', error);
    clearResults();
    return null;
  }
}

/**
 * Clear stored results from localStorage
 * 
 * Requirements: 18.4
 */
export function clearResults(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear results from localStorage:', error);
  }
}
