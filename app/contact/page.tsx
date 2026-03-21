"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/effects/AnimateOnScroll";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    setFormStatus("sending");

    // Fallback mailto
    const mailto = `mailto:plecunff44@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `De: ${name} (${email})\n\n${message}`
    )}`;
    window.location.href = mailto;
    setFormStatus("sent");
    form.reset();
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
                    <label
                      htmlFor="name"
                      className="text-sm text-text-secondary block"
                    >
                      Nom
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Votre nom"
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm text-text-secondary block"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm text-text-secondary block"
                    >
                      Sujet
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Sujet de votre message"
                      className={inputClasses}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm text-text-secondary block"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Votre message..."
                      className={inputClasses}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-accent hover:bg-accent-hover text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50"
                  >
                    {formStatus === "sending" ? "Envoi..." : "Envoyer"}
                  </button>

                  {formStatus === "sent" && (
                    <p className="text-accent text-sm mt-4 font-mono">
                      Client mail ouvert. Envoyez le message depuis votre
                      boîte mail.
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
                      <a
                        href="mailto:plecunff44@gmail.com"
                        className="text-text-primary font-mono text-sm mt-1 hover:text-accent transition-colors block"
                      >
                        plecunff44@gmail.com
                      </a>
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
