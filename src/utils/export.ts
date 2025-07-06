import { Scene, SceneConfig, AdvancedSettings } from '../types';

export const exportAsJSON = (
  scenes: Scene[],
  storyContext: string,
  sceneConfig: SceneConfig,
  advancedSettings: AdvancedSettings
) => {
  const data = {
    metadata: {
      title: 'AI Generated Video Scene Prompts',
      generatedAt: new Date().toISOString(),
      totalScenes: scenes.length,
      storyContext,
      sceneConfig,
      advancedSettings
    },
    scenes: scenes.map(scene => ({
      sceneNumber: scene.sceneNumber,
      description: scene.description,
      dialogue: scene.dialogue,
      soundDirection: scene.soundDirection
    }))
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `video-scene-prompts-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const exportAsTXT = (
  scenes: Scene[],
  storyContext: string,
  sceneConfig: SceneConfig,
  advancedSettings: AdvancedSettings
) => {
  let content = `AI Generated Video Scene Prompts\n`;
  content += `Generated: ${new Date().toLocaleString()}\n`;
  content += `Total Scenes: ${scenes.length}\n\n`;
  
  content += `STORY CONTEXT:\n${storyContext}\n\n`;
  
  content += `SCENE CONFIGURATION:\n`;
  content += `- Location: ${sceneConfig.location}\n`;
  content += `- Character: ${sceneConfig.character}\n`;
  content += `- Mood: ${sceneConfig.mood}\n`;
  content += `- Lighting: ${sceneConfig.lighting}\n`;
  content += `- Visual Style: ${sceneConfig.visualStyle}\n`;
  content += `- Camera Angle: ${sceneConfig.cameraAngle}\n`;
  content += `- Voice Language: ${sceneConfig.voiceLanguage}\n\n`;
  
  content += `ADVANCED SETTINGS:\n`;
  content += `- Narrative Type: ${advancedSettings.narrativeType}\n`;
  content += `- Character Consistency: ${advancedSettings.characterConsistency}\n\n`;
  
  content += `SCENES:\n`;
  content += `${'='.repeat(50)}\n\n`;
  
  scenes.forEach(scene => {
    content += `SCENE ${scene.sceneNumber}\n`;
    content += `${'-'.repeat(20)}\n\n`;
    
    content += `Description:\n${scene.description}\n\n`;
    
    if (scene.dialogue) {
      content += `Dialogue:\n${scene.dialogue}\n\n`;
    }
    
    content += `Sound Direction:\n${scene.soundDirection}\n\n`;
    content += `${'='.repeat(50)}\n\n`;
  });

  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `video-scene-prompts-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};