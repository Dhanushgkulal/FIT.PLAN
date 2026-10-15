# Implementation Plan: FitPlan Fitness Web App

## Overview

This implementation plan breaks down the FitPlan fitness web application into incremental coding tasks. The application is built with React, Vite, and Tailwind CSS using Python for any backend utilities if needed. Each task builds on previous work to create a fully functional fitness calculator with diet planning and workout generation capabilities.

## Tasks

- [x] 1. Initialize project structure and dependencies
  - Create new Vite + React project with TypeScript support
  - Install and configure Tailwind CSS
  - Install charting library (Recharts or Chart.js)
  - Install fast-check for property-based testing
  - Install testing libraries (Vitest, Testing Library)
  - Set up basic folder structure (components, utils, types, data)
  - _Requirements: 25.1, 25.2, 25.3_

- [x] 2. Define core TypeScript types and interfaces
  - Create types for UserInput with all fields and validation constraints
  - Create types for DietResults (BMR, TDEE, calories, macros)
  - Create types for WorkoutPlan, WorkoutDay, and ExerciseDetail
  - Create types for Exercise database entries
  - Create types for ValidationErrors
  - _Requirements: 5.1-5.9_

- [ ] 3. Implement input validation module
  - [x] 3.1 Create validation utility functions
    - Write validateAge function (range 10-100)
    - Write validateWeight function (range 30-300 kg)
    - Write validateHeight function (range 100-250 cm)
    - Write validateNumeric function for type checking
    - Write validateUserInput function that validates all fields
    - _Requirements: 6.1-6.6_
  
  - [ ]* 3.2 Write property test for age validation
    - **Property 1: Input validation rejects invalid age ranges**
    - **Validates: Requirements 6.2**
  
  - [ ]* 3.3 Write property test for weight validation
    - **Property 2: Input validation rejects invalid weight ranges**
    - **Validates: Requirements 6.3**
  
  - [ ]* 3.4 Write property test for height validation
    - **Property 3: Input validation rejects invalid height ranges**
    - **Validates: Requirements 6.4**
  
  - [ ]* 3.5 Write property test for non-numeric rejection
    - **Property 4: Input validation rejects non-numeric values**
    - **Validates: Requirements 6.5**
  
  - [ ]* 3.6 Write property test for valid input acceptance
    - **Property 5: Input validation accepts valid inputs**
    - **Validates: Requirements 6.6**

- [ ] 4. Implement diet calculation module
  - [x] 4.1 Create BMR calculation function
    - Implement calculateBMR using Mifflin-St Jeor equation
    - Handle male formula: BMR = 10 × weight + 6.25 × height - 5 × age + 5
    - Handle female formula: BMR = 10 × weight + 6.25 × height - 5 × age - 161
    - _Requirements: 7.1, 7.2, 7.3_
  
  - [ ]* 4.2 Write property tests for BMR calculation
    - **Property 6: BMR calculation for males follows Mifflin-St Jeor equation**
    - **Property 7: BMR calculation for females follows Mifflin-St Jeor equation**
    - **Validates: Requirements 7.1, 7.2**
  
  - [ ] 4.3 Create TDEE calculation function
    - Implement calculateTDEE with activity level multipliers
    - Low activity: BMR × 1.375
    - Medium activity: BMR × 1.55
    - High activity: BMR × 1.725
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [ ]* 4.4 Write property test for TDEE calculation
    - **Property 8: TDEE calculation applies correct activity multiplier**
    - **Validates: Requirements 8.1, 8.2, 8.3**
  
  - [ ] 4.5 Create goal-based calorie adjustment function
    - Implement adjustForGoal function
    - Gain weight: TDEE + 400
    - Stay lean: TDEE + 0
    - Lose weight: TDEE - 500
    - Apply gender-based floor (male: 1500, female: 1200)
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_
  
  - [ ]* 4.6 Write property tests for calorie adjustment
    - **Property 9: Goal-based calorie adjustment applies correct offset**
    - **Property 10: Gender-based calorie floor is enforced**
    - **Validates: Requirements 9.1-9.5**
  
  - [ ] 4.7 Create macronutrient calculation function
    - Implement calculateMacros function
    - Protein: 2.0 g/kg body weight
    - Fat: (calories × 0.25) / 9 grams
    - Carbs: (calories - protein_cal - fat_cal) / 4 grams
    - Fiber: (calories / 1000) × 14 grams
    - _Requirements: 10.1, 10.2, 10.3, 10.4_
  
  - [ ]* 4.8 Write property tests for macronutrient calculations
    - **Property 11: Protein calculation follows 2.0 g/kg formula**
    - **Property 12: Fat calculation follows 25% calorie allocation**
    - **Property 13: Carbohydrate calculation fills remaining calories**
    - **Property 14: Fiber calculation follows 14g per 1000 calories formula**
    - **Property 15: Macronutrient calorie balance invariant**
    - **Validates: Requirements 10.1-10.5**
  
  - [ ] 4.9 Create main calculateDiet orchestrator function
    - Wire together BMR, TDEE, goal adjustment, and macro calculations
    - Return complete DietResults object
    - _Requirements: 7.1-10.5_

- [ ] 5. Checkpoint - Ensure diet calculation tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Create exercise database
  - [ ] 6.1 Define exercise data structure
    - Create exercises.ts or exercises.json file
    - Define Exercise interface with name, category, location, equipment
    - _Requirements: 13.3_
  
  - [ ] 6.2 Populate home exercises
    - Add bodyweight exercises: push-ups, squats, lunges, planks, dips, etc.
    - Tag with location 'home' or 'both'
    - Categorize by push, pull, legs, core, cardio
    - _Requirements: 13.1_
  
  - [ ] 6.3 Populate gym exercises
    - Add barbell, dumbbell, and machine exercises
    - Tag with location 'gym' or 'both'
    - Categorize by push, pull, legs, core, cardio
    - _Requirements: 13.2_
  
  - [ ]* 6.4 Write unit tests for exercise database structure
    - Validate all exercises have required fields
    - Validate categories are valid
    - Validate locations are valid
    - _Requirements: 13.3_

- [ ] 7. Implement workout generation module
  - [ ] 7.1 Create training split selector
    - Implement getTrainingSplit function
    - 3 days → Full Body × 3
    - 4 days → Upper, Lower, Upper, Lower
    - 5 days → Push, Pull, Legs, Upper, Lower
    - 6 days → Push, Pull, Legs, Push, Pull, Legs
    - _Requirements: 12.1, 12.2, 12.3, 12.4_
  
  - [ ]* 7.2 Write unit tests for training split selection
    - Test each training day count produces correct split
    - _Requirements: 12.1-12.4_
  
  - [ ] 7.3 Create exercise filtering function
    - Implement filterExercisesByLocation function
    - Filter exercises based on home vs gym
    - Filter exercises by category for each split day
    - _Requirements: 13.1, 13.2_
  
  - [ ]* 7.4 Write property test for exercise location filtering
    - **Property 16: Exercise selection respects location constraints**
    - **Validates: Requirements 13.1, 13.2**
  
  - [ ] 7.5 Create volume assignment function
    - Implement assignVolume function based on experience level
    - Beginner: 2-3 sets
    - Intermediate: 3-4 sets
    - Advanced: 4-5 sets
    - _Requirements: 15.1, 15.2, 15.3_
  
  - [ ]* 7.6 Write property test for volume assignment
    - **Property 18: Experience-based volume assignment is correct**
    - **Validates: Requirements 15.1, 15.2, 15.3**
  
  - [ ] 7.7 Create goal-based programming function
    - Implement applyGoalProgramming function
    - Gain weight: 6-10 reps, 90-120s rest, minimal cardio
    - Stay lean: 8-12 reps, 60-90s rest, 1-2 cardio sessions
    - Lose weight: 10-15 reps, 60s rest, frequent cardio
    - _Requirements: 14.1, 14.2, 14.3_
  
  - [ ]* 7.8 Write property test for goal-based programming
    - **Property 17: Goal-based workout programming applies correct parameters**
    - **Validates: Requirements 14.1, 14.3**
  
  - [ ] 7.9 Create main generateWorkout orchestrator function
    - Wire together split selection, exercise filtering, volume assignment, and goal programming
    - Return complete WorkoutPlan object with weekly schedule
    - _Requirements: 12.1-15.3_

- [ ] 8. Checkpoint - Ensure workout generation tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Implement localStorage persistence module
  - [ ] 9.1 Create storage utility functions
    - Implement saveResults function with try-catch error handling
    - Implement loadResults function with validation and error handling
    - Implement clearResults function
    - Use storage key: 'fitplan_results'
    - _Requirements: 18.1, 18.2_
  
  - [ ]* 9.2 Write property test for persistence round-trip
    - **Property 19: Results persistence round-trip preserves data**
    - **Validates: Requirements 18.1, 18.2**
  
  - [ ]* 9.3 Write unit tests for storage edge cases
    - Test corrupted data handling
    - Test missing data handling
    - Test localStorage unavailable scenario
    - _Requirements: 18.1, 18.2, 18.4_

- [ ] 10. Build Calculator component
  - [ ] 10.1 Create Calculator form component
    - Create controlled form with all input fields
    - Gender select (male/female)
    - Age, weight, height numeric inputs
    - Activity level select (low/medium/high)
    - Goal select (gain weight/stay lean/lose weight)
    - Training location select (home/gym)
    - Training days select (3/4/5/6)
    - Experience level select (beginner/intermediate/advanced)
    - Submit button
    - _Requirements: 5.1-5.9_
  
  - [ ] 10.2 Integrate validation with form
    - Add field-level validation on blur
    - Display validation errors below each field
    - Disable submit button when validation fails
    - Show summary error for missing fields
    - _Requirements: 6.1-6.6_
  
  - [ ] 10.3 Connect form submission to calculation engines
    - On valid submission, call calculateDiet
    - On valid submission, call generateWorkout
    - Save results to localStorage
    - Pass results to Results component
    - _Requirements: 18.1_
  
  - [ ]* 10.4 Write unit tests for Calculator component
    - Test form renders all fields
    - Test validation errors display correctly
    - Test form submission with valid data
    - Test form submission with invalid data
    - _Requirements: 5.1-6.6_

- [ ] 11. Build Results Display component
  - [ ] 11.1 Create Diet Results card component
    - Display daily calorie target
    - Display protein, carbs, fat, fiber targets in grams
    - Implement donut chart for macro percentage breakdown
    - Use card layout with clear typography
    - _Requirements: 11.1-11.7_
  
  - [ ] 11.2 Create Workout Results cards component
    - Display each training day as separate card
    - Show day focus (Push, Pull, Legs, etc.)
    - List exercises with sets, reps, rest periods
    - Mark rest days clearly
    - Use card layout
    - _Requirements: 16.1-16.6_
  
  - [ ] 11.3 Create tab navigation
    - Implement tabs to switch between Diet and Workout views
    - Default to Diet tab
    - Maintain tab state
    - _Requirements: 17.1, 17.2, 17.3, 17.4_
  
  - [ ] 11.4 Add medical disclaimer
    - Display disclaimer text below results
    - Text: "This is general guidance, not medical advice. Talk to a doctor before starting a new diet or workout."
    - _Requirements: 20.1, 20.2, 20.3_
  
  - [ ] 11.5 Implement export functionality
    - Add "Download as PDF" or "Print" button
    - Trigger browser print API on click
    - Ensure exported view includes both diet and workout data
    - _Requirements: 19.1, 19.2, 19.3_
  
  - [ ]* 11.6 Write unit tests for Results component
    - Test diet card renders with correct data
    - Test workout cards render with correct data
    - Test tab navigation works
    - Test disclaimer is visible
    - _Requirements: 11.1-20.3_

- [ ] 12. Build landing page sections
  - [ ] 12.1 Create Hero section component
    - Display "FitPlan" heading
    - Display one-line description
    - Add "Get My Plan" button with smooth scroll to Calculator
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  
  - [ ] 12.2 Create Features section component
    - Display 4 feature cards with icons
    - Features: workout plans, diet targets, progress tracking, reminders
    - _Requirements: 3.1, 3.2, 3.3_
  
  - [ ] 12.3 Create How It Works section component
    - Display 3 sequential steps
    - Step 1: Enter details
    - Step 2: Receive diet targets
    - Step 3: Receive workout plans
    - _Requirements: 4.1, 4.2, 4.3, 4.4_
  
  - [ ] 12.4 Create Pricing section component
    - Display 2 pricing tiers side by side
    - Free plan with features
    - Paid plan with features (placeholder content)
    - _Requirements: 21.1, 21.2, 21.3, 21.4_
  
  - [ ] 12.5 Create Reviews section component
    - Display 3 sample testimonials
    - Include user names/personas
    - Include descriptive text
    - _Requirements: 22.1, 22.2, 22.3_
  
  - [ ] 12.6 Create FAQ section component
    - Display 5 FAQs with expand/collapse functionality
    - Implement accordion behavior
    - _Requirements: 23.1, 23.2, 23.3, 23.4_
  
  - [ ] 12.7 Create Footer section component
    - Display contact information
    - Display social media links
    - Display privacy policy link
    - _Requirements: 24.1, 24.2, 24.3, 24.4_
  
  - [ ]* 12.8 Write unit tests for landing page sections
    - Test Hero button triggers scroll
    - Test FAQ accordion expand/collapse
    - Test all sections render correctly
    - _Requirements: 2.1-24.4_

- [ ] 13. Implement main App component and routing
  - Create App.tsx with single-page layout
  - Arrange sections in order: Hero, Features, How It Works, Calculator, Results, Pricing, Reviews, FAQ, Footer
  - Implement smooth scroll behavior
  - Load saved results from localStorage on mount
  - Conditionally render Results section only when data exists
  - _Requirements: 1.1, 1.2, 1.3, 18.2, 18.3, 18.4_

- [ ] 14. Apply responsive design and styling
  - [ ] 14.1 Configure Tailwind with dark theme
    - Set up dark color scheme with one bright accent color
    - Define custom color palette in tailwind.config
    - _Requirements: 1.5, 26.5_
  
  - [ ] 14.2 Apply mobile-first responsive classes
    - Ensure all components work on mobile, tablet, desktop
    - Use Tailwind breakpoints (sm, md, lg, xl)
    - Test layout at multiple viewport sizes
    - _Requirements: 1.4, 25.5_
  
  - [ ] 14.3 Add accessibility features
    - Ensure sufficient color contrast (WCAG standards)
    - Add keyboard navigation support
    - Add ARIA labels where needed
    - Test with keyboard-only navigation
    - _Requirements: 26.3, 26.4_
  
  - [ ] 14.4 Add animations and transitions
    - Smooth scroll for "Get My Plan" button
    - Simple transitions for tab navigation
    - Accordion expand/collapse animations
    - Button hover effects
    - _Requirements: 26.1, 26.2_
  
  - [ ]* 14.5 Write integration tests for responsive behavior
    - Test mobile layout rendering
    - Test tablet layout rendering
    - Test desktop layout rendering
    - _Requirements: 1.4, 25.5_

- [ ] 15. Checkpoint - End-to-end integration testing
  - Ensure all tests pass, ask the user if questions arise.

- [ ]* 16. Write integration tests for complete user workflows
  - Test full flow: fill calculator → see results → results persist → page reload → results restored
  - Test diet calculation end-to-end with various inputs
  - Test workout generation end-to-end with various inputs
  - Test export functionality
  - _Requirements: 18.1-18.4, 19.1-19.3_

- [ ] 17. Create project documentation
  - [ ] 17.1 Write README.md
    - Add project overview
    - Add setup instructions (npm install, npm run dev)
    - Document BMR, TDEE, and macro calculation formulas
    - Document training split logic
    - Add tech stack section
    - _Requirements: 27.3, 27.4, 27.5_
  
  - [ ] 17.2 Add code comments
    - Comment complex calculation logic
    - Document validation rules
    - Explain workout generation algorithms
    - _Requirements: 27.2_

- [ ] 18. Final checkpoint and verification
  - Run all unit tests, property tests, and integration tests
  - Verify all 19 correctness properties pass
  - Test application manually in browser
  - Check localStorage persistence works
  - Verify export/print functionality
  - Ensure all acceptance criteria are met
  - Ask the user if any issues or questions arise

## Notes

- Tasks marked with `*` are optional testing sub-tasks and can be skipped for faster MVP delivery
- All 19 correctness properties from the design document have corresponding property-based test tasks
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation throughout development
- Property tests validate universal correctness across input ranges
- Unit and integration tests validate specific examples and user workflows
- The implementation uses React/TypeScript for the web app (not Python, which was mentioned as the selected language but React/TS is the appropriate choice for this single-page web application)
