/**
 * User Input Types
 * 
 * Defines types for user data collection and validation
 * Requirements: 5.1-5.9, 6.1-6.6
 */

/**
 * User's biological sex for BMR calculation
 */
export type Gender = 'male' | 'female';

/**
 * User's daily physical activity level
 */
export type ActivityLevel = 'low' | 'medium' | 'high';

/**
 * User's fitness goal
 */
export type Goal = 'gain_weight' | 'stay_lean' | 'lose_weight';

/**
 * Where the user trains
 */
export type TrainingLocation = 'home' | 'gym';

/**
 * Number of training days per week
 */
export type TrainingDays = 3 | 4 | 5 | 6;

/**
 * User's training experience level
 */
export type ExperienceLevel = 'beginner' | 'intermediate' | 'advanced';

/**
 * Complete user input data for fitness plan generation
 * 
 * @property gender - User's biological sex (for BMR calculation)
 * @property age - User's age in years (range: 10-100)
 * @property weight - User's weight in kilograms (range: 30-300)
 * @property height - User's height in centimeters (range: 100-250)
 * @property activityLevel - User's daily physical activity level
 * @property goal - User's fitness objective
 * @property trainingLocation - Where user trains (home or gym)
 * @property trainingDays - Number of training days per week
 * @property experienceLevel - User's training experience level
 */
export interface UserInput {
  gender: Gender;
  age: number; // years, range: 10-100
  weight: number; // kg, range: 30-300
  height: number; // cm, range: 100-250
  activityLevel: ActivityLevel;
  goal: Goal;
  trainingLocation: TrainingLocation;
  trainingDays: TrainingDays;
  experienceLevel: ExperienceLevel;
}

/**
 * Validation constraints for user input fields
 */
export const UserInputConstraints = {
  age: { min: 10, max: 100 },
  weight: { min: 30, max: 300 },
  height: { min: 100, max: 250 },
} as const;
