"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { ExternalLink } from "lucide-react";
import type { HomelabService } from "@/data/services";

interface ServiceCardProps {
  service: HomelabService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const statusStyles = {
    running: "bg-emerald-500",
    stopped: "bg-red-500",
    maintenance: "bg-yellow-500",
  };

  const cardContent = (
    <div
      className="bg-card border border-border rounded-xl p-5 hover:border-accent/50 hover:bg-card-hover transition-all duration-300 group relative h-full"
      onMouseEnter={() => setShowEasterEgg(true)}
      onMouseLeave={() => setShowEasterEgg(false)}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-4">
        <span className="font-semibold text-text-primary">{service.name}</span>
        <div className="flex items-center gap-2 shrink-0">
          {service.url && (
            <ExternalLink className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
          )}
          <div className="relative flex h-2.5 w-2.5">
            {service.status === "running" && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            )}
            <span
              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${statusStyles[service.status]}`}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm mt-2">{service.description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mt-3">
        {service.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      {/* Easter egg */}
      {showEasterEgg && service.easter_egg && (
        <p className="text-xs text-accent mt-3 font-mono italic">
          {service.easter_egg}
        </p>
      )}
    </div>
  );

  if (service.url) {
    return (
      <a href={service.url} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
