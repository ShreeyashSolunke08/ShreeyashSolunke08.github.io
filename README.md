# ⚡ Shreeyash Rahul Solunke - Modern Developer Portfolio

An interactive, high-energy, glassmorphic portfolio designed for **Shreeyash Rahul Solunke** (IT Engineering at VIT Pune, **Class of 2030**, Leader of Team ByteForge at VIT Code APEX 3.0).

---

## 🚀 1. How to View & Test Locally Right Now

You can open and preview your website immediately on your computer:

### Method A: Direct File Open (Instant)
1. Open your File Explorer.
2. Navigate to: `c:\Users\Ram Shahapure\Desktop\Shreeyash Portfolios`.
3. Double-click [`index.html`](index.html). It will open directly in Google Chrome, Microsoft Edge, or any modern web browser!

### Method B: Local Live Server (Recommended)
Open PowerShell or Terminal in this folder and run:
```bash
python -m http.server 3000
```
Then visit **`http://localhost:3000`** in your browser.

---

## 🌐 2. How to Publish This Website (Free Hosting)

You can publish this website online for **100% free** with a permanent live URL you can share on your LinkedIn, resume, and Instagram bio.

### 🌟 Recommended Method: GitHub Pages (Under Your GitHub Username)

Since your GitHub profile is [github.com/ShreeyashSolunke08](https://github.com/ShreeyashSolunke08), you can deploy your portfolio directly so your personal domain will be:  
👉 **`https://shreeyashsolunke08.github.io`**

#### Step-by-Step GitHub Pages Deployment:
1. Open **[github.com/new](https://github.com/new)** in your browser.
2. Set the **Repository name** to: `ShreeyashSolunke08.github.io` (or `portfolio`).
3. Set visibility to **Public** and click **Create repository**.
4. In your computer's terminal, in the folder `c:\Users\Ram Shahapure\Desktop\Shreeyash Portfolios`, run:
   ```bash
   git init
   git add .
   git commit -m "Launch Shreeyash Solunke Portfolio"
   git branch -M main
   git remote add origin https://github.com/ShreeyashSolunke08/ShreeyashSolunke08.github.io.git
   git push -u origin main
   ```
5. On GitHub, go to your repository **Settings** → **Pages** (on the left menu).
6. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
7. Wait 60 seconds, and your website will be live across the globe at:  
   `https://shreeyashsolunke08.github.io`!

---

### Alternative Method: Netlify Drop (1-Minute Drag & Drop)
If you don't want to run git commands right now:
1. Go to **[app.netlify.com/drop](https://app.netlify.com/drop)**.
2. Drag and drop the whole `Shreeyash Portfolios` folder right into the browser window.
3. In 10 seconds, Netlify will generate a live URL (e.g. `shreeyash-solunke.netlify.app`) with free SSL!

---

## 🛠️ 3. How Every Feature Works in Full Working Condition

### 1. "Let's Connect" & "Get in Touch" Buttons
- **How it works:** When clicked, it smoothly scrolls the page down to the `#contact` section with smooth offset compensation, adds an animated neon ring pulse around the contact card, and immediately focuses the **Your Name** field so visitors can begin typing without reaching for their mouse.
- **Where to customize:** In [`js/main.js`](js/main.js) under `initSmoothScrollAndNavigation()` and `highlightContactSection()`.

### 2. Live Contact Dispatch Form
- **How it works:** 
  1. Visitors enter their Name, Email, and Message and click **"Transmit Message"**.
  2. The button transforms into an active spinner (`Transmitting...`).
  3. It dispatches the message via the free **Web3Forms API** directly to your email (`shreeyashsolunke@gmail.com`).
  4. Automatically copies the formatted message to the user's clipboard as a safety redundancy.
  5. If the user is offline or test-submitting without an internet connection, it seamlessly shows a notice and opens their email client with the message pre-filled.
  6. Displays an in-card confirmation banner: *"Message Delivered Successfully! Your dispatch has been transmitted to Shreeyash Solunke's inbox."*
- **Custom Access Key:** You can generate your own personal Web3Forms access key for free in 10 seconds at [web3forms.com](https://web3forms.com) (just enter your email, copy the key, and paste it into line 718 of [`js/main.js`](js/main.js)).

### 3. Interactive Hero Terminal
- **How it works:** Real terminal emulator with prompt input and history.
- **Commands Available:**
  - `help` — Shows list of all commands
  - `about` — Prints Shreeyash's background, VIT Pune IT Class of 2030 details
  - `projects` — Lists MediMate, UTSAVFUND, RepairConnect, Python suite, EDI1, and Rajasthan study
  - `skills` — Detailed technical, AI toolchain, and presentation stack
  - `leader` — Information on ByteForge (Code APEX 3.0), EDI1 lead, and Rajasthan research lead
  - `college` — Academic summary (VIT Pune, Division FY-IT-E, Batch B2, Graduation 2030)
  - `contact` — Direct links to LinkedIn, GitHub, and Instagram
  - `clear` — Clears terminal buffer
- **Quick Action Chips:** Clicking any chip below the terminal runs the command instantly with audio feedback.

### 4. Interactive Project Case Study Modals
- **How it works:** Every project card has an **"Explore Case Study"** button. Clicking any card opens a high-tech glassmorphic modal overlay containing:
  - Problem Statement & Engineered Solution
  - Target Audience & Real-World Impact
  - Key Architecture Highlights & Checklist
  - Metrics Grid (Audience, Tech Stack, Status)
  - Direct GitHub Repository link
- **How to Add/Edit Projects:** Simply edit [`js/projects-data.js`](js/projects-data.js). Adding or editing an object in this file automatically updates both the card grid and the modal preview!

### 5. Futuristic Sound Effects Engine
- **How it works:** Uses the browser's built-in **Web Audio API** to generate high-tech synthesized frequency blips when clicking buttons, typing in the terminal, or toggling filters.
- **Audio Toggle:** Visitors can turn it ON or OFF anytime using the **Audio Toggle** button in the top navigation bar.

### 6. Interactive 2D Particle Background Canvas
- **How it works:** Lightweight, zero-lag HTML5 Canvas rendering glowing cyan, indigo, and emerald particles that connect dynamically with glowing lines when in proximity and react to the user's mouse position.

### 7. Real-Time IST Pune Status Clock
- **How it works:** Live clock widget in the navbar synced precisely to Indian Standard Time (`Asia/Kolkata` / UTC+5:30) displaying real-time hours, minutes, and seconds.

---

## 📁 File Breakdown

| File | Purpose |
|---|---|
| [`index.html`](index.html) | Semantic layout, Tailwind CSS utility classes, Lucide icons, responsive sections |
| [`css/style.css`](css/style.css) | Custom scrollbars, glassmorphism, glowing borders, smooth scroll settings |
| [`js/projects-data.js`](js/projects-data.js) | Structured database for MediMate, UTSAVFUND, RepairConnect, and academic work |
| [`js/main.js`](js/main.js) | Smooth navigation, Web3Forms email dispatch, terminal emulator, audio synth |
| [`README.md`](README.md) | Complete documentation and deployment guide |
