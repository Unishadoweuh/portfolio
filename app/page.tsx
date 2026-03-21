"use client";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import TypingEffect from "@/components/effects/TypingEffect";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
        <Container className="relative z-10">
          <AnimateOnScroll>
            <span className="font-mono text-accent text-sm">$ whoami</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6">
              Pierre Le Cunff
            </h1>
            <TypingEffect
              strings={[
                "Sys. Admin Linux",
                "DevOps Engineer",
                "Open Source Enthusiast",
                "Self-Hoster",
              ]}
              className="text-xl md:text-2xl text-text-secondary h-8"
            />
            <p className="text-text-secondary mt-6 text-lg max-w-xl">
              Je ne fais pas tourner Windows. Je fais tourner des clusters.
            </p>
            <div className="flex gap-4 mt-8">
              <Button href="/homelab">Voir mon travail</Button>
              <Button href="/contact" variant="secondary">
                Me contacter
              </Button>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <Container>
          <AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {siteConfig.stats.map((stat) => (
                <Card key={stat.label} className="text-center">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-bold text-text-primary"
                  />
                  <p className="text-text-secondary text-sm mt-2">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Quick Intro Section */}
      <section className="pb-20">
        <Container>
          <AnimateOnScroll>
            <SectionHeader
              tag="$ cat intro.txt"
              title="Qui suis-je ?"
              className="mb-8"
            />
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              Administrateur systèmes Linux et ingénieur DevOps basé à Nantes.
              Passionné par le self-hosting, l&apos;open source et
              l&apos;automatisation, je construis et maintiens des
              infrastructures fiables au quotidien. Mon homelab Proxmox fait
              tourner une trentaine de services en production — parce que la
              souveraineté des données, ça se construit soi-même.
            </p>
            <a
              href="/about"
              className="inline-block mt-6 text-accent hover:text-accent-hover transition-colors font-medium"
            >
              En savoir plus &rarr;
            </a>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}
