"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

type FormStatus = "idle" | "sent";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sent");
  };

  const inputClasses =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="py-20">
        <Container>
          <AnimateOnScroll>
            <SectionHeader
              tag="$ man contact"
              title="Contact"
              subtitle="Un projet, une question, une opportunité ? N'hésitez pas."
            />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Two-column layout */}
      <section className="pb-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <AnimateOnScroll direction="left">
              <Card hover={false}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary block">
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary block">
                      Sujet
                    </label>
                    <input
                      type="text"
                      placeholder="Sujet de votre message"
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary block">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Votre message..."
                      className={inputClasses}
                      required
                    />
                  </div>

                  <Button variant="primary" className="w-full">
                    Envoyer
                  </Button>

                  {formStatus === "sent" && (
                    <p className="text-accent text-sm mt-4 font-mono">
                      Message envoyé avec succès.
                    </p>
                  )}
                </form>
              </Card>
            </AnimateOnScroll>

            {/* Right: Info + Terminal Easter Egg */}
            <div className="space-y-8">
              <AnimateOnScroll direction="right">
                {/* Contact Info */}
                <Card hover={false} className="mb-8">
                  <div className="space-y-6">
                    <div>
                      <p className="text-text-secondary text-sm">Email</p>
                      <p className="text-text-primary font-mono text-sm mt-1">
                        plecunff44@gmail.com
                      </p>
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm">Localisation</p>
                      <p className="text-text-primary font-mono text-sm mt-1">
                        Nantes, France
                      </p>
                    </div>
                    <div>
                      <p className="text-text-secondary text-sm mb-2">
                        Disponible pour
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>freelance</Badge>
                        <Badge>alternance</Badge>
                        <Badge>CDI</Badge>
                        <Badge>consulting</Badge>
                        <Badge>questions open source</Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Terminal Easter Egg */}
                <Card hover={false}>
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-text-secondary text-xs font-mono ml-2">
                      terminal
                    </span>
                  </div>

                  {/* Terminal content */}
                  <div className="font-mono text-sm space-y-1">
                    <p className="text-text-secondary">
                      $ curl -s pierre-lecunff.dev/api/contact | jq
                    </p>
                    <div className="mt-2">
                      <p className="text-text-secondary">{"{"}</p>
                      <p>
                        <span className="text-accent">
                          {"  \"name\""}
                        </span>
                        <span className="text-text-secondary">: </span>
                        <span className="text-emerald-400">
                          {"\"Pierre Le Cunff\""}
                        </span>
                        <span className="text-text-secondary">,</span>
                      </p>
                      <p>
                        <span className="text-accent">
                          {"  \"role\""}
                        </span>
                        <span className="text-text-secondary">: </span>
                        <span className="text-emerald-400">
                          {"\"Sys. Admin Linux & DevOps Engineer\""}
                        </span>
                        <span className="text-text-secondary">,</span>
                      </p>
                      <p>
                        <span className="text-accent">
                          {"  \"location\""}
                        </span>
                        <span className="text-text-secondary">: </span>
                        <span className="text-emerald-400">
                          {"\"Nantes, France\""}
                        </span>
                        <span className="text-text-secondary">,</span>
                      </p>
                      <p>
                        <span className="text-accent">
                          {"  \"email\""}
                        </span>
                        <span className="text-text-secondary">: </span>
                        <span className="text-emerald-400">
                          {"\"plecunff44@gmail.com\""}
                        </span>
                        <span className="text-text-secondary">,</span>
                      </p>
                      <p>
                        <span className="text-accent">
                          {"  \"available\""}
                        </span>
                        <span className="text-text-secondary">: </span>
                        <span className="text-amber-400">true</span>
                        <span className="text-text-secondary">,</span>
                      </p>
                      <p>
                        <span className="text-accent">
                          {"  \"response_time\""}
                        </span>
                        <span className="text-text-secondary">: </span>
                        <span className="text-emerald-400">
                          {"\"< 24h\""}
                        </span>
                      </p>
                      <p className="text-text-secondary">{"}"}</p>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
