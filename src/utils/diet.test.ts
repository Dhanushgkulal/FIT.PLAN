/**
 * Diet Calculation Unit Tests
 * 
 * Tests for BMR, TDEE, and macronutrient calculation functions
 */

import { describe, it, expect } from 'vitest';
import { calculateBMR } from './diet';

describe('calculateBMR', () => {
  describe('Male BMR calculation', () => {
    it('should calculate BMR correctly for a typical male', () => {
      // Test case: 30-year-old male, 80kg, 180cm
      // Expected: 10 × 80 + 6.25 × 180 - 5 × 30 + 5
      //         = 800 + 1125 - 150 + 5 = 1780
      const result = calculateBMR({
        gender: 'male',
        weight: 80,
        height: 180,
        age: 30,
      });
      expect(result).toBe(1780);
    });

    it('should calculate BMR correctly for a young male', () => {
      // Test case: 20-year-old male, 70kg, 175cm
      // Expected: 10 × 70 + 6.25 × 175 - 5 × 20 + 5
      //         = 700 + 1093.75 - 100 + 5 = 1698.75
      const result = calculateBMR({
        gender: 'male',
        weight: 70,
        height: 175,
        age: 20,
      });
      expect(result).toBe(1698.75);
    });

    it('should calculate BMR correctly for an older male', () => {
      // Test case: 60-year-old male, 90kg, 170cm
      // Expected: 10 × 90 + 6.25 × 170 - 5 × 60 + 5
      //         = 900 + 1062.5 - 300 + 5 = 1667.5
      const result = calculateBMR({
        gender: 'male',
        weight: 90,
        height: 170,
        age: 60,
      });
      expect(result).toBe(1667.5);
    });

    it('should calculate BMR correctly for minimum valid male inputs', () => {
      // Test case: 10-year-old male, 30kg, 100cm
      // Expected: 10 × 30 + 6.25 × 100 - 5 × 10 + 5
      //         = 300 + 625 - 50 + 5 = 880
      const result = calculateBMR({
        gender: 'male',
        weight: 30,
        height: 100,
        age: 10,
      });
      expect(result).toBe(880);
    });

    it('should calculate BMR correctly for maximum valid male inputs', () => {
      // Test case: 100-year-old male, 300kg, 250cm
      // Expected: 10 × 300 + 6.25 × 250 - 5 × 100 + 5
      //         = 3000 + 1562.5 - 500 + 5 = 4067.5
      const result = calculateBMR({
        gender: 'male',
        weight: 300,
        height: 250,
        age: 100,
      });
      expect(result).toBe(4067.5);
    });
  });

  describe('Female BMR calculation', () => {
    it('should calculate BMR correctly for a typical female', () => {
      // Test case: 30-year-old female, 65kg, 165cm
      // Expected: 10 × 65 + 6.25 × 165 - 5 × 30 - 161
      //         = 650 + 1031.25 - 150 - 161 = 1370.25
      const result = calculateBMR({
        gender: 'female',
        weight: 65,
        height: 165,
        age: 30,
      });
      expect(result).toBe(1370.25);
    });

    it('should calculate BMR correctly for a young female', () => {
      // Test case: 25-year-old female, 55kg, 160cm
      // Expected: 10 × 55 + 6.25 × 160 - 5 × 25 - 161
      //         = 550 + 1000 - 125 - 161 = 1264
      const result = calculateBMR({
        gender: 'female',
        weight: 55,
        height: 160,
        age: 25,
      });
      expect(result).toBe(1264);
    });

    it('should calculate BMR correctly for an older female', () => {
      // Test case: 50-year-old female, 70kg, 158cm
      // Expected: 10 × 70 + 6.25 × 158 - 5 × 50 - 161
      //         = 700 + 987.5 - 250 - 161 = 1276.5
      const result = calculateBMR({
        gender: 'female',
        weight: 70,
        height: 158,
        age: 50,
      });
      expect(result).toBe(1276.5);
    });

    it('should calculate BMR correctly for minimum valid female inputs', () => {
      // Test case: 10-year-old female, 30kg, 100cm
      // Expected: 10 × 30 + 6.25 × 100 - 5 × 10 - 161
      //         = 300 + 625 - 50 - 161 = 714
      const result = calculateBMR({
        gender: 'female',
        weight: 30,
        height: 100,
        age: 10,
      });
      expect(result).toBe(714);
    });

    it('should calculate BMR correctly for maximum valid female inputs', () => {
      // Test case: 100-year-old female, 300kg, 250cm
      // Expected: 10 × 300 + 6.25 × 250 - 5 × 100 - 161
      //         = 3000 + 1562.5 - 500 - 161 = 3901.5
      const result = calculateBMR({
        gender: 'female',
        weight: 300,
        height: 250,
        age: 100,
      });
      expect(result).toBe(3901.5);
    });
  });

  describe('Gender difference validation', () => {
    it('should calculate higher BMR for males than females with same parameters', () => {
      // Test case: 30-year-old, 70kg, 170cm
      const maleBMR = calculateBMR({
        gender: 'male',
        weight: 70,
        height: 170,
        age: 30,
      });
      
      const femaleBMR = calculateBMR({
        gender: 'female',
        weight: 70,
        height: 170,
        age: 30,
      });

      // Male BMR should be 166 calories higher (5 - (-161) = 166)
      expect(maleBMR - femaleBMR).toBe(166);
    });
  });
});
