export const profile = {
  name: "Vincent Bernaldo",
  email: "officialbernaldo25@gmail.com",
  phone: "0920 357 6583",
  phoneHref: "09203576583",
  github: "https://github.com/eyyVince",
  githubLabel: "github.com/eyyVince",
  location: "Pasig City, Metro Manila, PH",
};

export const scanRows = [
  {
    port: "22/tcp",
    service: "it-support",
    detail: "helpdesk, hardware diagnostics, endpoint hardening",
  },
  {
    port: "443/tcp",
    service: "appsec-dev",
    detail: "PHP / JS web apps, secure coding, access control",
  },
  {
    port: "8080/tcp",
    service: "network-security",
    detail: "Cisco routing/switching, monitoring, incident response",
  },
  {
    port: "31337/tcp",
    service: "offsec-lab",
    detail: "Kali/Parrot, Nmap, Aircrack-ng, Hashcat, John, Wireshark",
  },
];

export const experience = [
  {
    title: "IT Assistant",
    company: "RealFlooring Corp. · Pasig City, PH",
    date: "Mar 2023 – Mar 2026",
    bullets: [
      "Administered network infrastructure on Cisco fundamentals, enforcing security configs and access controls for 50+ end users.",
      "Managed accounts, permissions, and system security to prevent unauthorized access.",
      "Ran hardware security assessments and diagnostics across desktops, printers, and network devices.",
      "Hardened Windows OS environments with patch management and endpoint protection.",
      "Cut system downtime 30% through proactive monitoring, incident response, and root-cause analysis.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company: "RealFlooring Corp. · Pasig City, PH",
    date: "Mar 2023 – Mar 2026",
    bullets: [
      "Built and maintained internal web apps (HTML, CSS, JS, PHP, MySQL) with secure coding practices against SQL injection and XSS.",
      "Implemented session-based authentication and role-based access control.",
      "Resolved application security issues across dev and production, reducing downtime 30%.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Offensive / Defensive (home lab)",
    lab: true,
    chips: ["Kali Linux", "Parrot OS", "Nmap", "Aircrack-ng", "Wireshark", "Hashcat", "John the Ripper"],
  },
  {
    title: "Cybersecurity",
    chips: ["Vulnerability scanning", "Incident response", "Root cause analysis", "Security hardening", "Patch management"],
  },
  {
    title: "Networking",
    chips: ["Cisco routing/switching", "Wireless essentials", "LAN/WAN", "Firewall basics"],
  },
  {
    title: "Application Security",
    chips: ["SQLi prevention", "XSS mitigation", "RBAC", "REST API security"],
  },
  {
    title: "Scripting & Tooling",
    chips: ["Python", "Bash basics", "Log analysis", "Git / GitHub"],
  },
  {
    title: "Databases",
    chips: ["MySQL", "MSSQL", "PostgreSQL", "Query optimization"],
  },
];

export const projects = [
  {
    title: "VSFTPD 2.3.4 Backdoor — Penetration Test & Exploitation Report",
    year: "2026",
    stack: "Metasploit  |  Nmap  |  Meterpreter  |  Authorized Lab Environment (Metasploitable2)",
    desc: "Executed a full-cycle VAPT engagement — reconnaissance, enumeration, exploitation, and formal reporting — identifying and exploiting CVE-2011-2523 (vsFTPd 2.3.4 backdoor, CVSS 10.0 Critical) using Metasploit to gain unauthenticated remote root command execution.",
    url: "",
  },
  {
    title: "Samba 3.X username map script — Penetration Test & Exploitation Report",
    year: "2026",
    stack: "Metasploit  |  Nmap  |  Netcat  |  Authorized Lab Environment (Metasploitable2)",
    desc: "Identified and exploited CVE-2007-2447 (Samba username map script command injection, CVSS 10.0 Critical) using Metasploit to achieve unauthenticated remote root-level shell (uid=0, gid=0), performed post-exploitation enumeration including TTY upgrade, credential harvesting, lateral movement, and persistence analysis",
    url: "",
  },
  {
    title: "Vulnerability Scanner Tool",
    year: "2026",
    stack: "Python · socket · requests · subprocess",
    desc: "Port scanning, service detection, and automated vulnerability checks with structured security reports. Built for authorized lab targets only.",
    url: "https://github.com/eyyVince/VulnerabilityTool",
  },
  {
    title: "Network Traffic Analyzer",
    year: "2026",
    stack: "Python · IP log parsing",
    desc: "Captures and parses IP traffic logs, flags suspicious connections against known threat indicators, and produces structured incident reports.",
    url: "https://github.com/eyyVince/Network-Analyzer",
  },
  {
    title: "Website Uptime Monitor",
    year: "2026",
    stack: "Python · requests · schedule · colorama",
    desc: "Real-time availability monitor with a color-coded terminal dashboard, JSON incident logging, and automated downtime/recovery alerts.",
    url: "https://github.com/eyyVince/Website-Uptime-Monitor",
  },
  {
    title: "AutoIDScanner",
    year: "2026",
    stack: "FastAPI · OpenCV · Pyzbar · Node.js",
    desc: "Access-control system with real-time QR/barcode/RFID verification, input validation, throttling, and duplicate detection at high throughput.",
    url: "https://github.com/eyyVince/AutoIDScanner",
  },
  {
    title: "File Manager & Automation Script",
    year: "2023",
    stack: "Python 3.7 · os · shutil · send2trash",
    desc: "Automation script safely processing 10,000+ files with reversible deletion, directory navigation, and error handling.",
    url: "https://github.com/eyyVince/FileManagerPy",
  },
];

export const certifications = [
  {
    name: "IBM Ethical Hacking with Open Source Tools Professional Certificate",
    org: "IBM via Coursera",
    date: "In Progress - 2026",
  },
  {
    name: "Foundations of Cybersecurity",
    org: "Google Career Certificates via Coursera",
    date: "September 12, 2026",
    url: "https://www.coursera.org/account/accomplishments/verify/XN5D3AG8K2JT",
    pdfUrl: "https://coursera.org/verify/XN5D3AG8K2JT",
  },
  {
    name: "CCNAv7: Switching, Routing, and Wireless Essentials",
    org: "Cisco Networking Academy",
    date: "Apr 2022",
  },
  {
    name: "CCNAv7: Introduction to Networks",
    org: "Cisco Networking Academy",
    date: "Jul 2021",
  },
  {
    name: "BS in Information Technology",
    org: "ICCT Colleges — Antipolo Campus",
    date: "2019 – 2022",
  },
];
