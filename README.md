# FitPlan - Personalized Fitness & Diet Planning

FitPlan is a single-page fitness web application that provides personalized daily diet targets and weekly workout plans. The application runs entirely in the browser without a backend, using scientifically-based formulas to calculate nutrition needs and generate customized workout routines.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (dark theme with cyan accent)
- **Charting**: Recharts
- **Testing**: Vitest + Testing Library + fast-check (property-based testing)

## Project Structure

```
src/
├── components/     # React components
├── utils/          # Utility functions (calculations, validation, storage)
├── types/          # TypeScript type definitions
├── data/           # Exercise database and static data
└── test/           # Test setup and utilities
```

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Run tests**:
   ```bash
   npm test
   ```

5. **Run tests in watch mode**:
   ```bash
   npm run test:watch
   ```

## Calculation Formulas

### BMR (Basal Metabolic Rate) - Mifflin-St Jeor Equation
- **Male**: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5
- **Female**: BMR = 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161

### TDEE (Total Daily Energy Expenditure)
- **Low activity**: TDEE = BMR × 1.375
- **Medium activity**: TDEE = BMR × 1.55
- **High activity**: TDEE = BMR × 1.725

### Goal-Based Calorie Adjustment
- **Gain weight**: Daily Calories = TDEE + 400
- **Stay lean**: Daily Calories = TDEE
- **Lose weight**: Daily Calories = TDEE - 500

### Calorie Floors
- **Male**: Minimum 1500 calories/day
- **Female**: Minimum 1200 calories/day

### Macronutrients
- **Protein**: 2.0 g/kg body weight
- **Fat**: 25% of daily calories (calories × 0.25 / 9 grams)
- **Carbohydrates**: Remaining calories after protein and fat (remaining / 4 grams)
- **Fiber**: 14 grams per 1000 calories

## Features

- ✅ Personalized diet targets based on scientific formulas
- ✅ Custom workout plans based on goals, experience, and equipment
- ✅ Results persistence using localStorage
- ✅ Export/print functionality for offline reference
- ✅ Fully responsive design (mobile-first)
- ✅ Dark theme with energetic accent color
- ✅ Accessibility features (keyboard navigation, WCAG contrast)

## License

Private project - All rights reserved
