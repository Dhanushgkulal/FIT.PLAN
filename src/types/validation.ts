/**
 * Validation Types
 * 
 * Defines types for input validation and error handling
 * Requirements: 6.1-6.6
 */

import type { UserInput } from './user';

/**
 * Validation error messages for form fields
 * Each key corresponds to a field in UserInput
 */
export type ValidationErrors = Partial<Record<keyof UserInput, string>> & {
  general?: string; // For general form-level errors
};

/**
 * Field validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: ValidationErrors;
}

/**
 * Validation rule function type
 */
export type ValidationRule<T> = (value: T) => string | null;

/**
 * Field validation configuration
 */
export interface FieldValidator<T> {
  rules: ValidationRule<T>[];
  required?: boolean;
}
