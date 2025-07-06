import { DropdownOption } from '../types';

export const locationOptions: DropdownOption[] = [
  { value: 'urban_city', label: 'Urban City' },
  { value: 'rural_countryside', label: 'Rural Countryside' },
  { value: 'forest_woods', label: 'Forest/Woods' },
  { value: 'beach_ocean', label: 'Beach/Ocean' },
  { value: 'mountain_landscape', label: 'Mountain Landscape' },
  { value: 'indoor_home', label: 'Indoor Home' },
  { value: 'office_workspace', label: 'Office/Workspace' },
  { value: 'restaurant_cafe', label: 'Restaurant/Cafe' },
  { value: 'desert', label: 'Desert' },
  { value: 'space_sci_fi', label: 'Space/Sci-Fi' },
  { value: 'custom', label: 'Custom' }
];

export const characterOptions: DropdownOption[] = [
  { value: 'young_adult_male', label: 'Young Adult Male' },
  { value: 'young_adult_female', label: 'Young Adult Female' },
  { value: 'middle_aged_male', label: 'Middle-aged Male' },
  { value: 'middle_aged_female', label: 'Middle-aged Female' },
  { value: 'elderly_male', label: 'Elderly Male' },
  { value: 'elderly_female', label: 'Elderly Female' },
  { value: 'child_boy', label: 'Child (Boy)' },
  { value: 'child_girl', label: 'Child (Girl)' },
  { value: 'group_people', label: 'Group of People' },
  { value: 'no_character', label: 'No Character/Abstract' },
  { value: 'custom', label: 'Custom' }
];

export const moodOptions: DropdownOption[] = [
  { value: 'happy_upbeat', label: 'Happy/Upbeat' },
  { value: 'sad_melancholic', label: 'Sad/Melancholic' },
  { value: 'mysterious_suspenseful', label: 'Mysterious/Suspenseful' },
  { value: 'romantic_intimate', label: 'Romantic/Intimate' },
  { value: 'energetic_dynamic', label: 'Energetic/Dynamic' },
  { value: 'calm_peaceful', label: 'Calm/Peaceful' },
  { value: 'dramatic_intense', label: 'Dramatic/Intense' },
  { value: 'comedic_playful', label: 'Comedic/Playful' },
  { value: 'nostalgic_reflective', label: 'Nostalgic/Reflective' },
  { value: 'custom', label: 'Custom' }
];

export const lightingOptions: DropdownOption[] = [
  { value: 'natural_daylight', label: 'Natural Daylight' },
  { value: 'golden_hour', label: 'Golden Hour' },
  { value: 'blue_hour', label: 'Blue Hour' },
  { value: 'artificial_indoor', label: 'Artificial Indoor' },
  { value: 'neon_city_lights', label: 'Neon/City Lights' },
  { value: 'candlelight_fire', label: 'Candlelight/Fire' },
  { value: 'dramatic_shadows', label: 'Dramatic Shadows' },
  { value: 'soft_diffused', label: 'Soft Diffused' },
  { value: 'harsh_direct', label: 'Harsh Direct' },
  { value: 'custom', label: 'Custom' }
];

export const visualStyleOptions: DropdownOption[] = [
  { value: 'realistic_cinematic', label: 'Realistic/Cinematic' },
  { value: 'animated_cartoon', label: 'Animated/Cartoon' },
  { value: 'vintage_retro', label: 'Vintage/Retro' },
  { value: 'modern_sleek', label: 'Modern/Sleek' },
  { value: 'artistic_stylized', label: 'Artistic/Stylized' },
  { value: 'documentary_raw', label: 'Documentary/Raw' },
  { value: 'fantasy_surreal', label: 'Fantasy/Surreal' },
  { value: 'noir_black_white', label: 'Noir/Black & White' },
  { value: 'vibrant_colorful', label: 'Vibrant/Colorful' },
  { value: 'custom', label: 'Custom' }
];

export const cameraAngleOptions: DropdownOption[] = [
  { value: 'wide_establishing', label: 'Wide/Establishing Shot' },
  { value: 'medium_shot', label: 'Medium Shot' },
  { value: 'close_up', label: 'Close-up' },
  { value: 'extreme_close_up', label: 'Extreme Close-up' },
  { value: 'birds_eye_view', label: 'Bird\'s Eye View' },
  { value: 'low_angle', label: 'Low Angle' },
  { value: 'high_angle', label: 'High Angle' },
  { value: 'over_shoulder', label: 'Over-the-Shoulder' },
  { value: 'tracking_shot', label: 'Tracking Shot' },
  { value: 'handheld_dynamic', label: 'Handheld/Dynamic' },
  { value: 'custom', label: 'Custom' }
];

export const voiceLanguageOptions: DropdownOption[] = [
  { value: 'english', label: 'English' },
  { value: 'bengali', label: 'Bengali' },
  { value: 'hindi', label: 'Hindi' },
  { value: 'arabic', label: 'Arabic' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'korean', label: 'Korean' },
  { value: 'mandarin', label: 'Mandarin' },
  { value: 'custom', label: 'Custom' }
];

export const narrativeTypeOptions: DropdownOption[] = [
  { value: 'voice_over', label: 'Voice-over' },
  { value: 'dialogue', label: 'Dialogue' },
  { value: 'voice_dialogue', label: 'Voice + Dialogue' },
  { value: 'silent', label: 'Silent' },
  { value: 'natural_sounds', label: 'Natural Sounds' }
];

export const characterConsistencyOptions: DropdownOption[] = [
  { value: 'same_across_scenes', label: 'Same Across Scenes' },
  { value: 'evolving', label: 'Evolving' },
  { value: 'unique_per_scene', label: 'Unique per Scene' }
];