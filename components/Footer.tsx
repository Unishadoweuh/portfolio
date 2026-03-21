import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/unishadoweuh",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pierre-le-cunff",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:plecunff44@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          &copy; 2026 Pierre Le Cunff
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
