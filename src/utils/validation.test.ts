/**
 * Validation Utility Tests
 * 
 * Unit tests for validation functions
 */

import { describe, it, expect } from 'vitest';
import {
  validateNumeric,
  validateAge,
  validateWeight,
  validateHeight,
  validateUserInput,
} from './validation';
import type { UserInput } from '../types';

describe('validateNumeric', () => {
  it('should return null for valid numbers', () => {
    expect(validateNumeric(42)).toBeNull();
    expect(validateNumeric('42')).toBeNull();
    expect(validateNumeric(0)).toBeNull();
    expect(validateNumeric('0')).toBeNull();
  });

  it('should return error for null or undefined', () => {
    expect(validateNumeric(null)).toBe('This field is required');
    expect(validateNumeric(undefined)).toBe('This field is required');
    expect(validateNumeric('')).toBe('This field is required');
  });

  it('should return error for non-numeric strings', () => {
    expect(validateNumeric('abc')).toBe('Please enter a valid number');
    expect(validateNumeric('12abc')).toBe('Please enter a valid number');
    expect(validateNumeric('ab12')).toBe('Please enter a valid number');
  });

  it('should return error for NaN', () => {
    expect(validateNumeric(NaN)).toBe('Please enter a valid number');
  });
});

describe('validateAge', () => {
  it('should return null for valid age in range', () => {
    expect(validateAge(10)).toBeNull();
    expect(validateAge(50)).toBeNull();
    expect(validateAge(100)).toBeNull();
    expect(validateAge('25')).toBeNull();
  });

  it('should return error for age below minimum', () => {
    expect(validateAge(9)).toBe('Age must be between 10 and 100');
    expect(validateAge(0)).toBe('Age must be between 10 and 100');
  });

  it('should return error for age above maximum', () => {
    expect(validateAge(101)).toBe('Age must be between 10 and 100');
    expect(validateAge(150)).toBe('Age must be between 10 and 100');
  });

  it('should return error for non-numeric values', () => {
    expect(validateAge('abc')).toBe('Please enter a valid number');
    expect(validateAge(null)).toBe('This field is required');
  });
});

describe('validateWeight', () => {
  it('should return null for valid weight in range', () => {
    expect(validateWeight(30)).toBeNull();
    expect(validateWeight(75)).toBeNull();
    expect(validateWeight(300)).toBeNull();
    expect(validateWeight('80')).toBeNull();
  });

  it('should return error for weight below minimum', () => {
    expect(validateWeight(29)).toBe('Weight must be between 30 and 300 kg');
    expect(validateWeight(0)).toBe('Weight must be between 30 and 300 kg');
  });

  it('should return error for weight above maximum', () => {
    expect(validateWeight(301)).toBe('Weight must be between 30 and 300 kg');
    expect(validateWeight(500)).toBe('Weight must be between 30 and 300 kg');
  });

  it('should return error for non-numeric values', () => {
    expect(validateWeight('abc')).toBe('Please enter a valid number');
    expect(validateWeight(undefined)).toBe('This field is required');
  });
});

describe('validateHeight', () => {
  it('should return null for valid height in range', () => {
    expect(validateHeight(100)).toBeNull();
    expect(validateHeight(175)).toBeNull();
    expect(validateHeight(250)).toBeNull();
    expect(validateHeight('180')).toBeNull();
  });

  it('should return error for height below minimum', () => {
    expect(validateHeight(99)).toBe('Height must be between 100 and 250 cm');
    expect(validateHeight(50)).toBe('Height must be between 100 and 250 cm');
  });

  it('should return error for height above maximum', () => {
    expect(validateHeight(251)).toBe('Height must be between 100 and 250 cm');
    expect(validateHeight(300)).toBe('Height must be between 100 and 250 cm');
  });

  it('should return error for non-numeric values', () => {
    expect(validateHeight('abc')).toBe('Please enter a valid number');
    expect(validateHeight('')).toBe('This field is required');
  });
});

describe('validateUserInput', () => {
  const validInput: UserInput = {
    gender: 'male',
    age: 25,
    weight: 75,
    height: 180,
    activityLevel: 'medium',
    goal: 'stay_lean',
    trainingLocation: 'gym',
    trainingDays: 4,
    experienceLevel: 'intermediate',
  };

  it('should return valid result for complete valid input', () => {
    const result = validateUserInput(validInput);
    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it('should return error for missing required fields', () => {
    const result = validateUserInput({
      age: 25,
      weight: 75,
      height: 180,
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors.general).toContain('gender');
    expect(result.errors.general).toContain('activity level');
    expect(result.errors.general).toContain('goal');
  });

  it('should return error for invalid age', () => {
    const result = validateUserInput({
      ...validInput,
      age: 5,
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors.age).toBe('Age must be between 10 and 100');
  });

  it('should return error for invalid weight', () => {
    const result = validateUserInput({
      ...validInput,
      weight: 350,
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors.weight).toBe('Weight must be between 30 and 300 kg');
  });

  it('should return error for invalid height', () => {
    const result = validateUserInput({
      ...validInput,
      height: 90,
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors.height).toBe('Height must be between 100 and 250 cm');
  });

  it('should return multiple errors when multiple fields are invalid', () => {
    const result = validateUserInput({
      age: 5,
      weight: 350,
      height: 90,
    });
    
    expect(result.isValid).toBe(false);
    expect(result.errors.age).toBeDefined();
    expect(result.errors.weight).toBeDefined();
    expect(result.errors.height).toBeDefined();
    expect(result.errors.general).toBeDefined();
  });

  it('should handle boundary values correctly', () => {
    const boundaryInput: UserInput = {
      ...validInput,
      age: 10,
      weight: 30,
      height: 100,
    };
    
    const result = validateUserInput(boundaryInput);
    expect(result.isValid).toBe(true);
  });

  it('should handle upper boundary values correctly', () => {
    const boundaryInput: UserInput = {
      ...validInput,
      age: 100,
      weight: 300,
      height: 250,
    };
    
    const result = validateUserInput(boundaryInput);
    expect(result.isValid).toBe(true);
  });
});
