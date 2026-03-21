import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Pierre Le Cunff pour vos projets d'infrastructure Linux, DevOps ou consulting.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
