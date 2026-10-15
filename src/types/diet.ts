/**
 * Diet Calculation Types
 * 
 * Defines types for diet calculation results and intermediate values
 * Requirements: 7.1-7.3, 8.1-8.3, 9.1-9.5, 10.1-10.5, 11.1-11.7
 */

import type { Gender, ActivityLevel, Goal } from './user';

/**
 * Input data required for diet calculations
 */
export interface DietInput {
  gender: Gender;
  age: number; // years
  weight: number; // kg
  height: number; // cm
  activityLevel: ActivityLevel;
  goal: Goal;
}

/**
 * Complete diet calculation results
 * 
 * @property bmr - Basal Metabolic Rate in calories (energy burned at rest)
 * @property tdee - Total Daily Energy Expenditure in calories (total energy burned per day)
 * @property dailyCalories - Goal-adjusted daily calorie target
 * @property protein - Daily protein target in grams
 * @property carbs - Daily carbohydrate target in grams
 * @property fat - Daily fat target in grams
 * @property fiber - Daily fiber target in grams
 */
export interface DietResults {
  bmr: number; // Basal Metabolic Rate in calories
  tdee: number; // Total Daily Energy Expenditure in calories
  dailyCalories: number; // Goal-adjusted daily calorie target
  protein: number; // grams per day
  carbs: number; // grams per day
  fat: number; // grams per day
  fiber: number; // grams per day
}

/**
 * Activity level multipliers for TDEE calculation
 * Based on standard activity factors
 */
export const ActivityMultipliers: Record<ActivityLevel, number> = {
  low: 1.375,
  medium: 1.55,
  high: 1.725,
} as const;

/**
 * Goal-based calorie adjustments
 * Positive values add calories, negative values subtract
 */
export const GoalCalorieAdjustments: Record<Goal, number> = {
  gain_weight: 400,
  stay_lean: 0,
  lose_weight: -500,
} as const;

/**
 * Minimum daily calorie floors by gender
 * Ensures safe minimum calorie intake
 */
export const CalorieFloors: Record<Gender, number> = {
  male: 1500,
  female: 1200,
} as const;

/**
 * Macronutrient calculation constants
 */
export const MacroConstants = {
  proteinPerKg: 2.0, // grams of protein per kg of body weight
  fatPercentage: 0.25, // 25% of total calories from fat
  caloriesPerGramProtein: 4,
  caloriesPerGramCarbs: 4,
  caloriesPerGramFat: 9,
  fiberPer1000Calories: 14, // grams of fiber per 1000 calories
  calorieBalanceTolerance: 10, // acceptable difference in calorie balance (calories)
} as const;
