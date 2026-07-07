interface StatItem {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export const siteConfig = {
  name: "Pierre Le Cunff",
  title: "Administrateur systèmes Linux & ingénieur DevOps",
  description:
    "Administrateur systèmes Linux et ingénieur DevOps basé à Nantes. Infrastructure, automatisation et fiabilité.",
  url: "https://pierre-lecunff.dev",
  email: "plecunff44@gmail.com",
  github: "https://github.com/unishadoweuh",
  linkedin: "https://linkedin.com/in/pierre-le-cunff",
  location: "Nantes, France",
  stats: [
    { label: "Années d'expérience", value: 3, suffix: "+" },
    { label: "Domaines de compétences", value: 6 },
    { label: "Services administrés", value: 30, prefix: "~" },
  ] as StatItem[],
};