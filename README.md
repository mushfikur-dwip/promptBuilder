# 🎬 AI Scene Generator

> **Professional AI-powered video scene generation optimized for VEO 3, Sora, and other cutting-edge AI video tools**

A powerful web application that leverages Google's Gemini AI to generate detailed, cinematic video scenes with advanced customization options. Perfect for content creators, filmmakers, and AI video enthusiasts.

![AI Scene Generator](https://img.shields.io/badge/AI-Scene%20Generator-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.1-06B6D4?style=for-the-badge&logo=tailwindcss)

## ✨ Features

### 🚀 **Core Capabilities**

- **Lightning Fast Generation**: Create multiple structured scenes in seconds using Google Gemini AI
- **Professional Output**: Scenes optimized specifically for AI video generation tools like VEO 3 and Sora
- **Advanced Customization**: 50+ configuration options across multiple categories
- **Multilingual Support**: Generate content in 10+ languages including Bengali, English, Hindi, Arabic, and more
- **Professional Export**: Multiple export formats (JSON, TXT) for different workflows

### 🎨 **Customization Options**

- **11 Location Types**: Urban, rural, forest, beach, mountain, indoor, office, restaurant, desert, space, and custom
- **11 Character Options**: Various age groups, genders, and character types
- **9 Mood Settings**: Happy, sad, mysterious, romantic, energetic, calm, dramatic, comedic, nostalgic
- **10 Lighting Options**: Natural daylight, golden hour, blue hour, artificial, neon, candlelight, and more
- **11 Camera Angles**: Close-up, medium shot, wide shot, bird's eye, low angle, and more
- **Advanced Settings**: Narrative types, character consistency, and voice language preferences

### 🌍 **Language Support**

- **Bengali** (বাংলা)
- **English**
- **Hindi** (हिंदी)
- **Arabic** (العربية)
- **Spanish** (Español)
- **French** (Français)
- **German** (Deutsch)
- **Japanese** (日本語)
- **Korean** (한국어)
- **Chinese** (中文)
- **Portuguese** (Português)
- **Russian** (Русский)

### 📱 **User Experience**

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Generation**: Watch scenes generate one by one with live progress indicators
- **Interactive Editing**: Manual scene editing capabilities with intuitive interface
- **Feedback System**: Built-in user feedback with email integration
- **Professional UI**: Clean, minimal design inspired by modern design principles

## 🛠 Tech Stack

### **Frontend**

- **React 18.3.1** - Modern UI library with hooks and functional components
- **TypeScript 5.5.3** - Type-safe development with enhanced IDE support
- **Vite 5.4.2** - Lightning-fast build tool and development server
- **TailwindCSS 3.4.1** - Utility-first CSS framework for rapid styling
- **React Router DOM 7.6.3** - Client-side routing for SPA navigation

### **AI & APIs**

- **Google Generative AI 0.24.1** - Integration with Google's Gemini 2.0 Flash model
- **Brevo API** - Email service integration for user feedback system
- **Lucide React 0.344.0** - Beautiful, customizable icons

### **Development Tools**

- **ESLint** - Code linting with React and TypeScript rules
- **PostCSS** - CSS processing with Autoprefixer
- **TypeScript ESLint** - Enhanced linting for TypeScript projects

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Google AI Studio API Key** (free)
- **Brevo API Key** (free, optional for feedback system)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/ai-scene-generator.git
   cd ai-scene-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your API keys:

   ```bash
   # Optional: For feedback system
   VITE_BREVO_API_KEY=your_brevo_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Getting API Keys

#### Google Gemini API Key (Required)

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. The app will prompt you to enter this key when generating scenes

#### Brevo API Key (Optional - for feedback system)

1. Sign up at [Brevo](https://www.brevo.com/)
2. Go to SMTP & API section in your dashboard
3. Generate a new API key with "Send emails" permission
4. Add the key to your `.env` file

## 📖 Usage Guide

### Basic Workflow

1. **Enter Your Story Context**

   - Describe your story idea in the text area
   - Choose the number of scenes you want to generate (1-20)

2. **Configure Scene Parameters**

   - **Location**: Select from predefined options or use custom
   - **Character**: Choose character types and demographics
   - **Mood**: Set the emotional tone of your scenes
   - **Lighting**: Pick lighting conditions and atmosphere
   - **Visual Style**: Choose from realistic, animated, artistic styles
   - **Camera Angle**: Select preferred camera perspectives
   - **Voice Language**: Set the language for dialogue generation

3. **Advanced Settings**

   - **Narrative Type**: Voice-over, dialogue, silent, or natural sounds
   - **Character Consistency**: Same characters across scenes or varied

4. **Generate Scenes**

   - Click "Generate Scenes" to start the AI creation process
   - Watch as scenes are generated one by one
   - Each scene includes description, dialogue, and sound direction

5. **Export and Use**
   - **Copy Individual Scenes**: Click copy button on any scene
   - **Export as JSON**: Download structured data for developers
   - **Export as TXT**: Get formatted text for scripts and documentation

### Advanced Features

#### Custom Values

- Select "Custom" for any dropdown option
- Enter your own specific requirements
- The AI will incorporate your custom values into scene generation

#### Scene Editing

- Click the edit button on any generated scene
- Manually modify scene descriptions
- Perfect for fine-tuning AI-generated content

#### Batch Operations

- Generate multiple scenes simultaneously
- Delete unwanted scenes individually
- Clear all scenes with one click

## 🏗 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Dropdown.tsx     # Custom dropdown with custom value support
│   ├── SceneCard.tsx    # Individual scene display component
│   └── FeedbackForm.tsx # User feedback form component
├── constants/           # Static data and configurations
│   └── options.ts       # All dropdown options and values
├── pages/              # Main application pages
│   ├── App.tsx         # Main application page
│   └── Landing.tsx     # Landing page with features showcase
├── services/           # External API integrations
│   ├── gemini.ts       # Google Gemini AI service
│   └── smtp.ts         # Email service integration
├── types/              # TypeScript type definitions
│   └── index.ts        # All application types
├── utils/              # Utility functions
│   └── export.ts       # Export functionality (JSON/TXT)
├── index.css           # Global styles and Tailwind imports
└── main.tsx            # Application entry point
```

## 🎯 Key Components

### GeminiService (`src/services/gemini.ts`)

- Handles all interactions with Google's Gemini AI
- Configurable model parameters (temperature, topK, topP)
- Robust error handling and response parsing
- Support for custom values and advanced settings

### Dropdown Component (`src/components/Dropdown.tsx`)

- Reusable dropdown with custom value support
- Clean, accessible design with proper keyboard navigation
- Integration with parent component state management

### Scene Card (`src/components/SceneCard.tsx`)

- Displays generated scenes with copy functionality
- Edit and delete capabilities
- Loading states during generation
- Professional formatting for different content types

### Export Utilities (`src/utils/export.ts`)

- JSON export with complete scene data and metadata
- TXT export with formatted, human-readable content
- Timestamp-based file naming
- Browser-compatible download functionality

## 🌟 Optimization Features

### AI Video Tool Compatibility

- **VEO 3 Optimized**: Scenes formatted for Google's video generation model
- **Sora Compatible**: Output structure aligned with OpenAI's requirements
- **General AI Video Tools**: Generic format suitable for multiple platforms

### Performance Optimizations

- **Efficient State Management**: Optimized React state updates
- **Lazy Loading**: Components load only when needed
- **Optimistic UI Updates**: Immediate feedback during generation
- **Error Boundaries**: Graceful error handling throughout the app

### SEO and Accessibility

- **Semantic HTML**: Proper heading structure and landmarks
- **ARIA Labels**: Screen reader compatible interface
- **Keyboard Navigation**: Full functionality without mouse
- **Responsive Images**: Optimized for all screen sizes

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Code Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Configured for React and TypeScript best practices
- **Prettier**: Code formatting (configure in your IDE)
- **Component Architecture**: Modular, reusable components

### Environment Variables

```bash
# .env file structure
VITE_BREVO_API_KEY=your_brevo_api_key_here
```

**Note**: Only VITE\_ prefixed variables are available in the browser.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any Static Host**: Upload the `dist` folder contents

### Environment Configuration

For production deployment:

1. Set up environment variables on your hosting platform
2. Ensure API keys are properly configured
3. Test all functionality in the production environment

## 📚 API Documentation

### Gemini Service Methods

#### `generateScene()`

Generates a single scene based on provided parameters.

**Parameters:**

- `storyContext`: String - The overall story context
- `sceneNumber`: Number - Current scene number
- `totalScenes`: Number - Total number of scenes
- `sceneConfig`: Object - Scene configuration options
- `advancedSettings`: Object - Advanced generation settings
- `customValues`: Object - Custom user-defined values

**Returns:**

```typescript
{
  description: string; // Detailed scene description
  dialogue: string; // Character dialogue or empty string
  soundDirection: string; // Audio and sound design notes
}
```

### Export Functions

#### `exportAsJSON()`

Exports all scenes and configuration as a structured JSON file.

#### `exportAsTXT()`

Exports scenes as human-readable text format.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and patterns
- Add TypeScript types for all new features
- Include comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** - Powerful language model for scene generation
- **React Team** - Amazing framework for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide** - Beautiful icon library
- **Vite** - Fast and modern build tool

## 📞 Support

### Getting Help

- **Documentation**: Read through this README and code comments
- **Issues**: Open a GitHub issue for bug reports or feature requests
- **Discussions**: Join GitHub Discussions for questions and ideas

### Feedback

We value your feedback! Use the built-in feedback form in the application or contact us directly:

- **Built by**: Ant Digitals
- **Powered by**: Google Gemini AI
- **Version**: 1.0.0

---

**Happy Scene Generating! 🎬✨**

_Create cinematic magic with AI-powered precision._
