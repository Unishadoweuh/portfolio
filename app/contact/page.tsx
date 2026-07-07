"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
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

    // Fallback mailto (ouvre le client mail de l'utilisateur)
    const mailto = `mailto:plecunff44@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(`De: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailto;
    setFormStatus("sent");
    form.reset();
  };

  const inputClasses =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-base text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent/50 outline-none transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <Container>
          <AnimateOnScroll>
            <SectionHeader
              eyebrow="Contact"
              title="Prenons contact"
              subtitle="Un projet, une question, une opportunité ? N'hésitez pas."
            />
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Two-column layout */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
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
                    <p className="text-accent text-sm mt-4">
                      Client mail ouvert. Envoyez le message depuis votre
                      boîte mail.
                    </p>
                  )}
                </form>
              </Card>
            </AnimateOnScroll>

            {/* Right: Info + Links */}
            <div className="space-y-8">
              <AnimateOnScroll direction="right">
                <Card hover={false}>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Mail
                        size={18}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-text-secondary text-sm">Email</p>
                        <a
                          href="mailto:plecunff44@gmail.com"
                          className="text-text-primary text-sm mt-0.5 hover:text-accent transition-colors block"
                        >
                          plecunff44@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={18}
                        className="text-accent flex-shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-text-secondary text-sm">
                          Localisation
                        </p>
                        <p className="text-text-primary text-sm mt-0.5">
                          Nantes, France
                        </p>
                      </div>
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
                      </div>
                    </div>
                  </div>
                </Card>

                <Card hover={false}>
                  <p className="text-text-secondary text-sm mb-4">
                    Retrouvez-moi en ligne
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/unishadoweuh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors"
                    >
                      <Github size={18} className="text-accent flex-shrink-0" />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/pierre-le-cunff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-text-primary hover:text-accent transition-colors"
                    >
                      <Linkedin size={18} className="text-accent flex-shrink-0" />
                      LinkedIn
                    </a>
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