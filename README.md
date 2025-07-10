# The Skywalker Quest Map

A comprehensive, interactive guide for personal and philosophical growth, inspired by the mythic journey of Luke Skywalker. This project transforms the archetypal Hero's Journey into a practical framework for self-discovery and spiritual development.

## ✨ Features

- **🎨 Modern Visual Design**: Professional Star Wars-inspired styling with:
  - Advanced CSS gradients and animations
  - Interactive spotlight card effects
  - Responsive layout for all devices
  
- **🌟 Interactive Elements**: 
  - Animated star border effects for special sections
  - Hover-responsive tiered question cards
  - Dynamic gradient text effects
  - Cinematic 3D title perspective

**🎧 Audio Player**:
  - Uses the default browser audio player for maximum compatibility
  - Custom stylized version was developed but is not currently in use due to technical challenges; this may be revisited in the future
  - Standalone podcast episode: "Luke Skywalker: A New Hope's Archetypal Journey"
  - GitHub Pages compatible and works across all major browsers

- **🔗 Workflow Integration**:
  - GitHub Pages hosting for public access
  - Notion workspace integration with published HTML
  - Seamless content management and deployment pipeline

- **📚 Comprehensive Content Structure**:
  - Complete Hero's Journey framework
  - Mythic and psychological foundations
  - Professor's Voice commentary sections
  - Tiered reflection questions (Padawan, Knight, Master levels)
  - Professional formatting for deep engagement

- **🔧 Technical Excellence**:
  - Clean, semantic HTML structure
  - CSS custom properties for easy theming
  - Accessibility-focused design
  - Cross-browser compatibility

## 🚀 Quick Start

### 🌐 Online Experience
- **Visit the live site**: [GitHub Pages hosted version](https://benwassa.github.io/Skywalker/) — **now fully operational!**
- **Listen to the podcast**: Standalone audio episode available and integrated with the quest content

### 💻 Local Development
1. **Open `Skywalker Quest.html`** in your browser for the full interactive experience
2. **Customize** by editing the HTML content and CSS styles in `allstyles.css`
3. **Reference** the Markdown source (`Skywalker Quest.md`) for content structure
4. **Deploy changes** by updating files in the `docs/` folder for GitHub Pages

## 📁 Project Structure

```
Skywalker/
├── docs/                   # GitHub Pages hosting (live site)
│   ├── index.html         # Complete interactive guide with audio player
│   ├── stylesheet.css     # Professional styling with audio player themes
│   ├── podcast.mp3         # Main podcast audio (browser compatible)
│   ├── podcast.wav         # (Optional, archival/original WAV)
│   └── transcript.vtt     # Subtitle file for accessibility
├── skywalker-quest-map/   # Development workspace
│   ├── Skywalker Quest.html     # Alternative version for development
│   ├── Skywalker Quest.md       # Markdown source content
│   ├── allstyles.css           # Complete stylesheet with all effects
│   ├── Images/                 # Generated artwork and visuals
│   ├── Podcast Audio/          # Audio content backup
│   │   └── podcast.wav
│   ├── alternates/            # Alternative CSS versions and backups
│   └── testing/              # Development and testing files
└── README.md              # This file
```

### 🌐 Deployment Architecture
- **`docs/`**: GitHub Pages deployment featuring the complete interactive experience
- **`skywalker-quest-map/`**: Development environment and alternative implementations
- **Audio Integration**: Professional audio player with subtitle support deployed to production
- **Content Management**: Streamlined workflow from development to live deployment

## 🎯 Key Design Elements

### Visual Effects
- **Gradient Text**: Dynamic color-shifting headers with smooth animations
- **Spotlight Cards**: Interactive tiered questions with mouse-following light effects  
- **Star Border Animations**: Moving star effects around Professor's Voice sections
- **3D Typography**: Cinematic perspective on main title
- **Professional Color Palette**: Carefully chosen dark theme with accent colors

### Audio & Accessibility Features
- **Custom Audio Player**: Lightsaber-themed timeline with animated glow effects
- **Subtitle Integration**: Synchronized VTT transcripts for full accessibility
- **Interactive Controls**: Professional UI with hover effects and keyboard navigation
- **Three-dot Menu**: Download audio and toggle subtitle options
- **Responsive Audio**: Optimized for all screen sizes with mobile-friendly controls
- **GitHub Pages Ready**: All features work seamlessly in production environment

### Content Organization
- **Tiered Reflection System**: Three levels of engagement (Padawan, Knight, Master)
- **Professor's Voice**: Academic commentary with special visual treatment
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Print Optimization**: A3-optimized styles for physical reference materials

### Theming
The project uses CSS custom properties for easy customization:

```css
:root {
  --primary-background: #0A0B14;
  --accent-blue: #3B82F6;
  --accent-purple: #8B5CF6;
  --accent-gold: #FFC107;
  /* ... more variables in allstyles.css */
}
```

### Audio Player Customization
The audio player includes extensive customization options:

```css
/* Lightsaber timeline colors and effects */
.timeline-progress {
  background: linear-gradient(90deg, #87CEEB 0%, #4682B4 15%, #1E90FF 30%, ...);
  animation: lightsaber-glow 16s ease-in-out infinite;
}

/* Subtitle styling */
.subtitle-text {
  background: rgba(0, 0, 0, 0.95);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
}
```

### Content Editing
- Edit HTML content directly in `docs/index.html` for the live site
- Modify Markdown source in `Skywalker Quest.md` for structured content management
- Adjust styling in `docs/stylesheet.css` using the existing variable system
- Update audio and subtitle files in the `docs/` folder for GitHub Pages deployment

## 🔧 Technical Implementation

### Audio Player Architecture
The custom audio player is built with vanilla JavaScript and CSS, featuring:

```javascript
// Core audio functionality
const audio = document.getElementById('heroJourneyPodcast');
const timelineSlider = document.getElementById('timelineSlider');

// Subtitle synchronization
function updateSubtitles() {
  const currentTime = audio.currentTime;
  // Parse VTT cues and display matching subtitle
}

// Timeline animation
function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  timelineProgress.style.width = percent + '%';
}
```

### Subtitle System
- **VTT Parsing**: Custom JavaScript parser for WebVTT format
- **Real-time Sync**: Event-driven subtitle updates during playback
- **Accessibility**: Screen reader compatible with proper ARIA labels
- **Responsive Display**: Dynamic sizing and positioning across devices

### Performance Optimization
- **Lazy Loading**: Audio files load only when needed
- **Efficient Animations**: CSS transforms and GPU acceleration
- **Minimal Dependencies**: No external libraries required
- **Optimized Assets**: Compressed audio and optimized CSS

## 🖼️ Visual Assets

The `Images/` directory contains AI-generated artwork that complements the quest themes:
- Twin Suns meditative scenes
- Lightsaber and cosmic journey imagery  
- Cave revelation and warrior contemplation scenes

## 🎧 Audio Experience

**Enhanced Podcast Integration**: The Skywalker Quest Map now features a fully integrated audio experience with professional-grade features:

### 🎵 Custom Audio Player Features
- **Lightsaber Timeline**: Animated progress bar with blue-to-purple gradient glow effects
- **Professional Controls**: Play/pause, volume, seeking with visual feedback
- **Keyboard Navigation**: 
  - `Space`: Play/pause
  - `M`: Mute/unmute
  - `Arrow Keys`: Skip forward/backward by 10 seconds
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 📝 Subtitle Integration
- **VTT Transcript Support**: Full subtitle synchronization with audio
- **Toggle Controls**: Easy on/off switching via three-dot menu
- **Professional Display**: Styled subtitle overlay with fade animations
- **Accessibility First**: Enhanced experience for hearing-impaired users

### 🎛️ Advanced Features
- **Download Option**: Direct audio file download via overflow menu
- **Volume Control**: Hover-to-reveal vertical volume slider
- **Seek Precision**: Click-to-seek and drag-to-scrub timeline interaction
- **Visual Feedback**: Animated handle and progress indicators


### 📁 Audio Content
- **Episode**: "Luke Skywalker: A New Hope's Archetypal Journey" 
- **Duration**: Full-length deep-dive analysis
- **Quality**: MP3 format for browser compatibility (WAV also available for archival)
- **Content**: Mythological foundations and psychological insights
- **Integration**: Seamlessly paired with visual quest map elements

**File Naming & Deployment Notes:**
- Audio and subtitle files must use simple, lowercase names (e.g., `podcast.mp3`, `transcript.vtt`) for reliable loading on GitHub Pages.
- The main site is `docs/index.html`. Push changes to the `main` branch to update the live site.
- Large audio files (>100MB) are not supported by GitHub Pages.
- If updates to audio or subtitle files do not appear, force-refresh your browser to clear the cache.

## 🔄 Workflow & Integration

### GitHub Pages Deployment
- **Live Site**: Hosted via GitHub Pages using the `docs/` folder
- **Portfolio Integration**: Landing page showcases the project professionally
- **Automatic Updates**: Changes pushed to `docs/` deploy automatically

### Notion Workspace
- **Content Management**: Notion now references the published HTML page
- **Collaborative Planning**: Team workflows integrated with live deployment
- **Documentation Hub**: Central knowledge base linked to production site

## 🎭 Credits & Inspiration

- **Mythological Framework**: Joseph Campbell's Hero's Journey and Carl Jung's psychological insights
- **Narrative Foundation**: George Lucas's Star Wars saga, particularly Luke Skywalker's character arc
- **Technical Implementation**: Modern web standards with accessibility-first design
- **Visual Design**: Professional UI/UX principles with cinematic Star Wars aesthetics

## 🛠️ Development

### 🆕 July 2025 Upgrades

- **Subtitle System Overhaul**
  - Subtitles now reliably sync with audio playback using a robust, custom JavaScript VTT parser.
  - Subtitles can be toggled on/off via the three-dot menu.
  - Debug/test options in the menu: show a test subtitle, debug VTT loading, and seek directly to the first subtitle cue for instant verification.
  - Improved accessibility: subtitle display is fully keyboard and screen-reader friendly.

- **Bug Fixes & Robustness**
  - Fixed issues with subtitle display not updating due to JavaScript scoping and event listener placement.
  - Enhanced error handling and console logging for easier debugging and user support.
  - Ensured subtitle system works on all browsers and on GitHub Pages.

- **UI/UX Enhancements**
  - Subtitle overlay now features a more prominent, animated style for better readability.
  - Added smooth fade-in transitions and responsive sizing for mobile and desktop.
  - Overflow menu now includes advanced debug/test tools for maintainers.

- **Developer Experience**
  - Code refactored for maintainability: subtitle update logic is now global and robust.
  - Added clear comments and debug hooks for future contributors.
  - README and documentation updated to reflect all new features and troubleshooting steps.

- **Technical Debt Reduction** (July 2025)
  - **Major Code Cleanup**: Removed extensive unused custom audio player code (~200+ lines)
  - **Simplified Audio Architecture**: Transitioned to native HTML audio player for better browser compatibility
  - **Eliminated Dead Code**: Removed JavaScript variables, CSS classes, and event handlers for non-existent DOM elements
  - **Fixed HTML Validation**: Corrected invalid `blockquote_1` tags to proper `blockquote` elements
  - **Improved Maintainability**: Cleaner codebase with only actively used components
  - **File Size Reduction**: Significantly reduced CSS and JavaScript bloat in production files

## 🔧 Technical Notes

### Recent Code Cleanup (July 2025)
- **Custom Audio Player Removal**: Cleaned up all unused custom audio player code from `docs/` files
  - Removed complex timeline controls, volume sliders, and custom button JavaScript
  - Removed unused CSS classes (`audio-controls`, `timeline-progress`, etc.)
  - Simplified to use native HTML5 audio element for maximum compatibility
  - Maintained essential styling for audio section container
- **A3 Print Styles Removed**: Eliminated A3 print optimization CSS (~150 lines)
  - Print-specific media queries and page break controls
  - Print-optimized layouts and responsive adjustments
  - Specialty print typography and color adjustments
- **Result**: Reduced bloat, improved maintainability, faster loading

### Recent Updates
- ✅ Complete CSS rewrite with modern effects and animations
- ✅ Responsive design for all screen sizes  
- ✅ A3 print optimization for physical reference
- ✅ Interactive spotlight card system for questions
- ✅ Enhanced Professor's Voice sections with animated borders
- ✅ Professional typography hierarchy with gradient effects
- ✅ **Custom audio player with lightsaber-themed timeline**
- ✅ **Integrated subtitle support with VTT transcripts**
- ✅ **Three-dot overflow menu with download and subtitle options**
- ✅ **Keyboard shortcuts for accessibility**
- ✅ **GitHub Pages deployment with full audio functionality**
- ✅ **Professional UI/UX with responsive design**
- ✅ **Code cleanup: Removed unused custom audio player components** (July 2025)

### Future Enhancements
- [ ] Dark/light theme toggle
- [ ] Progress tracking system for quest completion
- [ ] Enhanced keyboard shortcuts and accessibility features
- [ ] Multiple language subtitle support
- [ ] Chapter markers and navigation within audio
- [ ] Printable PDF generation with embedded QR codes
- [ ] Mobile app version with offline audio capability
- [ ] User authentication for progress saving and personalization
- [ ] Advanced audio features (playback speed, bookmarks)

## 🤝 Contributing

We welcome contributions to enhance the Skywalker Quest Map experience:

- **🐛 Bug Reports**: Submit issues for any display or functionality problems
- **✨ Feature Requests**: Suggest new interactive elements or content improvements  
- **🎨 Design Enhancements**: Propose visual improvements or accessibility updates
- **📚 Content Additions**: Contribute new reflection questions or mythological insights
- **🔧 Technical Improvements**: Code optimizations, performance enhancements, or new features

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-improvement`)
3. Commit your changes (`git commit -m 'Add amazing improvement'`)
4. Push to the branch (`git push origin feature/amazing-improvement`)
5. Open a Pull Request

**Note**: Changes to the live site should be made in the `docs/` folder. Development work can be done in `skywalker-quest-map/` and then deployed to `docs/` when ready.

## 📄 License

This project is for educational and personal growth purposes. Please see the LICENSE file for detailed terms.

## 🌟 Philosophy

> *"The Force is what gives a Jedi his power. It's an energy field created by all living things. It surrounds us and penetrates us; it binds the galaxy together."* - Obi-Wan Kenobi

This quest map serves as a bridge between ancient wisdom and modern self-discovery, using the beloved Star Wars narrative as a vehicle for profound personal transformation.

---

**May the path reveal you to yourself.** ✨
