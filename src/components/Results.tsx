/**
 * Results Display Component
 * 
 * Visualizes diet and workout plans with interactive navigation
 * Requirements: 11.1-11.7, 16.1-16.6, 17.1-17.4, 19.1-19.3, 20.1-20.3
 */

import { useState } from 'react';
import type { DietResults, WorkoutPlan } from '../types';

interface ResultsProps {
  dietResults: DietResults;
  workoutPlan: WorkoutPlan;
}

export function Results({ dietResults, workoutPlan }: ResultsProps) {
  const [activeTab, setActiveTab] = useState<'diet' | 'workout'>('diet');

  // Calculate macro percentages for donut chart
  // Include fiber in the chart as a 4th segment based on weight ratio
  const totalWeight = dietResults.protein + dietResults.carbs + dietResults.fat + dietResults.fiber;
  const proteinPercent = Math.round((dietResults.protein / totalWeight) * 100);
  const carbsPercent = Math.round((dietResults.carbs / totalWeight) * 100);
  const fatPercent = Math.round((dietResults.fat / totalWeight) * 100);
  const fiberPercent = Math.round((dietResults.fiber / totalWeight) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="results" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-center mb-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          Your Personalized Plan
        </h2>
        <p className="text-center text-gray-400 mb-8">Tailored specifically for your fitness goals</p>
        
        {/* Tab Navigation - Premium Style */}
        <div className="flex justify-center mb-12 gap-4">
          <button
            onClick={() => setActiveTab('diet')}
            className={`group relative px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'diet'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Diet Plan
            </span>
          </button>
          <button
            onClick={() => setActiveTab('workout')}
            className={`group relative px-10 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'workout'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-gray-800/50 backdrop-blur-sm text-gray-300 hover:bg-gray-700/50 border border-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Workout Plan
            </span>
          </button>
        </div>

        {/* Diet Results */}
        {activeTab === 'diet' && (
          <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-8">
              Daily Nutrition Targets
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calorie and Macro Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 shadow-lg">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Calorie Breakdown
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-xl">
                      <span className="text-gray-400">BMR (Basal Metabolic Rate)</span>
                      <span className="text-white font-bold text-lg">{dietResults.bmr} cal</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-xl">
                      <span className="text-gray-400">TDEE (Total Daily Energy)</span>
                      <span className="text-white font-bold text-lg">{dietResults.tdee} cal</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-xl border border-cyan-500/30 shadow-lg">
                      <span className="text-cyan-400 font-semibold flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Daily Calorie Target
                      </span>
                      <span className="text-cyan-400 font-bold text-2xl">{dietResults.dailyCalories} cal</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 shadow-lg">
                  <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Macronutrients
                  </h4>
                  <div className="space-y-4">
                    <div className="group hover:scale-[1.02] transition-transform">
                      <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 p-4 rounded-xl border border-red-500/20">
                        <div className="flex justify-between mb-2">
                          <span className="text-red-400 font-semibold">Protein</span>
                          <span className="text-white font-bold">{dietResults.protein}g ({proteinPercent}%)</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-red-500 to-red-400 h-3 rounded-full shadow-lg shadow-red-500/50 transition-all duration-1000" style={{ width: `${proteinPercent}%` }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="group hover:scale-[1.02] transition-transform">
                      <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-4 rounded-xl border border-blue-500/20">
                        <div className="flex justify-between mb-2">
                          <span className="text-blue-400 font-semibold">Carbohydrates</span>
                          <span className="text-white font-bold">{dietResults.carbs}g ({carbsPercent}%)</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-3 rounded-full shadow-lg shadow-blue-500/50 transition-all duration-1000" style={{ width: `${carbsPercent}%` }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="group hover:scale-[1.02] transition-transform">
                      <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 p-4 rounded-xl border border-yellow-500/20">
                        <div className="flex justify-between mb-2">
                          <span className="text-yellow-400 font-semibold">Fat</span>
                          <span className="text-white font-bold">{dietResults.fat}g ({fatPercent}%)</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden shadow-inner">
                          <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-3 rounded-full shadow-lg shadow-yellow-500/50 transition-all duration-1000" style={{ width: `${fatPercent}%` }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="group hover:scale-[1.02] transition-transform">
                      <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 p-4 rounded-xl border border-green-500/20">
                        <div className="flex justify-between">
                          <span className="text-green-400 font-semibold">Fiber</span>
                          <span className="text-white font-bold">{dietResults.fiber}g ({fiberPercent}%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Donut Chart - Premium Design */}
              <div className="flex items-center justify-center">
                <div className="text-center relative">
                  {/* Glowing effect behind chart */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                  
                  <div className="relative">
                    <svg viewBox="0 0 200 200" className="w-72 h-72 drop-shadow-2xl">
                      {/* Background circle with gradient */}
                      <defs>
                        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#374151" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#1f2937" stopOpacity="0.5" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      <circle cx="100" cy="100" r="80" fill="none" stroke="url(#bgGradient)" strokeWidth="40" />
                      
                      {/* Protein segment with glow */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="40"
                        strokeDasharray={`${proteinPercent * 5.03} 503`}
                        strokeDashoffset="0"
                        transform="rotate(-90 100 100)"
                        filter="url(#glow)"
                        className="transition-all duration-1000"
                      />
                      
                      {/* Carbs segment with glow */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="40"
                        strokeDasharray={`${carbsPercent * 5.03} 503`}
                        strokeDashoffset={`-${proteinPercent * 5.03}`}
                        transform="rotate(-90 100 100)"
                        filter="url(#glow)"
                        className="transition-all duration-1000"
                      />
                      
                      {/* Fat segment with glow */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#eab308"
                        strokeWidth="40"
                        strokeDasharray={`${fatPercent * 5.03} 503`}
                        strokeDashoffset={`-${(proteinPercent + carbsPercent) * 5.03}`}
                        transform="rotate(-90 100 100)"
                        filter="url(#glow)"
                        className="transition-all duration-1000"
                      />
                      
                      {/* Fiber segment with glow */}
                      <circle
                        cx="100"
                        cy="100"
                        r="80"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="40"
                        strokeDasharray={`${fiberPercent * 5.03} 503`}
                        strokeDashoffset={`-${(proteinPercent + carbsPercent + fatPercent) * 5.03}`}
                        transform="rotate(-90 100 100)"
                        filter="url(#glow)"
                        className="transition-all duration-1000"
                      />
                      
                      {/* Center circle with gradient */}
                      <circle cx="100" cy="100" r="60" fill="#1f2937" />
                      
                      {/* Center text with gradient */}
                      <text x="100" y="90" textAnchor="middle" className="text-3xl font-bold fill-cyan-400">
                        {dietResults.dailyCalories}
                      </text>
                      <text x="100" y="110" textAnchor="middle" className="text-xs fill-gray-400 font-semibold">
                        CALORIES
                      </text>
                    </svg>
                    
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center justify-center gap-3 group hover:scale-105 transition-transform">
                        <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg shadow-red-500/50"></div>
                        <span className="text-gray-300 text-sm font-medium">Protein <span className="text-white font-bold">{dietResults.protein}g</span> <span className="text-gray-500">({proteinPercent}%)</span></span>
                      </div>
                      <div className="flex items-center justify-center gap-3 group hover:scale-105 transition-transform">
                        <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg shadow-blue-500/50"></div>
                        <span className="text-gray-300 text-sm font-medium">Carbs <span className="text-white font-bold">{dietResults.carbs}g</span> <span className="text-gray-500">({carbsPercent}%)</span></span>
                      </div>
                      <div className="flex items-center justify-center gap-3 group hover:scale-105 transition-transform">
                        <div className="w-5 h-5 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg shadow-lg shadow-yellow-500/50"></div>
                        <span className="text-gray-300 text-sm font-medium">Fat <span className="text-white font-bold">{dietResults.fat}g</span> <span className="text-gray-500">({fatPercent}%)</span></span>
                      </div>
                      <div className="flex items-center justify-center gap-3 group hover:scale-105 transition-transform">
                        <div className="w-5 h-5 bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg shadow-green-500/50"></div>
                        <span className="text-gray-300 text-sm font-medium">Fiber <span className="text-white font-bold">{dietResults.fiber}g</span> <span className="text-gray-500">({fiberPercent}%)</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Workout Results */}
        {activeTab === 'workout' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                Weekly Workout Schedule
              </h3>
              <p className="text-gray-400 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {workoutPlan.totalTrainingDays} training days per week
              </p>
            </div>

            {/* Exclusive Weekly Progress Chart */}
            <div className="relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Weekly Training Overview
                  </h4>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-900/40 to-purple-900/40 px-4 py-2 rounded-xl border border-cyan-500/30">
                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-cyan-400 font-semibold text-sm">7 Day View</span>
                  </div>
                </div>
                
                {/* Visual Progress Bars for Each Day */}
                <div className="space-y-4">
                  {workoutPlan.weeklyPlan.map((day, index) => {
                    const isRest = day.focus === 'Rest';
                    const exerciseCount = day.exercises.length;
                    const maxExercises = 8;
                    const progressPercent = isRest ? 0 : Math.min((exerciseCount / maxExercises) * 100, 100);
                    
                    return (
                      <div key={day.day} className="group relative">
                        <div className="flex items-center gap-4">
                          {/* Day indicator */}
                          <div className="flex-shrink-0 w-24">
                            <div className={`text-center p-3 rounded-xl transition-all duration-300 ${
                              isRest 
                                ? 'bg-gray-800/50 border border-gray-700' 
                                : 'bg-gradient-to-br from-cyan-900/40 to-purple-900/40 border border-cyan-500/30 group-hover:border-cyan-500/50'
                            }`}>
                              <p className={`text-xs font-semibold mb-1 ${isRest ? 'text-gray-500' : 'text-cyan-400'}`}>
                                {day.day}
                              </p>
                              <p className={`text-sm font-bold ${isRest ? 'text-gray-600' : 'text-white'}`}>
                                {day.focus}
                              </p>
                            </div>
                          </div>
                          
                          {/* Progress bar */}
                          <div className="flex-1">
                            <div className="relative h-16 bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-gray-600/50 transition-all">
                              {!isRest && (
                                <>
                                  {/* Animated gradient fill */}
                                  <div 
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 transition-all duration-1000 ease-out"
                                    style={{ width: `${progressPercent}%` }}
                                  >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                                  </div>
                                  
                                  {/* Exercise icons/dots */}
                                  <div className="absolute inset-0 flex items-center justify-start gap-2 px-4">
                                    {day.exercises.map((exercise, idx) => (
                                      <div
                                        key={idx}
                                        className="w-8 h-8 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm rounded-lg border border-white/30 flex items-center justify-center text-white text-xs font-bold shadow-lg hover:scale-110 transition-transform"
                                        title={exercise.name}
                                      >
                                        {idx + 1}
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}
                              
                              {isRest && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                    <span className="text-sm font-semibold">Recovery Day</span>
                                  </div>
                                </div>
                              )}
                              
                              {/* Exercise count badge */}
                              {!isRest && (
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                  {exerciseCount} exercises
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-700/50">
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 rounded-xl border border-cyan-500/20">
                    <p className="text-cyan-400 text-3xl font-bold mb-1">{workoutPlan.totalTrainingDays}</p>
                    <p className="text-gray-400 text-sm">Training Days</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-xl border border-purple-500/20">
                    <p className="text-purple-400 text-3xl font-bold mb-1">{7 - workoutPlan.totalTrainingDays}</p>
                    <p className="text-gray-400 text-sm">Rest Days</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-xl border border-blue-500/20">
                    <p className="text-blue-400 text-3xl font-bold mb-1">
                      {workoutPlan.weeklyPlan.reduce((sum, day) => sum + day.exercises.length, 0)}
                    </p>
                    <p className="text-gray-400 text-sm">Total Exercises</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workoutPlan.weeklyPlan.map((day) => (
                <div
                  key={day.day}
                  className={`group relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${
                    day.focus === 'Rest' 
                      ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50' 
                      : 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/20'
                  }`}
                >
                  {/* Day badge */}
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {day.day}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    {day.focus === 'Rest' ? (
                      <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    )}
                    <h4 className={`text-2xl font-bold ${day.focus === 'Rest' ? 'text-gray-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'}`}>
                      {day.focus}
                    </h4>
                  </div>
                  
                  {day.focus !== 'Rest' && day.exercises.length > 0 && (
                    <div className="space-y-3">
                      {day.exercises.map((exercise, idx) => (
                        <div 
                          key={idx} 
                          className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm p-4 rounded-xl border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
                        >
                          <p className="text-white font-semibold mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-xs text-white font-bold shadow-lg">
                              {idx + 1}
                            </span>
                            {exercise.name}
                          </p>
                          <div className="grid grid-cols-3 gap-2 text-xs">
                            <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                              <p className="text-gray-500 mb-1">Sets</p>
                              <p className="text-cyan-400 font-bold">{exercise.sets}</p>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                              <p className="text-gray-500 mb-1">Reps</p>
                              <p className="text-blue-400 font-bold">{exercise.reps}</p>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-2 text-center">
                              <p className="text-gray-500 mb-1">Rest</p>
                              <p className="text-purple-400 font-bold">{exercise.rest}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {day.focus === 'Rest' && (
                    <div className="flex items-center justify-center py-8">
                      <p className="text-gray-500 flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        Recovery day - no workout
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Export Button - Premium */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handlePrint}
            className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Print / Download as PDF
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Medical Disclaimer - Premium */}
        <div className="mt-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 blur-xl"></div>
          <div className="relative bg-gradient-to-br from-yellow-900/40 to-orange-900/40 backdrop-blur-sm p-6 border border-yellow-600/30 rounded-2xl shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h4 className="text-yellow-400 font-bold text-lg mb-2">Medical Disclaimer</h4>
                <p className="text-yellow-200/90 text-sm leading-relaxed">
                  This is general guidance, not medical advice. Talk to a doctor before starting a new diet or workout program. Results may vary based on individual factors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
