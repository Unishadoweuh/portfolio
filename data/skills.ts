export type SkillLevel = "expert" | "advanced" | "intermediate";

export interface Skill {
  name: string;
  level: SkillLevel;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "OS & Systèmes",
    icon: "Monitor",
    skills: [
      { name: "Linux (Arch, Debian, Ubuntu)", level: "expert", percentage: 95 },
    ],
  },
  {
    title: "Virtualisation",
    icon: "Layers",
    skills: [
      { name: "Proxmox VE", level: "expert", percentage: 92 },
      { name: "Vagrant", level: "intermediate", percentage: 55 },
    ],
  },
  {
    title: "Conteneurisation",
    icon: "Container",
    skills: [
      { name: "Docker", level: "expert", percentage: 95 },
      { name: "K3S / Kubernetes", level: "advanced", percentage: 75 },
    ],
  },
  {
    title: "DevOps & IaC",
    icon: "GitBranch",
    skills: [
      { name: "Ansible", level: "expert", percentage: 92 },
      { name: "OpenTofu / Terraform", level: "advanced", percentage: 78 },
      { name: "Packer", level: "advanced", percentage: 72 },
      { name: "CI/CD (Pipelines)", level: "advanced", percentage: 70 },
    ],
  },
  {
    title: "Supervision",
    icon: "Activity",
    skills: [
      { name: "Zabbix", level: "expert", percentage: 92 },
      { name: "Grafana", level: "advanced", percentage: 78 },
      { name: "Nagios", level: "advanced", percentage: 68 },
      { name: "Netdata", level: "advanced", percentage: 68 },
    ],
  },
  {
    title: "Réseau & Sécu",
    icon: "Shield",
    skills: [
      { name: "OPNsense", level: "advanced", percentage: 78 },
      { name: "Cloudflare", level: "advanced", percentage: 75 },
      { name: "DNS", level: "advanced", percentage: 75 },
      { name: "VPN / Tunnel", level: "advanced", percentage: 70 },
    ],
  },
];
