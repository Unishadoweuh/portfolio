"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { ExternalLink } from "lucide-react";
import type { HomelabService } from "@/data/services";

interface ServiceCardProps {
  service: HomelabService;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const statusStyles = {
    running: "bg-emerald-500",
    stopped: "bg-red-500",
    maintenance: "bg-yellow-500",
  };

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-card border border-border rounded-xl p-5 hover:border-accent/50 hover:bg-card-hover transition-all duration-300 group relative"
      onMouseEnter={() => setShowEasterEgg(true)}
      onMouseLeave={() => setShowEasterEgg(false)}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center">
          <span className="font-semibold text-text-primary">{service.name}</span>
        </div>
        <div className="relative flex h-2.5 w-2.5">
          {service.status === "running" && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex h-2.5 w-2.5 rounded-full ${statusStyles[service.status]}`}
          />
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

      {/* External link icon */}
      {service.url && (
        <ExternalLink className="absolute top-4 right-4 w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
      )}

      {/* Easter egg */}
      {showEasterEgg && service.easter_egg && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-accent mt-3 font-mono italic"
        >
          {service.easter_egg}
        </motion.p>
      )}
    </motion.div>
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
