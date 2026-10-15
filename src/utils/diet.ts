/**
 * Diet Calculation Functions
 * 
 * Implements scientifically-based formulas for calculating BMR, TDEE,
 * and macronutrient targets using the Mifflin-St Jeor equation.
 * 
 * Requirements: 7.1-7.3, 8.1-8.3, 9.1-9.5, 10.1-10.5
 */

import type { Gender } from '../types/user';
import type { DietInput, DietResults } from '../types/diet';
import {
  ActivityMultipliers,
  GoalCalorieAdjustments,
  CalorieFloors,
  MacroConstants,
} from '../types/diet';

/**
 * Calculate Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation
 * 
 * The Mifflin-St Jeor equation is a scientifically validated formula for
 * estimating the number of calories a person burns at rest.
 * 
 * Male formula: BMR = 10 × weight + 6.25 × height - 5 × age + 5
 * Female formula: BMR = 10 × weight + 6.25 × height - 5 × age - 161
 * 
 * @param params - Object containing gender, weight, height, and age
 * @param params.gender - User's biological sex ('male' or 'female')
 * @param params.weight - User's weight in kilograms
 * @param params.height - User's height in centimeters
 * @param params.age - User's age in years
 * @returns Basal Metabolic Rate in calories per day
 * 
 * @example
 * // Calculate BMR for a 30-year-old male, 80kg, 180cm
 * const bmr = calculateBMR({
 *   gender: 'male',
 *   weight: 80,
 *   height: 180,
 *   age: 30
 * });
 * // Returns: 1850 (approximately)
 * 
 * Requirements: 7.1, 7.2, 7.3
 */
export function calculateBMR(params: {
  gender: Gender;
  weight: number;
  height: number;
  age: number;
}): number {
  const { gender, weight, height, age } = params;

  // Base calculation: 10 × weight + 6.25 × height - 5 × age
  const baseCalculation = 10 * weight + 6.25 * height - 5 * age;

  // Apply gender-specific adjustment
  if (gender === 'male') {
    // Male formula: base + 5
    return baseCalculation + 5;
  } else {
    // Female formula: base - 161
    return baseCalculation - 161;
  }
}

/**
 * Calculate Total Daily Energy Expenditure (TDEE)
 * 
 * TDEE is BMR multiplied by an activity factor that accounts for
 * physical activity throughout the day.
 * 
 * @param bmr - Basal Metabolic Rate in calories
 * @param activityLevel - User's daily activity level
 * @returns Total Daily Energy Expenditure in calories
 * 
 * Requirements: 8.1, 8.2, 8.3
 */
export function calculateTDEE(bmr: number, activityLevel: DietInput['activityLevel']): number {
  return bmr * ActivityMultipliers[activityLevel];
}

/**
 * Apply goal-based calorie adjustment and gender-based floor
 * 
 * Adjusts TDEE based on fitness goal (gain/maintain/lose weight)
 * and enforces minimum safe calorie intake based on gender.
 * 
 * @param tdee - Total Daily Energy Expenditure in calories
 * @param goal - User's fitness goal
 * @param gender - User's biological sex
 * @returns Goal-adjusted daily calorie target
 * 
 * Requirements: 9.1, 9.2, 9.3, 9.4, 9.5
 */
export function calculateDailyCalories(
  tdee: number,
  goal: DietInput['goal'],
  gender: Gender
): number {
  // Apply goal-based adjustment
  const adjustedCalories = tdee + GoalCalorieAdjustments[goal];
  
  // Apply gender-based floor
  const floor = CalorieFloors[gender];
  
  return Math.max(adjustedCalories, floor);
}

/**
 * Calculate daily macronutrient targets
 * 
 * Computes protein, fat, carbohydrate, and fiber targets based on
 * daily calorie target and body weight.
 * 
 * @param dailyCalories - Goal-adjusted daily calorie target
 * @param weight - User's weight in kilograms
 * @returns Object containing protein, fat, carbs, and fiber in grams
 * 
 * Requirements: 10.1, 10.2, 10.3, 10.4, 10.5
 */
export function calculateMacros(
  dailyCalories: number,
  weight: number
): {
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
} {
  // Protein: 2.0 g/kg body weight
  const protein = weight * MacroConstants.proteinPerKg;
  const proteinCalories = protein * MacroConstants.caloriesPerGramProtein;

  // Fat: 25% of total calories
  const fatCalories = dailyCalories * MacroConstants.fatPercentage;
  const fat = fatCalories / MacroConstants.caloriesPerGramFat;

  // Carbs: Remaining calories
  const carbCalories = dailyCalories - proteinCalories - fatCalories;
  const carbs = carbCalories / MacroConstants.caloriesPerGramCarbs;

  // Fiber: 14g per 1000 calories
  const fiber = (dailyCalories / 1000) * MacroConstants.fiberPer1000Calories;

  return {
    protein: Math.round(protein * 10) / 10, // Round to 1 decimal
    fat: Math.round(fat * 10) / 10,
    carbs: Math.round(carbs * 10) / 10,
    fiber: Math.round(fiber * 10) / 10,
  };
}

/**
 * Complete diet calculation pipeline
 * 
 * Orchestrates all diet calculations from user input to final results.
 * Computes BMR → TDEE → Daily Calories → Macronutrients.
 * 
 * @param input - User diet input data
 * @returns Complete diet calculation results
 * 
 * Requirements: 7.1-7.3, 8.1-8.3, 9.1-9.5, 10.1-10.5
 */
export function calculateDiet(input: DietInput): DietResults {
  // Step 1: Calculate BMR
  const bmr = calculateBMR({
    gender: input.gender,
    weight: input.weight,
    height: input.height,
    age: input.age,
  });

  // Step 2: Calculate TDEE
  const tdee = calculateTDEE(bmr, input.activityLevel);

  // Step 3: Apply goal adjustment and floor
  const dailyCalories = calculateDailyCalories(tdee, input.goal, input.gender);

  // Step 4: Calculate macronutrients
  const macros = calculateMacros(dailyCalories, input.weight);

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    dailyCalories: Math.round(dailyCalories),
    ...macros,
  };
}
