import { Metadata } from "next";
import {
  Monitor,
  Layers,
  Box,
  GitBranch,
  Activity,
  Shield,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import SkillBar from "@/components/sections/SkillBar";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Compétences",
};

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Monitor,
  Layers,
  Container: Box,
  GitBranch,
  Activity,
  Shield,
};

export default function SkillsPage() {
  return (
    <Container className="py-16 sm:py-24">
      <SectionHeader
        eyebrow="Expertise"
        title="Compétences"
        subtitle="Les outils et technologies que je maîtrise au quotidien."
        className="mb-12"
      />

      {skillCategories.map((category, categoryIndex) => {
        const Icon = iconMap[category.icon];

        return (
          <AnimateOnScroll
            key={category.title}
            delay={categoryIndex * 0.1}
            className="mt-12 sm:mt-16 first:mt-0"
          >
            <div className="flex items-center gap-3 mb-6">
              {Icon && <Icon size={22} className="text-accent" />}
              <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-text-primary">
                {category.title}
              </h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  level={skill.level}
                  delay={skillIndex * 0.1}
                />
              ))}
            </div>
          </AnimateOnScroll>
        );
      })}
    </Container>
  );
}