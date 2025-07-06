export interface SceneConfig {
  location: string;
  character: string;
  mood: string;
  lighting: string;
  visualStyle: string;
  cameraAngle: string;
  voiceLanguage: string;
}

export interface AdvancedSettings {
  narrativeType: string;
  characterConsistency: string;
}

export interface Scene {
  id: string;
  sceneNumber: number;
  description: string;
  dialogue: string;
  soundDirection: string;
  isGenerating?: boolean;
}

export interface AppState {
  storyContext: string;
  numberOfScenes: number;
  sceneConfig: SceneConfig;
  advancedSettings: AdvancedSettings;
  scenes: Scene[];
  isGenerating: boolean;
  geminiApiKey: string;
}

export interface DropdownOption {
  value: string;
  label: string;
}