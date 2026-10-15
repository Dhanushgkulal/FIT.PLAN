# Requirements Document

## Introduction

FitPlan is a single-page fitness web application that provides personalized daily diet targets and weekly workout plans. The application runs entirely in the browser without a backend, using scientifically-based formulas to calculate nutrition needs and generate customized workout routines based on user goals, experience level, and available equipment.

## Glossary

- **FitPlan_System**: The complete fitness web application
- **Calculator**: The input form component that collects user fitness data
- **Diet_Calculator**: The subsystem that computes daily calorie and macronutrient targets
- **Workout_Generator**: The subsystem that creates weekly exercise plans
- **Results_Display**: The component that shows diet and workout plans
- **User**: The person using the application
- **BMR**: Basal Metabolic Rate - calories burned at rest
- **TDEE**: Total Daily Energy Expenditure - total calories burned per day
- **Macronutrient**: Protein, carbohydrate, or fat
- **LocalStorage**: Browser storage mechanism for persisting data
- **Goal**: User's fitness objective (gain weight, stay lean, lose weight)
- **Activity_Level**: User's daily physical activity (low, medium, high)
- **Experience_Level**: User's training experience (beginner, intermediate, advanced)
- **Training_Location**: Where user trains (home or gym)

## Requirements

### Requirement 1: Single Page Application Structure

**User Story:** As a user, I want a single-page application with clear sections, so that I can navigate the entire experience without page reloads.

#### Acceptance Criteria

1. THE FitPlan_System SHALL display nine sections in the following order: Hero, Features, How It Works, Calculator, Results, Pricing, Reviews, FAQ, and Footer
2. WHEN the User clicks the "Get My Plan" button in the Hero section, THE FitPlan_System SHALL scroll smoothly to the Calculator section
3. THE FitPlan_System SHALL render all sections on a single HTML page without page transitions
4. THE FitPlan_System SHALL maintain responsive layout across mobile, tablet, and desktop viewport sizes
5. THE FitPlan_System SHALL use a mobile-first design approach with dark theme and one bright accent color

### Requirement 2: Hero Section

**User Story:** As a user, I want to see a clear introduction when I land on the page, so that I understand what the app offers immediately.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the application name "FitPlan"
2. THE Hero_Section SHALL display a one-line description of the application
3. THE Hero_Section SHALL display a "Get My Plan" button
4. WHEN the User clicks the "Get My Plan" button, THE FitPlan_System SHALL scroll to the Calculator section with smooth animation

### Requirement 3: Features Section

**User Story:** As a user, I want to see the key features of the app, so that I know what benefits it provides.

#### Acceptance Criteria

1. THE Features_Section SHALL display four features: workout plans, diet targets, progress tracking, and reminders
2. THE Features_Section SHALL display a simple icon for each feature
3. THE Features_Section SHALL display descriptive text for each feature

### Requirement 4: How It Works Section

**User Story:** As a user, I want to understand how to use the app, so that I know what to expect.

#### Acceptance Criteria

1. THE How_It_Works_Section SHALL display three steps in sequence
2. THE How_It_Works_Section SHALL describe step one as entering user details
3. THE How_It_Works_Section SHALL describe step two as receiving diet targets
4. THE How_It_Works_Section SHALL describe step three as receiving workout plans

### Requirement 5: User Input Collection

**User Story:** As a user, I want to enter my personal information and goals, so that I can receive a customized fitness plan.

#### Acceptance Criteria

1. THE Calculator SHALL collect gender with options: male or female
2. THE Calculator SHALL collect age as a numeric value
3. THE Calculator SHALL collect weight in kilograms as a numeric value
4. THE Calculator SHALL collect height in centimeters as a numeric value
5. THE Calculator SHALL collect activity level with options: low, medium, or high
6. THE Calculator SHALL collect goal with options: gain weight, stay lean, or lose weight
7. THE Calculator SHALL collect training location with options: home or gym
8. THE Calculator SHALL collect training days per week with options: 3, 4, 5, or 6
9. THE Calculator SHALL collect experience level with options: beginner, intermediate, or advanced

### Requirement 6: Input Validation

**User Story:** As a user, I want clear feedback on invalid inputs, so that I can correct errors and get my plan.

#### Acceptance Criteria

1. WHEN the User submits the Calculator with empty required fields, THE Calculator SHALL display a friendly error message identifying the missing fields
2. WHEN the User enters an age less than 10 or greater than 100, THE Calculator SHALL display an error message indicating valid age range
3. WHEN the User enters a weight less than 30 or greater than 300, THE Calculator SHALL display an error message indicating valid weight range
4. WHEN the User enters a height less than 100 or greater than 250, THE Calculator SHALL display an error message indicating valid height range
5. WHEN the User enters non-numeric values in numeric fields, THE Calculator SHALL display an error message requesting numeric input
6. WHEN all inputs are valid, THE Calculator SHALL enable form submission

### Requirement 7: BMR Calculation

**User Story:** As a user, I want my basal metabolic rate calculated accurately, so that my diet plan is based on scientific formulas.

#### Acceptance Criteria

1. WHEN the User's gender is male, THE Diet_Calculator SHALL compute BMR using the formula: 10 × weight + 6.25 × height - 5 × age + 5
2. WHEN the User's gender is female, THE Diet_Calculator SHALL compute BMR using the formula: 10 × weight + 6.25 × height - 5 × age - 161
3. THE Diet_Calculator SHALL use weight in kilograms, height in centimeters, and age in years

### Requirement 8: TDEE Calculation

**User Story:** As a user, I want my total daily energy expenditure calculated based on my activity level, so that my calorie target matches my lifestyle.

#### Acceptance Criteria

1. WHEN the User's activity level is low, THE Diet_Calculator SHALL multiply BMR by 1.375 to compute TDEE
2. WHEN the User's activity level is medium, THE Diet_Calculator SHALL multiply BMR by 1.55 to compute TDEE
3. WHEN the User's activity level is high, THE Diet_Calculator SHALL multiply BMR by 1.725 to compute TDEE

### Requirement 9: Goal-Based Calorie Adjustment

**User Story:** As a user, I want my calorie target adjusted for my fitness goal, so that my diet supports weight gain, maintenance, or loss.

#### Acceptance Criteria

1. WHEN the User's goal is gain weight, THE Diet_Calculator SHALL add 400 calories to TDEE
2. WHEN the User's goal is stay lean, THE Diet_Calculator SHALL use TDEE without adjustment
3. WHEN the User's goal is lose weight, THE Diet_Calculator SHALL subtract 500 calories from TDEE
4. WHEN the calculated daily calories for a male user falls below 1500, THE Diet_Calculator SHALL set daily calories to 1500
5. WHEN the calculated daily calories for a female user falls below 1200, THE Diet_Calculator SHALL set daily calories to 1200

### Requirement 10: Macronutrient Calculation

**User Story:** As a user, I want my protein, carbohydrate, and fat targets calculated, so that I have a balanced nutrition plan.

#### Acceptance Criteria

1. THE Diet_Calculator SHALL compute daily protein target as 2.0 grams per kilogram of body weight
2. THE Diet_Calculator SHALL compute daily fat target as 25 percent of total daily calories divided by 9 calories per gram
3. THE Diet_Calculator SHALL compute daily carbohydrate target as remaining calories after protein and fat divided by 4 calories per gram
4. THE Diet_Calculator SHALL compute daily fiber target as 14 grams per 1000 calories
5. FOR ALL valid user inputs, THE Diet_Calculator SHALL ensure protein calories plus fat calories plus carbohydrate calories equals total daily calories within a tolerance of 10 calories

### Requirement 11: Diet Results Display

**User Story:** As a user, I want to see my diet targets in a clear visual format, so that I can easily understand my nutrition goals.

#### Acceptance Criteria

1. THE Results_Display SHALL show daily calorie target
2. THE Results_Display SHALL show daily protein target in grams
3. THE Results_Display SHALL show daily carbohydrate target in grams
4. THE Results_Display SHALL show daily fat target in grams
5. THE Results_Display SHALL show daily fiber target in grams
6. THE Results_Display SHALL display a donut chart showing the percentage split of protein, carbohydrates, and fat
7. THE Results_Display SHALL present diet information in a card layout

### Requirement 12: Workout Plan Generation - Training Split

**User Story:** As a user, I want a workout plan that matches my available training days, so that it fits my schedule.

#### Acceptance Criteria

1. WHEN the User selects 3 days per week, THE Workout_Generator SHALL create a full body training split
2. WHEN the User selects 4 days per week, THE Workout_Generator SHALL create an upper-lower training split
3. WHEN the User selects 5 days per week, THE Workout_Generator SHALL create a push-pull-legs-upper-lower training split
4. WHEN the User selects 6 days per week, THE Workout_Generator SHALL create a push-pull-legs training split repeated twice

### Requirement 13: Workout Plan Generation - Exercise Selection

**User Story:** As a user, I want exercises appropriate for my training location, so that I can perform the workout with available equipment.

#### Acceptance Criteria

1. WHEN the User selects home training, THE Workout_Generator SHALL include exercises using bodyweight and basic equipment such as push-ups, squats, lunges, planks, and dips
2. WHEN the User selects gym training, THE Workout_Generator SHALL include exercises using barbells, dumbbells, and machines
3. THE Workout_Generator SHALL store exercise data in a separate JSON or TypeScript file for maintainability

### Requirement 14: Workout Plan Generation - Goal-Based Programming

**User Story:** As a user, I want my workout style adjusted for my fitness goal, so that training supports my objective.

#### Acceptance Criteria

1. WHEN the User's goal is gain weight, THE Workout_Generator SHALL create a plan with heavy lifting, 6 to 10 repetitions, longer rest periods, and minimal cardio sessions
2. WHEN the User's goal is stay lean, THE Workout_Generator SHALL create a plan with strength training and 1 to 2 light cardio sessions
3. WHEN the User's goal is lose weight, THE Workout_Generator SHALL create a plan with strength training plus frequent cardio, 10 to 15 repetitions, and shorter rest periods

### Requirement 15: Workout Plan Generation - Experience-Based Volume

**User Story:** As a user, I want workout volume appropriate for my experience level, so that I avoid overtraining or undertraining.

#### Acceptance Criteria

1. WHEN the User's experience level is beginner, THE Workout_Generator SHALL assign 2 to 3 sets per exercise
2. WHEN the User's experience level is intermediate, THE Workout_Generator SHALL assign 3 to 4 sets per exercise
3. WHEN the User's experience level is advanced, THE Workout_Generator SHALL assign 4 to 5 sets per exercise

### Requirement 16: Workout Results Display

**User Story:** As a user, I want to see my weekly workout plan in a clear format, so that I know what to do each day.

#### Acceptance Criteria

1. THE Results_Display SHALL show each training day as a separate card
2. THE Results_Display SHALL indicate the focus for each training day
3. THE Results_Display SHALL list exercises for each training day
4. THE Results_Display SHALL display sets, repetitions, and rest time for each exercise
5. THE Results_Display SHALL clearly mark rest days
6. THE Results_Display SHALL display workout information in a card layout

### Requirement 17: Results Navigation

**User Story:** As a user, I want to switch between diet and workout results easily, so that I can review both plans.

#### Acceptance Criteria

1. THE Results_Display SHALL provide tabs to switch between diet and workout views
2. WHEN the User clicks the diet tab, THE Results_Display SHALL show the diet card
3. WHEN the User clicks the workout tab, THE Results_Display SHALL show the workout plan cards
4. THE Results_Display SHALL display both diet and workout on the same results page

### Requirement 18: Results Persistence

**User Story:** As a user, I want my last results saved, so that I can return to the page and see my plan without recalculating.

#### Acceptance Criteria

1. WHEN the Calculator generates results, THE FitPlan_System SHALL save the complete results to localStorage
2. WHEN the User refreshes the page, THE FitPlan_System SHALL load the most recent results from localStorage
3. WHEN the User refreshes the page with saved results, THE Results_Display SHALL display the saved diet and workout plans
4. WHEN no saved results exist, THE FitPlan_System SHALL display the Calculator without results

### Requirement 19: Results Export

**User Story:** As a user, I want to download or print my results, so that I can reference them offline.

#### Acceptance Criteria

1. THE Results_Display SHALL provide a "Download as PDF" or "Print" button
2. WHEN the User clicks the export button, THE FitPlan_System SHALL trigger browser print functionality or PDF generation
3. THE exported document SHALL include both diet and workout information

### Requirement 20: Medical Disclaimer

**User Story:** As a user, I want to see a disclaimer about the guidance, so that I understand this is not medical advice.

#### Acceptance Criteria

1. THE Results_Display SHALL display a disclaimer near the results
2. THE disclaimer SHALL state: "This is general guidance, not medical advice. Talk to a doctor before starting a new diet or workout."
3. THE disclaimer SHALL be clearly visible to the user

### Requirement 21: Pricing Section

**User Story:** As a user, I want to see pricing options, so that I understand what is available for free and what requires payment.

#### Acceptance Criteria

1. THE Pricing_Section SHALL display two pricing tiers side by side
2. THE Pricing_Section SHALL show a free plan with features
3. THE Pricing_Section SHALL show a paid plan with features
4. THE Pricing_Section SHALL use placeholder content for pricing details

### Requirement 22: Reviews Section

**User Story:** As a user, I want to see testimonials from other users, so that I can trust the application.

#### Acceptance Criteria

1. THE Reviews_Section SHALL display three sample user testimonials
2. THE Reviews_Section SHALL include user names or personas for each testimonial
3. THE Reviews_Section SHALL include descriptive text for each testimonial

### Requirement 23: FAQ Section

**User Story:** As a user, I want answers to common questions, so that I can learn more without contacting support.

#### Acceptance Criteria

1. THE FAQ_Section SHALL display five frequently asked questions
2. WHEN the User clicks a question, THE FAQ_Section SHALL expand to show the answer
3. WHEN the User clicks an expanded question, THE FAQ_Section SHALL collapse to hide the answer
4. THE FAQ_Section SHALL allow only one question to be expanded at a time or multiple questions to be expanded simultaneously

### Requirement 24: Footer Section

**User Story:** As a user, I want access to contact information and policies, so that I can reach out or learn about privacy.

#### Acceptance Criteria

1. THE Footer_Section SHALL display contact information
2. THE Footer_Section SHALL display social media links
3. THE Footer_Section SHALL display a privacy policy link
4. THE Footer_Section SHALL be located at the bottom of the page

### Requirement 25: Technology Stack Implementation

**User Story:** As a developer, I want the application built with modern tools, so that it is maintainable and performant.

#### Acceptance Criteria

1. THE FitPlan_System SHALL be implemented using React framework
2. THE FitPlan_System SHALL use Vite as the build tool
3. THE FitPlan_System SHALL use Tailwind CSS for styling
4. THE FitPlan_System SHALL execute all calculations in the browser without a backend server
5. THE FitPlan_System SHALL be fully responsive across all device sizes

### Requirement 26: User Experience and Accessibility

**User Story:** As a user, I want a polished and accessible interface, so that I have a pleasant experience regardless of how I interact with the app.

#### Acceptance Criteria

1. THE FitPlan_System SHALL use smooth scroll behavior for navigation
2. THE FitPlan_System SHALL use simple animations for visual feedback
3. THE FitPlan_System SHALL maintain sufficient color contrast for readability
4. THE FitPlan_System SHALL support keyboard navigation for all interactive elements
5. THE FitPlan_System SHALL use a clean and modern visual design with an energetic aesthetic

### Requirement 27: Code Quality and Documentation

**User Story:** As a developer, I want clean, maintainable code, so that the application is easy to modify and extend.

#### Acceptance Criteria

1. THE FitPlan_System SHALL be organized into small, reusable components
2. THE FitPlan_System SHALL include code comments explaining complex logic
3. THE FitPlan_System SHALL include a README file with setup instructions
4. THE README SHALL document the formulas used for BMR, TDEE, and macronutrient calculations
5. THE README SHALL include instructions for running the application locally
