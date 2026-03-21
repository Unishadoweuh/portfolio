import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homelab",
  description:
    "Mon homelab Proxmox avec une trentaine de services self-hosted en production 24/7.",
};

export default function HomelabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
