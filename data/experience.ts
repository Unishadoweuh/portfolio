export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  tasks: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description?: string;
}

export const experiences: Experience[] = [
  {
    period: "2024 - 2025",
    title: "Administrateur Systèmes Linux",
    company: "Albatros Informatique",
    location: "Carquefou",
    tasks: [
      "Administration des infrastructures Linux",
      "Méthodologie DevOps, pipelines CI/CD",
      "Implémentation Ansible, Packer, Terraform/OpenTofu",
      "Supervision des services",
      "Migration vers cloud public",
      "Assistance & relation clientèle",
      "Gestion des sauvegardes",
    ],
    technologies: [
      "Linux",
      "Ansible",
      "Packer",
      "OpenTofu",
      "Zabbix",
      "Docker",
      "CI/CD",
    ],
  },
  {
    period: "2024",
    title: "Service Informatique",
    company: "Collège privé Sainte-Anne",
    location: "Carquefou",
    tasks: [
      "Assistance quotidienne utilisateurs",
      "Gestion du parc informatique",
      "Gestion des tickets",
    ],
    technologies: ["Windows", "Active Directory", "GLPI"],
  },
  {
    period: "2023",
    title: "Administrateur Systèmes",
    company: "Splayce",
    location: "Nozay",
    tasks: [
      "Gestion du parc informatique",
      "Gestion des tickets",
      "Maintenance des serveurs",
    ],
    technologies: ["Linux", "Windows Server", "VMware"],
  },
];

export const education: Education[] = [
  {
    period: "2024 - 2025",
    degree: "Bachelor Administrateur Systèmes & Réseaux",
    school: "Campus CESI",
    location: "Carquefou",
  },
  {
    period: "2023 - 2024",
    degree: "Mention Complémentaire Cybersécurité",
    school: "École Nicolas Appert",
    location: "Orvault",
  },
  {
    period: "2019 - 2023",
    degree: "BAC Pro SN option RISC",
    school: "Lycée St Felix",
    location: "Nantes",
  },
];
