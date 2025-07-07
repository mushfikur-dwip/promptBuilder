import React, { useState, useCallback } from 'react';
import { 
  Video, 
  Settings, 
  Plus, 
  Download, 
  Trash2, 
  Play, 
  Key,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import { AppState, Scene, SceneConfig, AdvancedSettings } from './types';
import Dropdown from './components/Dropdown';
import SceneCard from './components/SceneCard';
import { GeminiService } from './services/gemini';
import { exportAsJSON, exportAsTXT } from './utils/export';
import {
  locationOptions,
  characterOptions,
  moodOptions,
  lightingOptions,
  visualStyleOptions,
  cameraAngleOptions,
  voiceLanguageOptions,
  narrativeTypeOptions,
  characterConsistencyOptions
} from './constants/options';

const initialSceneConfig: SceneConfig = {
  location: 'urban_city',
  character: 'young_adult_male',
  mood: 'happy_upbeat',
  lighting: 'natural_daylight',
  visualStyle: 'realistic_cinematic',
  cameraAngle: 'medium_shot',
  voiceLanguage: 'english'
};

const initialAdvancedSettings: AdvancedSettings = {
  narrativeType: 'voice_over',
  characterConsistency: 'same_across_scenes'
};

function App() {
  const [state, setState] = useState<AppState>({
    storyContext: '',
    numberOfScenes: 5,
    sceneConfig: initialSceneConfig,
    advancedSettings: initialAdvancedSettings,
    scenes: [],
    isGenerating: false,
    geminiApiKey: ''
  });

  const [customValues, setCustomValues] = useState<Record<string, string>>({});
  const [showApiKeyInput, setShowApiKeyInput] = useState(false);
  const [apiKeyStatus, setApiKeyStatus] = useState<'none' | 'valid' | 'invalid'>('none');

  const updateSceneConfig = useCallback((key: keyof SceneConfig, value: string) => {
    setState(prev => ({
      ...prev,
      sceneConfig: {
        ...prev.sceneConfig,
        [key]: value
      }
    }));
  }, []);

  const updateAdvancedSettings = useCallback((key: keyof AdvancedSettings, value: string) => {
    setState(prev => ({
      ...prev,
      advancedSettings: {
        ...prev.advancedSettings,
        [key]: value
      }
    }));
  }, []);

  const updateCustomValue = useCallback((key: string, value: string) => {
    setCustomValues(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const validateApiKey = useCallback(async (apiKey: string) => {
    if (!apiKey.trim()) {
      setApiKeyStatus('none');
      return;
    }

    try {
      const service = new GeminiService(apiKey);
      await service.generateScene(
        'Test story context',
        1,
        1,
        initialSceneConfig,
        initialAdvancedSettings,
        {}
      );
      setApiKeyStatus('valid');
    } catch (error) {
      setApiKeyStatus('invalid');
    }
  }, []);

  const handleApiKeyChange = useCallback((value: string) => {
    setState(prev => ({ ...prev, geminiApiKey: value }));
    validateApiKey(value);
  }, [validateApiKey]);

  const generateScenes = useCallback(async () => {
    if (!state.geminiApiKey.trim()) {
      setShowApiKeyInput(true);
      return;
    }

    if (!state.storyContext.trim()) {
      alert('Please provide a story context before generating scenes.');
      return;
    }

    setState(prev => ({ ...prev, isGenerating: true }));
    const service = new GeminiService(state.geminiApiKey);
    
    // Create placeholder scenes
    const newScenes: Scene[] = [];
    for (let i = 1; i <= state.numberOfScenes; i++) {
      newScenes.push({
        id: `scene-${Date.now()}-${i}`,
        sceneNumber: i,
        description: '',
        dialogue: '',
        soundDirection: '',
        isGenerating: true
      });
    }

    setState(prev => ({ ...prev, scenes: newScenes }));

    // Generate scenes one by one
    for (let i = 0; i < state.numberOfScenes; i++) {
      try {
        const sceneContent = await service.generateScene(
          state.storyContext,
          i + 1,
          state.numberOfScenes,
          state.sceneConfig,
          state.advancedSettings,
          customValues
        );

        setState(prev => ({
          ...prev,
          scenes: prev.scenes.map(scene => 
            scene.sceneNumber === i + 1 
              ? {
                  ...scene,
                  description: sceneContent.description,
                  dialogue: sceneContent.dialogue,
                  soundDirection: sceneContent.soundDirection,
                  isGenerating: false
                }
              : scene
          )
        }));
      } catch (error) {
        console.error(`Error generating scene ${i + 1}:`, error);
        setState(prev => ({
          ...prev,
          scenes: prev.scenes.map(scene => 
            scene.sceneNumber === i + 1 
              ? {
                  ...scene,
                  description: 'Error generating scene description',
                  dialogue: '',
                  soundDirection: 'Ambient sound',
                  isGenerating: false
                }
              : scene
          )
        }));
      }
    }

    setState(prev => ({ ...prev, isGenerating: false }));
  }, [state.geminiApiKey, state.storyContext, state.numberOfScenes, state.sceneConfig, state.advancedSettings, customValues]);

  const addScene = useCallback(() => {
    const newScene: Scene = {
      id: `scene-${Date.now()}`,
      sceneNumber: state.scenes.length + 1,
      description: 'Manual scene - click edit to customize',
      dialogue: '',
      soundDirection: 'Ambient sound'
    };
    setState(prev => ({ ...prev, scenes: [...prev.scenes, newScene] }));
  }, [state.scenes.length]);

  const editScene = useCallback((scene: Scene) => {
    const newDescription = prompt('Edit scene description:', scene.description);
    if (newDescription !== null) {
      setState(prev => ({
        ...prev,
        scenes: prev.scenes.map(s => 
          s.id === scene.id 
            ? { ...s, description: newDescription }
            : s
        )
      }));
    }
  }, []);

  const deleteScene = useCallback((sceneId: string) => {
    setState(prev => ({
      ...prev,
      scenes: prev.scenes.filter(s => s.id !== sceneId)
        .map((scene, index) => ({ ...scene, sceneNumber: index + 1 }))
    }));
  }, []);

  const clearAll = useCallback(() => {
    if (confirm('Are you sure you want to clear all scenes?')) {
      setState(prev => ({ ...prev, scenes: [] }));
    }
  }, []);

  const handleExportJSON = useCallback(() => {
    exportAsJSON(state.scenes, state.storyContext, state.sceneConfig, state.advancedSettings);
  }, [state.scenes, state.storyContext, state.sceneConfig, state.advancedSettings]);

  const handleExportTXT = useCallback(() => {
    exportAsTXT(state.scenes, state.storyContext, state.sceneConfig, state.advancedSettings);
  }, [state.scenes, state.storyContext, state.sceneConfig, state.advancedSettings]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-4xl font-bold text-white">AI Video Scene Generator</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Create professional, AI-powered video scene prompts for your stories. 
            Generate structured scenes optimized for AI video generation tools like VEO 3 and Sora.
          </p>
        </div>

        {/* API Key Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white flex items-center">
                <Key className="w-5 h-5 mr-2" />
                Gemini API Configuration
              </h2>
              <button
                onClick={() => setShowApiKeyInput(!showApiKeyInput)}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                {showApiKeyInput ? 'Hide' : 'Configure'}
              </button>
            </div>
            
            {showApiKeyInput && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="password"
                    value={state.geminiApiKey}
                    onChange={(e) => handleApiKeyChange(e.target.value)}
                    placeholder="Enter your Gemini API key..."
                    className="flex-1 bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {apiKeyStatus === 'valid' && (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  )}
                  {apiKeyStatus === 'invalid' && (
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <p className="text-sm text-gray-400">
                  Get your free API key from{' '}
                  <a 
                    href="https://makersuite.google.com/app/apikey" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Google AI Studio
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Story Context Section */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Story Context</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Describe your story
                </label>
                <textarea
                  value={state.storyContext}
                  onChange={(e) => setState(prev => ({ ...prev, storyContext: e.target.value }))}
                  placeholder="Enter your story context here... This will be used as the base for all generated scenes."
                  className="w-full h-32 bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number of Scenes
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={state.numberOfScenes}
                  onChange={(e) => setState(prev => ({ ...prev, numberOfScenes: parseInt(e.target.value, 10) }))}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Base Scene Setup */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6">Base Scene Setup</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Dropdown
                label="Location"
                options={locationOptions}
                value={state.sceneConfig.location}
                onChange={(value) => updateSceneConfig('location', value)}
                customValue={customValues.location}
                onCustomChange={(value) => updateCustomValue('location', value)}
              />
              <Dropdown
                label="Character"
                options={characterOptions}
                value={state.sceneConfig.character}
                onChange={(value) => updateSceneConfig('character', value)}
                customValue={customValues.character}
                onCustomChange={(value) => updateCustomValue('character', value)}
              />
              <Dropdown
                label="Mood"
                options={moodOptions}
                value={state.sceneConfig.mood}
                onChange={(value) => updateSceneConfig('mood', value)}
                customValue={customValues.mood}
                onCustomChange={(value) => updateCustomValue('mood', value)}
              />
              <Dropdown
                label="Lighting"
                options={lightingOptions}
                value={state.sceneConfig.lighting}
                onChange={(value) => updateSceneConfig('lighting', value)}
                customValue={customValues.lighting}
                onCustomChange={(value) => updateCustomValue('lighting', value)}
              />
              <Dropdown
                label="Visual Style"
                options={visualStyleOptions}
                value={state.sceneConfig.visualStyle}
                onChange={(value) => updateSceneConfig('visualStyle', value)}
                customValue={customValues.visualStyle}
                onCustomChange={(value) => updateCustomValue('visualStyle', value)}
              />
              <Dropdown
                label="Camera Angle"
                options={cameraAngleOptions}
                value={state.sceneConfig.cameraAngle}
                onChange={(value) => updateSceneConfig('cameraAngle', value)}
                customValue={customValues.cameraAngle}
                onCustomChange={(value) => updateCustomValue('cameraAngle', value)}
              />
              <Dropdown
                label="Voice Language"
                options={voiceLanguageOptions}
                value={state.sceneConfig.voiceLanguage}
                onChange={(value) => updateSceneConfig('voiceLanguage', value)}
                customValue={customValues.voiceLanguage}
                onCustomChange={(value) => updateCustomValue('voiceLanguage', value)}
              />
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Advanced Settings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Dropdown
                label="Narrative Type"
                options={narrativeTypeOptions}
                value={state.advancedSettings.narrativeType}
                onChange={(value) => updateAdvancedSettings('narrativeType', value)}
              />
              <Dropdown
                label="Character Consistency"
                options={characterConsistencyOptions}
                value={state.advancedSettings.characterConsistency}
                onChange={(value) => updateAdvancedSettings('characterConsistency', value)}
              />
            </div>
          </div>

          {/* Scene Actions */}
          <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={generateScenes}
                disabled={state.isGenerating}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
              >
                <Play className="w-5 h-5 mr-2" />
                Generate {state.numberOfScenes} Scenes
              </button>
              <button
                onClick={addScene}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Scene
              </button>
              <button
                onClick={handleExportJSON}
                disabled={state.scenes.length === 0}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Export JSON
              </button>
              <button
                onClick={handleExportTXT}
                disabled={state.scenes.length === 0}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Export TXT
              </button>
              <button
                onClick={clearAll}
                disabled={state.scenes.length === 0}
                className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
              >
                <Trash2 className="w-5 h-5 mr-2" />
                Clear All
              </button>
            </div>
          </div>

          {/* Scene Output */}
          {state.scenes.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">Generated Scenes</h2>
              <div className="grid gap-6">
                {state.scenes.map((scene) => (
                  <SceneCard
                    key={scene.id}
                    scene={scene}
                    onEdit={editScene}
                    onDelete={deleteScene}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;