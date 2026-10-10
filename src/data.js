// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Khalid Mohammed Fahad",
  roles: [
    "Cybersecurity Fresher",
    "VAPT",
    "Application Security",
    "SOC Analyst",
    "Web Developer",
  ],
  location: "Mangalore, Karnataka, India",
  phone: "+91 82774 15094",
  email: "fahadkhalidm2000@gmail.com",
  linkedin: "https://linkedin.com/in/khalid-mohammed-fahad",
  github: "https://github.com/KHALIDMFAHAD17",
  summary:
    "MCA graduate (2025) specializing in Cybersecurity and Ethical Hacking, seeking an entry-level role in Vulnerability Assessment and Penetration Testing (VAPT), Application Security, or Security Operations. Hands-on experience exploiting and analyzing web vulnerabilities (SQL Injection, XSS, Command Injection, File Inclusion) in lab environments, solving Linux security challenges, and building a blockchain-based identity management system. Strong foundation in web development (HTML, CSS, JavaScript, PHP) and version control with Git.",
};

export const skills = [
  {
    title: "Cybersecurity",
    items: [
      "Ethical Hacking",
      "VAPT",
      "Web Application Security",
      "HTTP Request/Response Analysis",
      "SQL Injection",
      "Cross-Site Scripting (XSS)",
      "Command Injection",
      "File Inclusion",
    ],
  },
  {
    title: "Blockchain",
    items: [
      "Blockchain Fundamentals",
      "Smart Contracts",
      "Ganache",
      "Identity Management Systems",
    ],
  },
  {
    title: "Programming and Scripting",
    items: ["HTML", "CSS", "JavaScript", "PHP", "C", "Bash", "SQL"],
  },
  {
    title: "Web Development",
    items: [
      "Responsive Web Design",
      "Front-End Development",
      "DOM Manipulation",
      "Client-Side Scripting",
    ],
  },
  {
    title: "Operating Systems",
    items: ["Linux (command line, file permissions, SSH)"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps and Version Control",
    items: ["Git", "GitHub", "GitLab", "CI/CD Concepts", "DevSecOps"],
  },
  {
    title: "Tools",
    items: ["VS Code", "Git Bash", "MS Office"],
  },
];

export const projects = [
  {
    name: "Blockchain-Based Identity Management System",
    tags: ["Blockchain", "Smart Contracts", "Ganache"],
    featured: true,
    points: [
      "Developed a secure web-based identity management system using blockchain to store and manage user identity data and reduce the risk of data tampering.",
      "Integrated Ganache for local blockchain testing and smart contract interaction.",
      "Applied cybersecurity principles including data integrity, decentralization, and secure data handling.",
    ],
  },
  {
    name: "Football Tournament Management Website",
    tags: ["HTML", "CSS", "JavaScript"],
    points: [
      "Designed and developed a responsive website with team registration, match schedules, score display, and tournament details.",
    ],
  },
  {
    name: "Restaurant Website",
    tags: ["HTML", "CSS", "PHP", "MySQL"],
    points: [
      "Built a dynamic website with back-end functionality for menu display and content handling using PHP.",
    ],
  },
  {
    name: "Navabharat Night High School Website",
    tags: ["HTML", "CSS"],
    points: [
      "Developed a static, mobile-responsive website for a real client with pages for school information, announcements, and contact details.",
    ],
  },
];

export const labs = [
  {
    name: "DVWA (Damn Vulnerable Web Application)",
    focus: "Web Application Penetration Testing",
    points: [
      "Exploited common web vulnerabilities in a controlled environment, including SQL Injection, Cross-Site Scripting (XSS), Command Injection, and File Inclusion.",
      "Analyzed HTTP requests and responses during vulnerability testing.",
    ],
  },
  {
    name: "Bandit Linux Security Challenges (OverTheWire)",
    focus: "Linux Security",
    points: [
      "Completed multiple levels of Linux-based security challenges covering file permissions, SSH access, and privilege navigation.",
      "Used grep, find, strings, base64, tar, and SSH to solve security tasks.",
    ],
  },
];

export const certifications = [
  { name: "DevSecOps in CI/CD", issuer: "Infosys Springboard" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" },
];

export const education = {
  degree: "Master of Computer Applications (MCA)",
  specialization: "Cybersecurity and Ethical Hacking",
  school: "Yenepoya University, Mangalore, India",
  year: "2025",
};
