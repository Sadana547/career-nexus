export const roadmapData = {
  "full-stack-developer": {
    title: "Full-Stack Web Developer",
    description: "Build both responsive frontend user interfaces and robust backend server architectures.",
    skills: ["HTML/CSS & Modern JavaScript", "React.js Frontend Framework", "Node.js & Express.js Runtimes", "Databases (MongoDB/PostgreSQL)", "RESTful APIs & Security"],
    steps: [
      { phase: "Phase 1: Frontend Basics", detail: "Master semantic HTML, CSS layout techniques (Flexbox/Grid), and modern asynchronous JavaScript (ES6+)." },
      { phase: "Phase 2: UI Libraries", detail: "Learn React.js, focusing on hooks (useState, useEffect), state management, and component architectures." },
      { phase: "Phase 3: Backend Engines", detail: "Learn Node.js and Express.js to spin up server entry points, listen to ports, and handle routing." },
      { phase: "Phase 4: Database Storage", detail: "Connect to databases like MongoDB using Mongoose schemas to safely store application records persistently." }
    ],
    projects: [
      { name: "Dynamic Blog Application", desc: "A full MERN stack platform featuring user sign-ins, content publishing, database storage, and session security panels." },
      { name: "E-Commerce System", desc: "Build a product inventory browser with shopping cart state management functionality and payment routes." }
    ],
    resources: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
      { name: "javascript.info", url: "https://javascript.info" }
    ]
  },
  "frontend-developer": {
    title: "Frontend Web Developer",
    description: "Design and build stunning, interactive, and high-performance client-side web applications.",
    skills: ["Advanced HTML5 & CSS3", "Tailwind CSS / Sass", "React.js or Vue.js", "State Management (Redux/Zustand)", "Web Performance & APIs"],
    steps: [
      { phase: "Phase 1: Advanced Layouts", detail: "Master responsive layouts, flexbox, grid CSS, responsive design patterns, and semantic markup optimizations." },
      { phase: "Phase 2: JS Architecture", detail: "Understand DOM manipulation, browser APIs, fetch modules, and structural ES6 modules design." },
      { phase: "Phase 3: Framework Specialization", detail: "Deep dive into component patterns, lifecycle structures, custom hooks, and context state APIs." },
      { phase: "Phase 4: Build Tools & Optimization", detail: "Learn bundlers like Vite, asset optimization pipelines, semantic accessibility (ARIA), and deployment strategies." }
    ],
    projects: [
      { name: "SaaS Analytics Dashboard", desc: "Build an interactive dashboard with animated data charts, dark mode context switching, and grid customization sliders." },
      { name: "Movie Search Web App", desc: "Create a rich UI displaying data fetched from public APIs, complete with debounced live searching and infinity scroll layout items." }
    ],
    resources: [
      { name: "Frontend Masters Guides", url: "https://frontendmasters.com/guides/" },
      { name: "CSS-Tricks", url: "https://css-tricks.com" }
    ]
  },
  "backend-engineer": {
    title: "Backend Software Engineer",
    description: "Architect heavy-duty server applications, maintain data storage integrity, design fast APIs, and optimize database queries.",
    skills: ["Java Spring Boot / Go / Python", "SQL & NoSQL Systems", "System Architecture (Microservices)", "Redis Caching Layers", "Message Brokers (Kafka/RabbitMQ)"],
    steps: [
      { phase: "Phase 1: Server Logic", detail: "Master a robust backend ecosystem language (like Java or Go), object-oriented design paradigms, and async multi-threaded runtime paradigms." },
      { phase: "Phase 2: Relational Databases", detail: "Deep dive into advanced database configurations, structured index algorithms, query optimizations, and transactional isolation limits." },
      { phase: "Phase 3: System Scalability", detail: "Implement caching structures with Redis, manage asynchronous event architectures using Kafka queues, and structure load-balancer setups." },
      { phase: "Phase 4: Microservices Framework", detail: "Break monolithic applications into distinct container microservices talking via fast gRPC connections or standard REST arrays." }
    ],
    projects: [
      { name: "Distributed Banking API Gateway", desc: "Construct a highly resilient transaction router handling ACID transactions under high concurrent loads safely." },
      { name: "Streaming Service Content Engine", desc: "Design an optimized streaming video routing platform implementing custom data caching and user stream balancing loops." }
    ],
    resources: [
      { name: "ByteByteGo System Design", url: "https://bytebytego.com" },
      { name: "Baeldung Spring Guides", url: "https://www.baeldung.com" }
    ]
  },
  "mobile-developer": {
    title: "Mobile App Developer",
    description: "Develop seamless cross-platform or native mobile applications running efficiently on Android and iOS devices.",
    skills: ["React Native / Flutter", "Dart or JavaScript", "Mobile UI Design Systems", "State Managers", "App Store Deployment pipelines"],
    steps: [
      { phase: "Phase 1: Environment Setup", detail: "Configure Android Studio, Xcode simulators, and command-line mobile framework build tooling paths." },
      { phase: "Phase 2: Mobile UI & Widgets", detail: "Learn structural layouts, view stacks, scrolling view lists, touch event configurations, and device styling hooks." },
      { phase: "Phase 3: Native Integration", detail: "Incorporate native device assets including device storage engines, push notifications, and geolocation listeners." },
      { phase: "Phase 4: Store Publishing", detail: "Handle application production bundling configurations, signing credentials, and App Store Connect/Google Play panels." }
    ],
    projects: [
      { name: "Real-time Crypto Wallet Tracker", desc: "Build a mobile app displaying current cryptocurrency trend streams with custom notification toggles for rate changes." },
      { name: "Local Fitness Workout Log", desc: "Design a cross-platform mobile app using offline SQLite storage to log routines with interactive stopwatch timers." }
    ],
    resources: [
      { name: "React Native Documentation", url: "https://reactnative.dev" },
      { name: "Flutter Dev Guides", url: "https://flutter.dev" }
    ]
  },
  "data-scientist": {
    title: "Data Scientist",
    description: "Extract actionable patterns, train predictive machine learning models, and analyze complex datasets.",
    skills: ["Python Programming Core", "Data Analysis (Pandas & NumPy)", "Data Visualization (Matplotlib)", "Statistical Analysis & Linear Algebra", "Machine Learning (Scikit-Learn)"],
    steps: [
      { phase: "Phase 1: Foundations", detail: "Learn Python script architecture basics, data structures, and foundational math algorithms." },
      { phase: "Phase 2: Aggregation", detail: "Manipulate multi-dimensional arrays, read CSV layers, and filter tabular frames using Pandas dataframes." },
      { phase: "Phase 3: Visual Analytics", detail: "Plot complex chart trends, distributions, and graphical matrix charts using custom graphing code panels." },
      { phase: "Phase 4: Machine Learning", detail: "Train split model systems using predictive regression layers, decision trees, and validation metrics." }
    ],
    projects: [
      { name: "Housing Price Predictor", desc: "Build a multi-variable regression pipeline analyzing regional features to predict pricing metrics cleanly." },
      { name: "Customer Churn Analyzer", desc: "Evaluate consumer usage history logs to predict potential subscription cancellation behaviors." }
    ],
    resources: [
      { name: "Kaggle Learning Paths", url: "https://www.kaggle.com/learn" },
      { name: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/" }
    ]
  },
  "ai-engineer": {
    title: "AI & Deep Learning Engineer",
    description: "Design custom neural networks, build advanced LLM generation pipelines, and compile production computer vision solutions.",
    skills: ["Deep Learning (PyTorch / TensorFlow)", "Neural Networks (CNNs, RNNs, Transformers)", "Natural Language Processing (NLP)", "LLM Fine-Tuning & MLOps", "GPU Acceleration (CUDA)"],
    steps: [
      { phase: "Phase 1: Neural Basics", detail: "Master gradient descent mathematics, forward/backward propagation algorithms, and standard fully connected network structures." },
      { phase: "Phase 2: Computer Vision & Spatial Data", detail: "Train Convolutional Neural Networks (CNNs) to manage image class mapping, custom object bounding tracking, and feature masking." },
      { phase: "Phase 3: Transformer Structures", detail: "Learn text attention mechanisms, configure text parsing models, and assemble sequence generative blocks." },
      { phase: "Phase 4: LLM Optimization", detail: "Incorporate vector databases, set up RAG search injection models, and perform low-rank adaptation adjustments on open weights model layers." }
    ],
    projects: [
      { name: "Medical Imaging Scanner Hub", desc: "Train a custom deep computer vision network running on PyTorch to locate cell pattern mutations from raw layout scans." },
      { name: "Specialized Knowledge Chat Bot", desc: "Build an analytical chatbot using custom vector embeddings pipelines to query internal organizational document logs safely." }
    ],
    resources: [
      { name: "Hugging Face Course Portal", url: "https://huggingface.co/learn" },
      { name: "DeepLearning.AI Insights", url: "https://www.deeplearning.ai" }
    ]
  },
  "devops-engineer": {
    title: "DevOps & Cloud Engineer",
    description: "Automate cloud deployment lifecycles, build CI/CD deployment configurations, and supervise scalable container orchestration infrastructure.",
    skills: ["Linux Systems / Bash Scripting", "Docker Containers", "Kubernetes Orchestration", "CI/CD (GitHub Actions / Jenkins)", "Cloud Platforms (AWS/GCP)"],
    steps: [
      { phase: "Phase 1: Linux & Admin Controls", detail: "Master terminal command execution patterns, shell automation scripts, network ports audit control, and system access profiles." },
      { phase: "Phase 2: Container Isolation", detail: "Learn Docker architectures to containerize custom applications, design minimalist Dockerfiles, and execute Docker Compose configurations." },
      { phase: "Phase 3: CI/CD Pipeline Automation", detail: "Write YAML workflow scripts to trigger automated testing, structural linters, and container registry publishing routes." },
      { phase: "Phase 4: IaC & Orchestration", detail: "Deploy scalable cloud systems on AWS services using Terraform configurations and Kubernetes cluster management nodes." }
    ],
    projects: [
      { name: "High-Availability Automated Cluster", desc: "Set up a highly scalable application cluster on AWS managed via Kubernetes with automated failover and custom traffic routing engines." },
      { name: "Zero-Downtime Deployment Runner", desc: "Configure an absolute automated deployment engine using GitHub Actions to update live servers without killing current user sessions." }
    ],
    resources: [
      { name: "Roadmap.sh DevOps Path", url: "https://roadmap.sh/devops" },
      { name: "AWS Cloud Architecture Docs", url: "https://aws.amazon.com/architecture/" }
    ]
  },
  "cybersecurity-analyst": {
    title: "Cybersecurity Specialist",
    description: "Audit application source layouts, defend cloud environments against attack vectors, and run active penetration tests.",
    skills: ["Networking Basics (TCP/IP)", "Linux Security Architectures", "OWASP Top 10 Exploits", "Penetration Testing (Kali Linux)", "Wireshark Network Analytics"],
    steps: [
      { phase: "Phase 1: Infrastructure Foundations", detail: "Understand OSI stack architecture models, subnet formatting configurations, active port routing rules, and structural DNS routing mechanisms." },
      { phase: "Phase 2: Application Attack Logic", detail: "Master defense mechanisms against critical system exploits including SQL Injections, Cross-Site Scripting (XSS), and security authentication bypass vulnerabilities." },
      { phase: "Phase 3: Penetration Testing Toolkits", detail: "Utilize security software distributions like Kali Linux to audit network configurations using Nmap scanners and Metasploit engines." },
      { phase: "Phase 4: Security Monitoring Logs", detail: "Configure firewalls, monitor network packets using Wireshark, and deploy defensive SIEM log monitoring dashboards." }
    ],
    projects: [
      { name: "Vulnerability Scanning Sandbox", desc: "Configure an isolated virtualization environment to execute authorized port stress-testing, configuration audits, and exploit reports." },
      { name: "Secure Reverse Proxy Firewall", desc: "Set up a defensive proxy layer capable of throttling traffic flow, filtering malicious header strings, and blocking SQL injection script commands." }
    ],
    resources: [
      { name: "OWASP Vulnerability Matrix", url: "https://owasp.org" },
      { name: "PortSwigger Web Security Academy", url: "https://portswigger.net/web-security" }
    ]
  },
  "uiux-designer": {
    title: "UI/UX Product Designer",
    description: "Map intricate user journey paths, establish structural layout style systems, and assemble sleek clickable product wireframes.",
    skills: ["Figma Enterprise Workspaces", "Information Architecture Mapping", "High-Fidelity UI Prototyping", "User Research & Testing Plans", "Design Hand-off Systems"],
    steps: [
      { phase: "Phase 1: Visual Design Rules", detail: "Master typography scales, spacing layouts, accessibility color ratios, and component visual hierarchies." },
      { phase: "Phase 2: Figma Mastery", detail: "Learn advanced auto-layout constraints, create responsive dynamic UI components, and structure interconnected variable color themes." },
      { phase: "Phase 3: Interactive Workflows", detail: "Wire up clickable interactive user flows, design state animations, micro-interactions, and side-sheet modal sliders." },
      { phase: "Phase 4: Research Validation", detail: "Run live user interaction testing, organize interface affinity maps, and prepare design spec sheets for frontend engineers." }
    ],
    projects: [
      { name: "FinTech Digital Wallet App Design", desc: "Design a complete high-fidelity mobile finance system layout with extensive custom chart variables and interaction states." },
      { name: "EdTech Dashboard Workspace UI", desc: "Construct a comprehensive desktop portal blueprint following clean atomic design rules and component libraries." }
    ],
    resources: [
      { name: "Figma Design Community Learning", url: "https://www.figma.com/resource-library/design-basics/" },
      { name: "Nielsen Norman Group UX Research", url: "https://www.nngroup.com" }
    ]
  },
  "game-developer": {
    title: "Game Developer",
    description: "Program highly immersive real-time interaction logic, compute physics mechanics, and configure interactive gameplay loops.",
    skills: ["C++ Programming or C#", "Unity / Unreal Engine platforms", "3D Vector Mathematics", "Shader Optimization Tools", "Game Design Physics Systems"],
    steps: [
      { phase: "Phase 1: Basic Math & Language", detail: "Master object-oriented patterns in C# or C++, linear algebra formulas, matrix coordinate transformations, and transform nodes." },
      { phase: "Phase 2: Engine Architectures", detail: "Understand component behaviors, collision events, input mappings, dynamic cameras, and state animation loops." },
      { phase: "Phase 3: Lighting & Asset Pipelines", detail: "Incorporate spatial audio modules, manipulate visual lighting maps, bake shadows, and apply mesh rendering textures." },
      { phase: "Phase 4: Game Execution Tuning", detail: "Profile thread bottlenecks, adjust multi-object counts, write simple vertex shaders, and assemble package binaries." }
    ],
    projects: [
      { name: "3D Spatial Gravity Platformer", desc: "Create an action game featuring intricate custom movement curves, jumping vectors, and obstacle physics loops." },
      { name: "Isometric Strategy Combat Sandbox", desc: "Assemble an optimized tactics arena engine showcasing pathfinding loops, terrain metrics, and computer-driven AI agents." }
    ],
    resources: [
      { name: "Unity Learn Hub Academy", url: "https://learn.unity.com" },
      { name: "Unreal Engine Developers Resource", url: "https://dev.epicgames.com/community/learning" }
    ]
  }
};