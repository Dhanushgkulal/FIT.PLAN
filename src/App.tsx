/**
 * FitPlan Main Application Component
 * 
 * Single-page fitness web application with personalized diet and workout plans
 * Requirements: 1.1-1.5, 25.1-25.5
 */

import { useState, useEffect } from 'react';
import type { UserInput, DietResults, WorkoutPlan } from './types';
import { calculateDiet, generateWorkout, saveResults, loadResults } from './utils';
import {
  Hero,
  Features,
  HowItWorks,
  Calculator,
  Results,
  Pricing,
  Reviews,
  FAQ,
  Footer,
} from './components';

function App() {
  const [dietResults, setDietResults] = useState<DietResults | null>(null);
  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);
  const [userInput, setUserInput] = useState<UserInput | null>(null);

  // Load saved results on mount
  useEffect(() => {
    const saved = loadResults();
    if (saved) {
      setUserInput(saved.userInput);
      setDietResults(saved.dietResults);
      setWorkoutPlan(saved.workoutPlan);
    }
  }, []);

  const handleCalculate = (input: UserInput) => {
    // Calculate diet
    const diet = calculateDiet({
      gender: input.gender,
      age: input.age,
      weight: input.weight,
      height: input.height,
      activityLevel: input.activityLevel,
      goal: input.goal,
    });

    // Generate workout
    const workout = generateWorkout({
      trainingDays: input.trainingDays,
      trainingLocation: input.trainingLocation,
      experienceLevel: input.experienceLevel,
      goal: input.goal,
    });

    // Save results
    const results = {
      timestamp: Date.now(),
      userInput: input,
      dietResults: diet,
      workoutPlan: workout,
    };
    saveResults(results);

    // Update state
    setUserInput(input);
    setDietResults(diet);
    setWorkoutPlan(workout);

    // Scroll to results
    setTimeout(() => {
      const resultsSection = document.getElementById('results');
      resultsSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Features />
      <HowItWorks />
      <Calculator onSubmit={handleCalculate} initialValues={userInput || undefined} />
      {dietResults && workoutPlan && (
        <Results dietResults={dietResults} workoutPlan={workoutPlan} />
      )}
      <Pricing />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
