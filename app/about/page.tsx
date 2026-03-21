import type { Metadata } from "next";
import { Monitor, Server, Shield, Car, Gamepad2, Cog } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import { education } from "@/data/experience";

export const metadata: Metadata = {
  title: "À propos",
};

const interests = [
  { label: "Linux & Open Source", icon: Monitor },
  { label: "Self-Hosting", icon: Server },
  { label: "Cybersécurité", icon: Shield },
  { label: "Automobile", icon: Car },
  { label: "Gaming", icon: Gamepad2 },
  { label: "Automatisation", icon: Cog },
];

const antiInterests = [
  "Windows — J'ai essayé. J'ai pleuré. Je suis revenu.",
  "Solutions propriétaires — Si je ne peux pas lire le code, je ne l'installe pas.",
  "Vendor lock-in — Mon infrastructure, mes règles.",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20">
        <Container>
          <AnimateOnScroll>
            <SectionHeader
              tag="$ cat about.md"
              title="À propos"
              subtitle="Sys Admin Linux, DevOps Engineer et passionné d'open source basé à Nantes."
            />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Bio Section */}
      <section className="pb-16">
        <Container>
          <AnimateOnScroll>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Avatar */}
              <div className="md:col-span-1 flex items-start justify-center">
                <div
                  className="w-48 h-48 bg-card border border-border flex items-center justify-center"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <span className="text-accent text-4xl font-bold">PL</span>
                </div>
              </div>

              {/* Bio Text */}
              <div className="md:col-span-2 space-y-4">
                <p className="text-text-secondary text-lg leading-relaxed">
                  Je suis Pierre, administrateur systèmes Linux et ingénieur
                  DevOps basé à Nantes. Mon quotidien : faire tourner des
                  infrastructures, automatiser tout ce qui peut l&apos;être, et
                  contribuer à un écosystème open source que je défends depuis
                  mes débuts.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Quand je ne suis pas en train de déployer des conteneurs ou
                  d&apos;écrire des playbooks Ansible, je gère mon homelab
                  Proxmox avec une trentaine de services en production. Du
                  monitoring avec Zabbix au stockage avec TrueNAS, en passant
                  par mon propre serveur Git — tout tourne sur du Linux, 24/7.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Ma philosophie est simple : si un service peut être
                  self-hosted, il doit l&apos;être. La souveraineté des données
                  n&apos;est pas négociable.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Education Timeline */}
      <section className="pb-16">
        <Container>
          <AnimateOnScroll>
            <SectionHeader
              tag="$ cat formations.txt"
              title="Formations"
              className="mb-10"
            />
          </AnimateOnScroll>
          <div className="relative pl-8 border-l-2 border-border space-y-8">
            {education.map((entry, index) => (
              <AnimateOnScroll key={entry.period} delay={index * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[calc(2rem+9px)] top-2 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                  <span className="font-mono text-accent text-sm">
                    {entry.period}
                  </span>
                  <h3 className="font-semibold text-lg text-text-primary mt-1">
                    {entry.degree}
                  </h3>
                  <p className="text-text-secondary">
                    {entry.school} — {entry.location}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Interests Section */}
      <section className="pb-16">
        <Container>
          <AnimateOnScroll>
            <SectionHeader
              tag="$ cat interests.txt"
              title="Ce que j'aime"
              className="mb-8"
            />
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <AnimateOnScroll key={interest.label} delay={index * 0.05}>
                <Card className="flex items-center gap-3">
                  <interest.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-text-primary">{interest.label}</span>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Anti-Interests Section */}
      <section className="pb-20">
        <Container>
          <AnimateOnScroll>
            <SectionHeader
              tag="$ cat /dev/null"
              title="Ce que j'évite"
              className="mb-8"
            />
            <Card>
              <ul className="space-y-3">
                {antiInterests.map((item) => (
                  <li key={item} className="text-text-secondary">
                    — {item}
                  </li>
                ))}
              </ul>
            </Card>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
