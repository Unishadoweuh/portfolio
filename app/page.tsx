import Link from "next/link";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import AnimatedCounter from "@/components/effects/AnimatedCounter";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-20 sm:py-28">
        <Container>
          <AnimateOnScroll>
            <p className="text-accent text-xs font-semibold uppercase tracking-[0.18em]">
              Portfolio
            </p>
            <div className="h-px w-8 bg-accent mt-2 mb-6" />
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
              Pierre Le Cunff
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-6">
              Administrateur systèmes Linux · Ingénieur DevOps · Nantes
            </p>
            <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
              J&apos;administre et j&apos;automatise des infrastructures Linux,
              des pipelines CI/CD et des environnements conteneurisés — avec une
              exigence de fiabilité et de reproductibilité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button href="/experience" className="w-full sm:w-auto">
                Voir mon expérience
              </Button>
              <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                Me contacter
              </Button>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <SectionHeader eyebrow="Profil" title="Qui suis-je ?" className="mb-8" />
            <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
              Administrateur systèmes Linux et ingénieur DevOps basé à Nantes.
              J&apos;administre des infrastructures Linux, j&apos;automatise les
              déploiements et je conçois des environnements fiables et
              reproductibles. Je maintiens par ailleurs un environnement Proxmox
              personnel pour valider mes pratiques d&apos;infrastructure as
              code.
            </p>
            <Link
              href="/about"
              className="inline-block mt-6 text-accent hover:text-accent-hover transition-colors font-medium"
            >
              En savoir plus &rarr;
            </Link>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  );
}