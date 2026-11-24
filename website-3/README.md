# 🌪️ Shreeyash Rahul Solunke — Kinetic Motion Portfolio (Website No. 3)

An unconventional, award-winning motion portfolio inspired by **MotionSites** and **React Bits**, built specifically for **Shreeyash Rahul Solunke** (B.Tech Information Technology at **VIT Pune, Class of 2030**, Leader of **Team ByteForge** at VIT Code APEX 3.0).

---

## 🎨 Design Philosophy & Creative Direction

Unlike conventional flat portfolios, Website No. 3 embraces **physics-driven interactions, kinetic typography, and multi-layered tactile micro-states**:

| Component / Layer | Implementation Architecture | React Bits Inspiration |
|---|---|---|
| **3D Physics ID Badge** | Spring-damped gyroscopic mouse tilt, cord physics, and 3D flip card | `<Lanyard />` |
| **Bento Proximity Lighting** | Multi-card shared radial cursor spotlight with glowing border proximity | `<SpotlightCard />` & `<MagicBento />` |
| **Dynamic Viewfinder** | Sequentially shifting camera bracket cycling Shreeyash's core roles | `<TrueFocus />` |
| **Kinetic Scramble Text** | In-place glyph decryption cycling ASCII/alphanumerics on hover and scroll | `<DecryptedText />` |
| **Variable Proximity Field** | Character scaling and color swelling calculated via pointer Euclidean distance | `<VariableProximity />` |
| **Interactive Ballpit Sandbox** | 60 FPS rigid-body Verlet physics canvas with collision and drag interactions | `<Ballpit />` |
| **Aurora Background** | Multi-layer sine/cosine generative wave shader canvas | `<Aurora />` |
| **Tactile Sound Lab** | Zero-dependency crystalline Web Audio synthesizer (blips, clicks, chimes) | `<SoundLab />` |
| **Analog Noise Overlay** | Scalable SVG fractal noise filter eliminating digital gradient banding | `<Noise />` |
| **Click Spark Engine** | Radial physics sparks bursting on mouse clicks | `<ClickSpark />` |

---

## 🚀 1. How to Open and Preview Locally

### Method A: Direct Browser Launch (Instant)
1. Open Windows File Explorer.
2. Navigate to: `c:\Users\Ram Shahapure\Desktop\Shreeyash Portfolios\website-3`.
3. Double-click `index.html`. It will instantly open in your default browser with all physics, sounds, and shaders fully active!

### Method B: Local Web Server
From the root directory (`Shreeyash Portfolios`), run:
```powershell
python -m http.server 3000
```
Then open:
- **Kinetic Motion Edition (Website 3)**: [http://localhost:3000/website-3/](http://localhost:3000/website-3/)
- **Apple Bento Minimal Edition (Website 2)**: [http://localhost:3000/website-2/](http://localhost:3000/website-2/)
- **Cyberpunk Glassmorphic Edition (Website 1)**: [http://localhost:3000/](http://localhost:3000/)

---

## 🌐 2. How to Publish to GitHub Pages

Since you already have GitHub repository integration set up for your profile [`github.com/ShreeyashSolunke08`](https://github.com/ShreeyashSolunke08):

### To Make Website 3 Your Main Root Site:
1. Copy the contents of `website-3/index.html` to overwrite `index.html` in the root folder.
2. Run git commit and push:
```bash
git add .
git commit -m "Deploy Motion Kinetic Portfolio v3"
git push origin main
```
Your website will go live instantly at:
👉 **`https://shreeyashsolunke08.github.io`**

### To Keep All 3 Portfolios Available Simultaneously:
If you keep the folder structure as is:
- `https://shreeyashsolunke08.github.io/` ➔ Website 1 (Cyberpunk)
- `https://shreeyashsolunke08.github.io/website-2/` ➔ Website 2 (Bento)
- `https://shreeyashsolunke08.github.io/website-3/` ➔ Website 3 (Motion Kinetic)

The top navigation bar includes an integrated quick-switcher so visitors can effortlessly toggle between all three design editions!

---

## 🛠️ 3. Interactive Features & Customization Guide

### 1. Synthesized Audio Engine (`playSynthSound`)
- Uses browser native `AudioContext` with zero MP3 downloads.
- Includes distinct sound signatures for:
  - `hover`: Crisp 1400Hz blip
  - `click`: Snappy magnetic tactile pop
  - `decrypt`: Multi-frequency typewriter tick
  - `open`: Resonant 440Hz-880Hz holographic chime
- Visitors can mute or unmute anytime using the speaker icon in the navigation bar.

### 2. Live Contact Dispatch System
- Form entries are routed to `shreeyashsolunke@gmail.com`.
- Includes automated clipboard backup of the user's message so no drafted text is ever lost.
- Offline fallback opens the user's native email client with subject and message pre-populated.

### 3. Adding More Projects to the Work Deck
To add a new project:
1. Add a card in `<section id="projects">` following the `.spotlight-card` pattern.
2. Add the corresponding key and metadata in `caseStudies` object in the `<script>` tag. The modal blueprint will automatically render all tabs, metrics, and problem statements!
