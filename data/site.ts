interface StatItem {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export const siteConfig = {
  name: "Pierre Le Cunff",
  title: "Sys. Admin Linux & DevOps Engineer",
  description:
    "Passionné d'open source et de self-hosting. J'administre des infrastructures Linux et j'automatise tout ce qui peut l'être.",
  url: "https://pierre-lecunff.dev",
  email: "plecunff44@gmail.com",
  github: "https://github.com/unishadoweuh",
  linkedin: "https://linkedin.com/in/pierre-le-cunff",
  location: "Nantes, France",
  stats: [
    { label: "Services en production", value: 30, prefix: "~" },
    { label: "Années d'expérience", value: 3, suffix: "+" },
    { label: "Cluster Proxmox", value: 3 },
    { label: "Vendor lock-in", value: 0 },
  ] as StatItem[],
};
