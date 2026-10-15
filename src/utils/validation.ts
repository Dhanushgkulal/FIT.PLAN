/**
 * Validation Utility Functions
 * 
 * Provides validation functions for user input fields
 * Requirements: 6.1-6.6
 */

import type { UserInput, ValidationErrors, ValidationResult } from '../types';
import { UserInputConstraints } from '../types';

/**
 * Validates that a value is numeric
 * 
 * @param value - Value to validate
 * @returns Error message if invalid, null if valid
 * 
 * **Validates: Requirements 6.5**
 */
export function validateNumeric(value: unknown): string | null {
  if (value === null || value === undefined || value === '') {
    return 'This field is required';
  }

  const num = Number(value);
  
  if (isNaN(num)) {
    return 'Please enter a valid number';
  }

  return null;
}

/**
 * Validates age is within acceptable range (10-100 years)
 * 
 * @param age - Age value to validate
 * @returns Error message if invalid, null if valid
 * 
 * **Validates: Requirements 6.2**
 */
export function validateAge(age: unknown): string | null {
  const numericError = validateNumeric(age);
  if (numericError) {
    return numericError;
  }

  const ageNum = Number(age);
  const { min, max } = UserInputConstraints.age;

  if (ageNum < min || ageNum > max) {
    return `Age must be between ${min} and ${max}`;
  }

  return null;
}

/**
 * Validates weight is within acceptable range (30-300 kg)
 * 
 * @param weight - Weight value to validate in kilograms
 * @returns Error message if invalid, null if valid
 * 
 * **Validates: Requirements 6.3**
 */
export function validateWeight(weight: unknown): string | null {
  const numericError = validateNumeric(weight);
  if (numericError) {
    return numericError;
  }

  const weightNum = Number(weight);
  const { min, max } = UserInputConstraints.weight;

  if (weightNum < min || weightNum > max) {
    return `Weight must be between ${min} and ${max} kg`;
  }

  return null;
}

/**
 * Validates height is within acceptable range (100-250 cm)
 * 
 * @param height - Height value to validate in centimeters
 * @returns Error message if invalid, null if valid
 * 
 * **Validates: Requirements 6.4**
 */
export function validateHeight(height: unknown): string | null {
  const numericError = validateNumeric(height);
  if (numericError) {
    return numericError;
  }

  const heightNum = Number(height);
  const { min, max } = UserInputConstraints.height;

  if (heightNum < min || heightNum > max) {
    return `Height must be between ${min} and ${max} cm`;
  }

  return null;
}

/**
 * Validates all user input fields
 * 
 * @param input - Partial user input to validate
 * @returns ValidationResult containing isValid flag and error messages
 * 
 * **Validates: Requirements 6.1, 6.6**
 */
export function validateUserInput(input: Partial<UserInput>): ValidationResult {
  const errors: ValidationErrors = {};
  const missingFields: string[] = [];

  // Required field checks
  if (!input.gender) {
    missingFields.push('gender');
  }

  if (!input.activityLevel) {
    missingFields.push('activity level');
  }

  if (!input.goal) {
    missingFields.push('goal');
  }

  if (!input.trainingLocation) {
    missingFields.push('training location');
  }

  if (!input.trainingDays) {
    missingFields.push('training days');
  }

  if (!input.experienceLevel) {
    missingFields.push('experience level');
  }

  // Validate numeric fields
  const ageError = validateAge(input.age);
  if (ageError) {
    errors.age = ageError;
  }

  const weightError = validateWeight(input.weight);
  if (weightError) {
    errors.weight = weightError;
  }

  const heightError = validateHeight(input.height);
  if (heightError) {
    errors.height = heightError;
  }

  // Add general error message if there are missing fields
  if (missingFields.length > 0) {
    errors.general = `Please complete the following fields: ${missingFields.join(', ')}`;
  }

  // Determine if validation passed
  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
  };
}
