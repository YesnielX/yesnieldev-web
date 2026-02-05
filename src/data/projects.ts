export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Estrella Millonaria",
    description: "A referral management system offering economic rewards based on an innovative and transparent model. Includes profit route systems, an admin panel, support for Web3 payment integration, and a modern architecture.",
    tags: ["Next.js", "Supabase", "Web3", "TailwindCSS"],
  },
  {
    title: "GestioDrive",
    description: "Professional offline-first software for automotive workshops, optimized for maintenance tracking, technical labels, and secure local inventory management.",
    tags: ["Tauri", "Rust", "SQLite", "React"],
  },
  {
    title: "ApexStock (POS)",
    description: "Advanced Point of Sale (POS) for SMEs with sales, inventory, and financial reporting management. Keyboard-optimized interface and offline support.",
    tags: ["Tauri", "React", "SQLite", "Financials"],
  },
  {
    title: "ClubManager Desktop",
    description: "Professional sports club management solution: player and category management, and automatic backups. Premium interface focused on usability.",
    tags: ["Tauri", "SQLite", "Management"],
  },
  {
    title: "OpticaDesk",
    description: "Modern application for optometry clinics, featuring patient management, medical consultations, and prescriptions. Local storage focused on privacy.",
    tags: ["React", "SQLite", "TailwindCSS"],
  },
  {
    title: "Auto Translate Bot",
    description: "Powerful Discord bot for real-time automatic message translation. Features advanced configuration, multi-language support, and global community scaling.",
    tags: ["Node.js", "Discord.js", "Translations", "API"],
  }
];
