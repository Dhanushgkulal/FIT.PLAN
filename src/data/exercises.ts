/**
 * Exercise Database
 * 
 * Comprehensive exercise library organized by category and location.
 * Requirements: 13.1, 13.2, 13.3
 */

import type { Exercise } from '../types/workout';

/**
 * Complete exercise database
 * Includes exercises for home and gym training across all movement categories
 */
export const exerciseDatabase: Exercise[] = [
  // PUSH EXERCISES - Gym exercises prioritized first
  {
    name: 'Barbell Bench Press',
    category: 'push',
    location: 'gym',
    equipment: ['barbell', 'bench'],
  },
  {
    name: 'Incline Barbell Press',
    category: 'push',
    location: 'gym',
    equipment: ['barbell', 'bench'],
  },
  {
    name: 'Dumbbell Bench Press',
    category: 'push',
    location: 'gym',
    equipment: ['dumbbells', 'bench'],
  },
  {
    name: 'Incline Dumbbell Press',
    category: 'push',
    location: 'gym',
    equipment: ['dumbbells', 'bench'],
  },
  {
    name: 'Overhead Press (Barbell)',
    category: 'push',
    location: 'gym',
    equipment: ['barbell'],
  },
  {
    name: 'Dumbbell Shoulder Press',
    category: 'push',
    location: 'gym',
    equipment: ['dumbbells'],
  },
  {
    name: 'Chest Dips',
    category: 'push',
    location: 'gym',
    equipment: ['dip station'],
  },
  {
    name: 'Cable Chest Fly',
    category: 'push',
    location: 'gym',
    equipment: ['cable machine'],
  },
  {
    name: 'Lateral Raises',
    category: 'push',
    location: 'gym',
    equipment: ['dumbbells'],
  },
  {
    name: 'Tricep Dips',
    category: 'push',
    location: 'gym',
    equipment: ['dip station'],
  },
  {
    name: 'Overhead Tricep Extension',
    category: 'push',
    location: 'gym',
    equipment: ['dumbbells'],
  },
  {
    name: 'Cable Tricep Pushdowns',
    category: 'push',
    location: 'gym',
    equipment: ['cable machine'],
  },
  {
    name: 'Push-ups',
    category: 'push',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Pike Push-ups',
    category: 'push',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Diamond Push-ups',
    category: 'push',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Decline Push-ups',
    category: 'push',
    location: 'home',
    equipment: ['bodyweight'],
  },

  // PULL EXERCISES - Gym exercises prioritized first
  {
    name: 'Barbell Bent-Over Row',
    category: 'pull',
    location: 'gym',
    equipment: ['barbell'],
  },
  {
    name: 'Deadlift',
    category: 'pull',
    location: 'gym',
    equipment: ['barbell'],
  },
  {
    name: 'Lat Pulldown',
    category: 'pull',
    location: 'gym',
    equipment: ['cable machine'],
  },
  {
    name: 'Cable Row',
    category: 'pull',
    location: 'gym',
    equipment: ['cable machine'],
  },
  {
    name: 'Dumbbell Row',
    category: 'pull',
    location: 'gym',
    equipment: ['dumbbells', 'bench'],
  },
  {
    name: 'T-Bar Row',
    category: 'pull',
    location: 'gym',
    equipment: ['barbell', 't-bar'],
  },
  {
    name: 'Pull-ups',
    category: 'pull',
    location: 'gym',
    equipment: ['pull-up bar'],
  },
  {
    name: 'Chin-ups',
    category: 'pull',
    location: 'gym',
    equipment: ['pull-up bar'],
  },
  {
    name: 'Face Pulls',
    category: 'pull',
    location: 'gym',
    equipment: ['cable machine'],
  },
  {
    name: 'Barbell Curl',
    category: 'pull',
    location: 'gym',
    equipment: ['barbell'],
  },
  {
    name: 'Dumbbell Curl',
    category: 'pull',
    location: 'gym',
    equipment: ['dumbbells'],
  },
  {
    name: 'Hammer Curl',
    category: 'pull',
    location: 'gym',
    equipment: ['dumbbells'],
  },
  {
    name: 'Inverted Rows',
    category: 'pull',
    location: 'home',
    equipment: ['bar', 'table'],
  },
  {
    name: 'Pull-ups (Home)',
    category: 'pull',
    location: 'home',
    equipment: ['pull-up bar'],
  },
  {
    name: 'Doorway Rows',
    category: 'pull',
    location: 'home',
    equipment: ['bodyweight'],
  },

  // LEG EXERCISES - Gym exercises prioritized first
  {
    name: 'Barbell Back Squat',
    category: 'legs',
    location: 'gym',
    equipment: ['barbell', 'squat rack'],
  },
  {
    name: 'Front Squat',
    category: 'legs',
    location: 'gym',
    equipment: ['barbell', 'squat rack'],
  },
  {
    name: 'Romanian Deadlift',
    category: 'legs',
    location: 'gym',
    equipment: ['barbell'],
  },
  {
    name: 'Leg Press',
    category: 'legs',
    location: 'gym',
    equipment: ['leg press machine'],
  },
  {
    name: 'Bulgarian Split Squat',
    category: 'legs',
    location: 'gym',
    equipment: ['dumbbells'],
  },
  {
    name: 'Walking Lunges',
    category: 'legs',
    location: 'gym',
    equipment: ['dumbbells'],
  },
  {
    name: 'Leg Extension',
    category: 'legs',
    location: 'gym',
    equipment: ['leg extension machine'],
  },
  {
    name: 'Leg Curl',
    category: 'legs',
    location: 'gym',
    equipment: ['leg curl machine'],
  },
  {
    name: 'Hip Thrust',
    category: 'legs',
    location: 'gym',
    equipment: ['barbell', 'bench'],
  },
  {
    name: 'Calf Raise (Machine)',
    category: 'legs',
    location: 'gym',
    equipment: ['calf raise machine'],
  },
  {
    name: 'Goblet Squat',
    category: 'legs',
    location: 'gym',
    equipment: ['dumbbell'],
  },
  {
    name: 'Bodyweight Squats',
    category: 'legs',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Jump Squats',
    category: 'legs',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Lunges',
    category: 'legs',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Glute Bridges',
    category: 'legs',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Single-Leg Deadlift',
    category: 'legs',
    location: 'home',
    equipment: ['bodyweight'],
  },


  // CORE EXERCISES
  {
    name: 'Cable Crunch',
    category: 'core',
    location: 'gym',
    equipment: ['cable machine'],
  },
  {
    name: 'Hanging Leg Raise',
    category: 'core',
    location: 'gym',
    equipment: ['pull-up bar'],
  },
  {
    name: 'Ab Wheel Rollout',
    category: 'core',
    location: 'gym',
    equipment: ['ab wheel'],
  },
  {
    name: 'Decline Sit-ups',
    category: 'core',
    location: 'gym',
    equipment: ['decline bench'],
  },
  {
    name: 'Plank',
    category: 'core',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Side Plank',
    category: 'core',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Bicycle Crunch',
    category: 'core',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Mountain Climbers',
    category: 'core',
    location: 'home',
    equipment: ['bodyweight'],
  },

  // CARDIO EXERCISES
  {
    name: 'Treadmill Running',
    category: 'cardio',
    location: 'gym',
    equipment: ['treadmill'],
  },
  {
    name: 'Stationary Bike',
    category: 'cardio',
    location: 'gym',
    equipment: ['bike'],
  },
  {
    name: 'Rowing Machine',
    category: 'cardio',
    location: 'gym',
    equipment: ['rowing machine'],
  },
  {
    name: 'Stair Climber',
    category: 'cardio',
    location: 'gym',
    equipment: ['stair climber'],
  },
  {
    name: 'Elliptical',
    category: 'cardio',
    location: 'gym',
    equipment: ['elliptical'],
  },
  {
    name: 'Battle Ropes',
    category: 'cardio',
    location: 'gym',
    equipment: ['battle ropes'],
  },
  {
    name: 'Running',
    category: 'cardio',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'Jump Rope',
    category: 'cardio',
    location: 'home',
    equipment: ['jump rope'],
  },
  {
    name: 'Burpees',
    category: 'cardio',
    location: 'home',
    equipment: ['bodyweight'],
  },
  {
    name: 'High Knees',
    category: 'cardio',
    location: 'home',
    equipment: ['bodyweight'],
  },
];
