"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import ServiceCard from "@/components/homelab/ServiceCard";
import { services } from "@/data/services";
import type { ServiceCategory } from "@/data/services";

const categories: { label: string; value: "all" | ServiceCategory }[] = [
  { label: "Tous", value: "all" },
  { label: "Infrastructure", value: "infrastructure" },
  { label: "Monitoring", value: "monitoring" },
  { label: "Self-Hosted", value: "selfhosted" },
  { label: "DevOps", value: "devops" },
  { label: "Réseau", value: "network" },
  { label: "Apps", value: "apps" },
];

export default function HomelabPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | ServiceCategory>("all");

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((s) => s.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <Container>
          <AnimateOnScroll>
            <SectionHeader
              tag="$ kubectl get pods"
              title="Mon Homelab"
              subtitle="Cluster en production 24/7 avec une trentaine de services self-hosted."
            />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Stats Row */}
      <section className="pb-12">
        <Container>
          <AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Card>
                <p className="text-3xl font-bold text-accent font-mono">~30</p>
                <p className="text-sm text-text-secondary mt-1">services</p>
              </Card>
              <Card>
                <p className="text-3xl font-bold text-accent font-mono">3</p>
                <p className="text-sm text-text-secondary mt-1">cluster Proxmox</p>
              </Card>
              <Card>
                <p className="text-3xl font-bold text-accent font-mono">0</p>
                <p className="text-sm text-text-secondary mt-1">vendor lock-in</p>
              </Card>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <Container>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                aria-pressed={activeFilter === cat.value}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === cat.value
                    ? "bg-accent text-white"
                    : "bg-card border border-border text-text-secondary hover:border-accent/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <Container>
          <AnimatePresence mode="popLayout">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <Container>
          <AnimateOnScroll>
            <SectionHeader
              tag="$ cat philosophy.md"
              title="Pourquoi le self-hosting ?"
              className="mb-8"
            />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <Card hover={false}>
              <div className="space-y-4">
                <p className="text-text-secondary text-lg leading-relaxed">
                  Le self-hosting, c&apos;est reprendre le contrôle. Chaque service
                  que je déploie sur mon infrastructure est un service de moins dans
                  le cloud d&apos;une entreprise qui monétise mes données.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Mon homelab n&apos;est pas un jouet — c&apos;est un environnement
                  de production. Monitoring, sauvegardes, haute disponibilité : les
                  mêmes standards qu&apos;en entreprise, appliqués à mon
                  infrastructure personnelle.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  Et le meilleur dans tout ça ? Tout tourne sur Linux, tout est open
                  source, et je n&apos;ai de compte à rendre à personne.
                </p>
              </div>
            </Card>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
