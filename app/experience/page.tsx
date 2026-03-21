import { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Expérience",
};

export default function ExperiencePage() {
  return (
    <Container className="py-20">
      <SectionHeader
        tag="$ cat experience.json"
        title="Expérience"
        subtitle="Mon parcours professionnel dans l'administration systèmes et le DevOps."
      />

      {/* Professional Timeline */}
      <div className="relative mt-16">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <AnimateOnScroll
            key={`${exp.company}-${exp.period}`}
            delay={i * 0.15}
            className="relative mb-12 last:mb-0"
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1/2 top-6" />

            {/* Content */}
            <div
              className={`pl-12 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:pl-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              <Card>
                <span className="font-mono text-accent text-sm">
                  {exp.period}
                </span>
                <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                <p className="text-text-secondary text-sm mt-1">
                  {exp.company} — {exp.location}
                </p>
                <ul className="mt-4 space-y-2">
                  {exp.tasks.map((task, j) => (
                    <li
                      key={j}
                      className="text-text-secondary text-sm flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5 text-xs">
                        &#9658;
                      </span>
                      {task}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </Card>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Education Section */}
      <div className="mt-24">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap size={24} className="text-accent" />
          <h3 className="text-2xl font-semibold text-text-primary">
            Formation
          </h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          {education.map((edu, i) => (
            <AnimateOnScroll
              key={`${edu.school}-${edu.period}`}
              delay={i * 0.15}
              className="relative mb-8 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute left-4 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1/2 top-6" />

              {/* Content */}
              <div className="pl-12">
                <Card>
                  <span className="font-mono text-accent text-sm">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-semibold mt-2">{edu.degree}</h4>
                  <p className="text-text-secondary text-sm mt-1">
                    {edu.school} — {edu.location}
                  </p>
                  {edu.description && (
                    <p className="text-text-secondary text-sm mt-3">
                      {edu.description}
                    </p>
                  )}
                </Card>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Container>
  );
}
