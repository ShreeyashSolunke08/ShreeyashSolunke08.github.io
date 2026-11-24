/**
 * Portfolio Project Data for Shreeyash Rahul Solunke
 * VIT Pune | Team ByteForge Leader
 */

const projectsData = [
  {
    id: "medimate",
    title: "MediMate",
    subtitle: "Elder-Friendly Medicine Adherence & Health Guardian System",
    category: "hackathon",
    badge: "Code APEX 3.0 Flagship",
    badgeColor: "from-amber-500 to-rose-500",
    icon: "pill",
    shortDesc: "A multi-role mobile healthcare app built with Flutter and Firebase designed specifically for senior citizens (60+) to ensure zero missed doses.",
    role: "Team Leader & Architect (Team ByteForge)",
    techStack: ["Flutter", "Firebase", "Dart", "NLEM 2022 DB", "Android Studio", "Antigravity"],
    highlights: [
      "Built with verified Govt. of India National List of Essential Medicines (NLEM 2022) database",
      "Multi-tier role management: Patient, Two-Level Guardian, and Doctor / Pharmacist",
      "High-contrast, large-typography elder-friendly interface tailored for 60+ users",
      "Background local alarms that trigger even when the phone is locked or in battery saver",
      "Real-time inventory tracking: tablet count countdown, low-stock warnings, and expiry alerts"
    ],
    fullStory: `
      MediMate was engineered during the VIT Code APEX 3.0 Hackathon by Team ByteForge under Shreeyash's leadership. Recognizing the critical challenge of prescription non-adherence among senior citizens, the team set out to engineer a solution that removes cognitive load.
      
      Unlike typical complex health apps, MediMate features large accessible touch targets, voice-assisted cues, and strict accessibility standards. The medicine inventory is backed by the Government of India NLEM 2022 dataset, ensuring standardized drug names, dosages, and interactions. A two-level guardian fallback notifies family members if critical doses are unattended.
    `,
    metrics: [
      { label: "Target Audience", value: "Senior Citizens (60+)" },
      { label: "Database", value: "Govt. NLEM 2022" },
      { label: "Architecture", value: "Flutter + Firebase" },
      { label: "Hackathon", value: "VIT Code APEX 3.0" }
    ],
    github: "https://github.com/ShreeyashSolunke08",
    status: "Active Development (ByteForge)"
  },
  {
    id: "utsavfund",
    title: "UTSAVFUND",
    subtitle: "Festival Pandal & Brand Sponsorship Marketplace",
    category: "social",
    badge: "Sponsorship Platform",
    badgeColor: "from-orange-500 to-amber-500",
    icon: "sparkles",
    shortDesc: "Bridging the gap between cultural festival pandals (Ganpati, Navratri, Durga Puja) and corporate brands for verified sponsorship deals.",
    role: "Founder & Lead Conceptualizer",
    techStack: ["Web Tech", "MySQL", "Python", "Brand Analytics", "Geo-Location"],
    highlights: [
      "Direct discovery portal for brands seeking hyper-local on-ground visibility during major festivals",
      "Tiered sponsorship packages with automated commission-based revenue model",
      "Expansion roadmap from Pune/Maharashtra Ganpati pandals to temples and Pan-India cultural festivals",
      "Transparent metric reporting for sponsors (estimated footfall, banners, stage mentions)"
    ],
    fullStory: `
      Every year, thousands of festival mandals struggle to secure corporate funding, relying on manual door-to-door solicitation, while brands miss out on high-impact cultural engagement. UTSAVFUND turns this informal ecosystem into an organized marketplace.
      
      Pandals list their footfall demographics, stall spaces, and banners, while brands can bid or purchase sponsorship tiers with verified escrow and milestone payouts.
    `,
    metrics: [
      { label: "Focus", value: "Festivals & Temples" },
      { label: "Model", value: "Commission & Brand Activation" },
      { label: "Region", value: "Pune / Pan-India" },
      { label: "Stage", value: "Concept & Prototyping" }
    ],
    github: "https://github.com/ShreeyashSolunke08",
    status: "Roadmap Expansion"
  },
  {
    id: "repairconnect",
    title: "RepairConnect",
    subtitle: "Circular Economy On-Demand Repair & Restoration Network",
    category: "social",
    badge: "Sustainability Tech",
    badgeColor: "from-emerald-500 to-teal-500",
    icon: "wrench",
    shortDesc: "Promoting sustainability by encouraging repair over replacement. Connects device owners with verified local technicians with live milestone tracking.",
    role: "System Designer & Lead Developer",
    techStack: ["Python", "SQL", "REST APIs", "Modern UI", "Git"],
    highlights: [
      "Step-by-step progress timeline: 'Received -> Diagnostic -> Repairing -> Testing -> Delivered'",
      "Upfront transparent quote estimation to eliminate customer anxiety and hidden charges",
      "Circular economy impact calculator showing e-waste prevented and carbon footprint saved",
      "Verified local technician directory with rating and specialization tags"
    ],
    fullStory: `
      In an era of planned obsolescence and rampant electronic waste, RepairConnect empowers consumers to easily fix appliances and gadgets instead of throwing them away.
      
      Users submit an issue with photos, receive quotes from nearby vetted repair shops, schedule doorstep pick-up or walk-in slots, and track the repair progress through a live visual timeline.
    `,
    metrics: [
      { label: "Mission", value: "Repair vs. Replace" },
      { label: "Feature", value: "Live Stage Timeline" },
      { label: "Impact", value: "E-Waste Reduction" },
      { label: "Status", value: "Prototype" }
    ],
    github: "https://github.com/ShreeyashSolunke08",
    status: "Active Prototype"
  },
  {
    id: "schemematch",
    title: "SchemeMatch + DocBuddy",
    subtitle: "Civic-Tech Welfare Eligibility Engine & Document Assistant",
    category: "social",
    badge: "Civic Tech",
    badgeColor: "from-blue-500 to-indigo-500",
    icon: "file-check",
    shortDesc: "Government welfare scheme finder integrated with an intelligent document checklist and preparation guide for rural and urban citizens.",
    role: "Co-Developer & Backend Lead",
    techStack: ["Python", "MySQL", "Java Core", "Git/GitHub", "Data Normalization"],
    highlights: [
      "Rule-based eligibility engine filtering schemes by age, income, caste category, and state",
      "DocBuddy interactive wizard: generates clear checklists of required documents for each scheme",
      "Collaborative multi-language backend utilizing Python data processing and Java utilities",
      "Reduces citizen rejection rates due to missing or mismatched paperwork"
    ],
    fullStory: `
      Navigating government welfare schemes in India is often obstructed by bureaucratic jargon and opaque documentation requirements. SchemeMatch takes user profile inputs and matches them with active central and state welfare initiatives.
      
      Its companion, DocBuddy, breaks down application requirements into actionable, step-by-step checklists so applicants never face rejections due to preventable paperwork mistakes.
    `,
    metrics: [
      { label: "Domain", value: "Public Welfare / Civic-Tech" },
      { label: "Stack", value: "Python + MySQL + Java" },
      { label: "Collaboration", value: "2-Developer Agile Team" },
      { label: "Database", value: "Normalized Welfare Schema" }
    ],
    github: "https://github.com/ShreeyashSolunke08",
    status: "In Development"
  },
  {
    id: "python-suite",
    title: "Python Practical Utilities Suite",
    subtitle: "Algorithms, Games & Automation Toolkit",
    category: "python",
    badge: "Core Python",
    badgeColor: "from-cyan-500 to-blue-500",
    icon: "terminal",
    shortDesc: "A collection of hands-on Python programs exploring algorithmic logic, object-oriented concepts, and practical daily utilities.",
    role: "Creator & Developer",
    techStack: ["Python 3", "CLI Engine", "Git", "Math & Logic Modules"],
    highlights: [
      "Multi-feature Smart Calculator: memory functions, complex expressions, and error handling",
      "Interactive Adventure Treasure Hunt Game: branching narrative state engine and ASCII UI",
      "Restaurant Bill Calculator & Splitter: dynamic tax/GST calculation, tip handling, and multi-payer split",
      "Planned modules: automated local file organizer and lightweight web scraping scripts"
    ],
    fullStory: `
      Demonstrating strong fundamentals in Python programming, algorithmic thinking, and problem decomposition. Each project is crafted with clean code formatting, modular functions, input sanitization, and full Git revision history.
    `,
    metrics: [
      { label: "Language", value: "Python 3.x" },
      { label: "Projects", value: "3+ Utilities & Games" },
      { label: "VCS", value: "Git & GitHub" },
      { label: "Status", value: "Completed & Expanding" }
    ],
    github: "https://github.com/ShreeyashSolunke08",
    status: "Completed"
  },
  {
    id: "academic-edi",
    title: "EDI1: Engineering Design & Exploration",
    subtitle: "Real-World Daily Utility & Innovation Synopsis (ES26102)",
    category: "academic",
    badge: "Team Leader (VIT Pune)",
    badgeColor: "from-purple-500 to-indigo-500",
    icon: "award",
    shortDesc: "Leading the group project synopsis for EDI1 (ES26102) at VIT Pune. Rigorously filtering out conventional tropes to design an out-of-the-box solution for daily human problems.",
    role: "Team Leader & Lead Architect",
    techStack: ["Systems Engineering", "Synopsis Formulation", "Agile Leadership", "Problem Decomposition"],
    highlights: [
      "Appointed Group Leader by guide for EDI1 (ES26102) Engineering Exploration & Innovation at VIT Pune",
      "Directed team ideation: rejected standard generic projects (Modi script archives, basic haptic belts, dialect archives)",
      "Strict selection criteria: must solve an unaddressed real-world bottleneck with measurable daily impact",
      "Spearheading the engineering synopsis, component requirement matrix, and development roadmap"
    ],
    fullStory: `
      In the EDI1 (ES26102) course at Vishwakarma Institute of Technology (VIT Pune), Shreeyash serves as the Group Leader. When tasked by the project guide to select a semester project and prepare the engineering synopsis, Shreeyash took a firm stance against routine, copy-paste academic projects.

      He led his team through structured brainstorming sprints, deliberately eliminating conventional topics that lacked real-world utility. Under his leadership, the group is formulating a unique, out-of-the-box engineering solution engineered to make a practical difference in daily life.
    `,
    metrics: [
      { label: "Institution", value: "VIT Pune" },
      { label: "Course Code", value: "EDI1 (ES26102)" },
      { label: "Role", value: "Team Leader / Lead Architect" },
      { label: "Graduation", value: "Class of 2030 (IT)" }
    ],
    github: "https://github.com/ShreeyashSolunke08",
    status: "Active Leadership"
  },
  {
    id: "rajasthan-case-study",
    title: "Rajasthan in Focus: Governance & Sustainability",
    subtitle: "AI-Augmented Research & 7-Slide Strategic Presentation",
    category: "academic",
    badge: "Team Leader (Team of 4)",
    badgeColor: "from-pink-500 to-rose-500",
    icon: "presentation",
    shortDesc: "Led a 4-member team to research, synthesize, and present Rajasthan's flagship state initiatives using an elite AI presentation toolchain (Gamma, SlideGo, Genspark, Figma).",
    role: "Team Leader & Key Speaker (Team of 4)",
    techStack: ["Gamma AI", "SlideGo", "Genspark", "Figma", "Policy Research", "Visual Communication"],
    highlights: [
      "Led and orchestrated a 4-member research team for the VIT Pune Student Activity initiative",
      "In-depth research across 4 flagship state initiatives: Rajeevika, MJSA 2.0, Hariyalo Rajasthan, and Circular Economy",
      "Pioneered a modern AI-augmented design workflow utilizing Gamma, SlideGo, Genspark, and Figma",
      "Delivered a polished 7-slide strategic group presentation commended for visual clarity and data depth"
    ],
    fullStory: `
      For the VIT Pune Student Activity, Shreeyash led a team of four to conduct research on governance, social empowerment, and circular economy initiatives implemented by the Government of Rajasthan.

      Rejecting generic presentation templates, Shreeyash instituted a next-generation AI workflow — utilizing Genspark for deep research synthesis, SlideGo and Gamma for layout generation, and Figma for custom visual hierarchy. He presented the findings covering rural livelihoods (Rajeevika), water security (Mukhyamantri Jal Swavlamban Abhiyan 2.0), afforestation (Hariyalo Rajasthan), and sustainable resource cycles.
    `,
    metrics: [
      { label: "Leadership", value: "Team Leader (4 Members)" },
      { label: "Scope", value: "7-Slide Strategic Analysis" },
      { label: "Schemes", value: "Rajeevika, MJSA 2.0, etc." },
      { label: "Toolchain", value: "Gamma, SlideGo, Genspark, Figma" }
    ],
    github: "https://github.com/ShreeyashSolunke08",
    status: "Completed & Presented"
  }
];

if (typeof module !== "undefined") {
  module.exports = projectsData;
}
