export type ServiceStatus = "running" | "stopped" | "maintenance";
export type ServiceCategory =
  | "infrastructure"
  | "monitoring"
  | "selfhosted"
  | "devops"
  | "network"
  | "apps";

export interface HomelabService {
  id: number | null;
  name: string;
  description: string;
  status: ServiceStatus;
  category: ServiceCategory;
  tech: string[];
  url?: string;
  easter_egg?: string;
}

export const services: HomelabService[] = [
  // ─── Infrastructure ───────────────────────────────────────────────
  {
    id: 1000,
    name: "OPNsense",
    description: "Routeur/Firewall",
    status: "running",
    category: "infrastructure",
    tech: ["OPNsense", "FreeBSD"],
    url: "https://github.com/opnsense/core",
  },
  {
    id: null,
    name: "TrueNAS",
    description: "Stockage NAS",
    status: "running",
    category: "infrastructure",
    tech: ["TrueNAS", "ZFS"],
    url: "https://github.com/truenas/middleware",
  },
  {
    id: null,
    name: "Proxmox",
    description: "Hyperviseur principal",
    status: "running",
    category: "infrastructure",
    tech: ["Proxmox", "KVM", "LXC"],
    url: "https://www.proxmox.com/en/proxmox-virtual-environment",
  },
  {
    id: 9000,
    name: "Ubuntu 24.04 Template",
    description: "Template VM de base",
    status: "running",
    category: "infrastructure",
    tech: ["Ubuntu", "Cloud-Init"],
  },

  // ─── Monitoring ───────────────────────────────────────────────────
  {
    id: 114,
    name: "Zabbix",
    description: "Supervision infrastructure",
    status: "running",
    category: "monitoring",
    tech: ["Zabbix", "PostgreSQL"],
    url: "https://github.com/zabbix/zabbix",
  },
  {
    id: 122,
    name: "Uptime Kuma",
    description: "Monitoring uptime services",
    status: "running",
    category: "monitoring",
    tech: ["Uptime Kuma", "Node.js"],
    url: "https://github.com/louislam/uptime-kuma",
  },
  {
    id: 117,
    name: "Speedtest Tracker",
    description: "Suivi débit internet",
    status: "running",
    category: "monitoring",
    tech: ["Speedtest Tracker"],
    url: "https://github.com/alexjustesen/speedtest-tracker",
  },
  {
    id: 118,
    name: "Web-Check",
    description: "Analyse de sites web",
    status: "running",
    category: "monitoring",
    tech: ["Web-Check"],
    url: "https://github.com/Lissy93/web-check",
  },

  // ─── Self-hosted ──────────────────────────────────────────────────
  {
    id: 101,
    name: "Immich",
    description: "Photos - alternative Google Photos",
    status: "running",
    category: "selfhosted",
    tech: ["Immich", "PostgreSQL"],
    url: "https://github.com/immich-app/immich",
  },
  {
    id: 112,
    name: "Paperless-AI",
    description: "GED intelligente",
    status: "running",
    category: "selfhosted",
    tech: ["Paperless-ngx", "AI"],
    url: "https://github.com/paperless-ngx/paperless-ngx",
  },
  {
    id: 104,
    name: "Vaultwarden",
    description: "Gestionnaire de mots de passe",
    status: "running",
    category: "selfhosted",
    tech: ["Vaultwarden", "Bitwarden"],
    url: "https://github.com/dani-garcia/vaultwarden",
  },
  {
    id: 107,
    name: "Stirling PDF",
    description: "Suite PDF complète",
    status: "running",
    category: "selfhosted",
    tech: ["Stirling-PDF", "Java"],
    url: "https://github.com/Stirling-Tools/Stirling-PDF",
  },
  {
    id: 119,
    name: "Homepageapp",
    description: "Dashboard services",
    status: "running",
    category: "selfhosted",
    tech: ["Homepage"],
    url: "https://github.com/gethomepage/homepage",
  },
  {
    id: 103,
    name: "Jellyfin",
    description: "Serveur multimédia",
    status: "running",
    category: "selfhosted",
    tech: ["Jellyfin"],
    url: "https://github.com/jellyfin/jellyfin",
  },

  // ─── DevOps ───────────────────────────────────────────────────────
  {
    id: 111,
    name: "Jenkins",
    description: "CI/CD Pipeline",
    status: "running",
    category: "devops",
    tech: ["Jenkins", "Groovy"],
    url: "https://github.com/jenkinsci/jenkins",
  },
  {
    id: 109,
    name: "Gitea",
    description: "Git self-hosted",
    status: "running",
    category: "devops",
    tech: ["Gitea", "Go"],
    url: "https://github.com/go-gitea/gitea",
  },
  {
    id: 120,
    name: "Ansible/IAC",
    description: "Automatisation infrastructure",
    status: "running",
    category: "devops",
    tech: ["Ansible", "YAML"],
    url: "https://github.com/ansible/ansible",
  },
  {
    id: null,
    name: "Packer Templates",
    description: "Templates VM automatisées",
    status: "running",
    category: "devops",
    tech: ["Packer", "HCL"],
    url: "https://github.com/hashicorp/packer",
  },

  // ─── Network ──────────────────────────────────────────────────────
  {
    id: 121,
    name: "Cloudflare Tunnel",
    description: "Exposition sécurisée des services",
    status: "running",
    category: "network",
    tech: ["Cloudflare", "Tunnel"],
  },
  {
    id: 116,
    name: "AdGuard",
    description: "DNS / Ad blocker",
    status: "running",
    category: "network",
    tech: ["AdGuard Home", "DNS"],
    url: "https://github.com/AdguardTeam/AdGuardHome",
  },
  {
    id: 105,
    name: "ISponsorBlockTV",
    description: "Blocage sponsors TV",
    status: "running",
    category: "network",
    tech: ["iSponsorBlockTV"],
    url: "https://github.com/dmunozv04/iSponsorBlockTV",
  },

  // ─── Apps ─────────────────────────────────────────────────────────
  {
    id: 102,
    name: "qBittorrent",
    description: "Client torrent",
    status: "running",
    category: "apps",
    tech: ["qBittorrent"],
    url: "https://github.com/qbittorrent/qBittorrent",
  },
  {
    id: 106,
    name: "Prowlarr/Radarr/Sonarr",
    description: "Gestion médias automatisée",
    status: "running",
    category: "apps",
    tech: ["Prowlarr", "Radarr", "Sonarr"],
    url: "https://github.com/Prowlarr/Prowlarr",
  },
  {
    id: 108,
    name: "HAOS",
    description: "Home Assistant - Domotique",
    status: "running",
    category: "apps",
    tech: ["Home Assistant", "Zigbee"],
    url: "https://github.com/home-assistant/core",
  },
  {
    id: 205,
    name: "Apprise",
    description: "Service de notifications",
    status: "running",
    category: "apps",
    tech: ["Apprise", "Python"],
    url: "https://github.com/caronc/apprise",
  },
  {
    id: 208,
    name: "Pelican Panel",
    description: "Gestion game servers",
    status: "running",
    category: "apps",
    tech: ["Pelican", "PHP"],
    url: "https://github.com/pelican-dev/panel",
  },
  {
    id: 207,
    name: "Minecraft ATM10",
    description: "Serveur Minecraft modé",
    status: "running",
    category: "apps",
    tech: ["Minecraft", "Forge"],
  },
  {
    id: 210,
    name: "Win Server 01",
    description: "Serveur Windows",
    status: "running",
    category: "apps",
    tech: ["Windows Server"],
    easter_egg:
      "Oui j'en ai un. Non j'aime pas ça. Mais parfois on n'a pas le choix.",
  },
  {
    id: 211,
    name: "MoneyPrinter",
    description: "Génération de vidéos",
    status: "running",
    category: "apps",
    tech: ["MoneyPrinter", "Python", "AI"],
    url: "https://github.com/FujiwaraChoki/MoneyPrinter",
  },
  {
    id: 150,
    name: "AI Ollama",
    description: "LLM local",
    status: "running",
    category: "apps",
    tech: ["Ollama", "Llama"],
    url: "https://github.com/ollama/ollama",
  },
];
