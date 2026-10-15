/**
 * Calculator Component
 * 
 * Collects user fitness data and validates inputs
 * Requirements: 5.1-5.9, 6.1-6.6
 */

import { useState } from 'react';
import type { UserInput } from '../types';
import { validateUserInput } from '../utils';

interface CalculatorProps {
  onSubmit: (data: UserInput) => void;
  initialValues?: Partial<UserInput>;
}

export function Calculator({ onSubmit, initialValues }: CalculatorProps) {
  const [formData, setFormData] = useState<Partial<UserInput>>({
    gender: initialValues?.gender || 'male',
    age: initialValues?.age || undefined,
    weight: initialValues?.weight || undefined,
    height: initialValues?.height || undefined,
    activityLevel: initialValues?.activityLevel || 'medium',
    goal: initialValues?.goal || 'stay_lean',
    trainingLocation: initialValues?.trainingLocation || 'gym',
    trainingDays: initialValues?.trainingDays || 4,
    experienceLevel: initialValues?.experienceLevel || 'intermediate',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof UserInput, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const validation = validateUserInput(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    // Submit valid data
    onSubmit(formData as UserInput);
  };

  return (
    <section id="calculator" className="py-20 px-4 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-cyan-400">
          Calculate Your Plan
        </h2>
        <p className="text-gray-300 text-center mb-8">
          Enter your details to get personalized diet and workout recommendations
        </p>

        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-8 shadow-xl">
          {errors.general && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-200">
              {errors.general}
            </div>
          )}

          {/* Gender */}
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Gender</label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="mr-2"
                />
                <span className="text-gray-300">Male</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="mr-2"
                />
                <span className="text-gray-300">Female</span>
              </label>
            </div>
          </div>

          {/* Age */}
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Age (years)</label>
            <input
              type="number"
              value={formData.age || ''}
              onChange={(e) => handleInputChange('age', Number(e.target.value))}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
              placeholder="e.g., 30"
            />
            {errors.age && <p className="text-red-400 text-sm mt-1">{errors.age}</p>}
          </div>

          {/* Weight */}
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Weight (kg)</label>
            <input
              type="number"
              value={formData.weight || ''}
              onChange={(e) => handleInputChange('weight', Number(e.target.value))}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
              placeholder="e.g., 75"
            />
            {errors.weight && <p className="text-red-400 text-sm mt-1">{errors.weight}</p>}
          </div>

          {/* Height */}
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Height (cm)</label>
            <input
              type="number"
              value={formData.height || ''}
              onChange={(e) => handleInputChange('height', Number(e.target.value))}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
              placeholder="e.g., 175"
            />
            {errors.height && <p className="text-red-400 text-sm mt-1">{errors.height}</p>}
          </div>

          {/* Activity Level */}
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Activity Level</label>
            <select
              value={formData.activityLevel}
              onChange={(e) => handleInputChange('activityLevel', e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
            >
              <option value="low">Low (little or no exercise)</option>
              <option value="medium">Medium (exercise 3-5 times/week)</option>
              <option value="high">High (intense exercise 6-7 times/week)</option>
            </select>
          </div>

          {/* Goal */}
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Fitness Goal</label>
            <select
              value={formData.goal}
              onChange={(e) => handleInputChange('goal', e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
            >
              <option value="gain_weight">Gain Weight (Bulk)</option>
              <option value="stay_lean">Stay Lean (Maintain)</option>
              <option value="lose_weight">Lose Weight (Cut)</option>
            </select>
          </div>

          {/* Training Location */}
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Training Location</label>
            <div className="flex gap-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="trainingLocation"
                  value="home"
                  checked={formData.trainingLocation === 'home'}
                  onChange={(e) => handleInputChange('trainingLocation', e.target.value)}
                  className="mr-2"
                />
                <span className="text-gray-300">Home</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="trainingLocation"
                  value="gym"
                  checked={formData.trainingLocation === 'gym'}
                  onChange={(e) => handleInputChange('trainingLocation', e.target.value)}
                  className="mr-2"
                />
                <span className="text-gray-300">Gym</span>
              </label>
            </div>
          </div>

          {/* Training Days */}
          <div className="mb-6">
            <label className="block text-cyan-400 font-semibold mb-2">Training Days per Week</label>
            <select
              value={formData.trainingDays}
              onChange={(e) => handleInputChange('trainingDays', Number(e.target.value))}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
            >
              <option value={3}>3 days</option>
              <option value={4}>4 days</option>
              <option value={5}>5 days</option>
              <option value={6}>6 days</option>
            </select>
          </div>

          {/* Experience Level */}
          <div className="mb-8">
            <label className="block text-cyan-400 font-semibold mb-2">Experience Level</label>
            <select
              value={formData.experienceLevel}
              onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
            >
              <option value="beginner">Beginner (0-1 years)</option>
              <option value="intermediate">Intermediate (1-3 years)</option>
              <option value="advanced">Advanced (3+ years)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors"
          >
            Generate My Plan
          </button>
        </form>
      </div>
    </section>
  );
}
